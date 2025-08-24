// Скрипт для генерации календаря с родственными связями
const fs = require('fs');

// Читаем данные семьи
const familyDataContent = fs.readFileSync('family-data.js', 'utf8');
const familyDataMatch = familyDataContent.match(/const FAMILY_DATA = ({[\s\S]*});/);

if (!familyDataMatch) {
    console.error('Не удалось найти FAMILY_DATA в файле');
    process.exit(1);
}

let familyData;
try {
    // Используем eval для парсинга JavaScript объекта
    eval('familyData = ' + familyDataMatch[1]);
} catch (error) {
    console.error('Ошибка парсинга данных:', error);
    process.exit(1);
}

const now = new Date();
const timestamp = now.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

let icalContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Yesmukhanov Family//Family Tree//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'X-WR-CALNAME:Yesmukhanov Family Birthdays',
    'X-WR-CALDESC:Birthdays of Yesmukhanov family members with relationships'
];

let eventCount = 0;

// Функция для экранирования текста iCal
function escapeICalText(text) {
    if (!text) return '';
    return text
        .replace(/\\/g, '\\\\')
        .replace(/;/g, '\\;')
        .replace(/,/g, '\\,')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r');
}

// Обрабатываем каждого человека
familyData.people.forEach((person) => {
    if (person.birth && person.birth.date && person.birth.date.match(/^\d{4}-\d{2}-\d{2}$/)) {
        const birthDate = person.birth.date;
        const [year, month, day] = birthDate.split('-');
        const displayName = person.name.display || `${person.name.given || ''} ${person.name.family || ''}`.trim();
        
        if (displayName && month && day) {
            eventCount++;
            // Используем текущий год для повторяющихся событий
            const currentYear = now.getFullYear();
            const eventDate = `${currentYear}${month}${day}`;
            
            // Создаем описание с родственными связями
            let description = `День рождения ${escapeICalText(displayName)}. Родился ${day}.${month}.${year}`;
            
            // Добавляем информацию о родственных связях (aka)
            if (person.name.aka && person.name.aka.length > 0) {
                description += '\\n\\nРодственные связи:';
                person.name.aka.forEach(relation => {
                    description += `\\n• ${escapeICalText(relation)}`;
                });
            }
            
            // Создаем заголовок с основной информацией
            let summary = `🎂 ${escapeICalText(displayName)} - День рождения`;
            if (person.name.aka && person.name.aka.length > 0) {
                // Добавляем первую связь в заголовок для краткости
                summary += ` (${escapeICalText(person.name.aka[0])})`;
            }
            
            // Создаем событие дня рождения как ежегодное
            const event = [
                'BEGIN:VEVENT',
                `UID:birthday-${person.id}@yesmukhanov-family.com`,
                `DTSTAMP:${timestamp}`,
                `DTSTART;VALUE=DATE:${eventDate}`,
                `SUMMARY:${summary}`,
                `DESCRIPTION:${description}`,
                'RRULE:FREQ=YEARLY',
                'CATEGORIES:BIRTHDAY,FAMILY',
                'CLASS:PUBLIC',
                'STATUS:CONFIRMED',
                'TRANSP:TRANSPARENT',
                'END:VEVENT'
            ];
            
            icalContent.push(...event);
        }
    }
});

icalContent.push('END:VCALENDAR');

// Записываем файл
fs.writeFileSync('yesmukhanov-family-birthdays.ics', icalContent.join('\r\n'));

console.log(`✅ Создан календарь с ${eventCount} событиями, включая родственные связи`);
console.log('📅 Файл сохранен как: yesmukhanov-family-birthdays.ics');