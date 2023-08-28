// header functionallity
window.addEventListener('scroll', function () {
  let navDesktop = document.getElementById('nav-desktop');
  let logo = document.getElementById('logo-container');

  logo.classList.toggle('hidden', window.scrollY > 0);
  navDesktop.classList.toggle('nav_slider', window.scrollY > 0);
});

// control title appearance on scroll
const titleObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('hidden');
    } else {
      entry.target.classList.add('hidden');
    }
  });
});

const titles = document.querySelectorAll('.title');
titles.forEach((title) => titleObserver.observe(title));

// controll daily fit appearance on scroll
const slideRightObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('hidden');
      entry.target.classList.remove('translate_left');
    } else {
      entry.target.classList.add('hidden');
      entry.target.classList.add('translate_left');
    }
  });
});

const work = document.querySelectorAll('.daily_fit_challenge');
work.forEach((item) => slideRightObserver.observe(item));

// control meal appearance on scroll
const slideLeftObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('hidden');
      entry.target.classList.remove('translate_right');
    } else {
      entry.target.classList.add('hidden');
      entry.target.classList.add('translate_right');
    }
  });
});

const meal = document.querySelectorAll('.meal');
meal.forEach((item) => slideLeftObserver.observe(item));

const type = document.querySelectorAll('.type');
type.forEach((item) => slideLeftObserver.observe(item));

// instructors and photos panel
const header = document.getElementById('header');
const gym = document.getElementById('gym');

const instructors = document.querySelector('.instructors_container');
const photos = document.querySelector('.photos_container');

const seeIntructors = document.getElementById('see-instructors');
const seePhotos = document.getElementById('see-photos');

const backInstructors = document.getElementById('back-instructors');
const backPhotos = document.getElementById('back-photos');

// show and remove the instructor container
seeIntructors.addEventListener('click', () => {
  header.classList.toggle('inactive');
  instructors.classList.remove('translate_left');
});

backInstructors.addEventListener('click', () => {
  instructors.classList.add('translate_left');
  header.classList.toggle('inactive');
});

// show and remove the photos container
seePhotos.addEventListener('click', () => {
  header.classList.toggle('inactive');
  photos.classList.remove('translate_right');
});

backPhotos.addEventListener('click', () => {
  photos.classList.add('translate_right');
  header.classList.toggle('inactive');
});

// navigation menu
const hamburger = document.getElementById('nav_menu');
const nav = document.getElementById('nav');

const navItem = document.querySelectorAll('.nav_item');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('translate_left_nav');
  nav.classList.remove('translate_right');
});

navItem.forEach((item) =>
  item.addEventListener('click', () => {
    nav.classList.toggle('translate_left_nav');
    nav.classList.toggle('translate_right');
  }),
);
