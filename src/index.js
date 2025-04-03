import './styles/home.css';
import './styles/menu.css';
import './styles/contactUs.css';
import { home } from './scripts/home.js'
import { menu } from './scripts/menu.js';
import { contactUs } from './scripts/contactUs.js';

const content = document.querySelector('.content');
const homeBtn = document.querySelector('.home-btn');
const menuBtn = document.querySelector('.menu-btn');
const contactUsBtn = document.querySelector('.contact-us-btn');

// Default load homepage
content.appendChild(home);

menuBtn.addEventListener('click', () => {
    content.replaceChildren(menu);
})

homeBtn.addEventListener('click', () => {
    content.replaceChildren(home);
})

contactUsBtn.addEventListener('click', () => {
    content.replaceChildren(contactUs);
})