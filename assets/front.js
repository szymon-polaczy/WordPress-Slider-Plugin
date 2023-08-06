document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.splide:not(.is-initialized)').forEach(slider => {
        new Splide( slider ).mount();
    });

    tinymce.init({
        selector: '.rich-text',  // change this value according to your HTML
        plugins: 'a_tinymce_plugin',
        a_plugin_option: true,
        a_configuration_option: 400
    });
});
