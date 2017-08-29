const slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70
});

document.querySelector('.menu__buttons').addEventListener('click', function () {
    this.classList.toggle('menu__buttons-opened');
    slideout.toggle();
});
