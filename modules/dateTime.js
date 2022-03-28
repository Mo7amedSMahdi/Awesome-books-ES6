import { DateTime } from './luxon.js';

const dateTimeContainer = document.querySelector('.page-date');

const dateTime = () => {
  const dt = DateTime.now();
  const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  const dateTimeString = dt.toLocaleString(options);
  dateTimeContainer.innerHTML = dateTimeString;
};

export default dateTime;
