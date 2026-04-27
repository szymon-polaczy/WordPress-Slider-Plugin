import Splide from '@splidejs/splide';

const initSplide = () => {
    document.querySelectorAll( '.splide' ).forEach( ( element ) => {
        new Splide( element ).mount();
    } );
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSplide);
} else {
    initSplide();
}