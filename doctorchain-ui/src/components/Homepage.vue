<template>
    <div class='welcome-page' id="welcome-page" align="center">
        <img src='../assets/homepage-image/welcome-page.png' alt='welcome page background' class="responsive"/>
        <div class='industry-advantage' id="industryAdvantage">
            <img src='../assets/homepage-image/industry-advantage.png' alt='team1' class="responsive"/>
        </div>
        <div class='business-process' id="businessProcess">
            <img src='../assets/homepage-image/business-process.png' alt='team2' class="responsive"/>
        </div>
    </div>
</template>

<script>
    import {validateRoleSession} from "./../api/AuthAPI";
    import { mapGetters } from 'vuex'

    export default {
        data(){
            return{
               
            }
        },
    }
        
</script>

<style>
    .responsive {
    width: 100%;
    height: auto;
    }
</style>