import Vue from 'vue'
import App from './App.vue'
import router from './router'
import service from './js/service'
import Resource from "vue-resource"

Vue.use(Resource)
service.init(Vue)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});



