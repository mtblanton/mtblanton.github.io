import fontawesome from '@fortawesome/fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/fontawesome-free-brands';
import { faEnvelope } from '@fortawesome/fontawesome-free-solid';
import Slideout from 'slideout';
import '../Stylesheets/index.sass'

document.onload = () => {
    fontawesome.icon(faGithub, faLinkedin, faEnvelope);

    const slideout = new Slideout({
        'panel': document.getElementById('panel'),
        'menu': document.getElementById('menu'),
        'padding': 175,
        'tolerance': 70
    });

    const menuButtons = document.querySelector('.menu__buttons');

    slideout.on('beforeopen', function () {
        menuButtons.classList.add('menu__buttons-opened');
    });

    slideout.on('beforeclose', function () {
        menuButtons.classList.remove('menu__buttons-opened');
    });

    menuButtons.addEventListener('click', function () {
        menuButtons.classList.toggle('menu__buttons-opened');
        slideout.toggle();
    });
}