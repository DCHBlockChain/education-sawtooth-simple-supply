<template>
    <div class="personal-information">
        <el-form :inline="true" ref="form" :model="physicalChara">
            <el-form-item  label="Height(cm)">
                <el-input v-model="physicalChara.height"></el-input>
            </el-form-item>

            <el-form-item  label="Weight(kg)">
                <el-input v-model="physicalChara.weight"></el-input>
            </el-form-item>

            <el-form-item label="Biological Sex">
                <el-select v-model="physicalChara.biologicalSex" placeholder="Biological Sex">
                    <el-option label="Female" value="female"></el-option>
                    <el-option label="Male" value="male"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="Hair Color">
                <el-select v-model="physicalChara.hairColor" placeholder="Hair Color">
                    <el-option label="Red" value="red"></el-option>
                    <el-option label="Light Blond" value="light blond"></el-option>
                    <el-option label="Dark Blond" value="dark blond"></el-option>
                    <el-option label="Light Brown" value="light brown"></el-option>
                    <el-option label="Dark Brown" value="dark brown"></el-option>
                    <el-option label="Black" value="black"></el-option>
                    <el-option label="White(Albinism)" value="white(albinism)"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="Eye Color">
                <el-select v-model="physicalChara.eyeColor" placeholder="Eye Color">
                    <el-option label="Blue" value="blue"></el-option>
                    <el-option label="Green and Blue" value="green and blue"></el-option>
                    <el-option label="Green" value="green"></el-option>
                    <el-option label="Light Hazel" value="light hazel"></el-option>
                    <el-option label="Dark Hazel" value="dark hazel"></el-option>
                    <el-option label="Light Brown" value="light brown"></el-option>
                    <el-option label="Red(Albinism)" value="red(albinism)"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="Ethnicitye">
                <el-checkbox-group v-model="physicalChara.ethnicity">
                    <el-checkbox label="White" value="white"></el-checkbox>
                    <el-checkbox label="South Asian" value="south asian"></el-checkbox>
                    <el-checkbox label="Black" value="black"></el-checkbox>
                    <el-checkbox label="Filipino" value="filipino"></el-checkbox>
                    <el-checkbox label="Latin American" value="latin american"></el-checkbox>
                    <el-checkbox label="Arab" value="arab"></el-checkbox>
                    <el-checkbox label="North African" value="north african"></el-checkbox>
                    <el-checkbox label="West Asian" value="west asian"></el-checkbox>
                    <el-checkbox label="Korean" value="korean"></el-checkbox>
                    <el-checkbox label="Japanese" value="japanese"></el-checkbox>
                    <el-checkbox label="North American Indian" value="north american indian"></el-checkbox>
                    <el-checkbox label="Metis" value="metis"></el-checkbox>
                    <el-checkbox label="Inuit" value="inuit"></el-checkbox>
                    <el-checkbox label="Other" value="other"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>

        </el-form>
        <el-form :inline="false" ref="form" :model="physicalChara" label-width="120px">
    
            <el-form-item :inline="false">
                <el-button type="primary" @click="onSubmit">Update</el-button>
                <el-button>Cancel</el-button>
            </el-form-item>
        </el-form>
        <!-- <p>physical chara: {{physicalChara}}</p> -->
    </div>
</template>


<script>
    import * as API from "../../../api/Api";
    export default {
        components: {
            
        },


        data() {
            return {
                physicalChara: {
                    height: '',
                    weight: '',
                    biologicalSex: '',
                    hairColor: '',
                    eyeColor: '',
                    ethnicity: []
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
