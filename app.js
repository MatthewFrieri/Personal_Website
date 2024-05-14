function setActive(id) {

    const siteHeader = document.getElementById('site-header');
    const navItems = siteHeader.getElementsByTagName('a');

    for (let i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove('active');
    }

    const toBeActive = document.getElementById(id);
    toBeActive.classList.add('active');
}

// Parallax Scrolling

const myName = document.getElementById('name');
const trees_1 = document.getElementById('parallax_1');
const hill_2 = document.getElementById('parallax_2');
const fog_3 = document.getElementById('parallax_3');
const mtn_4 = document.getElementById('parallax_4');
const fog_5 = document.getElementById('parallax_5');
const mtn_6 = document.getElementById('parallax_6');
const cloud_7 = document.getElementById('parallax_7');
const mtn_8 = document.getElementById('parallax_8');
const sky_9 = document.getElementById('parallax_9');

window.addEventListener('scroll', () => {
   const scrollY = window.scrollY;

   myName.style.marginTop  = scrollY * 0.8 + 'px';
   sky_9.style.marginTop   = scrollY * 0.5 + 'px';
   mtn_8.style.marginTop   = scrollY * 0.5 + 'px';
   cloud_7.style.marginTop = scrollY * 0.4 + 'px';
   mtn_6.style.marginTop   = scrollY * 0.4 + 'px';
   fog_5.style.marginTop   = scrollY * 1.2 + 'px';
   mtn_4.style.marginTop   = scrollY * 0.3 + 'px';
   fog_3.style.marginTop   = scrollY * 0.4 + 'px';
   hill_2.style.marginTop  = scrollY * 0.1 + 'px';
   trees_1.style.marginTop = scrollY * 0   + 'px';

});