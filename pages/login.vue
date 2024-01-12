<template>

<body>
    <div class="h-screen flex">
      <div class="flex flex-row justify-center items-center ">
        <div class="flex flex-col gap-6 w-[60%]">
          <h1 class="text-melonOrange font-bold text-4xl">Connexion</h1>
          <p class="text-sm w-[65%] ">
            Accédez à l’univers Youto …
          </p>
          <NuxtLink
            class="w-[40%] text-center shadow-md cursor-pointer font-bold  block px-4 py-3 bg-melonOrange border-2 border-melonOrange text-white rounded-2xl hover:bg-white hover:text-melonOrange">
            Je découvre les offres
          </NuxtLink>
        </div>
          <img class="absolute right-24 w-1/2 z-1" src="~/assets/perso.png"/>
      </div>
    </div>
</body>
  <div>
    <div class="title">
      <h2>Login</h2>
    </div>
    <div class="container form">
      <label for="uname"><b>Username</b></label>
      <input
          v-model="user.username"
          type="text"
          class="input"
          placeholder="Enter Username"
          name="uname"
          required
      />

      <label for="psw"><b>Password</b></label>
      <input
          v-model="user.password"
          type="password"
          class="input"
          placeholder="Enter Password"
          name="psw"
          required
      />

      <button @click.prevent="login" class="button">Login</button>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/stores/auth'; // import the auth store we just created

const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store

const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const user = ref({
  username: 'kminchelle',
  password: '0lelplR',
});
const router = useRouter();

const login = async () => {
  await authenticateUser(user.value); // call authenticateUser and pass the user object
  // redirect to homepage if user is authenticated
  if (authenticated) {
    router.push('/');
  }
};
</script>