import Vue from "vue";
import App from "./components/App.vue";

new Vue({
    render: (h) => h(App),
}).$mount("#app");


//Barra de progreso

function progressBarScroll() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
        height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight,
        scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}

window.onscroll = function () {
    progressBarScroll();
};
// Change article into body in Script

