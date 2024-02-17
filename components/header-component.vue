<template>
  
    <nav class="bg-white sm:sticky sm:top-6 sm:mx-24 sm:left-0 sm:right-0 sm:rounded-2xl z-30">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto sm:p-4">
        <NuxtLink to="/" class="flex items-center hidden sm:block">
            <img src="~/assets/youtovf.png" class="h-11 mr-3" />
        </NuxtLink>
        <button v-on:click="openedMenu" data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-bold text-sm uppercase flex flex-col items-center	 p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <NuxtLink to="/quisommesnous" class="block py-2 pl-3 pr-4 text-vertPale rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-600 md:p-0">Qui sommes-nous ?</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/testpage" class="block py-2 pl-3 pr-4 text-vertPale rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-600 md:p-0">Nos offres</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/dashboard" class="block py-2 pl-3 pr-4 text-vertPale rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-600 md:p-0">Mon compte</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/articles" class="block py-2 pl-3 pr-4 text-vertPale rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-600 md:p-0">Blog</NuxtLink>
            </li>
            <nuxt-link to="/login" v-if="!authenticated" class="shadow-md cursor-pointer uppercase font-bold  block px-8 py-3 bg-white border-2 border-vertPale text-vertPale rounded-2xl hover:bg-vertPale hover:text-white">
              <span>Connexion</span>
            </nuxt-link>
            <nuxt-link @click="logout" v-if="authenticated" class="shadow-md cursor-pointer uppercase font-bold  block px-8 py-3 bg-vertPale border-2 border-vertPale text-white rounded-2xl hover:bg-white hover:text-vertPale">
              <span>Deconnexion</span>
            </nuxt-link>
            <NuxtLink to="/register" v-if="!authenticated" class="shadow-md cursor-pointer uppercase font-bold  block px-8 py-3 bg-vertPale border-2 border-vertPale text-white rounded-2xl hover:bg-white hover:text-vertPale">
              <span>Inscription</span>
            </NuxtLink>
          </ul>
        </div>
      </div>
    </nav>
    </template>
    
    <script lang="ts" setup>
    import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
    import { useAuthStore } from '~/stores/auth'; // import the auth store we just created
    
    const router = useRouter();
    
    
    const { logUserOut } = useAuthStore(); // use authenticateUser action from  auth store
    const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs
    
    const logout = () => {
      logUserOut();
      router.push('/login');
    };
    </script>