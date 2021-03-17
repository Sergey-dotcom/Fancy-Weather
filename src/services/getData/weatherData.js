import { getApiData, getCurrentLocale } from '~/services';
import { STORED_TIMEZONE } from '~/contracts/globals';

const DAILY_DATA_LIMIT = 4;
const DEFAULT_UNITS = 'M';

const getDailyWeather = ({ lat, lon }) => new Promise((resolve, reject) => {
  const { language } = getCurrentLocale();

  getApiData(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${lat}&lon=${lon}&days=${DAILY_DATA_LIMIT}&units=${DEFAULT_UNITS}&lang=${language}&key=c86067db9e06417b9a63892e95d7a184`)
    .then(({ data }) => {
      let dailyWeather = [];

      for(let i = 0; i < DAILY_DATA_LIMIT; i++) {
        if(data[i] && data[i].datetime) {
          dailyWeather.push(data[i].datetime);
        }
      }  
      resolve({ data, daily: dailyWeather });
    }).catch((e) => reject(e));
});

const getCityName = ({ lat, lon }) => new Promise((resolve, reject) => {
  const { language } = getCurrentLocale();
  getApiData(`https://api.opencagedata.com/geocode/v1/json?q=${lat},${lon}&key=461a5319b8ab435dadb02959bf0bc967&language=${language}&pretty=1&abbrv=1`)
    .then((data) => {
      let cityName = '';
      let countryName = '';
      if(data && data.results && data.results[0] && data.results[0].components) {
        const {village, town, city, country} = data.results[0].components;
        cityName = city || town || village;
        countryName = country;
        const { timezone } = data.results[0].annotations;
        
        localStorage.setItem(STORED_TIMEZONE, timezone.name);
      }
      
      resolve(`${cityName}, ${countryName}`);
    })
    .catch((e) => reject(e));
});

export const getWeatherData = (location) => Promise.all([
  getCityName(location),
  getDailyWeather(location)
]);