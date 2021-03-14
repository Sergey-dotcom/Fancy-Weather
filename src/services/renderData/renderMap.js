import { getCurrentLocale, getTrans } from '~/services';

const LATITUDE = document.querySelector('#latitude');
const LONGITUDE = document.querySelector('#longitude');
const MAP = document.querySelector('.map-iframe');

export const renderMap = ({lat, lon}) => {
  const { language } = getCurrentLocale();

  LATITUDE.innerHTML = `${getTrans('latLabel')}: ${lat}`;
  LONGITUDE.innerHTML = `${getTrans('lonLabel')}: ${lon}`;
  

  MAP.setAttribute(
    'src',
    `https://www.google.com/maps/embed/v1/view?center=${lat},${lon}&zoom=10&key=AIzaSyBWWZnqHV3asW7DM3yCQ0dxSHjj_J9LkwE&language=${language}`
  );
}