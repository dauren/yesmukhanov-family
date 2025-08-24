// Данные семейного дерева
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
    },
    {
      "id": "p_6",
      "name": {
        "display": "Аида Каиржанова",
        "given": "Аида",
        "family": "Каиржанова",
        "middle": null,
        "aka": [
          "Внучка Каиржана, дочь Батыржана"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "2005-10-28",
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
      "id": "p_7",
      "name": {
        "display": "Аиша Саду",
        "given": "Аиша",
        "family": "Саду",
        "middle": null,
        "aka": [
          "Внучка Аманжол, дочь Айжан"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "2018-06-15",
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
      "id": "p_8",
      "name": {
        "display": "Айгуль Кожамжарова",
        "given": "Айгуль",
        "family": "Кожамжарова",
        "middle": null,
        "aka": [
          "Дочь Каиргельды"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "1976-01-15",
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
      "id": "p_9",
      "name": {
        "display": "Айзере Долобаева",
        "given": "Айзере",
        "family": "Долобаева",
        "middle": null,
        "aka": [
          "Дочь Гульнар"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "2014-02-25",
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
      "id": "p_10",
      "name": {
        "display": "Айсултан Есмуханов",
        "given": "Айсултан",
        "family": "Есмуханов",
        "middle": null,
        "aka": [
          "Внук Каиргельды, сын Бауржана"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "2015-08-09",
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
      "id": "p_11",
      "name": {
        "display": "Айсултан Куспеков",
        "given": "Айсултан",
        "family": "Куспеков",
        "middle": null,
        "aka": [
          "Внук Каиржана, сын Асель"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "2013-12-04",
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
      "id": "p_12",
      "name": {
        "display": "Айтуар Каиржанов",
        "given": "Айтуар",
        "family": "Каиржанов",
        "middle": null,
        "aka": [
          "Внук Каиржана, сын Батыржана"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "2009-10-01",
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
      "id": "p_13",
      "name": {
        "display": "Алихан Женис",
        "given": "Алихан",
        "family": "Женис",
        "middle": null,
        "aka": [
          "Внук Жениса,  сын Ерлан"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "2005-01-21",
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
      "id": "p_14",
      "name": {
        "display": "Алихан Кабдулла",
        "given": "Алихан",
        "family": "Кабдулла",
        "middle": null,
        "aka": [
          "Внук Мейрама, сын Саиды"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "2019-01-01",
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
      "id": "p_15",
      "name": {
        "display": "Алиша Сатыбалдина",
        "given": "Алиша",
        "family": "Сатыбалдина",
        "middle": null,
        "aka": [
          "Внучка Амана, дочь Асемгуль"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "2019-02-03",
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
      "id": "p_16",
      "name": {
        "display": "Алсу Тулегенова",
        "given": "Алсу",
        "family": "Тулегенова",
        "middle": null,
        "aka": [
          "Внучка Жениса, дочка Анары"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "2001-01-20",
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
      "id": "p_17",
      "name": {
        "display": "Алуа Нурлан кызы",
        "given": "Алуа",
        "family": "Нурлан кызы",
        "middle": null,
        "aka": [
          "Внучка Жениса, дочь Нурлана"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "1998-03-07",
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
      "id": "p_18",
      "name": {
        "display": "Аман Есмуханов",
        "given": "Аман",
        "family": "Есмуханов",
        "middle": null,
        "aka": [
          "Сын Мухамметсеита"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "1958-02-06",
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
      "id": "p_19",
      "name": {
        "display": "Аманжол Есмуханов",
        "given": "Аманжол",
        "family": "Есмуханов",
        "middle": null,
        "aka": [
          "Сын Мухамметсеита"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "1960-05-20",
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
      "id": "p_20",
      "name": {
        "display": "Амина Кабдулла",
        "given": "Амина",
        "family": "Кабдулла",
        "middle": null,
        "aka": [
          "Внучка Мейрама, дочь Саиды"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "2009-08-28",
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
      "id": "p_21",
      "name": {
        "display": "Амина Куспекова",
        "given": "Амина",
        "family": "Куспекова",
        "middle": null,
        "aka": [
          "Внучка Каиржана, дочь Асель"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "2005-08-09",
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
      "id": "p_22",
      "name": {
        "display": "Амир Аманжолов",
        "given": "Амир",
        "family": "Аманжолов",
        "middle": null,
        "aka": [
          "Внук Аманжола, сын Армана"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "2018-03-20",
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
      "id": "p_23",
      "name": {
        "display": "Амирхан Куспеков",
        "given": "Амирхан",
        "family": "Куспеков",
        "middle": null,
        "aka": [
          "Внук Каиржана, сын Асель"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "2008-07-24",
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
      "id": "p_24",
      "name": {
        "display": "Анара Тулегенова",
        "given": "Анара",
        "family": "Тулегенова",
        "middle": null,
        "aka": [
          "Дочь Жениса"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "1980-10-19",
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
      "id": "p_25",
      "name": {
        "display": "Анель Кожамжарова",
        "given": "Анель",
        "family": "Кожамжарова",
        "middle": null,
        "aka": [
          "Внучка Каиргельды, дочка Айгуль"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "1997-09-26",
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
      "id": "p_26",
      "name": {
        "display": "Анеля Аманжолова",
        "given": "Анеля",
        "family": "Аманжолова",
        "middle": null,
        "aka": [
          "Внучка Аманжола, дочь Армана"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "2013-11-10",
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
      "id": "p_27",
      "name": {
        "display": "Арайлым Садвакасова",
        "given": "Арайлым",
        "family": "Садвакасова",
        "middle": null,
        "aka": [
          "Внучка Жараса, дочь Баханай"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "2011-04-08",
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
      "id": "p_28",
      "name": {
        "display": "Арсен Жакиянов",
        "given": "Арсен",
        "family": "Жакиянов",
        "middle": null,
        "aka": [
          "Внук Жениса, сын Анары"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "2013-10-22",
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
      "id": "p_29",
      "name": {
        "display": "Аружан Есмуханова",
        "given": "Аружан",
        "family": "Есмуханова",
        "middle": null,
        "aka": [
          "внучка Жараса, дочь Алмаза"
        ]
      },
      "gender": "female",
      "birth": {
        "date": null,
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
      "id": "p_30",
      "name": {
        "display": "Аружан Женис",
        "given": "Аружан",
        "family": "Женис",
        "middle": null,
        "aka": [
          "Внучка Жениса, дочь Ерлана"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "2007-02-27",
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
      "id": "p_31",
      "name": {
        "display": "Арыстан Есмуханов",
        "given": "Арыстан",
        "family": "Есмуханов",
        "middle": null,
        "aka": [
          "Внук Жараса, сын Алмаза"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "2012-11-11",
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
      "id": "p_32",
      "name": {
        "display": "Асель Куспекова",
        "given": "Асель",
        "family": "Куспекова",
        "middle": null,
        "aka": [
          "Дочь Каиржана"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "1980-10-17",
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
      "id": "p_33",
      "name": {
        "display": "Аяулым Жакиянова",
        "given": "Аяулым",
        "family": "Жакиянова",
        "middle": null,
        "aka": [
          "внучка Жениса, дочь Анары"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "2008-08-03",
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
      "id": "p_34",
      "name": {
        "display": "Аяулым Садвакасова",
        "given": "Аяулым",
        "family": "Садвакасова",
        "middle": null,
        "aka": [
          "Внучка Жараса, дочь Баханай"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "2005-06-22",
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
      "id": "p_35",
      "name": {
        "display": "Бабушка Шамшия",
        "given": "Бабушка Шамшия",
        "family": "",
        "middle": null,
        "aka": [
          "Жена Мухамметсеита"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "1928-03-08",
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
      "id": "p_36",
      "name": {
        "display": "Батыржан Есмуханов",
        "given": "Батыржан",
        "family": "Есмуханов",
        "middle": null,
        "aka": [
          "Сын Каиржана"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "1978-08-05",
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
      "id": "p_37",
      "name": {
        "display": "Баханай Есмуханова",
        "given": "Баханай",
        "family": "Есмуханова",
        "middle": null,
        "aka": [
          "Дочь Жараса"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "1978-05-30",
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
      "id": "p_38",
      "name": {
        "display": "Гульбаршин Оспанов",
        "given": "Гульбаршин",
        "family": "Оспанов",
        "middle": null,
        "aka": [
          "Жена Каиржана"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "1954-09-24",
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
      "id": "p_39",
      "name": {
        "display": "Гульжан Есмуханова",
        "given": "Гульжан",
        "family": "Есмуханова",
        "middle": null,
        "aka": [
          "Жена Орала"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "1969-07-03",
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
      "id": "p_40",
      "name": {
        "display": "Гульнар Есмуханова",
        "given": "Гульнар",
        "family": "Есмуханова",
        "middle": null,
        "aka": [
          "Дочь Мухамметсеита"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "1969-02-17",
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
      "id": "p_41",
      "name": {
        "display": "Дана Есмуханова",
        "given": "Дана",
        "family": "Есмуханова",
        "middle": null,
        "aka": [
          "Внучка Жениса, дочь Ерлан"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "1997-01-01",
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
      "id": "p_42",
      "name": {
        "display": "Дария Саду",
        "given": "Дария",
        "family": "Саду",
        "middle": null,
        "aka": [
          "Внучка Аманжола, дочь Айжан"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "2006-07-14",
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
      "id": "p_43",
      "name": {
        "display": "Дархан Есмуханов",
        "given": "Дархан",
        "family": "Есмуханов",
        "middle": null,
        "aka": [
          "Внук Жениса, сын Ерлана"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "2000-10-24",
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
      "id": "p_44",
      "name": {
        "display": "Даурен Есмуханов",
        "given": "Даурен",
        "family": "Есмуханов",
        "middle": null,
        "aka": [
          "Сын Орала"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "1990-08-30",
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
      "id": "p_45",
      "name": {
        "display": "Дедушка Мухаметсеит",
        "given": "Дедушка Мухаметсеит",
        "family": "",
        "middle": null,
        "aka": []
      },
      "gender": "male",
      "birth": {
        "date": "1922-06-02",
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
      "id": "p_46",
      "name": {
        "display": "Джамиля Мухаметсеит",
        "given": "Джамиля",
        "family": "Мухаметсеит",
        "middle": null,
        "aka": [
          "Внучка Жараса, дочь Куаныша"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "2007-09-30",
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
      "id": "p_47",
      "name": {
        "display": "Дина Есмуханова",
        "given": "Дина",
        "family": "Есмуханова",
        "middle": null,
        "aka": [
          "Жена Амана"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "1956-03-28",
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
      "id": "p_48",
      "name": {
        "display": "Ерлан Есмуханов",
        "given": "Ерлан",
        "family": "Есмуханов",
        "middle": null,
        "aka": [
          "Сын Жениса"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "1974-11-01",
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
      "id": "p_49",
      "name": {
        "display": "Ертай Долобаев",
        "given": "Ертай",
        "family": "Долобаев",
        "middle": null,
        "aka": [
          "Муж Гульнар"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "1966-07-07",
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
      "id": "p_50",
      "name": {
        "display": "Жарас Есмуханов",
        "given": "Жарас",
        "family": "Есмуханов",
        "middle": null,
        "aka": [
          "Сын Мухамметсеита"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "1955-10-24",
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
      "id": "p_51",
      "name": {
        "display": "Женис Есмуханов",
        "given": "Женис",
        "family": "Есмуханов",
        "middle": null,
        "aka": [
          "Сын Мухамметсеита"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "1945-11-08",
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
      "id": "p_52",
      "name": {
        "display": "Зина Есмуханова",
        "given": "Зина",
        "family": "Есмуханова",
        "middle": null,
        "aka": [
          "Жена Аманжола"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "1963-12-12",
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
      "id": "p_53",
      "name": {
        "display": "Инкар Садвакасова",
        "given": "Инкар",
        "family": "Садвакасова",
        "middle": null,
        "aka": [
          "Внучка Жараса, дочь Баханай"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "2014-03-04",
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
      "id": "p_54",
      "name": {
        "display": "Иран Есмуханов",
        "given": "Иран",
        "family": "Есмуханов",
        "middle": null,
        "aka": [
          "Сын Мухамметсеита"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "1965-05-04",
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
      "id": "p_55",
      "name": {
        "display": "Каиржан Есмуханов",
        "given": "Каиржан",
        "family": "Есмуханов",
        "middle": null,
        "aka": [
          "Сын Мухамметсеита"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "1953-02-09",
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
      "id": "p_56",
      "name": {
        "display": "Кайрат Есмуханов",
        "given": "Кайрат",
        "family": "Есмуханов",
        "middle": null,
        "aka": [
          "Внук Орала, сын Даурена"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "2021-07-19",
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
      "id": "p_57",
      "name": {
        "display": "Кайргельды Есмуханов",
        "given": "Кайргельды",
        "family": "Есмуханов",
        "middle": null,
        "aka": [
          "Сын Мухамметсеита"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "1951-08-17",
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
      "id": "p_58",
      "name": {
        "display": "Куаныш Мухаметсеитов",
        "given": "Куаныш",
        "family": "Мухаметсеитов",
        "middle": null,
        "aka": [
          "Сын Жараса"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "1980-01-30",
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
      "id": "p_59",
      "name": {
        "display": "Кульжан Есмуханова",
        "given": "Кульжан",
        "family": "Есмуханова",
        "middle": null,
        "aka": [
          "Жена Жениса"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "1949-10-21",
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
      "id": "p_60",
      "name": {
        "display": "Лаура Кожамжарова",
        "given": "Лаура",
        "family": "Кожамжарова",
        "middle": null,
        "aka": [
          "Внучка Каиргельды, дочка Айгуль"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "2003-01-12",
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
      "id": "p_61",
      "name": {
        "display": "Малика Нурланкызы",
        "given": "Малика",
        "family": "Нурланкызы",
        "middle": null,
        "aka": [
          "Внучка Жениса, дочь Нурлана"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "1998-11-27",
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
      "id": "p_62",
      "name": {
        "display": "Малика Сатыбалдина",
        "given": "Малика",
        "family": "Сатыбалдина",
        "middle": null,
        "aka": [
          "Внучка Амана, дочь Асемгуль"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "2022-02-08",
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
      "id": "p_63",
      "name": {
        "display": "Мансур Есмуханов",
        "given": "Мансур",
        "family": "Есмуханов",
        "middle": null,
        "aka": [
          "Внук Ирана, сын Мадины"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "2022-11-20",
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
      "id": "p_64",
      "name": {
        "display": "Мейрам Есмуханов",
        "given": "Мейрам",
        "family": "Есмуханов",
        "middle": null,
        "aka": [
          "Сын Мухамметсеита"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "1962-11-07",
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
      "id": "p_65",
      "name": {
        "display": "Мухаммедкаир Кайржанов",
        "given": "Мухаммедкаир",
        "family": "Кайржанов",
        "middle": null,
        "aka": [
          "Внук Каиржана, сын Батыржана"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "2007-02-06",
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
      "id": "p_66",
      "name": {
        "display": "Нурлан Есмуханов",
        "given": "Нурлан",
        "family": "Есмуханов",
        "middle": null,
        "aka": [
          "Сын Жениса"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "1972-01-20",
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
      "id": "p_67",
      "name": {
        "display": "Оля Есмуханова",
        "given": "Оля",
        "family": "Есмуханова",
        "middle": null,
        "aka": [
          "Жена Каиргельды"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "1952-08-05",
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
      "id": "p_68",
      "name": {
        "display": "Орал Есмуханов",
        "given": "Орал",
        "family": "Есмуханов",
        "middle": null,
        "aka": [
          "Сын Мухамметсеита"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "1967-06-05",
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
      "id": "p_69",
      "name": {
        "display": "Рахат Есмуханов",
        "given": "Рахат",
        "family": "Есмуханов",
        "middle": null,
        "aka": [
          "Внук Каиргельды, сын Бауржана"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "2006-06-09",
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
      "id": "p_70",
      "name": {
        "display": "Роза Есмуханова",
        "given": "Роза",
        "family": "Есмуханова",
        "middle": null,
        "aka": [
          "Жена Мейрама"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "1966-12-12",
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
      "id": "p_71",
      "name": {
        "display": "Санжар Каиргельды",
        "given": "Санжар",
        "family": "Каиргельды",
        "middle": null,
        "aka": [
          "Внук Каиргельды, сын Бауржан"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "2008-05-01",
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
      "id": "p_72",
      "name": {
        "display": "Султана Кабдулла",
        "given": "Султана",
        "family": "Кабдулла",
        "middle": null,
        "aka": [
          "Внучка Мейрама, дочь Саиды"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "2013-01-21",
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
      "id": "p_73",
      "name": {
        "display": "Талгат Есмуханов",
        "given": "Талгат",
        "family": "Есмуханов",
        "middle": null,
        "aka": [
          "Внук Орала, сын Даурена"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "2018-06-01",
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
      "id": "p_74",
      "name": {
        "display": "Ернур Есмуханов",
        "given": "Ернур",
        "family": "Есмуханов",
        "middle": null,
        "aka": [
          "Внук Ирана, сын Мадины"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "2008-12-06",
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
      "id": "p_75",
      "name": {
        "display": "Амир",
        "given": "Амир",
        "family": "",
        "middle": null,
        "aka": [
          "Внук Ирана, сын Айданы"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "2021-09-21",
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
      "id": "p_76",
      "name": {
        "display": "Айдана Есмуханова",
        "given": "Айдана",
        "family": "Есмуханова",
        "middle": null,
        "aka": [
          "Дочь Ирана"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "1996-05-06",
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
      "id": "p_77",
      "name": {
        "display": "Мадина Есмуханова",
        "given": "Мадина",
        "family": "Есмуханова",
        "middle": null,
        "aka": [
          "Дочь Ирана"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "1988-11-10",
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
      "id": "p_78",
      "name": {
        "display": "Саида Есмуханова",
        "given": "Саида",
        "family": "Есмуханова",
        "middle": null,
        "aka": [
          "Дочь Мейрама"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "1984-06-07",
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
      "id": "p_79",
      "name": {
        "display": "Бауржан Есмуханов",
        "given": "Бауржан",
        "family": "Есмуханов",
        "middle": null,
        "aka": [
          "Сын Каиргельды"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "1974-08-06",
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
      "id": "p_80",
      "name": {
        "display": "Алмаз Есмуханов",
        "given": "Алмаз",
        "family": "Есмуханов",
        "middle": null,
        "aka": [
          "Сын Жараса"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "1982-07-21",
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
      "id": "p_81",
      "name": {
        "display": "Асемгуль Есмуханова",
        "given": "Асемгуль",
        "family": "Есмуханова",
        "middle": null,
        "aka": [
          "Дочь Амана"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "1984-03-30",
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
      "id": "p_82",
      "name": {
        "display": "Айжан Бекмурзина",
        "given": "Айжан",
        "family": "Бекмурзина",
        "middle": null,
        "aka": [
          "Дочь Аманжола"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "1988-04-04",
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
      "id": "p_83",
      "name": {
        "display": "Арман Есмуханов",
        "given": "Арман",
        "family": "Есмуханов",
        "middle": null,
        "aka": [
          "Сын Аманжола"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "1985-02-07",
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
      "id": "p_84",
      "name": {
        "display": "Олжас Есмуханов",
        "given": "Олжас",
        "family": "Есмуханов",
        "middle": null,
        "aka": [
          "Внук Жараса, сын Баханай"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "1999-04-13",
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
      "id": "p_85",
      "name": {
        "display": "Адиль Есмуханов",
        "given": "Адиль",
        "family": "Есмуханов",
        "middle": null,
        "aka": [
          "сын Орала"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "1996-06-26",
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
      "id": "p_86",
      "name": {
        "display": "Ансар Есмуханов",
        "given": "Ансар",
        "family": "Есмуханов",
        "middle": null,
        "aka": [
          "сын Орала"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "2005-09-22",
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
      "id": "p_87",
      "name": {
        "display": "Мариям",
        "given": "Мариям",
        "family": "",
        "middle": null,
        "aka": [
          "Внучка Ирана, дочь Айданы"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "2024-07-04",
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
      "id": "p_88",
      "name": {
        "display": "Ислам Саду",
        "given": "Ислам",
        "family": "",
        "middle": null,
        "aka": [
          "Внук Аманжола, сын Айжан"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "2009-04-29",
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
      "id": "p_89",
      "name": {
        "display": "Жасмин Умирбекова",
        "given": "Жасмин",
        "family": "Умирбекова",
        "middle": null,
        "aka": [
          "Правнучка Каиргельды, Внучка Айгуль, Дочь Анель"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "2019-08-05",
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
      "id": "p_90",
      "name": {
        "display": "Эмина Умирбекова",
        "given": "Эмина",
        "family": "Умирбекова",
        "middle": null,
        "aka": [
          "Правнучка Каиргельды, Внучка Айгуль, Дочь Анель"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "2022-12-17",
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
      "id": "p_91",
      "name": {
        "display": "Риза Садвакасова",
        "given": "Риза",
        "family": "Садвакасова",
        "middle": null,
        "aka": [
          "Внучка Жараса, дочь Баханай"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "2020-07-15",
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
      "id": "p_92",
      "name": {
        "display": "Адина Сатыбалдина",
        "given": "Адина",
        "family": "Сатыбалдина",
        "middle": null,
        "aka": [
          "Внучка Амана, дочь Асемгуль"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "2013-03-16",
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
      "id": "p_93",
      "name": {
        "display": "Айлин Сатыбалдина",
        "given": "Айлин",
        "family": "Сатыбалдина",
        "middle": null,
        "aka": [
          "Внучка Амана, дочь Асемгуль"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "2016-04-07",
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
      "id": "p_94",
      "name": {
        "display": "Сайран Есмуханова",
        "given": "Сайран",
        "family": "Есмуханова",
        "middle": null,
        "aka": [
          "Жена Жараса"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "1957-09-25",
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
      "id": "p_95",
      "name": {
        "display": "Салима Есмуханова",
        "given": "Салима",
        "family": "Есмуханова",
        "middle": null,
        "aka": [
          "Жена Ирана"
        ]
      },
      "gender": "female",
      "birth": {
        "date": "1966-09-24",
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
    ,
    {
      "id": "p_96",
      "name": {
        "display": "Азиз Аманжолов",
        "given": "Азиз",
        "family": "Аманжолов",
        "middle": null,
        "aka": [
          "Жена Ирана"
        ]
      },
      "gender": "male",
      "birth": {
        "date": "2025-01-08",
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
  ],
  "relationships": [
    {
      "type": "parent-child",
      "parent": "p_40",
      "child": "p_1"
    },
    {
      "type": "parent-child",
      "parent": "p_8",
      "child": "p_2"
    },
    {
      "type": "parent-child",
      "parent": "p_8",
      "child": "p_2"
    },
    {
      "type": "parent-child",
      "parent": "p_57",
      "child": "p_8"
    },
    {
      "type": "parent-child",
      "parent": "p_24",
      "child": "p_3"
    },
    {
      "type": "parent-child",
      "parent": "p_36",
      "child": "p_6"
    },
    {
      "type": "parent-child",
      "parent": "p_40",
      "child": "p_9"
    },
    {
      "type": "parent-child",
      "parent": "p_32",
      "child": "p_11"
    },
    {
      "type": "parent-child",
      "parent": "p_55",
      "child": "p_32"
    },
    {
      "type": "parent-child",
      "parent": "p_36",
      "child": "p_12"
    },
    {
      "type": "parent-child",
      "parent": "p_55",
      "child": "p_36"
    },
    {
      "type": "parent-child",
      "parent": "p_48",
      "child": "p_13"
    },

    {
      "type": "parent-child",
      "parent": "p_66",
      "child": "p_17"
    },
    {
      "type": "parent-child",
      "parent": "p_45",
      "child": "p_18"
    },
    {
      "type": "parent-child",
      "parent": "p_45",
      "child": "p_19"
    },
    {
      "type": "parent-child",
      "parent": "p_32",
      "child": "p_21"
    },
    {
      "type": "parent-child",
      "parent": "p_32",
      "child": "p_23"
    },
    {
      "type": "parent-child",
      "parent": "p_51",
      "child": "p_24"
    },
    {
      "type": "parent-child",
      "parent": "p_37",
      "child": "p_27"
    },
    {
      "type": "parent-child",
      "parent": "p_24",
      "child": "p_28"
    },
    {
      "type": "parent-child",
      "parent": "p_24",
      "child": "p_28"
    },
    {
      "type": "parent-child",
      "parent": "p_48",
      "child": "p_30"
    },
    {
      "type": "parent-child",
      "parent": "p_24",
      "child": "p_33"
    },
    {
      "type": "parent-child",
      "parent": "p_37",
      "child": "p_34"
    },
    {
      "type": "spouse",
      "person1": "p_35",
      "person2": "p_45",
      "start_date": null,
      "end_date": null,
      "notes": ""
    },
    {
      "type": "parent-child",
      "parent": "p_50",
      "child": "p_37"
    },
    {
      "type": "spouse",
      "person1": "p_38",
      "person2": "p_55",
      "start_date": null,
      "end_date": null,
      "notes": ""
    },
    {
      "type": "spouse",
      "person1": "p_39",
      "person2": "p_68",
      "start_date": null,
      "end_date": null,
      "notes": ""
    },
    {
      "type": "parent-child",
      "parent": "p_45",
      "child": "p_40"
    },
    {
      "type": "parent-child",
      "parent": "p_48",
      "child": "p_41"
    },
    {
      "type": "parent-child",
      "parent": "p_48",
      "child": "p_43"
    },
    {
      "type": "parent-child",
      "parent": "p_48",
      "child": "p_43"
    },
    {
      "type": "parent-child",
      "parent": "p_68",
      "child": "p_44"
    },
    {
      "type": "parent-child",
      "parent": "p_58",
      "child": "p_46"
    },
    {
      "type": "spouse",
      "person1": "p_47",
      "person2": "p_18",
      "start_date": null,
      "end_date": null,
      "notes": ""
    },
    {
      "type": "parent-child",
      "parent": "p_51",
      "child": "p_48"
    },
    {
      "type": "spouse",
      "person1": "p_49",
      "person2": "p_40",
      "start_date": null,
      "end_date": null,
      "notes": ""
    },
    {
      "type": "parent-child",
      "parent": "p_45",
      "child": "p_50"
    },
    {
      "type": "parent-child",
      "parent": "p_45",
      "child": "p_51"
    },
    {
      "type": "spouse",
      "person1": "p_52",
      "person2": "p_19",
      "start_date": null,
      "end_date": null,
      "notes": ""
    },
    {
      "type": "parent-child",
      "parent": "p_37",
      "child": "p_53"
    },
    {
      "type": "parent-child",
      "parent": "p_45",
      "child": "p_54"
    },
    {
      "type": "parent-child",
      "parent": "p_45",
      "child": "p_55"
    },
    {
      "type": "parent-child",
      "parent": "p_44",
      "child": "p_56"
    },
    {
      "type": "parent-child",
      "parent": "p_45",
      "child": "p_57"
    },
    {
      "type": "parent-child",
      "parent": "p_50",
      "child": "p_58"
    },
    {
      "type": "spouse",
      "person1": "p_59",
      "person2": "p_51",
      "start_date": null,
      "end_date": null,
      "notes": ""
    },
    {
      "type": "parent-child",
      "parent": "p_66",
      "child": "p_61"
    },
    {
      "type": "parent-child",
      "parent": "p_45",
      "child": "p_64"
    },
    {
      "type": "parent-child",
      "parent": "p_36",
      "child": "p_65"
    },
    {
      "type": "parent-child",
      "parent": "p_51",
      "child": "p_66"
    },
    {
      "type": "spouse",
      "person1": "p_67",
      "person2": "p_57",
      "start_date": null,
      "end_date": null,
      "notes": ""
    },
    {
      "type": "parent-child",
      "parent": "p_45",
      "child": "p_68"
    },
    {
      "type": "spouse",
      "person1": "p_70",
      "person2": "p_64",
      "start_date": null,
      "end_date": null,
      "notes": ""
    },
    {
      "type": "parent-child",
      "parent": "p_44",
      "child": "p_73"
    },
    {
      "type": "parent-child",
      "parent": "p_76",
      "child": "p_75"
    },
    {
      "type": "parent-child",
      "parent": "p_54",
      "child": "p_76"
    },
    {
      "type": "parent-child",
      "parent": "p_77",
      "child": "p_74"
    },
    {
      "type": "parent-child",
      "parent": "p_54",
      "child": "p_77"
    },
    {
      "type": "parent-child",
      "parent": "p_64",
      "child": "p_78"
    },
    {
      "type": "parent-child",
      "parent": "p_78",
      "child": "p_72"
    },
    {
      "type": "parent-child",
      "parent": "p_57",
      "child": "p_79"
    },
    {
      "type": "parent-child",
      "parent": "p_79",
      "child": "p_71"
    },
    {
      "type": "parent-child",
      "parent": "p_79",
      "child": "p_69"
    },
    {
      "type": "parent-child",
      "parent": "p_77",
      "child": "p_63"
    },
    {
      "type": "parent-child",
      "parent": "p_18",
      "child": "p_81"
    },
    {
      "type": "parent-child",
      "parent": "p_50",
      "child": "p_80"
    },
    {
      "type": "parent-child",
      "parent": "p_8",
      "child": "p_60"
    },
    {
      "type": "parent-child",
      "parent": "p_81",
      "child": "p_62"
    },
    {
      "type": "parent-child",
      "parent": "p_80",
      "child": "p_31"
    },
    {
      "type": "parent-child",
      "parent": "p_82",
      "child": "p_42"
    },
    {
      "type": "parent-child",
      "parent": "p_79",
      "child": "p_4"
    },
    {
      "type": "parent-child",
      "parent": "p_19",
      "child": "p_82"
    },
    {
      "type": "parent-child",
      "parent": "p_83",
      "child": "p_5"
    },
    {
      "type": "parent-child",
      "parent": "p_19",
      "child": "p_83"
    },
    {
      "type": "parent-child",
      "parent": "p_82",
      "child": "p_7"
    },
    {
      "type": "parent-child",
      "parent": "p_79",
      "child": "p_10"
    },
    {
      "type": "parent-child",
      "parent": "p_78",
      "child": "p_14"
    },
    {
      "type": "parent-child",
      "parent": "p_81",
      "child": "p_15"
    },
    {
      "type": "parent-child",
      "parent": "p_24",
      "child": "p_16"
    },
    {
      "type": "parent-child",
      "parent": "p_78",
      "child": "p_20"
    },
    {
      "type": "parent-child",
      "parent": "p_83",
      "child": "p_22"
    },
    {
      "type": "parent-child",
      "parent": "p_8",
      "child": "p_25"
    },
    {
      "type": "parent-child",
      "parent": "p_83",
      "child": "p_26"
    },
    {
      "type": "parent-child",
      "parent": "p_80",
      "child": "p_29"
    },
    {
      "type": "parent-child",
      "parent": "p_37",
      "child": "p_84"
    },
    {
      "type": "parent-child",
      "parent": "p_68",
      "child": "p_85"
    },
     {
      "type": "parent-child",
      "parent": "p_68",
      "child": "p_86"
    },
    {
      "type": "parent-child",
      "parent": "p_76",
      "child": "p_87"
    },
    {
      "type": "parent-child",
      "parent": "p_82",
      "child": "p_88"
    },
    {
      "type": "parent-child",
      "parent": "p_25",
      "child": "p_89"
    },
    {
      "type": "parent-child",
      "parent": "p_25",
      "child": "p_90"
    },
    {
      "type": "parent-child",
      "parent": "p_37",
      "child": "p_91"
    },
    {
      "type": "parent-child",
      "parent": "p_81",
      "child": "p_92"
    },
    {
      "type": "parent-child",
      "parent": "p_81",
      "child": "p_93"
    },
    {
      "type": "spouse",
      "person1": "p_50",
      "person2": "p_94",
      "start_date": null,
      "end_date": null,
      "notes": ""
    },
    ,
    {
      "type": "spouse",
      "person1": "p_54",
      "person2": "p_95",
      "start_date": null,
      "end_date": null,
      "notes": ""
    },
    ,
    {
      "type": "parent-child",
      "parent": "p_83",
      "child": "p_96"
    },
    



  ]
};

// Статистика:
// Людей: 76
// Связей: 70
// Parent-child связей: 61
// Spouse связей: 9
