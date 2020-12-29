const weatherIcons = {
  800: {
    c01d: "assets/img/wheather-icons/clear-day.svg",
    c01n: "assets/img/wheather-icons/clear-night.svg",
  },
  804: {
    c04d: "assets/img/wheather-icons/cloudy.svg",
    c04n: "assets/img/wheather-icons/cloudy.svg",
  },
  301: {
    d02d: "assets/img/wheather-icons/drizzle.svg",
    d02n: "assets/img/wheather-icons/drizzle.svg",
  },
  233: {
    t05d: "assets/img/wheather-icons/hail.svg",
    t05n: "assets/img/wheather-icons/hail.svg",
  },
  700: {
    a01d: "assets/img/wheather-icons/mist.svg",
    a01n: "assets/img/wheather-icons/mist.svg",
  },
  801: {
    c02d: "assets/img/wheather-icons/partly-cloudy-day.svg",
    c02n: "assets/img/wheather-icons/partly-cloudy-night.svg",
  },
  802: {
    c02d: "assets/img/wheather-icons/partly-cloudy-day.svg",
    c02n: "assets/img/wheather-icons/partly-cloudy-night.svg",
  },
  521: {
    r05d: "assets/img/wheather-icons/partly-cloudy-day-drizzle.svg",
    r05n: "assets/img/wheather-icons/partly-cloudy-night-drizzle.svg",
  },
  511: {
    f01d: "assets/img/wheather-icons/partly-cloudy-day-hail.svg",
    f01n: "assets/img/wheather-icons/partly-cloudy-night-hail.svg",
  },
  520: {
    r04d: "assets/img/wheather-icons/partly-cloudy-day-rain.svg",
    r04n: "assets/img/wheather-icons/partly-cloudy-night-rain.svg",
  },
  600: {
    s01d: "assets/img/wheather-icons/partly-cloudy-day-snow.svg",
    s01n: "assets/img/wheather-icons/partly-cloudy-night-snow.svg",
  },
  522: {
    r06d: "assets/img/wheather-icons/rain.svg",
    r06n: "assets/img/wheather-icons/rain.svg",
  },
  502: {
    r03d: "assets/img/wheather-icons/rain.svg",
    r03n: "assets/img/wheather-icons/rain.svg",
  },
  500: {
    r01d: "assets/img/wheather-icons/rain.svg",
    r01n: "assets/img/wheather-icons/rain.svg",
  },
  501: {
    r02d: "assets/img/wheather-icons/rain.svg",
    r02n: "assets/img/wheather-icons/rain.svg",
  },
  601: {
    s02d: "assets/img/wheather-icons/snow.svg",
    s02n: "assets/img/wheather-icons/snow.svg",
  },
  602: {
    s03d: "assets/img/wheather-icons/snow.svg",
    s03n: "assets/img/wheather-icons/snow.svg",
  },
  611: {
    s05d: "assets/img/wheather-icons/snow.svg",
    s05n: "assets/img/wheather-icons/snow.svg",
  },
  621: {
    s01d: "assets/img/wheather-icons/snow.svg",
    s01n: "assets/img/wheather-icons/snow.svg",
  },
  622: {
    s02d: "assets/img/wheather-icons/snow.svg",
    s02n: "assets/img/wheather-icons/snow.svg",
  },
  200: {
    to1d: "assets/img/wheather-icons/thunderstorms.svg",
    to1n: "assets/img/wheather-icons/thunderstorms.svg",
  },
  201: {
    t02d: "assets/img/wheather-icons/thunderstorms.svg",
    t02n: "assets/img/wheather-icons/thunderstorms.svg",
  },
  202: {
    t03d: "assets/img/wheather-icons/thunderstorms.svg",
    t03n: "assets/img/wheather-icons/thunderstorms.svg",
  },
  230: {
    t04d: "assets/img/wheather-icons/thunderstorms.svg",
    t04n: "assets/img/wheather-icons/thunderstorms.svg",
  },
  231: {
    t04d: "assets/img/wheather-icons/thunderstorms.svg",
    t04n: "assets/img/wheather-icons/thunderstorms.svg",
  },
  232: {
    t04d: "assets/img/wheather-icons/thunderstorms.svg",
    t04n: "assets/img/wheather-icons/thunderstorms.svg",
  },
};

const translations = {
  en: {
    searchInput: "Search city or ZIP",
    searchButton: "search",
    apparentTemperature: "feels like:",
    windSpeed: "wind speed::",
    airHumidity: "Humidity:",
  },

  ru: {
    searchInput: "Найти город или индекс",
    searchButton: "поиск",
    apparentTemperature: "ощущается как:",
    windSpeed: "скорость ветра:",
    airHumidity: "влажность:",
  },

  be: {
    searchInput: "Знайсці горад ці індэкс",
    searchButton: "пошук",
    apparentTemperature: "адчуваецца як:",
    windSpeed: "хуткасць ветру:",
    airHumidity: "вільготнасць:",
    days: {
      long: [
        "нядзеля",
        "панядзелак",
        "аўторак",
        "серада",
        "чацвер",
        "пятніца",
        "субота",
      ],
      short: ["няд", "пнд", "аўт", "сер", "чцв", "пят", "суб"],
    },

    month: [
      "Студзень",
      "Люты",
      "Сакавiк",
      "Красавiк",
      "Май",
      "Чэрвень",
      "Лiпень",
      "Жнiвень",
      "Верасень",
      "Кастрычнiк",
      "Лiстапад",
      "Снежань",
    ],
  },
};

const LANGUAGE_MENU = document.querySelector(
  ".control-unit__language-menu__button"
);
const LANGUAGE_MENU_BTN = document.querySelector(
  ".control-unit__language-menu__button"
);
const ARROW_BTN = document.querySelector(".button__arrow-down");
const DOWN_MENU = document.querySelector(".control-unit__down-menu");
const DOWN_MENU_ITEM = document.querySelectorAll(
  ".control-unit__down-menu__item"
);
const F_BTN = document.querySelector(".control-unit__buttons-f");
const C_BTN = document.querySelector(".control-unit__buttons-c");
const UPDATE_BTN = document.querySelector(".control-unit__button-update");
const SPINNER = document.querySelector(".control-unit__spinner");
const LATITUDE = document.querySelector("#latitude");
const LONGITUDE = document.querySelector("#longitude");
const MAP = document.querySelector(".map-iframe");
const TODAY_TMP = document.querySelector("#temperature-today");
const FORECAST_TOMORROW = document.querySelector("#tomorrow");
const FORECAST_DAF = document.querySelector("#day-after-tomorrow");
const FORECAST_NEXT_DAY = document.querySelector("#next-day");
const DATE_TIME = document.querySelector(".weather-data-cluster__date-time");
const CLOCK = document.querySelector(".weather-data-cluster__clock");
const ICON_WEATHER = document.querySelector(
  ".weather-data-cluster__weather-icon"
);
const DESCRIPTION_WEATHER = document.querySelector("#descriptionWeather");
const VALUE_APPARENT = document.querySelector("#degreesValueApparent");
const FEELS_TMP = document.querySelector("#apparentTemperature");
const WIND_SPEED = document.querySelector("#windSpeed");
const AIR_HUMIDITY = document.querySelector("#airHumidity");
const VALUE_SPEED = document.querySelector("#valueSpeed");
const VALUE_HUMIDITY = document.querySelector("#valueHumidity");
const CITY = document.querySelector(".weather-data-cluster__location");
const SEARCH_INPUT = document.querySelector(
  ".control-unit__search-input-input"
);
const SEARCH_BTN = document.querySelector(
  ".control-unit__search-input__button"
);
const ADVICE_FORM = document.querySelector(
  ".control-unit__search-input__advice"
);
const MICRO_BTN = document.querySelector(
  ".control-unit__search-input__voice-button"
);
let language =
  localStorage.getItem("lang") === null ? "en" : localStorage.getItem("lang");
let units =
  localStorage.getItem("units") === null ? "M" : localStorage.getItem("units");

if (units === "I") {
  F_BTN.classList.remove("inactive");
  C_BTN.classList.add("inactive");
} else {
  C_BTN.classList.remove("inactive");
  F_BTN.classList.add("inactive");
}

function getTranslations(language) {
  SEARCH_INPUT.placeholder = translations[language].searchInput;
  SEARCH_BTN.innerHTML = translations[language].searchButton;
  FEELS_TMP.innerHTML = translations[language].apparentTemperature;
  WIND_SPEED.innerHTML = translations[language].windSpeed;
  AIR_HUMIDITY.innerHTML = translations[language].airHumidity;
}

if (language === "en") {
  DOWN_MENU_ITEM.forEach((el) => el.classList.add("inactive"));
  DOWN_MENU_ITEM[0].classList.remove("inactive");
  document.querySelector("#current-language").innerHTML = "en";
  getTranslations("en");
} else if (language === "ru") {
  DOWN_MENU_ITEM.forEach((el) => el.classList.add("inactive"));
  DOWN_MENU_ITEM[1].classList.remove("inactive");
  document.querySelector("#current-language").innerHTML = "ru";
  getTranslations("ru");
} else {
  DOWN_MENU_ITEM.forEach((el) => el.classList.add("inactive"));
  DOWN_MENU_ITEM[2].classList.remove("inactive");
  document.querySelector("#current-language").innerHTML = "be";
  getTranslations("be");
}

LANGUAGE_MENU.addEventListener("click", () => {
  LANGUAGE_MENU_BTN.classList.toggle(
    "control-unit__language-menu__button-open"
  );
  ARROW_BTN.classList.toggle("button__arrow-down-open");
  DOWN_MENU.classList.toggle("control-unit__down-menu-open");
});

SEARCH_BTN.addEventListener("click", () => {
  getDateCity();
  getLinkToImage();
  getMap();
});

SEARCH_INPUT.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();

    getDateCity();
    getLinkToImage();
    getMap();
  }
});
