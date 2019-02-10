<template>
    <div>
        <h1 class="title">Update Password</h1>
        <table class="table is-striped" border="0">
            <el-row class="el-input">
                <el-col>
                    <el-input type="password"
                              placeholder="Enter New Password"
                              v-model="encoded_password"
                              @input="handlePasswordChange"
                    />
                </el-col>
            </el-row>
            <span v-if="err_encoded_password && encoded_password" class="el-message--error el-icon-error">
                Password should contain at least 1 Block Character, Numeric and minimum length 8
            </span>
            <el-row class="el-input">
                <el-col>
                    <el-input type="password"
                              placeholder="Confirm New Password"
                              v-model="confirm_encoded_password"
                              @input="handleConfirmUpdatePassword"
                    />
                </el-col>
            </el-row>
            <span v-if="!password_match && confirm_encoded_password.length>0" class="el-message--error el-icon-error">
                Password does not match
            </span>
            <span v-if="password_match" class="el-message--success el-icon-success">
                Password Match
            </span>
            <el-row>
                <el-col class="left" align="left">
                    <el-button v-on:click="handleUpdatePassword">
                        Confirm
                    </el-button>
                </el-col>
            </el-row>
        </table>
    </div>
</template>

<script>
    import {updatePassword, verifyUpdatePasswordToken} from "./../api/AuthAPI"

    export default {
        name: "UpdatePassword",
        data(){
            return{
                password_match: false,
                confirm_encoded_password: '',
                encoded_password: '',
                err_confirm_encoded_password: false,
                err_encoded_password: true
            }
        },
        created(){
            console.log("UpdatePassword Token: ", this.$route.params.token);
            let query = {
                "token": this.$route.params.token
            };
            verifyUpdatePasswordToken(query).then((res)=>{
                console.log("verifyUpdatePasswordToken: ", res.status);
                if(res.status!==200){
                    this.$message.error("Invalid URL!!");
                    this.$router.push("/login");
                }
                else {

                }
            })
        },
        methods:{
            handleUpdatePassword(){
                let query = {
                    "encoded_password": this.encoded_password,
                    "token": this.$route.params.token
                };
                updatePassword(query).then((res)=>{
                    console.log("updatePassword: ", res.status);
                    if(res.status===200){
                        this.$message.info("Password Updated Successfully");
                        this.$router.push("/login");
                    }
                    else {
                        this.$message.error("Error while updating password. Please try again.");
                    }
                });
            },
            handlePasswordChange(){
                let re_password = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
                this.err_encoded_password = !(this.encoded_password.trim() && re_password.test(this.encoded_password.trim()));
            },
            handleConfirmUpdatePassword(){
                this.password_match = (this.confirm_encoded_password === this.encoded_password);
                console.log("handleConfirmUpdatePassword: ", this.password_match)
            }
        }

    }
</script>

<style scoped>

</style>