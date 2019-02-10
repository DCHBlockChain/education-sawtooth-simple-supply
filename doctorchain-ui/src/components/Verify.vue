<template>
    <div>
    </div>
</template>

<script>
    import {verifyAccount} from "./../api/AuthAPI";

    export default {
        name: "Verify",
        data () {
            return {
                verify_id: this.$route.params.verify_id
            }
        },
        mounted(){
            console.log(this.$route.params.verify_id);
            if(this.$route.params.verify_id) {
                let query = {
                    "verify_id": this.$route.params.verify_id
                };
                verifyAccount(query).then((res)=>{
                    if(res.status===200){
                        this.$message({
                            type: 'success',
                            message: 'Account Verified Successfully'
                        });
                        this.$router.push("/login");
                    }
                    else if(res.status===404){
                        res.json().then((data)=>{
                            this.$message({
                                type: 'error',
                                message: data.msg
                            });
                            this.$router.push("/signup");
                        });
                    }
                    else{
                        this.$message({
                            type: 'error',
                            message: 'Account verification failed. Link Expired or Invalid'
                        });
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>