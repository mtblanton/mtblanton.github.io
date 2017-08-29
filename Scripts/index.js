const slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70
});

document.querySelector('.menu__open-menu').addEventListener('click', function () {
    slideout.toggle();
});