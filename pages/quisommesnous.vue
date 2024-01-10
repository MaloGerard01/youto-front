<template>
    <title>
      Youto
    </title>
  
    <body>
      <div class="h-screen flex">
        <div class="flex flex-row justify-center items-center ">
          <div class="flex flex-col gap-6 w-[60%]">
            <h1 class="text-vertPale font-bold text-4xl">Un conseiller à ton écoute !</h1>
          </div>
            <img class="absolute right-24 w-1/2 z-1" src="~/assets/groupe.png"/>
        </div>
      </div>
  

  
  
      <div class="h-screen  flex bg-white">
        <div class="flex flex-row-reverse justify-start gap-6 items-center w-screen w-1/2">
          <div class="flex flex-col gap-6 w-[45%] mb-20">
            <h2 class="text-vertPale font-bold uppercase text-sm">Youto c'est quoi ?</h2>
            <h3 class="text-black font-bold text-3xl">Ta plateforme d'aide préférée !</h3>
            <p class="text-sm w-[65%]">
              Remplir des documents est souvent une corvée !
              On se perds facilement dans la tonne de documents qu'il faut remplir,
              on ne sait pas réellement ce que les organismes attendent de nous...
              <br/><strong>Youto est la pour TOI !</strong><br/>
              Notre objectif est de rendre cette tache presque agréable à tes yeux,
              compte sur nous.
            </p>
  
            <div class="flex justify-end">
              <div class="flex flex-col absolute right-[14rem]">
                <div class="flex flex-row justify-end gap-4">
                  <div class="mt-4 w-50 shadow-md block px-4 py-3 bg-vertPale text-white rounded-2xl">
                    <p class="text-center uppercase font-bold">Sécurité</p>
                    <p class="text-center font-sm">Prenez contact avec nos conseillers <br /> afin de leurs expliquer votre
                      problème</p>
                  </div>
                </div>
  
                <div class="flex flex-row gap-4">
                  <div class="mt-4 w-50 shadow-md block px-4 py-3 bg-vertPale text-white rounded-2xl">
                    <p class="text-center uppercase font-bold">Accompagnement</p>
                    <p class="text-center font-sm">Prenez contact avec nos conseillers <br /> afin de leurs expliquer votre
                      problème</p>
                  </div>
                  <div class="mt-4 w-50 shadow-md block px-4 py-3 bg-vertPale text-white rounded-2xl">
                    <p class="text-center uppercase font-bold">Sérénité</p>
                    <p class="text-center font-sm">Prenez contact avec nos conseillers <br /> afin de leurs expliquer votre
                      problème</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img class="absolute left-24 w-1/2 z-1" src="~/assets/to.png"/>
        </div>
      </div>
  
      <div class="h-screen  flex bg-lightOrange">
        <div class="flex flex-row justify-center gap-6 items-center w-screen">
          <div class="flex flex-col gap-6">
            <h2 class="text-vertPale font-bold uppercase text-sm">Avis clients</h2>
            <h3 class="text-black font-bold text-3xl">Ils sont tous d'accord</h3>
            <p class="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br />
              do eiusmod tempor incididunt ut labore et dolore magna <br />
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br />
              ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
              Duis aute irure dolor in reprehenderit in voluptate velit esse <br />
              cillum dolore
            </p>
          </div>
          <div class="flex flex-col gap-6">
            test
          </div>
        </div>
      </div>



      <div class="h-full flex z-10 mb-4">
        <div class="swiper-container mx-60 overflow-x-scroll">
          <div class="mb-12"> 
            <h2 class="text-vertPale font-bold uppercase text-sm">Articles de blog</h2>
          <h3 class="text-black font-bold text-3xl">Ils parlent de nous</h3>
                  <div class="swiper-pagination"></div>
                  <div class="swiper-button-prev">test</div>
                  <div class="swiper-button-next">test</div>
          </div>
          
          <div class="swiper-wrapper flex justify-center">
            <div class="swiper-slide " v-for="(card, index) in cards" :key="index">
              <div class="bg-vertPale  shadow-md rounded-2xl  ">
                <img class=" rounded-t-2xl" src="~/assets/cardtest2.webp">
                <div class="px-8 py-4 flex flex-col gap-3"> 
                  <h3 class="text-white font-bold text-left">{{ card.title }}</h3>
                <p class="text-sm text-white">{{ card.description }}</p>
                <div class="flex justify-end">
                  <NuxtLink class="text-white mt-1 w-1/3 text-sm text-center cursor-pointer block py-2">
                    Voir plus >
                  </NuxtLink>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </body>
  </template>
  
  <script setup>
  import Swiper from 'swiper';
  import { useAuthStore } from '~/stores/auth'; // import the auth store we just created
  const { userInfo } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs
  import { onMounted } from 'vue';
  
  var cards = [
    { title: 'Simplifiez vos démarches administratives en un clic', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'Le compagnon idéal pour vos démarches administratives', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'La solution numérique qui simplifie vos relations avec l’administration', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'La solution numérique qui simplifie vos relations avec l’administration', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },

    // Ajoutez d'autres cartes au besoin
  ];
  var swiper = null;
  
  onMounted(() => {
    swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });
  // beforeDestroy() {
  //     if (this.swiper) {
  //       this.swiper.destroy();
  //     }
  //   };
  
  </script>
  
  
  <style>
  /* Styles spécifiques au carousel */
  .swiper-container {
    width: 100%;
    padding-top: 20px;
  }
  
  .swiper-slide {
    border-radius: 8px;
  }
  
  .half-bg {
    background: linear-gradient(to bottom, #f39454 50%, white 0%);
  }</style>
  