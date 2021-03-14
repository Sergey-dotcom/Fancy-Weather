import { resolve } from 'uri-js';
import { getApiData } from '~/services';

export const getUserGeolocation = () => getApiData('https://ipinfo.io/json?token=b150ba1fba3f8c')
  .then((data) => { 
    const [lat, lon] = data.loc.split(',');
    return { lat, lon };
  });

export const getCityGeolocation = (city) => {
  return new Promise((resolve, reject) => {
    getApiData(`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=461a5319b8ab435dadb02959bf0bc967&pretty=1&no_annotations=1`)
      .then((data) => {
        if(data.results && data.results.length) {
          const { geometry } = data.results[0];
          const { lat, lng } = geometry;

          resolve({ lat, lon: lng });
        } else {
          reject('no result');
        }
      }).catch((e) => reject(e));
  })
  
}