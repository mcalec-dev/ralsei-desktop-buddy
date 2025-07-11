const gui = require('nw.gui');
const win = gui.Window.get();
function resizeWindow() {
  const contentHeight = document.body.scrollHeight;
  win.resizeTo(win.width, contentHeight);
}
document.addEventListener('DOMContentLoaded', () => {
  resizeWindow();
  win.show();
});
const walkingOption = document.getElementById('walking-option');
walkingOption.addEventListener('click', () => {
  const walkingStatus = document.getElementById('walking-status');
  walkingStatus.textContent = walkingStatus.textContent === 'yes' ? 'no' : 'yes';
});

const staticOption = document.getElementById('static-option');
staticOption.addEventListener('click', () => {
  const staticStatus = document.getElementById('static-status');
  staticStatus.textContent = staticStatus.textContent === 'yes' ? 'no' : 'yes';
});

const randomOption = document.getElementById('random-option');
randomOption.addEventListener('click', () => {
  const randomStatus = document.getElementById('random-status');
  randomStatus.textContent = randomStatus.textContent === 'yes' ? 'no' : 'yes';
});
