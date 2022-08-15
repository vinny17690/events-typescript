// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let isMenuOpen = false;

let div: any = document.getElementById('event-div');
let menuDiv: any = document.getElementById('menu');

let menuOpenEvent = new CustomEvent('MENU_OPEN', {
  bubbles: true,
  detail: { is_open: true },
});

let menuCloseEvent = new CustomEvent('MENU_CLOSE', {
  bubbles: true,
  detail: { is_open: false },
});

menuDiv.addEventListener('MENU_OPEN', function (e: CustomEvent) {
  console.log('Hello');
  console.log(e.detail);
  menuDiv.style.display = 'block';
});

menuDiv.addEventListener('MENU_CLOSE', function (e: CustomEvent) {
  console.log('Menu Close');
  console.log(e.detail);
  menuDiv.style.display = 'none';
});

function sendCustomEvent(ele, event) {
  ele.dispatchEvent(event);
}

document.getElementById('menu-open').onclick = () =>
  sendCustomEvent(menuDiv, menuOpenEvent);
document.getElementById('menu-close').onclick = () =>
  sendCustomEvent(menuDiv, menuCloseEvent);
