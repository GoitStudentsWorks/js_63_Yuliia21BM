import { THEME } from './config.js';

const iconMoon = document.querySelector('.icon-moon');
const iconSun = document.querySelector('.icon-sun');
const cardTitle = document.querySelectorAll('.main-section__card-title');

export function changeColorThemeMain(darkTheme) {
  const cardTitle = document.querySelectorAll('.main-section__card-title');
  const genreBtn = document.querySelectorAll('.genres-button');

  if (!darkTheme) {
    iconMoon.style.opacity = 1;
    iconSun.style.opacity = 0;
    document.body.style.backgroundColor = '#fff';
    // console.log(cardTitle);
    cardTitle.forEach(el => {
      el.style.color = '#000';
    });
    genreBtn.forEach(el => el.classList.remove('genres-button--dark-theme'));

    // genreBtn.forEach(el => {
    //   el.style.color = '#000';
    // });
    // genreBtn.forEach(el => {
    //   el.style.borderColor = '#000';
    // });
  } else {
    iconMoon.style.opacity = 0;
    iconSun.style.opacity = 1;
    document.body.style.backgroundColor = '#181F25';
    cardTitle.forEach(el => {
      el.style.color = '#fff';
    });
    genreBtn.forEach(el => el.classList.add('genres-button--dark-theme'));
    // genreBtn.forEach(el => {
    //   el.style.color = '#fff';
    // });
    // genreBtn.forEach(el => {
    //   el.style.borderColor = '#fff';
    // });
  }
}

export function changeColorThemeLib(darkTheme) {
  const cardTitle = document.querySelectorAll('.main-section__card-title');

  if (!darkTheme) {
    iconMoon.style.opacity = 1;
    iconSun.style.opacity = 0;
    document.body.style.backgroundColor = '#fff';
    // console.log(cardTitle);
    cardTitle.forEach(el => {
      el.style.color = '#000';
    });
  } else {
    iconMoon.style.opacity = 0;
    iconSun.style.opacity = 1;
    document.body.style.backgroundColor = '#000';
    cardTitle.forEach(el => {
      el.style.color = '#fff';
    });
  }
}
