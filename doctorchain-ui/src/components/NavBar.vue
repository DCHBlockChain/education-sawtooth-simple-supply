<template>
    <nav fixed="top" class="nav has-shadow" style='box-shadow: 3px 3px 5px rgba(219,219,219,.3);'>
        <div class="nav-left">
            <router-link to="/" class="nav-item">
                <img src="../assets/DCH-logo.png" alt="Bulma logo">
            </router-link>
            <!--<span class="nav-item">-->
				<!--<search v-if="path !== '/'"/>-->
			<!--</span>-->
        </div>

        <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
        <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
        <span class="nav-toggle">
			<span></span>
			<span></span>
			<span></span>
	  	</span>
        <el-menu :inline="true" v-if="!sessionActive" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1" @click="marketplace">Marketplace</el-menu-item>

            <!-- <router-link to="/#industryAdvantage" class="nav-item"> -->
                <el-menu-item index="2" @click="toIndustryAdvantage">Industry Advantage</el-menu-item>
            <!-- </router-link> -->
            <el-menu-item index="3" @click="toBusinessProcess">Business Process</el-menu-item>
            <el-menu-item index="4" >Technology Introduction</el-menu-item>
            <el-menu-item index="5" >About Us</el-menu-item>
            <el-menu-item index="6" @click="login">Login</el-menu-item>
            <el-menu-item index="7" @click="signup">Signup</el-menu-item>
            <!--<el-menu-item v-if="path !== '/' && path !== '/login'" index="2" @click="signup">Signup</el-menu-item>-->
        </el-menu>
        <el-menu v-if="sessionActive" class="el-menu-demo" mode="horizontal">
            <span class="el-menu-item" >Welcome {{currentUser.first_name}}</span>
            <el-menu-item index="2" @click="logout">Logout</el-menu-item>
        </el-menu>
        <!-- This "nav-menu" is hidden on mobile
          Add the modifier "is-active" to display it on mobile
        <div class="nav-right nav-menu">
              <div v-if="!sessionActive">
              <router-link to="/profile" @click="login" class="nav-item is-tab">
                Login
              </router-link>
              <router-link to="/signup" class="nav-item is-tab">
                Signup
              </router-link>
              </div>
              <div v-else-if="sessionActive">
                  <router-link to="/" @click="toggleSessionActive" class="nav-item is-tab">
                      Logout
                  </router-link>
              </div> -->
    </nav>
</template>

<script>
    import { mapGetters } from 'vuex'
    import * as util from '../util/Util';
    import {isUserLoggedIn} from '../api/AuthAPI';

    export default {
        components: {
            
        },
        data(){
            return{

            }
        },
        mounted() {
            isUserLoggedIn(this);
        },
        computed: {
            ...mapGetters({
                sessionActive: 'sessionActive',
                currentUser: 'currentUser'
            }),
            itemsInCart(){
                let cart = this.$store.getters.cartProducts;
                return cart.reduce((accum, item) => accum + item.quantity, 0)
            },
            path () {
                return this.$route.path;
            }
        },
        methods: {
            toggleSessionActive (event) {
                //nothing
            },
            login () {
                // this.$store.commit('setSessionActive', { flag: true });
                this.$router.push('/login');
            },
            signup () {
                // this.$store.commit('setSessionActive', { flag: true });
                this.$router.push('/signup');
            },
            logout () {
                util.invalidateJWTSession(this);
            },
            marketplace () {
                this.$router.push('/marketplace');
            },
            toIndustryAdvantage () {
                this.$router.push('/#industryAdvantage')
            },
            toBusinessProcess () {
                this.$router.push('/#businessProcess')
            }
        }
    }
</script>

<style lang="scss">
    .nav {
        height: auto;
        margin-bottom: 2rem;
    }

    .nav-item img {
        max-height: 3.5rem;
    }

    .active-bottom-border {
        border-bottom: 3px solid #00d1b2;
        color: #00d1b2;
        padding-bottom: calc(.75rem - 8px);
    }
</style>
