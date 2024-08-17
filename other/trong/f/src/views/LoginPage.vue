<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import loginForm from '@/components/LoginForm.vue';
import userService from '@/services/user.service';
import AppHeader from '../components/AppHeader.vue';


const $router = useRouter();
// const $route = useRoute();
const user = ref(null)
const message = ref('');

// funton login 
async function login(username, password) {
   try {
      const res = await userService.login(username, password);
      message.value = 'Login successfully';
      $router.push({ name: 'bookcollection' });
   } catch (error) {
      console.log('Login failed');
      message.value = 'Invalid username or password';
      console.log(error);

   }
}

</script>

<template>
   <AppHeader />
   <loginForm :user="user" @login="login" />
   <div style="text-align: center; color: red;">
      <p>{{ message }}</p>
   </div>
</template>