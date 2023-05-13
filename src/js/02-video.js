import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
    console.log(localStorage);
  }, 1000)
);

const savedTime = localStorage.getItem('videoplayer-current-time');
const parsedTime = JSON.parse(savedTime);
console.log(parsedTime);

const { seconds } = parsedTime;
console.log(seconds);

player.setCurrentTime(seconds);
