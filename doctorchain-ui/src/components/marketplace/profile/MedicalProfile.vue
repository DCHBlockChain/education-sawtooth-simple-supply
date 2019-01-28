<template>
    <div class="medical-profile">
        <el-form  ref="medicalProfile" :model="medicalProfile">

            <el-form-item label="Would you say that in general your health is?">
                <el-select v-model="medicalProfile.health" placeholder="">
                    <el-option label="Excellent" value="excellent"></el-option>
                    <el-option label="Good" value="good"></el-option>
                    <el-option label="Fair" value="fair"></el-option>
                    <el-option label="Poor" value="poor"></el-option>
                    <el-option label="Not Sure" value="not sure"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="Are you currently on any prescription medication?">
                <el-select v-model="medicalProfile.medication" placeholder="">
                    <el-option label="Yes" value="yes"></el-option>
                    <el-option label="No" value="no"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="As a child, were you fully vaccinated?">
                <el-select v-model="medicalProfile.vaccinated" placeholder="">
                    <el-option label="Yes" value="yes"></el-option>
                    <el-option label="No" value="no"></el-option>
                    <el-option label="Not Sure" value="not sure"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="Do you suffer from any of the following allergies?">
                <el-checkbox-group v-model="medicalProfile.allergies">
                    <el-checkbox label="Milk / Dairy"></el-checkbox>
                    <el-checkbox label="Nuts"></el-checkbox>
                    <el-checkbox label="Eggs"></el-checkbox>
                    <el-checkbox label="Shellfish"></el-checkbox>
                    <el-checkbox label="Gluten"></el-checkbox>
                    <el-checkbox label="Drugs"></el-checkbox>
                    <el-checkbox label="Latex"></el-checkbox>
                    <el-checkbox label="Hay Fever"></el-checkbox>
                    <el-checkbox label="Pets"></el-checkbox>
                    <el-checkbox label="Other"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>

            <el-form-item label="Have you been diagnosed with, or treated for any following conditions? (Oncology)">
                <el-checkbox-group v-model="medicalProfile.oncology">
                    <el-checkbox label="Brain"></el-checkbox>
                    <el-checkbox label="Head and Neck"></el-checkbox>
                    <el-checkbox label="Breast"></el-checkbox>
                    <el-checkbox label="Lung"></el-checkbox>
                    <el-checkbox label="Pancreas"></el-checkbox>
                    <el-checkbox label="Prostate"></el-checkbox>
                    <el-checkbox label="Colorectal"></el-checkbox>
                    <el-checkbox label="Leukemia"></el-checkbox>
                    <el-checkbox label="Kidney"></el-checkbox>
                    <el-checkbox label="Skin"></el-checkbox>
                    <el-checkbox label="Endometrial"></el-checkbox>
                    <el-checkbox label="Testicular"></el-checkbox>
                    <el-checkbox label="Other"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>

            <el-form-item label="Have you been diagnosed with, or treated for any following conditions? (Immunological)">
                <el-checkbox-group v-model="medicalProfile.immunological">
                    <el-checkbox label="Arthritis"></el-checkbox>
                    <el-checkbox label="Inflammatory bowel disease"></el-checkbox>
                    <el-checkbox label="Psoriasis"></el-checkbox>
                    <el-checkbox label="Type 1 Diabetes"></el-checkbox>
                    <el-checkbox label="Scleroderma"></el-checkbox>
                    <el-checkbox label="Other"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>

            <el-form-item label="Have you been diagnosed with, or treated for any following conditions? (Neurological)">
                <el-checkbox-group v-model="medicalProfile.neurological">
                    <el-checkbox label="Alzheimer's Disease"></el-checkbox>
                    <el-checkbox label="Parkinson's Disease"></el-checkbox>
                    <el-checkbox label="Epilepsy"></el-checkbox>
                    <el-checkbox label="Multiple sclerosis"></el-checkbox>
                    <el-checkbox label="Stroke"></el-checkbox>
                    <el-checkbox label="Migraine"></el-checkbox>
                    <el-checkbox label="Huntington's disease"></el-checkbox>
                    <el-checkbox label="Meningitis"></el-checkbox>
                    <el-checkbox label="Developmental disorders"></el-checkbox>
                    <el-checkbox label="Other"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>

            <el-form-item label="Have you been diagnosed with, or treated for any following conditions? (Cardiovascular)">
                <el-checkbox-group v-model="medicalProfile.cardiovascular">
                    <el-checkbox label="Congenital Heart Defects"></el-checkbox>
                    <el-checkbox label="Coronary Artery Disease"></el-checkbox>
                    <el-checkbox label="Heart Attack"></el-checkbox>
                    <el-checkbox label="Heart Failure"></el-checkbox>
                    <el-checkbox label="High Blood Pressure"></el-checkbox>
                    <el-checkbox label="Other"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>

            <el-form-item :inline="false">
                <el-button type="primary" @click="onSubmit">Update</el-button>
                <el-button>Cancel</el-button>
            </el-form-item>

        </el-form>
        <!-- <p>medical profile: {{medicalProfile}}</p> -->
    </div>
</template>


<script>
    import * as API from "../../../api/Api";
    export default {
        components: {
            
        },


        data() {
            return {
                medicalProfile: {
                    health: '',
                    medication: '',
                    vaccinated: '',
                    allergies: [],
                    cardiovascular: [],
                    immunological: [],
                    oncology: [],
                    neurological: []
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
