document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.splide:not(.is-initialized)').forEach(slider => {
        new Splide( slider ).mount();
    });
});
