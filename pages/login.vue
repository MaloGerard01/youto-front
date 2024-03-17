<template>

<body>
    <div class="h-screen flex">
      <div class="flex flex-row justify-center items-start w-1/2 mt-16 ">
        <div class="flex flex-col w-1/2 gap-4">
          <h1 class="text-black font-bold text-4xl pb-2">Connexion</h1>
          <p class="text-sm pb-2">
            Accédez à l’univers Youto …
          </p>
      <input
          v-model="user.username"
          type="email"
          class="border-2 border-gray-200 rounded-2xl py-3 pl-3"
          placeholder="Adresse email"
          name="uname"
          required
      />
      <input
          v-model="user.password"
          type="password"
          class="border-2 border-gray-200 rounded-2xl py-3 pl-3"
          placeholder="Mot de passe"
          name="psw"
          required
      />
      <p v-if="error" class="text-xs text-red-500">
        L'adresse mail ou le mot de passe sont incorrects
      </p>

          <button @click.prevent="login"
            class="text-center uppercase shadow-lg cursor-pointer font-bold  block px-4 py-3 bg-vertPale text-white rounded-2xl hover:bg-white hover:text-vertPale">
            Se connecter
          </button>

          <NuxtLink class="text-sm text-vertPale font-bold">
            Mot de passe oublié ?
          </NuxtLink>

          <div> 
            <p class="text-sm">
            Vous n'avez pas de compte Youto ?
          </p>

          <NuxtLink class="text-sm text-vertPale font-bold">
            Inscrivez-vous !
          </NuxtLink>
          </div>

        </div>
          <img class="absolute right-24 w-1/2 z-1" src="~/assets/ordir.png"/>
      </div>
    </div>
</body>
</template>


<script lang="ts" setup>
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/stores/auth'; // import the auth store we just created

const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store

const { authenticated, error } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const user = ref({
  username: '',
  password: '',
});
const router = useRouter();

const login = async () => {
  await authenticateUser(user.value); // call authenticateUser and pass the user object
  // redirect to homepage if user is authenticated
 
  if (authenticated) {
    router.push('/dashboard');
  }
};
</script>