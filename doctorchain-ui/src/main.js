import Vue from 'vue'
import VueRouter from 'vue-router'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en';


import store from './store/index.js'
import App from './App.vue'
import Signup from './components/Signup.vue';
import Login from './components/Login.vue';
import Marketplace from './components/marketplace/Marketplace.vue';
import Verify from './components/Verify.vue';
import ForgotPassword from './components/ForgotPassword.vue';
import UpdatePassword from './components/UpdatePassword.vue';
import Homepage from './components/Homepage.vue'

Vue.use(Element, { locale });

Vue.use(VueRouter);

// Define routes
const routes = [
    { path: '/', component: Homepage },
    { path: '/marketplace', component: Marketplace },
    //{ path: '/signup/:signup_token', component: Signup },
    { path: '/signup', component: Signup },
    { path: '/login', component: Login },
    { path: '/forgotpassword', component: ForgotPassword },
    { path: '/forgotpassword/:token', component: UpdatePassword },
    { path: '/verifyaccount/:verify_id', component: Verify },
];

// Register routes
const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior: function(to, from, savedPosition) {
        if (to.hash) {
            return {selector: to.hash}
        } else {
            return { x: 0, y: 0 }
        }
    },
});

new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store
});
