<template>
    <div>
        <h1 class="title">Forgot Password</h1>
        <table class="table is-striped" border="0">
            <el-row class="el-input">
                <el-col>
                    <el-input type="text" placeholder="Enter email" v-model="email" @input="handleEmailChange"/>
                </el-col>
            </el-row>
            <el-row>
                <el-col class="left" align="left">
                    <el-button v-on:click="handleSubmit">
                        Submit
                    </el-button>
                </el-col>
            </el-row>
            <span v-if="email_error" class="el-message--error">
				Invalid Email
			</span>
        </table>
    </div>
</template>

<script>
    import {forgotPassword} from "./../api/AuthAPI";

    export default {
        name: "ForgotPassword",
        data(){
            return{
                email: '',
                email_error: ''
            }
        },
        methods:{
            handleSubmit(){
                let query = {"email": this.email};

                forgotPassword(query).then((res)=>{
                    if(res.status===200){
                        this.$message.info("Email is sent to set new Password.");
                    }
                    else if(res.status===404){
                        this.$message.error("User is not registered. Please Signup.");
                    }
                    else {
                        this.$message.error("Server Error");
                    }
                });
            },
            handleEmailChange: function () {
                if(this.email) {
                    let re_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    this.email_error = !(this.email.trim() && re_email.test(this.email.trim()));
                }
            }
        }
    }
</script>

<style scoped>

</style>