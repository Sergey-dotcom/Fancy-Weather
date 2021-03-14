import { translations, STORED_LOCATIONS } from '~/contracts';
import {
  getWeatherData,
  getUserGeolocation,
  getCityGeolocation,
  getBackground,
  renderWeather,
  renderWatch,
  renderMap,
  renderBackground,
} from '~/services';

let loadedWeatherData = {};

const LANGUAGE_MENU = document.querySelector(
  '.control-unit__language-menu__button'
);
const LANGUAGE_MENU_BTN = document.querySelector(
  '.control-unit__language-menu__button'
);
const ARROW_BTN = document.querySelector('.button__arrow-down');
const DOWN_MENU = document.querySelector('.control-unit__down-menu');
const DOWN_MENU_ITEM = document.querySelectorAll(
  '.control-unit__down-menu__item'
);
const F_BTN = document.querySelector('.control-unit__buttons-f');
const C_BTN = document.querySelector('.control-unit__buttons-c');
const UPDATE_BTN = document.querySelector('.control-unit__button-update');
const SPINNER = document.querySelector('.control-unit__spinner');

const FEELS_TMP = document.querySelector('#apparentTemperature');
const WIND_SPEED = document.querySelector('#windSpeed');
const AIR_HUMIDITY = document.querySelector('#airHumidity');
const SEARCH_INPUT = document.querySelector(
  '.control-unit__search-input-input'
);
const SEARCH_BTN = document.querySelector(
  '.control-unit__search-input__button'
);
const MICRO_BTN = document.querySelector(
  '.control-unit__search-input__voice-button'
);
let units =
  localStorage.getItem('units') === null ? 'M' : localStorage.getItem('units');
let language =
  localStorage.getItem('lang') === null ? 'en' : localStorage.getItem('lang');

if (units === 'I') {
  F_BTN.classList.remove('inactive');
  C_BTN.classList.add('inactive');
} else {
  C_BTN.classList.remove('inactive');
  F_BTN.classList.add('inactive');
}


function getTranslations(language) {
  language = language.trim();
  SEARCH_INPUT.placeholder = translations[language].searchInput;
  SEARCH_BTN.innerHTML = translations[language].searchButton;
  FEELS_TMP.innerHTML = translations[language].apparentTemperature;
  WIND_SPEED.innerHTML = translations[language].windSpeed;
  AIR_HUMIDITY.innerHTML = translations[language].airHumidity;
}

if (language === 'en') {
  DOWN_MENU_ITEM.forEach((el) => el.classList.add('inactive'));
  DOWN_MENU_ITEM[0].classList.remove('inactive');
  document.querySelector('#current-language').innerHTML = 'en';
  getTranslations('en');
} else if (language === 'ru') {
  DOWN_MENU_ITEM.forEach((el) => el.classList.add('inactive'));
  DOWN_MENU_ITEM[1].classList.remove('inactive');
  document.querySelector('#current-language').innerHTML = 'ru';
  getTranslations('ru');
} else {
  DOWN_MENU_ITEM.forEach((el) => el.classList.add('inactive'));
  DOWN_MENU_ITEM[2].classList.remove('inactive');
  document.querySelector('#current-language').innerHTML = 'be';
  getTranslations('be');
}

//// listeners

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
  LANGUAGE_MENU_BTN.classList.toggle(
    'control-unit__language-menu__button-open'
  );
  ARROW_BTN.classList.toggle('button__arrow-down-open');
  DOWN_MENU.classList.toggle('control-unit__down-menu-open');
});

DOWN_MENU.addEventListener('click', (event) => {
  DOWN_MENU_ITEM.forEach((el) => el.classList.add('inactive'));
  event.target.classList.remove('inactive');
  const newLocation = event.target.getAttribute('id');
  localStorage.setItem('lang', newLocation);
  document.querySelector('#current-language').innerHTML = newLocation;
  SEARCH_INPUT.placeholder = translations[newLocation].searchInput;
  SEARCH_BTN.innerHTML = translations[newLocation].searchButton;
  FEELS_TMP.innerHTML = translations[newLocation].apparentTemperature;
  WIND_SPEED.innerHTML = translations[newLocation].windSpeed;
  AIR_HUMIDITY.innerHTML = translations[newLocation].airHumidity;
  loadedWeatherData = {};
  getMap();
  getWeather();
  LANGUAGE_MENU_BTN.classList.remove(
    'control-unit__language-menu__button-open'
  );
  ARROW_BTN.classList.remove('button__arrow-down-open');
  DOWN_MENU.classList.remove('control-unit__down-menu-open');
});

F_BTN.addEventListener('click', () => {
  if (F_BTN.classList.contains('inactive')) {
    F_BTN.classList.remove('inactive');
    C_BTN.classList.add('inactive');
    localStorage.setItem('units', 'I');
    getWeather();
  }
});

C_BTN.addEventListener('click', () => {
  if (C_BTN.classList.contains('inactive')) {
    C_BTN.classList.remove('inactive');
    F_BTN.classList.add('inactive');
    localStorage.setItem('units', 'M');
    getWeather();
  }
});

UPDATE_BTN.addEventListener('click', () => {
  SPINNER.style.animation = 'none';
  getLinkToImage();
  SPINNER.offsetHeight;
  SPINNER.style.animation = null;
});

////// listeners

function getValueInput() {
  let cityName = SEARCH_INPUT.value;
  return cityName;
}

async function getWeather (location) {
  if (!location) {
    if(!!localStorage.getItem(STORED_LOCATIONS)) {
      location = JSON.parse(localStorage.getItem(STORED_LOCATIONS))
    } else {
      location = await getUserGeolocation();
      localStorage.setItem(STORED_LOCATIONS, JSON.stringify(location));
    }
  }

  if(loadedWeatherData.hasOwnProperty('city')) {
    renderWeather(loadedWeatherData);
  } else {
    getWeatherData(location)
      .then(([city, { data, daily }]) => {
        loadedWeatherData = { city, data, daily };
        renderWeather({ city, data, daily });
      })
      .catch((e) => {
        console.log(e);
      });
  }
};

function getLinkToImage() {
  getBackground().then((data) => renderBackground(data));
}

async function getMap() {
  let cityName = getValueInput();
  try {
    let coordinates =
      cityName === ''
        ? await getUserGeolocation()
        : await getCityGeolocation(cityName);
    coordinates && renderMap(coordinates);
  } catch (e) {
    console.log('Map', e);
  }
}

async function getDateCity() {
  let cityName = getValueInput();
  loadedWeatherData = {};
  getCityGeolocation(cityName)
    .then((data) => {
      if (SEARCH_INPUT.classList.contains('search-field-error')) {
        SEARCH_INPUT.placeholder = 'Search city or ZIP';
        SEARCH_INPUT.classList.remove('search-field-error');
        SEARCH_INPUT.value = '';
      }
      localStorage.setItem(STORED_LOCATIONS, JSON.stringify(data));
      getWeather(data);
    })
    .catch(() => {
      SEARCH_INPUT.placeholder = 'Incorrect data';
      SEARCH_INPUT.classList.add('search-field-error');
      SEARCH_INPUT.value = '';
    });
}

///// first init

getMap();
getWeather();
renderWatch();

///// first init

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  console.log('Your Browser supports speech Recognition');

  const recognition = new SpeechRecognition();
  recognition.interimResults = true;
  recognition.lang = 'ru-RU';

  MICRO_BTN.addEventListener('click', () => {
    if (MICRO_BTN.classList.contains('off')) {
      MICRO_BTN.classList.remove('off');
      recognition.start();
    } else {
      MICRO_BTN.classList.add('off');
      recognition.stop();
    }

    recognition.addEventListener('start', (e) => {
      console.log('Speech Recognition Active');
    });

    recognition.addEventListener('end', (e) => {
      console.log('Speech Recognition Disconnected');
      MICRO_BTN.classList.add('off');
    });

    recognition.addEventListener('result', (e) => {
      const transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');

      SEARCH_INPUT.value = transcript;
      setTimeout(() => {
        SEARCH_BTN.click();
      }, 750);
    });
  });
} else {
  console.log('Your Browser does not support speech Recognition');
}
