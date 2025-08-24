const fs = require('fs');

// Данные семейного дерева (копируем прямо сюда)
const FAMILY_DATA = {
  "people": [
    {
      "id": "p_1",
      "name": {
        "display": "Абай Долабаев",
        "given": "Абай",
        "family": "Долабаев",
        "middle": null,
        "aka": [
          "Сын Гульнар"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "2002-05-12",
        "place": null
      },
      "death": {
        "date": null,
        "place": null
      },
      "notes": "",
      "media": [],
      "meta": {
        "last_updated": "2025-08-23",
        "privacy": "private"
      }
    },
    {
      "id": "p_2",
      "name": {
        "display": "Абылайхан Кожамжаров",
        "given": "Абылайхан",
        "family": "Кожамжаров",
        "middle": null,
        "aka": [
          "Внук Каиргельды, сын Айгуль"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "2008-10-03",
        "place": null
      },
      "death": {
        "date": null,
        "place": null
      },
      "notes": "",
      "media": [],
      "meta": {
        "last_updated": "2025-08-23",
        "privacy": "private"
      }
    },
    {
      "id": "p_3",
      "name": {
        "display": "Аделия Жакиянова",
        "given": "Аделия",
        "family": "Жакиянова",
        "middle": null,
        "aka": [
          "Внучка Жениса, дочь Анары"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "2010-12-20",
        "place": null
      },
      "death": {
        "date": null,
        "place": null
      },
      "notes": "",
      "media": [],
      "meta": {
        "last_updated": "2025-08-23",
        "privacy": "private"
      }
    },
    {
      "id": "p_4",
      "name": {
        "display": "Адильхан Каиргельды",
        "given": "Адильхан",
        "family": "Каиргельды",
        "middle": null,
        "aka": [
          "Внук Каиргельды,  сын Бауржана"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "2003-12-10",
        "place": null
      },
      "death": {
        "date": null,
        "place": null
      },
      "notes": "",
      "media": [],
      "meta": {
        "last_updated": "2025-08-23",
        "privacy": "private"
      }
    },
    {
      "id": "p_5",
      "name": {
        "display": "Адия Аманжолова",
        "given": "Адия",
        "family": "Аманжолова",
        "middle": null,
        "aka": [
          "Внучка Аманжола,  дочь Армана"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "2011-07-28",
        "place": null
      },
      "death": {
        "date": null,
        "place": null
      },
      "notes": "",
      "media": [],
      "meta": {
        "last_updated": "2025-08-23",
        "privacy": "private"
      }
    }
  ]
};

// Добавляем остальных людей с датами рождения
const additionalPeople = [
  {
    "id": "p_6",
    "name": {"display": "Аида Каиржанова"},
    "birth": {"date": "2005-10-28"}
  },
  {
    "id": "p_7",
    "name": {"display": "Аиша Саду"},
    "birth": {"date": "2018-06-15"}
  },
  {
    "id": "p_8",
    "name": {"display": "Айгуль Кожамжарова"},
    "birth": {"date": "1976-01-15"}
  },
  {
    "id": "p_9",
    "name": {"display": "Айзере Долобаева"},
    "birth": {"date": "2014-02-25"}
  },
  {
    "id": "p_10",
    "name": {"display": "Айсултан Есмуханов"},
    "birth": {"date": "2015-08-09"}
  },
  {
    "id": "p_11",
    "name": {"display": "Айсултан Куспеков"},
    "birth": {"date": "2013-12-04"}
  },
  {
    "id": "p_12",
    "name": {"display": "Айтуар Каиржанов"},
    "birth": {"date": "2009-10-01"}
  },
  {
    "id": "p_13",
    "name": {"display": "Алихан Женис"},
    "birth": {"date": "2005-01-21"}
  },
  {
    "id": "p_14",
    "name": {"display": "Алихан Кабдулла"},
    "birth": {"date": "2019-01-01"}
  },
  {
    "id": "p_15",
    "name": {"display": "Алиша Сатыбалдина"},
    "birth": {"date": "2019-02-03"}
  },
  {
    "id": "p_16",
    "name": {"display": "Алсу Тулегенова"},
    "birth": {"date": "2001-01-20"}
  },
  {
    "id": "p_17",
    "name": {"display": "Алуа Нурлан кызы"},
    "birth": {"date": "1998-03-07"}
  },
  {
    "id": "p_18",
    "name": {"display": "Аман Есмуханов"},
    "birth": {"date": "1958-02-06"}
  },
  {
    "id": "p_19",
    "name": {"display": "Аманжол Есмуханов"},
    "birth": {"date": "1960-05-20"}
  },
  {
    "id": "p_20",
    "name": {"display": "Амина Кабдулла"},
    "birth": {"date": "2009-08-28"}
  },
  {
    "id": "p_21",
    "name": {"display": "Амина Куспекова"},
    "birth": {"date": "2005-08-09"}
  },
  {
    "id": "p_22",
    "name": {"display": "Амир Аманжолов"},
    "birth": {"date": "2018-03-20"}
  },
  {
    "id": "p_23",
    "name": {"display": "Амирхан Куспеков"},
    "birth": {"date": "2008-07-24"}
  },
  {
    "id": "p_24",
    "name": {"display": "Анара Тулегенова"},
    "birth": {"date": "1980-10-19"}
  },
  {
    "id": "p_25",
    "name": {"display": "Анель Кожамжарова"},
    "birth": {"date": "1997-09-26"}
  },
  {
    "id": "p_26",
    "name": {"display": "Анеля Аманжолова"},
    "birth": {"date": "2013-11-10"}
  },
  {
    "id": "p_27",
    "name": {"display": "Арайлым Садвакасова"},
    "birth": {"date": "2011-04-08"}
  },
  {
    "id": "p_28",
    "name": {"display": "Арсен Жакиянов"},
    "birth": {"date": "2013-10-22"}
  },
  {
    "id": "p_30",
    "name": {"display": "Аружан Женис"},
    "birth": {"date": "2007-02-27"}
  },
  {
    "id": "p_31",
    "name": {"display": "Арыстан Есмуханов"},
    "birth": {"date": "2012-11-11"}
  },
  {
    "id": "p_32",
    "name": {"display": "Асель Куспекова"},
    "birth": {"date": "1980-10-17"}
  },
  {
    "id": "p_33",
    "name": {"display": "Аяулым Жакиянова"},
    "birth": {"date": "2008-08-03"}
  },
  {
    "id": "p_34",
    "name": {"display": "Аяулым Садвакасова"},
    "birth": {"date": "2005-06-22"}
  },
  {
    "id": "p_35",
    "name": {"display": "Бабушка Шамшия"},
    "birth": {"date": "1928-03-08"}
  },
  {
    "id": "p_36",
    "name": {"display": "Батыржан Есмуханов"},
    "birth": {"date": "1978-08-05"}
  },
  {
    "id": "p_37",
    "name": {"display": "Баханай Есмуханова"},
    "birth": {"date": "1978-05-30"}
  },
  {
    "id": "p_38",
    "name": {"display": "Гульбаршин Оспанов"},
    "birth": {"date": "1954-09-24"}
  },
  {
    "id": "p_39",
    "name": {"display": "Гульжан Есмуханова"},
    "birth": {"date": "1969-07-03"}
  },
  {
    "id": "p_40",
    "name": {"display": "Гульнар Есмуханова"},
    "birth": {"date": "1969-02-17"}
  },
  {
    "id": "p_41",
    "name": {"display": "Дана Есмуханова"},
    "birth": {"date": "1997-01-01"}
  },
  {
    "id": "p_42",
    "name": {"display": "Дария Саду"},
    "birth": {"date": "2006-07-14"}
  },
  {
    "id": "p_43",
    "name": {"display": "Дархан Есмуханов"},
    "birth": {"date": "2000-10-24"}
  },
  {
    "id": "p_44",
    "name": {"display": "Даурен Есмуханов"},
    "birth": {"date": "1990-08-30"}
  },
  {
    "id": "p_45",
    "name": {"display": "Дедушка Мухаметсеит"},
    "birth": {"date": "1922-06-02"}
  },
  {
    "id": "p_46",
    "name": {"display": "Джамиля Мухаметсеит"},
    "birth": {"date": "2007-09-30"}
  },
  {
    "id": "p_47",
    "name": {"display": "Дина Есмуханова"},
    "birth": {"date": "1956-03-28"}
  },
  {
    "id": "p_48",
    "name": {"display": "Ерлан Есмуханов"},
    "birth": {"date": "1974-11-01"}
  },
  {
    "id": "p_49",
    "name": {"display": "Ертай Долобаев"},
    "birth": {"date": "1966-07-07"}
  },
  {
    "id": "p_50",
    "name": {"display": "Жарас Есмуханов"},
    "birth": {"date": "1955-10-24"}
  },
  {
    "id": "p_51",
    "name": {"display": "Женис Есмуханов"},
    "birth": {"date": "1945-11-08"}
  },
  {
    "id": "p_52",
    "name": {"display": "Зина Есмуханова"},
    "birth": {"date": "1963-12-12"}
  },
  {
    "id": "p_53",
    "name": {"display": "Инкар Садвакасова"},
    "birth": {"date": "2014-03-04"}
  },
  {
    "id": "p_54",
    "name": {"display": "Иран Есмуханов"},
    "birth": {"date": "1965-05-04"}
  },
  {
    "id": "p_55",
    "name": {"display": "Каиржан Есмуханов"},
    "birth": {"date": "1953-02-09"}
  },
  {
    "id": "p_56",
    "name": {"display": "Кайрат Есмуханов"},
    "birth": {"date": "2021-07-19"}
  },
  {
    "id": "p_57",
    "name": {"display": "Кайргельды Есмуханов"},
    "birth": {"date": "1951-08-17"}
  },
  {
    "id": "p_58",
    "name": {"display": "Куаныш Мухаметсеитов"},
    "birth": {"date": "1980-01-30"}
  },
  {
    "id": "p_59",
    "name": {"display": "Кульжан Есмуханова"},
    "birth": {"date": "1949-10-21"}
  },
  {
    "id": "p_60",
    "name": {"display": "Лаура Кожамжарова"},
    "birth": {"date": "2003-01-12"}
  },
  {
    "id": "p_61",
    "name": {"display": "Малика Нурланкызы"},
    "birth": {"date": "1998-11-27"}
  },
  {
    "id": "p_62",
    "name": {"display": "Малика Сатыбалдина"},
    "birth": {"date": "2022-02-08"}
  },
  {
    "id": "p_63",
    "name": {"display": "Мансур Есмуханов"},
    "birth": {"date": "2022-11-20"}
  },
  {
    "id": "p_64",
    "name": {"display": "Мейрам Есмуханов"},
    "birth": {"date": "1962-11-07"}
  },
  {
    "id": "p_65",
    "name": {"display": "Мухаммедкаир Кайржанов"},
    "birth": {"date": "2007-02-06"}
  },
  {
    "id": "p_66",
    "name": {"display": "Нурлан Есмуханов"},
    "birth": {"date": "1972-01-20"}
  },
  {
    "id": "p_67",
    "name": {"display": "Оля Есмуханова"},
    "birth": {"date": "1952-08-05"}
  },
  {
    "id": "p_68",
    "name": {"display": "Орал Есмуханов"},
    "birth": {"date": "1967-06-05"}
  },
  {
    "id": "p_69",
    "name": {"display": "Рахат Есмуханов"},
    "birth": {"date": "2006-06-09"}
  },
  {
    "id": "p_70",
    "name": {"display": "Роза Есмуханова"},
    "birth": {"date": "1966-12-12"}
  },
  {
    "id": "p_71",
    "name": {"display": "Санжар Каиргельды"},
    "birth": {"date": "2008-05-01"}
  },
  {
    "id": "p_72",
    "name": {"display": "Султана Кабдулла"},
    "birth": {"date": "2013-01-21"}
  },
  {
    "id": "p_73",
    "name": {"display": "Талгат Есмуханов"},
    "birth": {"date": "2018-06-01"}
  },
  {
    "id": "p_74",
    "name": {"display": "Ернур Есмуханов"},
    "birth": {"date": "2008-12-06"}
  },
  {
    "id": "p_75",
    "name": {"display": "Амир"},
    "birth": {"date": "2021-09-21"}
  },
  {
    "id": "p_76",
    "name": {"display": "Айдана Есмуханова"},
    "birth": {"date": "1996-05-06"}
  },
  {
    "id": "p_77",
    "name": {"display": "Мадина Есмуханова"},
    "birth": {"date": "1988-11-10"}
  },
  {
    "id": "p_78",
    "name": {"display": "Саида Есмуханова"},
    "birth": {"date": "1984-06-07"}
  },
  {
    "id": "p_79",
    "name": {"display": "Бауржан Есмуханов"},
    "birth": {"date": "1974-08-06"}
  },
  {
    "id": "p_80",
    "name": {"display": "Алмаз Есмуханов"},
    "birth": {"date": "1982-07-21"}
  },
  {
    "id": "p_81",
    "name": {"display": "Асемгуль Есмуханова"},
    "birth": {"date": "1984-03-30"}
  },
  {
    "id": "p_82",
    "name": {"display": "Айжан Бекмурзина"},
    "birth": {"date": "1988-04-04"}
  },
  {
    "id": "p_83",
    "name": {"display": "Арман Есмуханов"},
    "birth": {"date": "1985-02-07"}
  },
  {
    "id": "p_84",
    "name": {"display": "Олжас Есмуханов"},
    "birth": {"date": "1999-04-13"}
  },
  {
    "id": "p_85",
    "name": {"display": "Адиль Есмуханов"},
    "birth": {"date": "1996-06-26"}
  },
  {
    "id": "p_86",
    "name": {"display": "Ансар Есмуханов"},
    "birth": {"date": "2005-09-22"}
  },
  {
    "id": "p_87",
    "name": {"display": "Мариям"},
    "birth": {"date": "2024-07-04"}
  },
  {
    "id": "p_88",
    "name": {"display": "Ислам Саду"},
    "birth": {"date": "2009-04-29"}
  },
  {
    "id": "p_89",
    "name": {"display": "Жасмин Умирбекова"},
    "birth": {"date": "2019-08-05"}
  },
  {
    "id": "p_90",
    "name": {"display": "Эмина Умирбекова"},
    "birth": {"date": "2022-12-17"}
  },
  {
    "id": "p_91",
    "name": {"display": "Риза Садвакасова"},
    "birth": {"date": "2020-07-15"}
  },
  {
    "id": "p_92",
    "name": {"display": "Адина Сатыбалдина"},
    "birth": {"date": "2013-03-16"}
  },
  {
    "id": "p_93",
    "name": {"display": "Айлин Сатыбалдина"},
    "birth": {"date": "2016-04-07"}
  },
  {
    "id": "p_94",
    "name": {"display": "Сайран Есмуханова"},
    "birth": {"date": "1957-09-25"}
  },
  {
    "id": "p_95",
    "name": {"display": "Салима Есмуханова"},
    "birth": {"date": "1966-09-24"}
  },
  {
    "id": "p_96",
    "name": {"display": "Азиз Аманжолов"},
    "birth": {"date": "2025-01-08"}
  }
];

// Объединяем всех людей
FAMILY_DATA.people = FAMILY_DATA.people.concat(additionalPeople);

// Function to format date for iCal (YYYYMMDD format)
function formatDateForICal(dateString) {
  if (!dateString) return null;
  return dateString.replace(/-/g, '');
}

// Function to escape text for iCal
function escapeICalText(text) {
  if (!text) return '';
  return text
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r');
}

// Function to generate iCal content
function generateICal() {
  let icalContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Family Calendar//Family Birthdays//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'X-WR-CALNAME:Family Birthdays',
    'X-WR-CALDESC:Family member birthdays from family tree data',
    'X-APPLE-CALENDAR-COLOR:#FF2968',
    'X-WR-TIMEZONE:Asia/Almaty'
  ];

  // Process each person
  FAMILY_DATA.people.forEach((person, index) => {
    if (person.birth && person.birth.date) {
      const birthDate = person.birth.date;
      const formattedDate = formatDateForICal(birthDate);
      const displayName = person.name.display || `${person.name.given || ''} ${person.name.family || ''}`.trim();
      
      if (formattedDate) {
        // Создаем уникальный UID
        const uid = `birthday-${person.id}-${formattedDate}@family-calendar.com`;
        
        // Получаем текущий год и создаем события на ближайшие 10 лет
        const currentYear = new Date().getFullYear();
        const birthYear = parseInt(birthDate.split('-')[0]);
        
        for (let year = currentYear; year <= currentYear + 10; year++) {
          const age = year - birthYear;
          const eventDate = `${year}${birthDate.substring(4)}`; // YYYYMMDD
          
          // Формируем описание с информацией о родственных связях
          let description = `День рождения ${escapeICalText(displayName)} - исполняется ${age} лет`;
          if (person.name.aka && person.name.aka.length > 0) {
            description += `\n\nРодственные связи:\n${person.name.aka.map(aka => `• ${escapeICalText(aka)}`).join('\n')}`;
          }
          
          // Create birthday event for this year
          const event = [
            'BEGIN:VEVENT',
            `UID:${uid}-${year}`,
            `DTSTART;VALUE=DATE:${eventDate}`,
            `SUMMARY:🎂 ${escapeICalText(displayName)} - ${age} лет`,
            `DESCRIPTION:${description}`,
            'CATEGORIES:BIRTHDAY,FAMILY',
            'CLASS:PUBLIC',
            'STATUS:CONFIRMED',
            'TRANSP:TRANSPARENT',
            `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
            'END:VEVENT'
          ];
          
          icalContent.push(...event);
        }
      }
    }
  });

  icalContent.push('END:VCALENDAR');
  
  return icalContent.join('\r\n');
}

// Function to save iCal file
function saveICalFile(content, filename = 'family-birthdays.ics') {
  try {
    fs.writeFileSync(filename, content, 'utf8');
    console.log(`✅ iCal file saved successfully: ${filename}`);
    console.log(`📅 Total events created: ${FAMILY_DATA.people.filter(p => p.birth && p.birth.date).length}`);
  } catch (error) {
    console.error('❌ Error saving iCal file:', error.message);
  }
}

// Main execution
function main() {
  console.log('🎂 Generating iCal file from family data...');
  
  // Count people with birth dates
  const peopleWithBirthDates = FAMILY_DATA.people.filter(p => p.birth && p.birth.date);
  console.log(`📊 Found ${peopleWithBirthDates.length} people with birth dates out of ${FAMILY_DATA.people.length} total`);
  
  // Generate iCal content
  const icalContent = generateICal();
  
  // Save to file
  saveICalFile(icalContent);
  
  // Display some sample events
  console.log('\n📋 Sample events:');
  peopleWithBirthDates.slice(0, 5).forEach(person => {
    const displayName = person.name.display || `${person.name.given || ''} ${person.name.family || ''}`.trim();
    console.log(`   • ${displayName}: ${person.birth.date}`);
  });
  
  if (peopleWithBirthDates.length > 5) {
    console.log(`   ... and ${peopleWithBirthDates.length - 5} more`);
  }
}

// Run if this file is executed directly
if (require.main === module) {
  main();
}

module.exports = { generateICal, saveICalFile }; 