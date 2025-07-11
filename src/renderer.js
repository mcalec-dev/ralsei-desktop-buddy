import { idleFrames } from './const.js';
const gui = require('nw.gui');

let currentFrame = 0;
const ralsei = document.getElementById('ralsei');

setInterval(() => {
  currentFrame = (currentFrame + 1) % idleFrames.length;
  ralsei.src = idleFrames[currentFrame];
}, 300); // 300ms

addEventListener('click', () => {
  const audio = new Audio('./assets/sounds/uhh.wav');
  audio.play();
});

addEventListener('contextmenu', (event) => {  
  gui.Window.open('./menu.html', {
    x: event.clientX,
    y: event.clientY,
    width: 200,
    height: 300,
    transparent: true,
    always_on_top: true,
    title: "Ralsei Desktop Buddy",
    icon: "assets/sprite/idle/0.png"
  });
});
