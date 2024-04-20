let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal ({
    distance: '65px' ,
    duration: 2600,
    delay: 450,
    reset: true
})

sr.reveal('.hero-text', {delay:200, origin:'top'})
sr.reveal('.hero-img', {delay:450, origin:'top'})
sr.reveal('.icons', {delay: 500, origin:'left'})
sr.reveal('.scroll-down', {delay: 590, origin:'left'})
sr.reveal('.scroll-down', {delay: 590, origin:'right'})

function scrolldown()
{
    var height = document.body.scrollHeight;
    window.scroll(0, height);
}