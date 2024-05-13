function setActive(id) {

    const siteHeader = document.getElementById('site-header');
    const navItems = siteHeader.getElementsByTagName('a');

    for (let i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove('active');
    }

    const toBeActive = document.getElementById(id);

    toBeActive.classList.add('active');


}