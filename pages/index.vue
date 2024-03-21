<template>
  <title>
    Youto
  </title>

  <body>
    <div class="my-12 mx-8 sm:m-0 sm:h-screen flex">
      <div class="flex flex-col sm:flex-row justify-center items-center ">
        <div class="flex flex-col gap-6 w-full sm:w-[60%]">
          <h1 class="text-vertPale font-bold text-xl sm:text-4xl">Pour toi aussi <span class="text-melonOrange">l'administratif</span> c'est prise de tête ?</h1>
          <p class="text-sm sm:w-[65%] ">
            Youto,c'est bien qu'une simple plateforme, c'est un allié pour rendre
            les démarches administratives plus simples, amusantes et moins stressantes !
          </p>
          <NuxtLink
            class="w-[50%] sm:w-[40%] text-center shadow-md cursor-pointer font-bold  block sm:px-4 py-3 bg-melonOrange border-2 border-melonOrange text-white rounded-2xl hover:bg-white hover:text-melonOrange">
            J'ai besoin d'aide
          </NuxtLink>
        </div>
          <img class="sm:absolute sm:right-24 sm:w-1/2 w-full z-1" src="~/assets/perso.png"/>
      </div>
    </div>

    <div class="px-[11rem] my-12 half-bg hidden sm:block">
      <Swiper
      :height="800"
      :modules="[SwiperAutoplay]"
      :slides-per-view="3"
      :space-between="40"
      :loop="false"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true
      }"
    >
      <SwiperSlide
      class="py-8"
        v-for="(card, idx) in cards"
        :key="idx"
      >
      <div class="bg-white px-8 py-4 shadow-md rounded-lg  flex flex-col gap-3">
              <img class="mx-auto w-12" :src="`_nuxt/assets/` + card.icon">
              <h3 class="text-melonOrange font-bold text-center">{{ card.title }}</h3>
              <p class="text-sm">{{ card.description }}</p>
              <div class="flex justify-center">
                <NuxtLink class="mt-1 w-1/3 text-sm text-center shadow-md cursor-pointer font-bold  block py-2 bg-melonOrange border-2 border-melonOrange text-white rounded-2xl hover:bg-white hover:text-melonOrange">
                  Voir plus
                </NuxtLink>
              </div>
       </div>
      </SwiperSlide>

      <!-- useSwiper() within a swiper instance -->
      <SwiperControls />
    </Swiper>
  </div>

  <div class="block sm:hidden bg-lightOrange">
    <div class="mx-4 py-8 flex flex-col gap-8">
      <div class="" v-for="(card, idx) in cards"
          :key="idx">
          <div class="bg-white px-8 py-4 shadow-md rounded-lg  flex flex-col gap-3">
                <img class="mx-auto w-12" :src="`_nuxt/assets/` + card.icon">
                <h3 class="text-melonOrange font-bold text-center">{{ card.title }}</h3>
                <p class="text-sm">{{ card.description }}</p>
                <div class="flex justify-center">
                  <NuxtLink class="mt-1 w-1/3 text-sm text-center shadow-md cursor-pointer font-bold  block py-2 bg-melonOrange border-2 border-melonOrange text-white rounded-2xl hover:bg-white hover:text-melonOrange">
                    Voir plus
                  </NuxtLink>
                </div>
        </div>
      </div>
    </div>
  </div>



    <div class=" h-screen  flex bg-white my-12 mx-8">
      <div class="flex flex-col-reverse sm:flex-row-reverse justify-start gap-6 items-center w-screen w-1/2">
        <div class="flex flex-col gap-6 sm:w-[45%] mb-20 ">
          <titlegroup title="Youto c'est quoi ?" subtitle="Ta plateforme d'aide préférée !" no-margin/>
          <p class="text-sm  sm:w-[65%]">
            Remplir des documents est souvent une corvée !
            On se perds facilement dans la tonne de documents qu'il faut remplir,
            on ne sait pas réellement ce que les organismes attendent de nous...
            <br/><strong>Youto est la pour TOI !</strong><br/>
            Notre objectif est de rendre cette tache presque agréable à tes yeux,
            compte sur nous.
          </p>

          <div class="hidden sm:block flex justify-end">
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
        <img class="sm:absolute sm:left-24 sm:w-1/2 z-1" src="~/assets/ordi.png"/>
      </div>
    </div>

    <div class="sm:h-screen h-full  flex bg-lightOrange py-10 sm:py-0">
      <div class="flex flex-col sm:flex-row justify-center gap-20 items-center w-screen">
        <div class="flex flex-col gap-6">
          <titlegroup title="Avis clients" subtitle="Ils sont tous d'accord" orange no-margin/>
          <p class="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br />
            do eiusmod tempor incididunt ut labore et dolore magna <br />
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br />
            ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse <br />
            cillum dolore
          </p>
        </div>
              <div class="flex flex-col sm:flex-row h-full mx-6 sm:mx-0 sm:w-1/2 sm:gap-10">
                <div class="flex flex-col justify-center mb-6 sm:mb-24 gap-6">
                  <div class="mt-4 w-full shadow-md block py-6 px-12 bg-white rounded-2xl">
                    <p class=" py-2 text-sm italic">« Remplir des papiers c’est souvent compliqué, je perds du temps… J’ai du mal à m’y mettre et les questions ne sont pas très compréhensibles ».</p>
                    <div class="flex gap-4">
                      <img class="rounded-full w-14 h-14" src="~/assets/cardtest2.webp">
                      <div class="flex flex-col justify-center">
                        <p class="text-melonOrange font-bold">Julien DOLER</p>
                        <p class="text-sm">Octobre 2023</p>
                      </div>
                    </div>
                  </div>

                  <div class="mt-4 w-full shadow-md block py-6 px-12 bg-white rounded-2xl">
                    <p class=" py-2 text-sm italic">« Remplir des papiers c’est souvent compliqué, je perds du temps… J’ai du mal à m’y mettre et les questions ne sont pas très compréhensibles ».</p>
                    <div class="flex gap-4">
                      <img class="rounded-full w-14 h-14" src="~/assets/cardtest2.webp">
                      <div class="flex flex-col justify-center">
                        <p class="text-melonOrange font-bold">Julien DOLER</p>
                        <p class="text-sm">Octobre 2023</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex flex-col  justify-center sm:mt-24 gap-6">
                  <div class="mt-4 w-full shadow-md block py-6 px-12 bg-white rounded-2xl">
                    <p class=" py-2 text-sm italic">« Remplir des papiers c’est souvent compliqué, je perds du temps… J’ai du mal à m’y mettre et les questions ne sont pas très compréhensibles ».</p>
                    <div class="flex gap-4">
                      <img class="rounded-full w-14 h-14" src="~/assets/cardtest2.webp">
                      <div class="flex flex-col justify-center">
                        <p class="text-melonOrange font-bold">Julien DOLER</p>
                        <p class="text-sm">Octobre 2023</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="mt-4 w-full shadow-md block py-6 px-12 bg-white rounded-2xl">
                    <p class=" py-2 text-sm italic">« Remplir des papiers c’est souvent compliqué, je perds du temps… J’ai du mal à m’y mettre et les questions ne sont pas très compréhensibles ».</p>
                    <div class="flex gap-4">
                      <img class="rounded-full w-14 h-14" src="~/assets/cardtest2.webp">
                      <div class="flex flex-col justify-center">
                        <p class="text-melonOrange font-bold">Julien DOLER</p>
                        <p class="text-sm">Octobre 2023</p>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
      </div>
    </div>

    <pre-footer/>


  </body>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth'; // import the auth store we just created
const { userInfo } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs
import { onMounted } from 'vue';

var cards = [
  { icon: 'home.svg', title: 'Mon logement', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
  { icon: 'car.svg', title: 'Ma voiture', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
  { icon: 'case.svg', title: 'Mon travail', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
  // Ajoutez d'autres cartes au besoin
];

// beforeDestroy() {
//     if (this.swiper) {
//       this.swiper.destroy();
//     }
//   };

</script>


  
<style>
/* Styles spécifiques au carousel */
.swiper-slide {
display: flex;
justify-content: center;
align-items: center;
}
.swiper-wrapper {
min-width: 100vh;
width: 100vh;
}
.swiper-cards {
width: 240px;
height: 240px;
}
.swiper-cards .swiper-slide {
border-radius: 6px;
border: 1px solid black;
}

.half-bg {
  background: linear-gradient(to bottom, #fce4d4 50%, white 0%);
}


</style>
