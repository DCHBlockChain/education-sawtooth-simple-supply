<template>
    <div id="appsignup" align="center">
        <el-col :span="9"  style="margin-top: 50px">
            <h1 class="title" style="color: #0098FF">SignUp</h1>
            <el-form :model="form_data" status-icon  :rules="rules" ref="form_data" label-width="120px" class="demo-ruleForm">
                <!-- <el-form-item  prop="first_name" auto-complete="off" required>
                    <el-input v-model="form_data.first_name" placeholder="FirstName"></el-input>
                </el-form-item>
                <el-form-item prop="last_name" required>
                    <el-input v-model="form_data.last_name" auto-complete="off" placeholder="LastName"></el-input>
                </el-form-item> -->
                <el-form-item prop="name" required>
                    <el-input v-model="form_data.name" auto-complete="off" placeholder="Name"></el-input>
                </el-form-item>
                <el-form-item prop="email" required>
                    <el-input v-model="form_data.email" auto-complete="off" placeholder="Email"></el-input>
                </el-form-item>
                <el-form-item prop="encoded_password" required>
                    <el-input type="password" v-model="form_data.encoded_password" auto-complete="off" placeholder="Password"></el-input>
                </el-form-item>
                <el-form-item prop="confirm_encoded_password" required>
                    <el-input type="password" v-model="form_data.confirm_encoded_password" auto-complete="off" placeholder="Confirm Password"></el-input>
                </el-form-item>
                <!-- <el-form-item prop="zip_code" auto-complete="off" required>
                    <el-input v-model="form_data.zip_code" placeholder="ZipCode"></el-input>
                </el-form-item> -->
                <el-form-item prop="terms_condition" auto-complete="off" required>
                    <el-checkbox v-model="form_data.terms_condition">I agree to Terms of service and Privacy Policy</el-checkbox>
                </el-form-item>
                <el-form-item>
                    <el-button @click="submitForm('form_data')" style="width: 30%;background-color: #0098FF;color: white">Submit</el-button>
                    <el-button @click="resetForm('form_data')" style="width: 30%;background-color: #0098FF;color: white">Reset</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </div>
</template>

<script>
    import {register, verifySignupToken} from "./../api/UserAPI";

    export default {
        created(){
            // if(this.$route.params.signup_token) {
            //     let query = {
            //         "signup_token": this.$route.params.signup_token
            //     };
            //     console.log("verifySignupToken: ", query);
            //     verifySignupToken(this, query);
            // }
            // else {
            //     this.$message.warning("This site is currently available to a select few users.");
            //     this.$router.push("/");
            // }
        },
        data () {

            let checkFirstName = ((rule, value, callback)=>{
                if (!value) {
                    return callback(new Error('Please input FirstName'));
                }
                if (!value.match("[A-Za-z]")) {
                    callback(new Error('Please input valid FirstName'));
                }
                else {
                    callback();
                }
            });

            let checkLastName = ((rule, value, callback)=>{
                if (!value) {
                    return callback(new Error('Please input LastName'));
                }
                if (!value.match("[A-Za-z]")) {
                    callback(new Error('Please input valid LastName'));
                }
                else {
                    callback();
                }
            });

            let checkEmail = ((rule, value, callback) => {
                if (!value) {
                    return callback(new Error('Please input Email'));
                }
                let re_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!re_email.test(value.trim())) {
                    callback(new Error('Please input valid email'));
                }
                else {
                    callback();
                }
            });

            let checkPassword = ((rule, value, callback) => {
                if (!value) {
                    return callback(new Error('Please enter password'));
                }
                let re_password = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
                if (!re_password.test(value)) {
                    callback(new Error('1 Capital, 1 Numeric and minimum length 8 required'));
                }
                else {
                    callback();
                }
            });

            let checkConfirmPassword = ((rule, value, callback)=>{
                let re_password = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
                if (!value) {
                    return callback(new Error('Please enter password'));
                }
                else if (!re_password.test(value)) {
                    callback(new Error('Password does not match'));
                }
                else if (value !== this.form_data.encoded_password) {
                    callback(new Error('Passwords does not match'));
                }
                else {
                    callback();
                }
            });

            let checkZipCode = ((rule, value, callback) => {
                let re_zip = new RegExp("^\\d{5}$");
                if(value){
                    if(!re_zip.test(value)){
                        callback(new Error("Incorrect ZipCode. Correct Format: e.g. '54653'"))
                    }
                    else {
                        callback();
                    }
                }
                else {
                    callback(new Error("Enter ZipCode"));
                }
            });

            let checkTermsCondition = ((rule, value, callback)=>{
                if(value){
                    callback();
                }
                callback(new Error("Please accept terms of conditions to signup"));
            });

            return {
                isFormValidated : false,
                form_data: {
                    name: '',
                    email: '',
                    first_name: '',
                    last_name: '',
                    zip_code: '',
                    encoded_password: '',
                    confirm_encoded_password: '',
                    terms_condition: false
                },
                rules: {
                    email: [
                        { validator: checkEmail, trigger: 'change' },
                        { validator: checkEmail, trigger: 'blur' }
                    ],
                    first_name: [
                        { validator: checkFirstName, trigger: 'change'},
                        { validator: checkFirstName, trigger: 'blur'}
                    ],
                    last_name: [
                        { validator: checkLastName, trigger: 'change'},
                        { validator: checkLastName, trigger: 'blur'}
                    ],
                    encoded_password: [
                        { validator: checkPassword, trigger: 'change' },
                        { validator: checkPassword, trigger: 'blur' }
                    ],
                    confirm_encoded_password: [
                        { validator: checkConfirmPassword, trigger: 'change' },
                        { validator: checkConfirmPassword, trigger: 'blur' }
                    ],
                    zip_code: [
                        { validator: checkZipCode, trigger: 'change'},
                        { validator: checkZipCode, trigger: 'blur'}
                    ],
                    terms_condition: [
                        { validator: checkTermsCondition, trigger: 'change'}
                    ]
                }
            }
        },
        methods:{
            submitForm(formName) {
                console.log("submitForm: ", formName);
                console.log("submitForm: ", this.$refs[formName]);
                console.log(this.$refs[formName], this.$refs[formName].validate);
                this.$refs[formName].validate((valid, err) => {
                    console.log(this.$refs[formName], valid, err);
                    if (valid) {
                        register(this.form_data).then((res) => {
                            if (res.status === 200) {
                                this.$message.info("Signup Successful");
                                this.$router.push("/login");
                            }
                            else if (res.status === 404) {
                                console.log(res);
                                res.json().then((data) => {
                                    this.$message.error(data.msg);
                                    console.log("Error: ", data.msg);
                                })
                            }
                            else {
                                console.log("Error: ", res);
                            }
                        })
                    } else {
                        return false;
                    }
                })
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }



</script>

<style lang="scss">
</style>
