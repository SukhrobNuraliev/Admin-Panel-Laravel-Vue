require("./bootstrap");
import router from "./router";
import VueRouter from "vue-router";
import { Form, HasError, AlertError } from "vform";
import moment from "moment";
import VueProgressBar from "vue-progressbar";
import Swal from "sweetalert2";

window.Vue = require("vue");
window.Form = Form;
window.Swal = Swal;

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000
});
window.Toast = Toast;

Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

Vue.use(VueRouter);
Vue.use(VueProgressBar, {
    color: "rgb(143, 255, 199)",
    failedColor: "red",
    height: "5px",
    transition: {
        speed: "1s",
        opacity: "0.6s",
        termination: 300
    }
});

Vue.filter("upText", text => text.charAt(0).toUpperCase() + text.slice(1));
Vue.filter("cleanDate", date => moment(date).format("MMMM Do YYYY"));

new Vue({
    el: "#app",
    router
});
