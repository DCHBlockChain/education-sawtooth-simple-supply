<template>
    <div class="personal-information">
        <el-form :inline="true" ref="form" :model="personalInformation">
            <el-form-item  label="First Name">
                <el-input v-model="personalInformation.firstName"></el-input>
            </el-form-item>

            <el-form-item  label="Last Name">
                <el-input v-model="personalInformation.lastName"></el-input>
            </el-form-item>

            <el-form-item label="Residence">
                <el-select v-model="personalInformation.residence" placeholder="Country of Residence">
                    <el-option label="United States" value="unitedStates"></el-option>
                    <el-option label="China" value="china"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="Date of Birth" prop="birthDate">
                <el-date-picker type="date" placeholder="Pick a date" v-model="personalInformation.birthDate" style="width: 100%;"></el-date-picker>
            </el-form-item>

            <el-form-item label="Marital Status">
                <el-select v-model="personalInformation.maritalStatus" placeholder="Marital Status">
                    <el-option label="Married" value="married"></el-option>
                    <el-option label="Widowed" value="widowed"></el-option>
                    <el-option label="Seperated" value="seperated"></el-option>
                    <el-option label="Divorced" value="divorced"></el-option>
                    <el-option label="Single" value="single"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item  label="Asking Price">
                <el-input v-model="personalInformation.askingPrice" placeholder="Asking Price in USD"></el-input>
            </el-form-item>
        </el-form>
        <el-form :inline="false" ref="form" :model="personalInformation" label-width="120px">
            <el-form-item :inline="false" label="Ethereum/DNA Address">
                <el-input v-model="personalInformation.ethereumDNAAddress" placeholder="Be sure Ethereum address is for a ERC20 compatible wallet"></el-input>
                <!-- <span sstyle="font-size: 5px; color: grey">Be sure Ethereum address is for a ERC20 compatible wallet</span> -->
            </el-form-item>
    
            <el-form-item :inline="false">
                <el-button type="primary" @click="onSubmit">Update</el-button>
                <el-button>Cancel</el-button>
            </el-form-item>
        </el-form>
        <!-- <p>personalInformation: {{personalInformation}}</p> -->
    </div>
</template>


<script>
    import * as API from "../../../api/Api";
    export default {
        components: {
            
        },


        data() {
            return {
                personalInformation: {
                    firstName: '',
                    lastName: '',
                    residence: '',
                    birthDate: '',
                    maritalStatus: '',
                    askingPrice: '',
                    ethereumDNAAddress: ''
                }
            }
        },
        rules: {
          birthDate: [
            { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }
          ],
         
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
