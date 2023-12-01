<template>
    <title>
        Youto    
    </title>
    <body>
        <div class="h-screen flex">
            <div class="flex flex-row justify-center items-center mx-60">
                <div class="flex flex-col gap-6">
                    <h1 class="text-melonOrange font-bold text-3xl">Pour toi aussi l'administratif <br/> c'est prise de tête ?</h1>
                    <p class="text-sm">
                        <strong>Youto</strong>,c'est bien qu'une simple plateforme, <strong>c'est un allié</strong> pour rendre les<br/>
                        démarches administratives plus simples, amusantes et <strong>moins stressantes !</strong>
                    </p>
                    <NuxtLink class="mt-4 w-1/2 text-center shadow-md cursor-pointer uppercase font-bold  block px-4 py-3 bg-melonOrange border-2 border-melonOrange text-white rounded-2xl hover:bg-white hover:text-melonOrange">
                        Je découvre les offres
                    </NuxtLink>
                </div>
            </div>
        </div>

    <div class="h-full flex half-bg z-10 mb-4">
      <div class="swiper-container mx-60 overflow-x-scroll">
        <div class="swiper-wrapper flex justify-center">
          <div class="swiper-slide flex-shrink-0 shadow-lg" v-for="(card, index) in cards" :key="index">
            <div class="bg-white px-8 py-4 shadow-md rounded-lg  flex flex-col gap-3">
              <h3 class="text-melonOrange font-bold text-center">{{ card.title }}</h3>
              <p class="text-sm">{{ card.description }}</p>
            </div>
          </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
  </div>


  <div class="h-screen  flex bg-white">
            <div class="flex flex-row-reverse justify-center gap-6 items-center w-screen">
                <div class="flex flex-col gap-6">
                    <h2 class="text-vertPale font-bold uppercase text-sm">Youto c'est quoi ?</h2>
                    <h3 class="text-black font-bold text-3xl">Ta plateforme d'aide préférée !</h3>
                    <p class="text-sm">
                      Remplir des documents est souvent une corvée !<br/>
                      On se perds facilement dans la tonne de documents qu'il faut remplir, <br/>
                      on ne sait pas réellement ce que les organismes attendent de nous... <br/>
                      <strong>Youto est la pour TOI !</strong> <br/>
                      Notre objectif est de rendre cette tache presque agréable à tes yeux, <br/>
                      compte sur nous.
                    </p>

                    <div class="flex justify-center">
        <div class="flex flex-col">
              <div class="flex flex-row justify-end gap-4"> 
                <div class="mt-4 w-50 shadow-md block px-4 py-3 bg-vertPale text-white rounded-2xl">
                        <p class="text-center uppercase font-bold">Sécurité</p>
                        <p class="text-center font-sm">Prenez contact avec nos conseillers <br/> afin de leurs expliquer votre problème</p>
                </div>
              </div> 

              <div class="flex flex-row gap-4"> 
                <div class="mt-4 w-50 shadow-md block px-4 py-3 bg-vertPale text-white rounded-2xl">
                        <p class="text-center uppercase font-bold">Accompagnement</p>
                        <p class="text-center font-sm">Prenez contact avec nos conseillers <br/> afin de leurs expliquer votre problème</p>
                </div>
                <div class="mt-4 w-50 shadow-md block px-4 py-3 bg-vertPale text-white rounded-2xl">
                        <p class="text-center uppercase font-bold">Sérénité</p>
                        <p class="text-center font-sm">Prenez contact avec nos conseillers <br/> afin de leurs expliquer votre problème</p>
                </div>
              </div>  
            </div>
          </div>
                </div>
                <div class="flex flex-col gap-6">
                  test
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
        { title: 'Mon logement', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
        { title: 'Ma voiture', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
        { title: 'Mon travail', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
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
}
</style>
