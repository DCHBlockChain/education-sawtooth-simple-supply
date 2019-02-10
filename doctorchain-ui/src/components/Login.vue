<template>
	<div id="login" align="center">
		<table class="table is-striped" border="0"  style="margin-top: 50px">
            <h1 class="title" style="color: #0098FF">Login</h1>
            <el-row class="el-input" style="margin-top: 10px">
				<el-col :span="18">
					<el-input type="text" placeholder="Enter email" v-model="state.email"/>
				</el-col>
			</el-row>
			<el-row class="el-input" style="margin-top: 10px">
				<el-col :span="18">
					<el-input type="password" placeholder="Enter Password" v-model="state.encoded_password"/>
				</el-col>
			</el-row>
			<el-row style="margin-top: 10px">
				<el-col :span="18">
					<el-button v-on:click="login" style="width: 100%;background-color: #0098FF;color: white">
						Login
					</el-button>
				</el-col>
                <span v-if="error_msg" class="el-message--error">
				<el-alert
                        :title=error_msg
                        type="error"
                        show-icon
                        :closable="false">
                </el-alert>
			</span>
			</el-row>
            <!--<hr/>-->
            <!--<el-row>-->
                <!--<el-col :span="18">-->
                    <!--Don't have an Account?-->
                    <!--<el-button v-on:click="signup" style="width: 100%;background-color: #5564ff;color: white">-->
                        <!--Sign Up-->
                    <!--</el-button>-->
                <!--</el-col>-->
            <!--</el-row>-->
			<el-row style="margin-top: 10px">
				<a class="is-link" href="/forgotpassword" style="font-size: 13px;">Forgot Password</a>
			</el-row>

		</table>
	</div>
</template>

<script>
    import * as AuthAPI from "./../api/AuthAPI";
    import { mapGetters } from 'vuex'

    let state = {
        email:"",
        encoded_password:""
    };

    export default {
        name: 'login',
        data () {
            return {
                state: state,
                error_msg: ""
            }
        },
        computed: {
            ...mapGetters({
                sessionActive: 'sessionActive',
            }),
            get(){
                return {user: 'user'}
            }
        },
        mounted(){
            if(this.sessionActive){
                this.$router.push("/");
            }
        },
        methods:{
            login: function(){
                if(this.state.email.trim() && this.state.encoded_password.trim()){
                    console.log("[login]: ", this.state);
                    AuthAPI.login(this.state).then((res)=>{
                        if(res.status===200){
                            res.json().then((data)=>{
                                console.log("Login Successful: ", data.userdata);
                                localStorage.setItem('doctorchain', JSON.stringify(data));
                                this.$store.commit('setCurrentUserData', data.userdata);
                                if(data.userdata.role === 'staff'){
                                    this.$router.push("/admin");
								}
								else if(data.userdata.role === 'vendor'){
                                    this.$router.push("/vendor");
								}
								else {
                                    this.$router.push("/");
								}
                            });
                            this.$store.commit('setSessionActive', { flag: true });
                        }
                        else if(res.status === 404) {
                            res.json().then((data)=>{
                                console.log("Error: ", data.msg);
                                this.error_msg = data.msg;
                                console.log("Error: ", this.error_msg);
                            })
                        }
                        else {
                            console.log("Error else: ",  res);
                        }
                    })
                }
                else {
                    this.error_msg = "Please provide valid Input";
				}

            },
            signup: function () {
                this.$router.push('/signup');
            }
        }
    }

</script>

<style lang="scss">
	.table {
		background-color: transparent;
	}

</style>
