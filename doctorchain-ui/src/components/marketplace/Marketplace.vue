<template>



        <el-container>
            <el-aside width="200px">
                <el-menu :default-openeds="['1', '2', '3', '4', '5', '6']">

                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-tickets"></i>Profile</template>
                        <el-menu-item index="1-1" @click="showPersonalInformation">Personal Information</el-menu-item>
                        <el-menu-item index="1-2" @click="showPhysicalChara">Physical Characteristics</el-menu-item>
                        <el-menu-item index="1-3" @click="showMedicalProfile">Medical Profile</el-menu-item>
                        <el-menu-item index="1-4" @click="showBehaviouralProfile">Behavioural Profile</el-menu-item>
                    </el-submenu>

                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-document"></i>Files</template>
                        <el-menu-item index="2-1" @click="showFiles">Your Files</el-menu-item>
                        <el-menu-item index="2-2" @click="showUploader">Upload Files</el-menu-item>
                    </el-submenu>

                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-search"></i>Search</template>
                        <!-- <el-menu-item index="3-1">Your Files</el-menu-item>
                        <el-menu-item index="3-2">Upload Files</el-menu-item> -->
                    </el-submenu>

                    <el-submenu index="4">
                        <template slot="title"><i class="el-icon-setting"></i>Settings</template>
                        <el-menu-item index="4-1">Privacy</el-menu-item>
                        <el-menu-item index="4-2">Delete Account</el-menu-item>
                    </el-submenu>

                    <el-submenu index="5">
                        <template slot="title"><i class="el-icon-sort"></i>Wallet</template>
                        <el-menu-item index="5-1">Your Balance</el-menu-item>
                    </el-submenu>

                    <el-submenu index="6">
                        <template slot="title"><i class="el-icon-goods"></i>Purchases</template>
                    </el-submenu>

                </el-menu>
            </el-aside>

            <el-main>

                <Uploader 
                    v-if="index === '2-2'"
                    v-bind:action="apiAction"
                    style=" padding: 15px;">
                </Uploader>

                <PersonalInformation 
                    v-if="index === '1-1'">
                </PersonalInformation>

                <PhysicalChara 
                    v-if="index === '1-2'">
                </PhysicalChara>

                <MedicalProfile 
                    v-if="index === '1-3'">
                </MedicalProfile>

                <BehaviouralProfile
                    v-if="index === '1-4'">
                </BehaviouralProfile>

                <Files
                    v-if="index === '2-1'">
                </Files>

            </el-main>
        </el-container>






</template>
<script>
	 import * as API from "../../api/Api";
	// import * as util from "../../util/Util";
    import { mapGetters } from 'vuex';
    import Uploader from './files/uploader.vue';
    import PersonalInformation from './profile/PersonalInformation.vue'
    import PhysicalChara from './profile/PhysicalCharacteristics.vue'
    import MedicalProfile from './profile/MedicalProfile.vue'
    import BehaviouralProfile from './profile/BehaviouralProfile.vue'
    import Files from './files/Files.vue'




    export default {
        components: {
            Uploader,
            PersonalInformation,
            PhysicalChara,
            MedicalProfile,
            BehaviouralProfile,
            Files,
        },
        data () {
            return {
                apiAction: "",
                index: "",
            }
        },


        computed: {
        },
        methods:{
            showPersonalInformation(){
                this.index = '1-1'
            },
            showPhysicalChara(){
                this.index = '1-2'
            },
            showMedicalProfile(){
                this.index = '1-3'
            },
            showBehaviouralProfile(){
                this.index = '1-4'
            },
            showFiles(){
                this.index = '2-1'
            },
            showUploader(){
                this.index = '2-2'
            },
        }
    }

</script>

<style lang="scss">

</style>
