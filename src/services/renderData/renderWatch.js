import { STORED_TIMEZONE } from '~/contracts/globals';

const CLOCK = document.querySelector('.weather-data-cluster__clock');

export const renderWatch = () => {  
  const timeZone = localStorage.getItem(STORED_TIMEZONE);
  const datetime = timeZone ? new Date().toLocaleString("ru-RU", { timeZone }) : new Date();
  const time = datetime.split(' ')[1];

  CLOCK.innerHTML = time;
  setTimeout(renderWatch, 1000);
}