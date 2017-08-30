const slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
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
    this.classList.toggle('menu__buttons-opened');
    slideout.toggle();
});
