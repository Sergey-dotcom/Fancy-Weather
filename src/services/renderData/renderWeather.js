import { weatherIcons, translations} from '~/contracts';
import { getCurrentLocale, renderWatch } from '~/services';

const TODAY_TMP = document.querySelector('#temperature-today');
const FORECAST_TOMORROW = document.querySelector('#tomorrow');
const FORECAST_DAF = document.querySelector('#day-after-tomorrow');
const FORECAST_NEXT_DAY = document.querySelector('#next-day');
const DATE_TIME = document.querySelector('.weather-data-cluster__date-time');
const ICON_WEATHER = document.querySelector(
  '.weather-data-cluster__weather-icon'
);
const DESCRIPTION_WEATHER = document.querySelector('#descriptionWeather');
const VALUE_APPARENT = document.querySelector('#degreesValueApparent');
const VALUE_SPEED = document.querySelector('#valueSpeed');
const VALUE_HUMIDITY = document.querySelector('#valueHumidity');
const CITY = document.querySelector('.weather-data-cluster__location');

const cToF = (celsius) => {
  return celsius * 9 / 5 + 32;
};

const renderWeatherDates =  (daily) => {
  const { language } = getCurrentLocale();

  let fullDate = new Date(daily[0]);
  let fullDateT = new Date(daily[1]);
  let fullDateDAF = new Date(daily[2]);
  let fullDateN = new Date(daily[3]);

  let dateDay = fullDate.toLocaleString(language, { weekday: 'short' });
  let dateDayT = fullDateT.toLocaleString(language, { weekday: 'long' });
  let dateDayDAF = fullDateDAF.toLocaleString(language, { weekday: 'long' });
  let dateDayN = fullDateN.toLocaleString(language, { weekday: 'long' });
  let day = fullDate.toLocaleString(language, { day: 'numeric' });
  let dateMonth = fullDate.toLocaleString(language, { month: 'long' });

  DATE_TIME.childNodes[0].data = ' ';
  DATE_TIME.insertAdjacentHTML('afterbegin', `${dateDay} ${day} ${dateMonth}`);
 
  renderWatch();
  
  if (language === 'be') {
    let today = new Date();
    let monthValue = today.getMonth();
    let dayValue = today.getDay();
    DATE_TIME.childNodes[0].textContent = `${
      translations['be'].days.short[dayValue]
    } ${today.getDate()} ${translations['be'].month[monthValue]}`;
    FORECAST_TOMORROW.querySelector('.forecast__day').innerHTML =
      translations['be'].days.long[fullDateT.getDay()];
    FORECAST_DAF.querySelector('.forecast__day').innerHTML =
      translations['be'].days.long[fullDateDAF.getDay()];
    FORECAST_NEXT_DAY.querySelector('.forecast__day').innerHTML =
      translations['be'].days.long[fullDateN.getDay()];
  } else {
    FORECAST_TOMORROW.querySelector('.forecast__day').innerHTML = dateDayT;
    FORECAST_DAF.querySelector('.forecast__day').innerHTML = dateDayDAF;
    FORECAST_NEXT_DAY.querySelector('.forecast__day').innerHTML = dateDayN;
  }
}

export const renderWeather = ({ city, data, daily }) => {
  const { language, units } = getCurrentLocale();
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
  
  renderWeatherDates(daily);

  TODAY_TMP.innerHTML =
    '<img class="weather-data-cluster__temperature-icon" alt="thermometer" src="assets/img/wheather-icons/thermometer.svg">' +
    Math.round(units === 'M' ? data[0].temp : cToF(data[0].temp));
  DESCRIPTION_WEATHER.innerHTML = data[0].weather.description;
  FORECAST_TOMORROW.querySelector(
    '.forecast__temperature'
  ).innerHTML = `${Math.round(units === 'M' ? data[1].temp : cToF(data[1].temp))}°`;
  FORECAST_DAF.querySelector(
    '.forecast__temperature'
  ).innerHTML = `${Math.round(units === 'M' ? data[2].temp : cToF(data[1].temp))}°`;
  FORECAST_NEXT_DAY.querySelector(
    '.forecast__temperature'
  ).innerHTML = `${Math.round(units === 'M' ? data[3].temp : cToF(data[1].temp))}°`;

  let codeWeather = data[0].weather.code;
  let iconWeather = data[0].weather.icon;
  let description = data[0].weather.description;
  let appTemperature =
    (data[0].app_min_temp + data[0].app_max_temp) / 2;
  VALUE_APPARENT.innerHTML = `${Math.round(appTemperature)}°`;
  VALUE_SPEED.innerHTML = `${Math.round(data[0].wind_spd)} ${unitSpeed}`;
  VALUE_HUMIDITY.innerHTML = `${data[0].rh}%`;

  try {
    ICON_WEATHER.src = weatherIcons[codeWeather][iconWeather];
    ICON_WEATHER.alt = description;
  } catch {
    ICON_WEATHER.src = weatherIcons[804]['c04d'];
    ICON_WEATHER.alt = description;
  }

  try {
    FORECAST_TOMORROW.querySelector('.forecast__icon').src =
      weatherIcons[data[1].weather.code][data[1].weather.icon];
    FORECAST_TOMORROW.querySelector('.forecast__icon').alt =
      data[1].weather.description;
  } catch {
    FORECAST_TOMORROW.querySelector('.forecast__icon').src =
      weatherIcons[804]['c04d'];
    FORECAST_TOMORROW.querySelector('.forecast__icon').alt =
      data[1].weather.description;
  }

  try {
    FORECAST_DAF.querySelector('.forecast__icon').src =
      weatherIcons[data[2].weather.code][data[2].weather.icon];
    FORECAST_DAF.querySelector('.forecast__icon').alt =
      data[2].weather.description;
  } catch {
    FORECAST_DAF.querySelector('.forecast__icon').src =
      weatherIcons[804]['c04d'];
    FORECAST_DAF.querySelector('.forecast__icon').alt =
      data[2].weather.description;
  }

  try {
    FORECAST_NEXT_DAY.querySelector('.forecast__icon').src =
      weatherIcons[data[3].weather.code][data[3].weather.icon];
    FORECAST_NEXT_DAY.querySelector('.forecast__icon').alt =
      data[3].weather.description;
  } catch {
    FORECAST_NEXT_DAY.querySelector('.forecast__icon').src =
      weatherIcons[804]['c04d'];
    FORECAST_NEXT_DAY.querySelector('.forecast__icon').alt =
      data[3].weather.description;
  }
};