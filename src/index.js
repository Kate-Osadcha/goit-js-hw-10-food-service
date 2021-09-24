import menuElement from'./menu.json';
import menuTemplate from './templates/menu-item.hbs'

import './styles.css';

// console.log(menuTemplate(menuElement[0]));

const menu = document.querySelector(".js-menu");
const cardsMenuMarcup = menuCreateMarcup(menuElement);

function menuCreateMarcup(arr) {
    return arr.map(menuTemplate).join("");
}

menu.insertAdjacentHTML("beforeend", cardsMenuMarcup);

