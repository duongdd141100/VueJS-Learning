<script>
    export default {
        data() {
            return {
                info: {
                    name: '',
                    age: 0,
                    gender: false,
                    email: '',
                    phoneNumber: ''
                }
            }
        }
    }
</script>

<template>
    <div class="grid-container">
        <div class="input">
            <div class="input-rows">
                <div class="input-cols">
                    <label>Name: </label>
                    <input type="text" name="nameInput" id="nameInput" v-model="info.name">
                </div>
                <div class="input-cols">
                    <label>Age: </label>
                    <input type="number" name="ageInput" id="ageInput" v-model="info.age">
                </div>
                <div class="input-cols">
                    <label>Gender: </label>
                    <div>
                        
                        <input type="checkbox" name="genderInput" id="genderInput" v-model="info.gender">
                        <label for="genderInput">{{ info.gender ? 'Male' : 'Female' }}</label>
                    </div>
                </div>
                <div class="input-cols">
                    <label>Email: </label>
                    <input type="text" name="emailInput" id="emailnput" v-model="info.email">
                </div>
                <div class="input-cols">
                    <label>Phone Number: </label>
                    <input type="number" name="phoneNumberInput" id="phoneNumberInput" v-model="info.phoneNumber">
                </div>
            </div>
            
        </div>
        <div class="result">
            <div class="result-rows">
                <div class="result-cols">
                    <span>Name: </span>
                    <span id="nameResult">{{ info.name }}</span>
                </div>
                <div class="result-cols">
                    <span>Age: </span>
                    <span id="ageResult">{{ info.age }}</span>
                </div>
                <div class="result-cols">
                    <span>Gender: </span>
                    <span id="genderResult">{{ info.gender ? 'Male' : 'Female' }}</span>
                </div>
                <div class="result-cols">
                    <span>Email: </span>
                    <span id="emailResult">{{ info.email }}</span>
                </div>
                <div class="result-cols">
                    <span>Phone Number: </span>
                    <span id="phoneNumberResult">{{ info.phoneNumber }}</span>
                </div>
            </div>
            
        </div>
    </div>
</template>

<style>
    .grid-container {
        display: grid;
        grid-template-columns: 25% 25%;
        gap: 10px;
    }
    .input-rows {
        display: grid;
    }
    .input-cols {
        display: grid;
        grid-template-columns: 50% 50%;
        padding-bottom: 10px;
    }
    .input-cols label {
        text-align: right;
    }
    .result-rows {
        display: grid;
    }
    .result-cols {
        padding-bottom: 13px;
    }
</style>