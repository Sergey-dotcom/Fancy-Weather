const weatherIcons = {
    800: {
        c01d: 'assets/img/wheather-icons/clear-day.svg',
        c01n: 'assets/img/wheather-icons/clear-night.svg'
    },
    804: {
        c04d: 'assets/img/wheather-icons/cloudy.svg',
        c04n: 'assets/img/wheather-icons/cloudy.svg'
    },
    301: {
        d02d: 'assets/img/wheather-icons/drizzle.svg',
        d02n: 'assets/img/wheather-icons/drizzle.svg'
    },
    233: {
        t05d: 'assets/img/wheather-icons/hail.svg',
        t05n: 'assets/img/wheather-icons/hail.svg'
    },
    700: {
        a01d: 'assets/img/wheather-icons/mist.svg',
        a01n: 'assets/img/wheather-icons/mist.svg'
    },
    801: {
        c02d: 'assets/img/wheather-icons/partly-cloudy-day.svg',
        c02n: 'assets/img/wheather-icons/partly-cloudy-night.svg'
    },
    802: {
        c02d: 'assets/img/wheather-icons/partly-cloudy-day.svg',
        c02n: 'assets/img/wheather-icons/partly-cloudy-night.svg'
    },
    521: {
        r05d: 'assets/img/wheather-icons/partly-cloudy-day-drizzle.svg',
        r05n: 'assets/img/wheather-icons/partly-cloudy-night-drizzle.svg'
    },
    511: {
        f01d: 'assets/img/wheather-icons/partly-cloudy-day-hail.svg',
        f01n: 'assets/img/wheather-icons/partly-cloudy-night-hail.svg'
    },
    520: {
        r04d: 'assets/img/wheather-icons/partly-cloudy-day-rain.svg',
        r04n: 'assets/img/wheather-icons/partly-cloudy-night-rain.svg'
    },
    600: {
        s01d: 'assets/img/wheather-icons/partly-cloudy-day-snow.svg',
        s01n: 'assets/img/wheather-icons/partly-cloudy-night-snow.svg'
    },
    522: {
        r06d: 'assets/img/wheather-icons/rain.svg',
        r06n: 'assets/img/wheather-icons/rain.svg'
    },
    502: {
        r03d: 'assets/img/wheather-icons/rain.svg',
        r03n: 'assets/img/wheather-icons/rain.svg'
    },
    500: {
        r01d: 'assets/img/wheather-icons/rain.svg',
        r01n: 'assets/img/wheather-icons/rain.svg'
    },
    501: {
        r02d: 'assets/img/wheather-icons/rain.svg',
        r02n: 'assets/img/wheather-icons/rain.svg'
    },
    601: {
        s02d: 'assets/img/wheather-icons/snow.svg',
        s02n: 'assets/img/wheather-icons/snow.svg'
    },
    602: {
        s03d: 'assets/img/wheather-icons/snow.svg',
        s03n: 'assets/img/wheather-icons/snow.svg'
    },
    611: {
        s05d: 'assets/img/wheather-icons/snow.svg',
        s05n: 'assets/img/wheather-icons/snow.svg'
    },
    621: {
        s01d: 'assets/img/wheather-icons/snow.svg',
        s01n: 'assets/img/wheather-icons/snow.svg'
    },
    622: {
        s02d: 'assets/img/wheather-icons/snow.svg',
        s02n: 'assets/img/wheather-icons/snow.svg'
    },
    200: {
        to1d: 'assets/img/wheather-icons/thunderstorms.svg',
        to1n: 'assets/img/wheather-icons/thunderstorms.svg'
    },
    201: {
        t02d: 'assets/img/wheather-icons/thunderstorms.svg',
        t02n: 'assets/img/wheather-icons/thunderstorms.svg'
    },
    202: {
        t03d: 'assets/img/wheather-icons/thunderstorms.svg',
        t03n: 'assets/img/wheather-icons/thunderstorms.svg'
    },
    230: {
        t04d: 'assets/img/wheather-icons/thunderstorms.svg',
        t04n: 'assets/img/wheather-icons/thunderstorms.svg'
    },
    231: {
        t04d: 'assets/img/wheather-icons/thunderstorms.svg',
        t04n: 'assets/img/wheather-icons/thunderstorms.svg'
    },
    232: {
        t04d: 'assets/img/wheather-icons/thunderstorms.svg',
        t04n: 'assets/img/wheather-icons/thunderstorms.svg'
    }
};

const translations = {
    "en": 
    {
        "searchInput": "Search city or ZIP",
        "searchButton": "search",
        "apparentTemperature": "feels like:",
        "windSpeed": "wind speed::",
        "airHumidity": "Humidity:"
    },

"ru":
    {
        "searchInput": "Найти город или индекс",
        "searchButton": "поиск",
        "apparentTemperature": "ощущается как:",
        "windSpeed": "скорость ветра:",
        "airHumidity": "влажность:"
    },
    
"be": 
    {
        "searchInput": "Знайсці горад ці індэкс",
        "searchButton": "пошук",
        "apparentTemperature": "адчуваецца як:",
        "windSpeed": "хуткасць ветру:",
        "airHumidity": "вільготнасць:",
        "days": 
            {
                "long":
                    [
                        'нядзеля', 
                        'панядзелак', 
                        'аўторак', 
                        'серада', 
                        'чацвер', 
                        'пятніца', 
                        'субота'
                    ],
                "short":
                    [
                        'няд', 
                        'пнд', 
                        'аўт', 
                        'сер', 
                        'чцв', 
                        'пят', 
                        'суб'
                    ]
            },
            
        "month": 
            [
                'Студзень', 
                'Люты', 
                'Сакавiк', 
                'Красавiк', 
                'Май', 
                'Чэрвень', 
                'Лiпень', 
                'Жнiвень', 
                'Верасень', 
                'Кастрычнiк', 
                'Лiстапад', 
                'Снежань'
            ]
    }
}

const LANGUAGE_MENU = document.querySelector('.control-unit__language-menu__button');
const LANGUAGE_MENU_BTN = document.querySelector('.control-unit__language-menu__button');
const ARROW_BTN = document.querySelector('.button__arrow-down');
const DOWN_MENU = document.querySelector('.control-unit__down-menu');
const DOWN_MENU_ITEM = document.querySelectorAll('.control-unit__down-menu__item');
const F_BTN = document.querySelector('.control-unit__buttons-f');
const C_BTN = document.querySelector('.control-unit__buttons-c');
const UPDATE_BTN = document.querySelector('.control-unit__button-update');
const SPINNER = document.querySelector('.control-unit__spinner');
const LATITUDE = document.querySelector('#latitude');
const LONGITUDE = document.querySelector('#longitude');
const MAP = document.querySelector('.map-iframe');
const TODAY_TMP = document.querySelector('#temperature-today');
const FORECAST_TOMORROW = document.querySelector('#tomorrow');
const FORECAST_DAF = document.querySelector('#day-after-tomorrow');
const FORECAST_NEXT_DAY = document.querySelector('#next-day');
const DATE_TIME = document.querySelector('.weather-data-cluster__date-time');
const CLOCK = document.querySelector('.weather-data-cluster__clock');
const ICON_WEATHER = document.querySelector('.weather-data-cluster__weather-icon');
const DESCRIPTION_WEATHER = document.querySelector('#descriptionWeather');
const VALUE_APPARENT = document.querySelector('#degreesValueApparent');
const FEELS_TMP = document.querySelector('#apparentTemperature');
const WIND_SPEED = document.querySelector('#windSpeed');
const AIR_HUMIDITY = document.querySelector('#airHumidity');
const VALUE_SPEED = document.querySelector('#valueSpeed');
const VALUE_HUMIDITY = document.querySelector('#valueHumidity');
const CITY = document.querySelector('.weather-data-cluster__location');
const SEARCH_INPUT = document.querySelector('.control-unit__search-input-input');
const SEARCH_BTN = document.querySelector('.control-unit__search-input__button');
const ADVICE_FORM = document.querySelector('.control-unit__search-input__advice');
const MICRO_BTN = document.querySelector('.control-unit__search-input__voice-button');
let units = localStorage.getItem('units') === null ? 'M' : localStorage.getItem('units');
let language = localStorage.getItem('lang') === null ? 'en' : localStorage.getItem('lang');

if (units === 'I') {
    F_BTN.classList.remove('inactive');
    C_BTN.classList.add('inactive');
} else {
    C_BTN.classList.remove('inactive');
    F_BTN.classList.add('inactive');
}

function getTranslations(language) {
    SEARCH_INPUT.placeholder = translations[language].searchInput;
    SEARCH_BTN.innerHTML = translations[language].searchButton;
    FEELS_TMP.innerHTML = translations[language].apparentTemperature;
    WIND_SPEED.innerHTML = translations[language].windSpeed;
    AIR_HUMIDITY.innerHTML = translations[language].airHumidity;
}

if(language === 'en') {
    DOWN_MENU_ITEM.forEach(el => el.classList.add('inactive'));
    DOWN_MENU_ITEM[0].classList.remove('inactive');
    document.querySelector('#current-language').innerHTML = 'en';
    getTranslations("en");
} else if(language === 'ru') {
    DOWN_MENU_ITEM.forEach(el => el.classList.add('inactive'));
    DOWN_MENU_ITEM[1].classList.remove('inactive');
    document.querySelector('#current-language').innerHTML = 'ru';
    getTranslations("ru");
} else {
    DOWN_MENU_ITEM.forEach(el => el.classList.add('inactive'));
    DOWN_MENU_ITEM[2].classList.remove('inactive');
    document.querySelector('#current-language').innerHTML = 'be';
    getTranslations("be");
}

SEARCH_BTN.addEventListener('click', () => {
    getDateCity();
    getLinkToImage();
    getMap();
});

SEARCH_INPUT.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();

        getDateCity();
        getLinkToImage();
        getMap();
    }
});

LANGUAGE_MENU.addEventListener('click', () => {
    LANGUAGE_MENU_BTN.classList.toggle('control-unit__language-menu__button-open');
    ARROW_BTN.classList.toggle('button__arrow-down-open');
    DOWN_MENU.classList.toggle('control-unit__down-menu-open');
});

DOWN_MENU.addEventListener('click', (event) => {
    let loc = JSON.parse(localStorage.getItem("PlaceLocation"));
    let units = localStorage.getItem('units') === null ? 'M' : localStorage.getItem('units');
    DOWN_MENU_ITEM.forEach(el => el.classList.add('inactive'));
    event.target.classList.remove('inactive');
    localStorage.setItem('lang', event.target.innerHTML);
    document.querySelector('#current-language').innerHTML = event.target.innerHTML;
    SEARCH_INPUT.placeholder = translations[event.target.textContent].searchInput;
    SEARCH_BTN.innerHTML = translations[event.target.textContent].searchButton;
    FEELS_TMP.innerHTML = translations[event.target.textContent].apparentTemperature;
    WIND_SPEED.innerHTML = translations[event.target.textContent].windSpeed;
    AIR_HUMIDITY.innerHTML = translations[event.target.textContent].airHumidity;
    
    getMap();
    getWeatherData(units, loc);
});

F_BTN.addEventListener('click', () => {
    if (F_BTN.classList.contains('inactive')) {
        F_BTN.classList.remove('inactive');
        C_BTN.classList.add('inactive');
        localStorage.setItem('units', 'I');
        let loc = JSON.parse(localStorage.getItem("PlaceLocation"));
        getWeatherData('I', loc);
    }
});

C_BTN.addEventListener('click', () => {
    if (C_BTN.classList.contains('inactive')) {
        C_BTN.classList.remove('inactive');
        F_BTN.classList.add('inactive');
        localStorage.setItem('units', 'M');
        let loc = JSON.parse(localStorage.getItem("PlaceLocation"));
        getWeatherData('M', loc);
    }
});

UPDATE_BTN.addEventListener('click', () => {
    SPINNER.style.animation = 'none';
    getLinkToImage();
    SPINNER.offsetHeight;
    SPINNER.style.animation = null;
});

async function getLinkToImage() {
    const url = 'https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=y-OZPdmYyHaAXKLEaoMl0TluPwVG_eSQSNLjgMwJnRc';
    const res = await fetch(url);
    const data = await res.json();
    document.querySelector('body').style = `background: linear-gradient(180deg, rgba(8,15,26,.59), rgba(17,17,46,.46)) 50% fixed, url(${data.urls.regular}) no-repeat 50% fixed; background-size: cover`;
};

async function getUserGeolocation() {
    const url = 'https://ipinfo.io/json?token=b150ba1fba3f8c';
    const res = await fetch(url);
    const data = await res.json();
    let coordinates = data.loc.split(',');
    return coordinates;
};

async function getMap() {
    let cityName = getValueInput();
    let language = localStorage.getItem('lang') === null ? 'en' : localStorage.getItem('lang');
    if (cityName === '') {
        let coordinates = await getUserGeolocation();
        var loc = coordinates.join(',');
        var latitude = ConvertDDToDMS(coordinates[0]);
        var longitude = ConvertDDToDMS(coordinates[1]);
    } else {
        let coordinates = await getCoordinatesPlace(cityName);
        if (coordinates !== 'no result') {
            var loc = `${coordinates.lat},${coordinates.lng}`;
            var latitude = ConvertDDToDMS(coordinates.lat);
            var longitude = ConvertDDToDMS(coordinates.lng);
        } else {
            return 'no result';
        }
    }
    if (language === 'en') {
        LATITUDE.innerHTML = `Latitude: ${latitude}`;
        LONGITUDE.innerHTML = `Longitude: ${longitude}`;
    } else if (language === 'ru') {
        LATITUDE.innerHTML = `Широта: ${latitude}`;
        LONGITUDE.innerHTML = `Долгота: ${longitude}`;
    } else {
        LATITUDE.innerHTML = `Шырата: ${latitude}`;
        LONGITUDE.innerHTML = `Даўгата: ${longitude}`;
    }

    MAP.setAttribute('src', `https://www.google.com/maps/embed/v1/view?center=${loc}&zoom=10&key=AIzaSyBWWZnqHV3asW7DM3yCQ0dxSHjj_J9LkwE&language=${language}`);
}
getMap();

async function getCoordinatesPlace(city) {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=461a5319b8ab435dadb02959bf0bc967&pretty=1&no_annotations=1`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.results.length === 0) {
        return 'no result'
    } else {
        return data.results[0].geometry;
    }
}

async function getCityName(loc, language) {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${loc}&key=461a5319b8ab435dadb02959bf0bc967&language=${language}&pretty=1&no_annotations=1&abbrv=1`;
    const res = await fetch(url);
    const data = await res.json();
    let cityName;
    if (data.results[0].components.village !== undefined) {
        cityName = data.results[0].components.village;
    } else if (data.results[0].components.town !== undefined) {
        cityName = data.results[0].components.town;
    } else {
        cityName = data.results[0].components.city;
    }
    return (`${cityName}, ${data.results[0].components.country}`);
}

async function getWeatherData(units, loc) {
    let language = localStorage.getItem('lang') === null ? 'en' : localStorage.getItem('lang');

    if (!loc) {
        var lat = lon = await getUserGeolocation();
        let loc = {
            lat: lat[0],
            lng: lat[1]
        }
        localStorage.setItem("PlaceLocation", JSON.stringify(loc));
    } else {
        var lat = lon = [loc.lat, loc.lng];
    }

    let city = await getCityName((lat.join(',')), language);
    CITY.innerHTML = `${city}`;
    var unitSpeed;
    if (units === 'M') {
        unitSpeed = language === 'en' ? 'm/s' : 'м/с';
    } else {
        if (language === 'en') {
            unitSpeed = 'mph';
        } else if (language === 'ru') {
            unitSpeed = 'миль в час';
        } else {
            unitSpeed = 'міль у гадзіну';
        }
    }
    const url = `https://api.weatherbit.io/v2.0/forecast/daily?&lat=${lat[0]}&lon=${lon[1]}&days=4&units=${units}&lang=${language}&key=c86067db9e06417b9a63892e95d7a184`;
    const res = await fetch(url);
    const data = await res.json();

    let dateTime = [
        data.data[0].datetime,
        data.data[1].datetime,
        data.data[2].datetime,
        data.data[3].datetime
    ];
    localStorage.setItem('dateTime', dateTime);

    getDate();

    TODAY_TMP.innerHTML = '<img class="weather-data-cluster__temperature-icon" alt="thermometer" src="assets/img/wheather-icons/thermometer.svg">' + Math.round(data.data[0].temp);
    DESCRIPTION_WEATHER.innerHTML = data.data[0].weather.description;
    FORECAST_TOMORROW.querySelector('.forecast__temperature').innerHTML = `${Math.round(data.data[1].temp)}°`;
    FORECAST_DAF.querySelector('.forecast__temperature').innerHTML = `${Math.round(data.data[2].temp)}°`;
    FORECAST_NEXT_DAY.querySelector('.forecast__temperature').innerHTML = `${Math.round(data.data[3].temp)}°`;
    let codeWeather = data.data[0].weather.code;
    let iconWeather = data.data[0].weather.icon;
    let description = data.data[0].weather.description;
    let appTemperature = (data.data[0].app_min_temp + data.data[0].app_max_temp) / 2;
    VALUE_APPARENT.innerHTML = `${Math.round(appTemperature)}°`;
    VALUE_SPEED.innerHTML = `${Math.round(data.data[0].wind_spd)} ${unitSpeed}`;
    VALUE_HUMIDITY.innerHTML = `${data.data[0].rh}%`;

    try {
        ICON_WEATHER.src = weatherIcons[codeWeather][iconWeather];
        ICON_WEATHER.alt = description;
    } catch {
        ICON_WEATHER.src = weatherIcons[804]["c04d"];
        ICON_WEATHER.alt = description;
    }

    try {
        FORECAST_TOMORROW.querySelector('.forecast__icon').src = weatherIcons[data.data[1].weather.code][data.data[1].weather.icon];
        FORECAST_TOMORROW.querySelector('.forecast__icon').alt = data.data[1].weather.description;
    } catch {
        FORECAST_TOMORROW.querySelector('.forecast__icon').src = weatherIcons[804]["c04d"];
        FORECAST_TOMORROW.querySelector('.forecast__icon').alt = data.data[1].weather.description;
    }

    try {
        FORECAST_DAF.querySelector('.forecast__icon').src = weatherIcons[data.data[2].weather.code][data.data[2].weather.icon];
        FORECAST_DAF.querySelector('.forecast__icon').alt = data.data[2].weather.description;
    } catch {
        FORECAST_DAF.querySelector('.forecast__icon').src = weatherIcons[804]["c04d"];
        FORECAST_DAF.querySelector('.forecast__icon').alt = data.data[2].weather.description;
    }

    try {
        FORECAST_NEXT_DAY.querySelector('.forecast__icon').src = weatherIcons[data.data[3].weather.code][data.data[3].weather.icon];
        FORECAST_NEXT_DAY.querySelector('.forecast__icon').alt = data.data[3].weather.description;
    } catch {
        FORECAST_NEXT_DAY.querySelector('.forecast__icon').src = weatherIcons[804]["c04d"];
        FORECAST_NEXT_DAY.querySelector('.forecast__icon').alt = data.data[3].weather.description;
    }
};
getWeatherData(units);

async function getDateCity() {
    let units = localStorage.getItem('units') === null ? 'M' : localStorage.getItem('units');
    let cityName = getValueInput();
    let loc = await getCoordinatesPlace(cityName);
    if (loc === 'no result') {
        SEARCH_INPUT.placeholder = 'Incorrect data';
        SEARCH_INPUT.classList.add('search-field-error');
        SEARCH_INPUT.value = '';
    } else {
        if (SEARCH_INPUT.classList.contains('search-field-error')) {
            SEARCH_INPUT.placeholder = 'Search city or ZIP';
            SEARCH_INPUT.classList.remove('search-field-error');
            SEARCH_INPUT.value = '';
        }

        localStorage.setItem("PlaceLocation", JSON.stringify(loc));
        getWeatherData(units, loc);
    }
}

async function getDate() {
    let language = localStorage.getItem('lang') === null ? 'en' : localStorage.getItem('lang');
    let dateTime = localStorage.getItem('dateTime');
    let date = dateTime.split(',');
    let fullDate = new Date(date[0]);
    let fullDateT = new Date(date[1]);
    let fullDateDAF = new Date(date[2]);
    let fullDateN = new Date(date[3]);
    let dateDay = fullDate.toLocaleString(language, { weekday: 'short' });
    let dateDayT = fullDateT.toLocaleString(language, { weekday: 'long' });
    let dateDayDAF = fullDateDAF.toLocaleString(language, { weekday: 'long' });
    let dateDayN = fullDateN.toLocaleString(language, { weekday: 'long' });
    let day = fullDate.toLocaleString(language, { day: 'numeric' });
    let dateMonth = fullDate.toLocaleString(language, { month: 'long' });
    DATE_TIME.childNodes[0].data = ' ';
    DATE_TIME.insertAdjacentHTML('afterbegin', `${dateDay} ${day} ${dateMonth}`);
    digitalWatch();
    if(language === "be") {
        let today = new Date();
        let monthValue = today.getMonth();
        let dayValue = today.getDay();
        DATE_TIME.childNodes[0].textContent = `${translations["be"].days.short[dayValue]} ${today.getDate()} ${translations["be"].month[monthValue]}`;
        FORECAST_TOMORROW.querySelector('.forecast__day').innerHTML = translations["be"].days.long[fullDateT.getDay()];
        FORECAST_DAF.querySelector('.forecast__day').innerHTML = translations["be"].days.long[fullDateDAF.getDay()];
        FORECAST_NEXT_DAY.querySelector('.forecast__day').innerHTML = translations["be"].days.long[fullDateN.getDay()];
    } else {
        FORECAST_TOMORROW.querySelector('.forecast__day').innerHTML = dateDayT;
        FORECAST_DAF.querySelector('.forecast__day').innerHTML = dateDayDAF;
        FORECAST_NEXT_DAY.querySelector('.forecast__day').innerHTML = dateDayN;
    }
}

function digitalWatch() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    CLOCK.innerHTML = (hours + ":" + minutes + ":" + seconds);
    setTimeout("digitalWatch()", 1000);
}
digitalWatch();

function ConvertDDToDMS(dd) {
    var deg = dd | 0;
    var frac = Math.abs(dd - deg);
    var min = (frac * 60) | 0;
    var sec = frac * 3600 - min * 60;
    return deg + "° " + min + "' " + Math.round(sec) + "\"";
};

function getValueInput() {
    let cityName = SEARCH_INPUT.value;
    return cityName;
};

window.SpeechRecognition = window.SpeechRecognition || window.
    webkitSpeechRecognition;

if(SpeechRecognition) {
    console.log('Your Browser supports speech Recognition');

    const recognition = new SpeechRecognition();
    recognition.interimResults = true;
    recognition.lang = 'ru-RU';

MICRO_BTN.addEventListener('click', () => {

    if(MICRO_BTN.classList.contains('off')) {
        MICRO_BTN.classList.remove('off');
        recognition.start();
    } else {
        MICRO_BTN.classList.add('off');
        recognition.stop();
    }

    recognition.addEventListener('start', e => {
        console.log('Speech Recognition Active');
    });

    recognition.addEventListener('end', e => {
        console.log('Speech Recognition Disconnected');
        MICRO_BTN.classList.add('off');
    });

    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('');
        
        SEARCH_INPUT.value =  transcript;
        setTimeout(() => {
            SEARCH_BTN.click();
        }, 750);
    });
});
} else {
    console.log('Your Browser does not support speech Recognition');
}








