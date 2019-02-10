<template>
    <div class="behavioural-profile">
        <el-form  ref="behaviouralProfile" :model="behaviouralProfile">

            <el-form-item label="How often do you exercise? ?">
                <el-select v-model="behaviouralProfile.exercise" placeholder="">
                    <el-option label="Never" value="never"></el-option>
                    <el-option label="Infrequent" value="infrequent"></el-option>
                    <el-option label="Few times a week" value="few times a week"></el-option>
                    <el-option label="Daily" value="daily"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="What's your lifestyle?">
                <el-select v-model="behaviouralProfile.physicalLifestyle" placeholder="">
                    <el-option label="Highly Active" value="high active"></el-option>
                    <el-option label="active" value="active"></el-option>
                    <el-option label="Somewhat Active" value="somewhat active"></el-option>
                    <el-option label="Mainly Sedentary" value="mainly sedentary"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="How many cups of caffeinated drinks do you consume in a day?">
                <el-select v-model="behaviouralProfile.dailyCaffeinatedDrinks" placeholder="">
                    <el-option label="None" value="none"></el-option>
                    <el-option label="One" value="one"></el-option>
                    <el-option label="2 to 4" value="2 to 4"></el-option>
                    <el-option label="More than 4" value="more than 4"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="How many alcoholic drinks on average do you consume in a day?">
                <el-select v-model="behaviouralProfile.dailyAlcoholicDrinks" placeholder="">
                    <el-option label="None" value="none"></el-option>
                    <el-option label="Less than one" value="less than one"></el-option>
                    <el-option label="1 to 2" value="1 to 2"></el-option>
                    <el-option label="More than 2" value="more than 2"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="How many tobacco products on average do you consume?">
                <el-select v-model="behaviouralProfile.tobacco" placeholder="">
                    <el-option label="Never" value="never"></el-option>
                    <el-option label="Infrequent" value="infrequent"></el-option>
                    <el-option label="1 to 2 a day" value="1 to 2 a day"></el-option>
                    <el-option label="3 or more a day" value="3 or more a day"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="Do you consume any marijuana products?">
                <el-select v-model="behaviouralProfile.marijuana" placeholder="">
                    <el-option label="Never" value="never"></el-option>
                    <el-option label="Yes" value="yes"></el-option>
                    <el-option label="No longer" value="no longer"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="Do you use any scheduled drugs?">
                <el-select v-model="behaviouralProfile.scheduledDrugs" placeholder="">
                    <el-option label="Never" value="never"></el-option>
                    <el-option label="Yes" value="yes"></el-option>
                    <el-option label="No longer" value="no longer"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="Are you sexually active?">
                <el-select v-model="behaviouralProfile.sexuallyActive" placeholder="">
                    <el-option label="Never" value="never"></el-option>
                    <el-option label="Yes" value="yes"></el-option>
                    <el-option label="No longer" value="no longer"></el-option>
                </el-select>
            </el-form-item>

            
            <el-form-item :inline="false">
                <el-button type="primary" @click="onSubmit">Update</el-button>
                <el-button>Cancel</el-button>
            </el-form-item>

        </el-form>
        <!-- <p>medical profile: {{behaviouralProfile}}</p> -->
    </div>
</template>


<script>
    import * as API from "../../../api/Api";
    export default {
        components: {
            
        },


        data() {
            return {
                behaviouralProfile: {
                    physicalLifestyle: '',
                    exercise: '',
                    dailyCaffeinatedDrinks: '',
                    dailyAlcoholicDrinks: '',
                    tobacco: '',
                    marijuana: '',
                    scheduledDrugs: '',
                    sexuallyActive: ''
                }
            }
        },
        rules: {
          
        },

        methods: {
            onSubmit(){
                alert('Update!')
            },
            
        }
    }
</script>

<style>
    
</style>
