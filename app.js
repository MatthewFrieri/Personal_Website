function setActive(id) {

    for (let i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove('active');
    }

    const toBeActive = document.getElementById(id);
    toBeActive.classList.add('active');
}

// Element references
const aboutSection = document.getElementById('section-about');

const siteHeader = document.getElementById('site-header');
const navItems = siteHeader.getElementsByTagName('a');

const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');

const slogan1 = document.getElementById('one');
const slogan2 = document.getElementById('two');
const slogan3 = document.getElementById('three');

const downArrow = document.getElementById('down-arrow');

const trees_1 = document.getElementById('parallax-1');
const hill_2 = document.getElementById('parallax-2');
const fog_3 = document.getElementById('parallax-3');
const mtn_4 = document.getElementById('parallax-4');
const fog_5 = document.getElementById('parallax-5');
const mtn_6 = document.getElementById('parallax-6');
const cloud_7 = document.getElementById('parallax-7');
const mtn_8 = document.getElementById('parallax-8');
const sky_9 = document.getElementById('parallax-9');

// Variables
let aboutSectionStart = window.innerWidth * (1080/1920) - siteHeader.clientHeight;
let projectSectionStart = aboutSectionStart + aboutSection.clientHeight * 0.7;


window,addEventListener('resize', () => {
    aboutSectionStart = window.innerWidth * (1080/1920) - siteHeader.clientHeight;
    projectSectionStart = aboutSectionStart + aboutSection.clientHeight * 0.7;
})

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Create the parallax effect    
    firstName.style.marginTop = scrollY * 0.8 + 'px';
    lastName.style.marginTop  = scrollY * 0.8 + 'px';

    slogan1.style.marginTop   = scrollY * 2   + 'px';
    slogan2.style.marginTop   = scrollY * 2   + 'px';
    slogan3.style.marginTop   = scrollY * 2   + 'px';

    downArrow.style.marginTop = scrollY * 2   + 'px'; 

    sky_9.style.marginTop     = scrollY * 0.5 + 'px';
    mtn_8.style.marginTop     = scrollY * 0.5 + 'px';
    cloud_7.style.marginTop   = scrollY * 0.4 + 'px';
    mtn_6.style.marginTop     = scrollY * 0.4 + 'px';
    fog_5.style.marginTop     = scrollY * 1.2 + 'px';
    mtn_4.style.marginTop     = scrollY * 0.3 + 'px';
    fog_3.style.marginTop     = scrollY * 0.4 + 'px';
    hill_2.style.marginTop    = scrollY * 0.1 + 'px';
    trees_1.style.marginTop   = scrollY * 0   + 'px';

    // Toggle the header visibility 
    if (scrollY > projectSectionStart) {
        siteHeader.classList.add('header-visible')
        setActive('nav-projects')
    }
    
    else if (scrollY > aboutSectionStart) {
        siteHeader.classList.add('header-visible')
        setActive('nav-about')
    }
    else {
        siteHeader.classList.remove('header-visible')
        setActive('nav-home')
    }
});