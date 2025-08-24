// Скрипт для построения family-data.js из contacts.csv

const csvData = `First Name;Middle Name;Last Name;Nickname;Birthday;
Абай;;Долабаев;Сын Гульнар;2002-05-12;
Абылайхан;;Кожамжаров;Внук Каиргельды, сын Айгуль;2008-10-03;
Аделия;;Жакиянова;Внучка Жениса, дочь Анары;2010-12-20;
Адильхан;;Каиргельды;Внук Каиргельды,  сын Бауржана;2003-12-10;
Адия;;Есмуханова;Внучка Аманжола,  дочь Армана;2011-07-28;
Аида;;Каиржанова;Внучка Каиржана, дочь Батыржана;2005-10-28;
Аиша;;Саду;Внучка Аманжол, дочь Айжан;2018-06-15;
Айгуль;;Кожамжарова;Дочь Каиргельды;1976-01-15;
Айзере;;Долобаева;Дочь Гульнар;2014-02-25;
Айсултан;;Есмуханов;Внук Каиргельды, сын Бауржана;2015-08-09;
Айсултан;;Куспеков;Внук Каиржана, сын Асель;2013-12-04;
Айтуар;;Каиржанов;Внук Каиржана, сын Батыржана;2009-10-01;
Алихан;;Женис;Внук Жениса,  сын Ерлан;2005-01-21;
Алихан;;Кабдулла;Внук Мейрама, сын Саиды;2019-01-01;
Алиша;;Сатыбалдина;Внучка Амана, дочь Асемгуль;2019-02-03;
Алсу;;Тулегенова;Внучка Жениса, дочка Анары;2001-01-20;
Алуа;;Нурлан кызы;Внучка Жениса, дочь Нурлана;1998-03-07;
Аман;;Есмуханов;Сын Мухамметсеита;1958-02-06;
Аманжол;;Есмуханов;Сын Мухамметсеита;1960-05-20;
Амина;;Кабдулла;Внучка Мейрама, дочь Саиды;2009-08-28;
Амина;;Куспекова;Внучка Каиржана, дочь Асель;2005-08-09;
Амир;;Есмуханов;Внук Аманжола, сын Армана;2018-03-20;
Амирхан;;Куспеков;Внук Каиржана, сын Асель;2008-07-24;
Анара;;Тулегенова;Дочь Жениса;1980-10-19;
Анель;;Кожамжарова;Внучка Каиргельды, дочка Айгуль;1997-09-26;
Анеля;;Есмуханова;Внучка Аманжола, дочь Армана;2013-11-10;
Арайлым;;Садвакасова;Внучка Жараса, дочь Баханай;2011-04-08;
Арсен;;Жакиянов;Внук Жениса, сын Анары;2013-10-22;
Аружан;;Есмуханова;внучка Жараса, дочь Алмаза;;
Аружан;;Женис;Внучка Жениса, дочь Ерлана;2007-02-27;
Арыстан;;Есмуханов;Внук Жараса, сын Алмаза;2012-11-11;
Асель;;Куспекова;Дочь Каиржана;1980-10-17;
Аяулым;;Жакиянова;внучка Жениса, дочь Анары;2008-08-03;
Аяулым;;Садвакасова;Внучка Жараса, дочь Баханай;2005-06-22;
Бабушка Шамшия;;;Жена Мухамметсеита;1928-03-08;
Батыржан;;Есмуханов;Сын Каиржана;1978-08-05;
Баханай;;Есмуханова;Дочь Жараса;1978-05-30;
Гульбаршин;;Оспанов;Жена Каиржана;1954-09-24;
Гульжан;;Есмуханова;Жена Орала;1969-07-03;
Гульнар;;Есмуханова;Дочь Мухамметсеита;1969-02-17;
Дана;;Есмуханова;Внучка Жениса, дочь Ерлан;1997-01-01;
Дария;;Саду;Внучка Аманжола, дочь Айжан;2006-07-14;
Дархан;;Есмуханов;Внук Жениса, сын Ерлана;2000-10-24;
Даурен;;Есмуханов;Сын Орала;1990-08-30;
Дедушка Мухаметсеит;;;;1922-06-02;
Джамиля;;Мухаметсеит;Внучка Жараса, дочь Куаныша;2007-09-30;
Дина;;Есмуханова;Жена Амана;1956-03-28;
Ерлан;;Есмуханов;Сын Жениса;1974-11-01;
Ертай;;Долобаев;Муж Гульнар;1966-07-07;
Жарас;;Есмуханов;Сын Мухамметсеита;1955-10-24;
Женис;;Есмуханов;Сын Мухамметсеита;1945-11-08;
Зина;;Есмуханова;Жена Аманжола;1963-12-12;
Инкар;;Садвакасова;Внучка Жараса, дочь Баханай;2014-03-04;
Иран;;Есмуханов;Сын Мухамметсеита;1965-05-04;
Каиржан;;Есмуханов;Сын Мухамметсеита;1953-02-09;
Кайрат;;Есмуханов;Внук Орала, сын Даурена;2021-07-19;
Кайргельды;;Есмуханов;Сын Мухамметсеита;1951-08-17;
Куаныш;;Мухаметсеитов;Сын Жараса;1980-01-30;
Кульжан;;Есмуханова;Жена Жениса;1949-10-21;
Лаура;;Кожамжарова;Внучка Каиргельды, дочка Айгуль;2000-01-12;
Малика;;Нурланкызы;Внучка Жениса, дочь Нурлана;1998-11-27;
Малика;;Сатыбалдина;Внучка Амана, дочь Асемгуль;2022-02-08;
Мансур;;Есмуханов;Внук Ирана, сын Мадины;2022-11-20;
Мейрам;;Есмуханов;Сын Мухамметсеита;1962-11-07;
Мухаммедкаир;;Кайржанов;Внук Каиржана, сын Батыржана;2007-02-06;
Нурлан;;Есмуханов;Сын Жениса;1972-01-20;
Оля;;Есмуханова;Жена Каиргельды;1952-08-05;
Орал;;Есмуханов;Сын Мухамметсеита;1967-06-05;
Рахат;;Есмуханов;Внук Каиргельды, сын Бауржана;2006-06-09;
Роза;;Есмуханова;Жена Мейрама;1966-12-12;
Санжар;;Каиргельды;Внук Каиргельды, сын Бауржан;2008-05-01;
Султана;;Кабдулла;Внучка Мейрама, дочь Саиды;2013-01-21;
Талгат;;Есмуханов;Внук Орала, сын Даурена;2018-06-01;
Ернур;;Есмуханов;Внук Ирана, сын Мадины;;
Амир;;;Внук Ирана, сын Айданы;;
Айдана;;Есмуханова;Дочь Ирана;1996-05-06;`;

function parseCsvData() {
    const lines = csvData.trim().split('\n');
    const people = [];
    
    // Пропускаем заголовок
    for (let i = 1; i < lines.length; i++) {
        const parts = lines[i].split(';');
        if (parts.length >= 5) {
            const person = {
                firstName: parts[0] || '',
                middleName: parts[1] || '',
                lastName: parts[2] || '',
                nickname: parts[3] || '',
                birthday: parts[4] || ''
            };
            
            // Создаем display имя
            person.displayName = [person.firstName, person.lastName].filter(Boolean).join(' ');
            
            // Определяем пол по имени
            person.gender = determineGender(person.firstName);
            
            // Создаем уникальный ID
            person.id = `p_${i}`;
            
            people.push(person);
        }
    }
    
    return people;
}

function determineGender(firstName) {
    if (!firstName) return 'unknown';
    
    // Мужские имена (заканчиваются на согласные или специфические окончания)
    const maleNames = [
        'Абай', 'Абылайхан', 'Адильхан', 'Айсултан', 'Айтуар', 'Алихан', 'Аман', 
        'Аманжол', 'Амир', 'Амирхан', 'Арсен', 'Арыстан', 'Батыржан', 'Дархан', 
        'Даурен', 'Дедушка Мухаметсеит', 'Ерлан', 'Ертай', 'Жарас', 'Женис', 
        'Иран', 'Каиржан', 'Кайрат', 'Кайргельды', 'Куаныш', 'Мансур', 'Мейрам', 
        'Мухаммедкаир', 'Нурлан', 'Орал', 'Рахат', 'Санжар', 'Талгат', 'Ернур'
    ];
    
    // Женские имена (обычно заканчиваются на -а, -я, -ь или специфические)
    const femaleNames = [
        'Аделия', 'Адия', 'Аида', 'Аиша', 'Айгуль', 'Айзере', 'Алиша', 'Алсу', 
        'Алуа', 'Амина', 'Анара', 'Анель', 'Анеля', 'Арайлым', 'Аружан', 'Асель', 
        'Аяулым', 'Бабушка Шамшия', 'Баханай', 'Гульбаршин', 'Гульжан', 'Гульнар', 
        'Дана', 'Дария', 'Дина', 'Джамиля', 'Зина', 'Инкар', 'Кульжан', 'Лаура', 
        'Малика', 'Оля', 'Роза', 'Султана', 'Айдана'
    ];
    
    if (maleNames.includes(firstName)) return 'male';
    if (femaleNames.includes(firstName)) return 'female';
    
    return 'unknown';
}

function buildRelationships(people) {
    const relationships = [];
    
    // Создаем индекс для быстрого поиска
    const nameIndex = new Map();
    people.forEach(person => {
        nameIndex.set(person.displayName.toLowerCase(), person);
        nameIndex.set(person.firstName.toLowerCase(), person);
    });
    
    people.forEach(person => {
        if (!person.nickname) return;
        
        const nickname = person.nickname.toLowerCase();
        
        // Обрабатываем родственные связи на основе прозвищ
        
        // Дети (сын/дочь)
        if (nickname.includes('сын ') || nickname.includes('дочь ')) {
            const parentMatch = nickname.match(/(?:сын|дочь) ([а-яё]+)/i);
            if (parentMatch) {
                const parentName = parentMatch[1].toLowerCase();
                const parent = findPersonByName(nameIndex, parentName);
                if (parent) {
                    relationships.push({
                        type: 'parent-child',
                        parent: parent.id,
                        child: person.id
                    });
                }
            }
        }
        
        // Внуки
        if (nickname.includes('внук ') || nickname.includes('внучка ')) {
            const matches = nickname.match(/внук(?:а)? ([а-яё]+)(?:,\s*(?:сын|дочь) ([а-яё]+))?/i);
            if (matches) {
                const grandparentName = matches[1].toLowerCase();
                const parentName = matches[2] ? matches[2].toLowerCase() : null;
                
                const grandparent = findPersonByName(nameIndex, grandparentName);
                if (parentName) {
                    const parent = findPersonByName(nameIndex, parentName);
                    if (parent) {
                        relationships.push({
                            type: 'parent-child',
                            parent: parent.id,
                            child: person.id
                        });
                        
                        if (grandparent) {
                            // Добавляем связь родитель-дедушка, если еще не существует
                            const existingParentGrandparentRel = relationships.find(r => 
                                r.type === 'parent-child' && 
                                r.parent === grandparent.id && 
                                r.child === parent.id
                            );
                            if (!existingParentGrandparentRel) {
                                relationships.push({
                                    type: 'parent-child',
                                    parent: grandparent.id,
                                    child: parent.id
                                });
                            }
                        }
                    }
                }
            }
        }
        
        // Жены/мужья
        if (nickname.includes('жена ') || nickname.includes('муж ')) {
            const spouseMatch = nickname.match(/(?:жена|муж) ([а-яё]+)/i);
            if (spouseMatch) {
                const spouseName = spouseMatch[1].toLowerCase();
                const spouse = findPersonByName(nameIndex, spouseName);
                if (spouse) {
                    // Проверяем, не добавлена ли уже эта связь
                    const existingRel = relationships.find(r => 
                        r.type === 'spouse' && 
                        ((r.person1 === person.id && r.person2 === spouse.id) || 
                         (r.person1 === spouse.id && r.person2 === person.id))
                    );
                    if (!existingRel) {
                        relationships.push({
                            type: 'spouse',
                            person1: person.id,
                            person2: spouse.id,
                            start_date: null,
                            end_date: null,
                            notes: ''
                        });
                    }
                }
            }
        }
    });
    
    return relationships;
}

function findPersonByName(nameIndex, searchName) {
    searchName = searchName.toLowerCase();
    
    // Прямой поиск
    if (nameIndex.has(searchName)) {
        return nameIndex.get(searchName);
    }
    
    // Альтернативные варианты поиска
    const alternatives = {
        'мухамметсеита': 'дедушка мухаметсеит',
        'каиргельды': 'кайргельды',
        'жениса': 'женис',
        'амана': 'аман',
        'аманжола': 'аманжол',
        'ирана': 'иран',
        'каиржана': 'каиржан',
        'жараса': 'жарас',
        'мейрама': 'мейрам',
        'орала': 'орал',
        'ерлана': 'ерлан',
        'анары': 'анара',
        'нурлана': 'нурлан',
        'айгуль': 'айгуль',
        'гульнар': 'гульнар',
        'асель': 'асель',
        'батыржана': 'батыржан',
        'баханай': 'баханай',
        'куаныша': 'куаныш',
        'даурена': 'даурен',
        'армана': 'арман', // Возможно, нет в списке
        'айжан': 'айжан', // Возможно, нет в списке
        'саиды': 'саида', // Возможно, нет в списке
        'асемгуль': 'асемгуль', // Возможно, нет в списке
        'бауржана': 'бауржан', // Возможно, нет в списке
        'алмаза': 'алмаз', // Возможно, нет в списке
        'мадины': 'мадина', // Возможно, нет в списке
        'айданы': 'айдана'
    };
    
    if (alternatives[searchName]) {
        const altName = alternatives[searchName];
        if (nameIndex.has(altName)) {
            return nameIndex.get(altName);
        }
    }
    
    // Поиск по части имени
    for (const [name, person] of nameIndex) {
        if (name.includes(searchName) || searchName.includes(name)) {
            return person;
        }
    }
    
    return null;
}

function generateFamilyData() {
    const people = parseCsvData();
    const relationships = buildRelationships(people);
    
    // Преобразуем в формат family-data.js
    const familyData = {
        people: people.map(person => ({
            id: person.id,
            name: {
                display: person.displayName,
                given: person.firstName,
                family: person.lastName,
                middle: person.middleName || null,
                aka: person.nickname ? [person.nickname] : []
            },
            gender: person.gender,
            birth: {
                date: person.birthday || null,
                place: null
            },
            death: {
                date: null,
                place: null
            },
            notes: '',
            media: [],
            meta: {
                last_updated: new Date().toISOString().split('T')[0],
                privacy: 'private'
            }
        })),
        relationships: relationships
    };
    
    return familyData;
}

// Генерируем данные
const familyData = generateFamilyData();

// Выводим результат в формате JavaScript файла
console.log('// Данные семейного дерева');
console.log('const FAMILY_DATA =', JSON.stringify(familyData, null, 2) + ';');

console.log('\n// Статистика:');
console.log('// Людей:', familyData.people.length);
console.log('// Связей:', familyData.relationships.length);
console.log('// Parent-child связей:', familyData.relationships.filter(r => r.type === 'parent-child').length);
console.log('// Spouse связей:', familyData.relationships.filter(r => r.type === 'spouse').length);