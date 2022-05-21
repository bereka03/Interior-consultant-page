let nav = document.querySelector('.nav-links-wrapper');
let cancel_icon = document.getElementById('back');
function humMenu() {
    let menu = document.querySelector('.hamburger');
    let user_sec = document.querySelector('.user-photo-wrapper');
    menu.addEventListener('click', () => {
        nav.classList.toggle('active');
        cancel_icon.classList.toggle('active');
        user_sec.style.position = 'static';
    })
}
humMenu();
function back() {
    let links = document.querySelectorAll('.nav-link');
    cancel_icon.addEventListener('click', () => {
        nav.classList.remove('active');
    })
    links.forEach( n => n.addEventListener('click', () => {
        nav.classList.remove('active');
    }))
}
back();