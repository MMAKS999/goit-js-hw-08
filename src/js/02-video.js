// eslint-disable-next-line import/no-extraneous-dependencies
import Player from '@vimeo/player';
// eslint-disable-next-line import/no-extraneous-dependencies
import {throttle} from 'lodash';


const iframe = document.querySelector('#vimeo-player');
const player = new Player('vimeo-player');

console.log(player);
console.log(throttle);

let playedTime = 0;

// Оголошуємо функцію, яку потрібно обмежити за допомогою throttle
// player.on('timeupdate', (data) => {
//   playedTime = data.seconds;
// });
player.on('timeupdate', throttle((data) => {
  playedTime = data.seconds;
  console.log(playedTime);
}, 1000));

player.getPaused().then((paused) => {
  console.log(paused ? 'Video is paused' : 'Video is playing');
});

// Збереження в локальне сховища localStorage.setItem('name', 'John') , 
// beforeunload - перед закритям сторінки

window.addEventListener('beforeunload', () => {
  localStorage.setItem('videoplayer-current-time', playedTime);
});
// Діставання з локального сховища localStorage.getItem('name')
const currentTime = localStorage.getItem('videoplayer-current-time');

// Використання значення, якщо воно існує непотрібно
// if (currentTime !== null) {
//   console.log(currentTime);
// } else {
//   console.log('Значення не знайдено у localStorage');
// }

// Встановлення поточної позиції відтворення

player.setCurrentTime(currentTime).then((seconds) => {
  // seconds = the actual time that the player seeked to
}).catch((error) => {
  switch (error.name) {
    case 'RangeError':
      // the time was less than 0 or greater than the video’s duration
      break;

    default:
      // some other error occurred
      break;
  }
});
