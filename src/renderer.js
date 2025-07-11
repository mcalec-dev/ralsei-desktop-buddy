import { idleFrames } from './const.js';
const gui = require('nw.gui');
const win = gui.Window.get();

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
  event.preventDefault();
  const x = event.screenX;
  const y = event.screenY;
  gui.Window.open('menu.html', {
    x: x,
    y: y,
    width: 250,
    height: 200,
    transparent: true,
    always_on_top: true,
    focus: true,
    frame: true,
    resizable: false,
    show_in_taskbar: false,
    show: false,
    title: "Ralsei Desktop Buddy",
    icon: "assets/sprite/idle/0.png"
  });
});

document.addEventListener('DOMContentLoaded', () => {
  win.setPosition('center');
  win.show();
});
