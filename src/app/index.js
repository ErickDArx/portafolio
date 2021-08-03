import Vue from 'vue';
import App from './components/App.vue';

new Vue({
    render: h => h(App)
}).$mount('#app');

ScrollReveal().reveal('.headline')
ScrollReveal().reveal('.tagline', {
    delay: 500
})
ScrollReveal().reveal('.punchline', {
    delay: 2000
})

smoothScroll.init({
    selector: '[data-scroll]',
    selectorHeader: null,
    speed: 2000,
    easing: 'easeInOutCubic',
    offset: 0,
    callback: function (anchor, toggle) { }
});


var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);
