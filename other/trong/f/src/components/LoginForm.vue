<template>
    <div class="login-form mt-2">
        <h2>Login</h2>
        <Form @submit="login" :validation-schema="loginFormSchema">
            <div class="form-group">
                <label for="username">Username:</label>
                <Field name="username" type="text" class="form-control" v-model="loginData.username" />
                <ErrorMessage name="username" class="error-feedback" />
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <Field name="password" type="password" class="form-control" v-model="loginData.password" />
                <ErrorMessage name="password" class="error-feedback" />
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </Form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import * as yup from 'yup';
import { Form, Field, ErrorMessage } from 'vee-validate';

const loginFormSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
});




const props = defineProps({
    user: {type: Object, required: true},
});

const loginData = ref({...props.user});

const $emit = defineEmits(['login']);	

function login(){
    $emit('login', loginData.value.username, loginData.value.password);
}

</script>

<style scoped>
.login-form {
    max-width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.form-group {
    margin: 10px 0;
}

label {
    display: block;
    font-weight: bold;
}

input {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>
