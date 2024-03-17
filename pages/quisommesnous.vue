<template>
    <title>
      Youto
    </title>
  
    <body>
      <!-- <div class="h-screen flex">
        <div class="flex flex-row justify-end items-center ">
          <div class="flex flex-col gap-6 w-[60%]">
            <h1 class="text-vertPale font-bold text-4xl">Un conseiller à ton écoute !</h1>
          </div>
            <img class="absolute right-24 w-1/2 z-1" src="~/assets/groupe.png"/>
        </div>
      </div> -->

      <div class="relative overflow-hidden"> 
          <img class="absolute -right-24 w-1/2" src="~/assets/qsn.png"/>

      <div class="h-screen flex">
      <div class=" m-auto ml-40 items-center ">
        <div class="flex flex-col gap-6 w-1/2">
          <h1 class="text-vertPale font-bold text-4xl">YOUTO : ton partenaire incontournable pour des démarches administratives <span class="text-melonOrange">faciles</span>, <span class="text-melonOrange">rapides</span> et <span class="text-melonOrange">sans stress</span>.</h1>
          <p class="text-sm w-[65%] ">
            Fini les recherches interminables sur Internet et les informations contradictoires ! 
Avec Youto, tu as accès à des informations fiables et vérifiées en quelques clics.
          </p>
          <NuxtLink
            class="w-[40%] text-center shadow-md cursor-pointer font-bold  block px-4 py-3 bg-melonOrange border-2 border-melonOrange text-white rounded-2xl hover:bg-white hover:text-melonOrange">
            Je souhaite voir les offres
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
  

  
  
      <div class="relative overflow-hidden">
        <img class="absolute bottom-0 -right-[18rem] p-2 w-1/2 -mr-8 -mb-8 -z-10" src="~/assets/bobrouge.png"/>
      <div class="h-1/2 px-[11rem]  flex">
        <div class="flex flex-row justify-start gap-6 items-center w-screen w-1/2">
          <div class="flex flex-col w-full mb-20">
            <titlegroup title="En savoir plus" subtitle="Quelques chiffres pour parler de Youto" orange/>
            <div class="">
              <div class="flex flex-col gap-6">
                <div class="flex flex-row gap-10">
                  <div class="mt-4 w-1/4 shadow-md block p-6 bg-white rounded-2xl">
                    <p class=" uppercase font-bold uppercase text-melonOrange">1 millions d’utilisateurs satisfaits</p>
                    <p class=" pt-2 text-sm">Youto a déjà aidé des milliers d’utilisateurs à traverser leurs démarches administratives avec succès.</p>
                  </div>
                  <div class="mt-4 w-1/4 shadow-md block p-6 bg-white rounded-2xl ">
                    <p class=" uppercase font-bold uppercase text-melonOrange">145 heures économisées</p>
                    <p class=" pt-2 text-sm">En utilisant Youto, nos utilisateurs ont économisé collectivement des centaines d’heures.</p>
                  </div>
                  <div class="mt-4 w-1/4 shadow-md block p-6 bg-white rounded-2xl">
                    <p class=" uppercase font-bold uppercase text-melonOrange">55 démarches simplifiées</p>
                    <p class=" pt-2 text-sm">Youto simplifie chaque étape des démarches administratives, en fournissant des guides détaillés, des modèles de formulaires…</p>
                  </div>
                </div>

                <div class="flex flex-row justify-end gap-10">
                  <div class="mt-4 w-1/4 shadow-md block p-6 bg-white rounded-2xl">
                    <p class=" uppercase font-bold uppercase text-melonOrange">14 experts qualifiés</p>
                    <p class=" pt-2 text-sm">Youto s’appuie sur une équipe d’experts qualifiés, garantissant ainsi des informations précises et à jour.</p>
                  </div>
                  <div class="mt-4 w-1/4 shadow-md block p-6 bg-white rounded-2xl">
                    <p class=" uppercase font-bold uppercase text-melonOrange">99 % de réussite des démarches</p>
                    <p class=" pt-2 text-sm">Grâce à l’assistance de Youto, nos utilisateurs ont obtenu un taux de réussite élevé dans leurs démarches administratives.</p>
                  </div>
                  <div class="mt-4 w-1/4 shadow-md block p-6 bg-white rounded-2xl">
                    <p class=" uppercase font-bold uppercase text-melonOrange">4 partenaires institutionnels</p>
                    <p class=" pt-2 text-sm">Youto collabore avec des partenaires institutionnels de confiance pour garantir l’exactitude des informations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div class="px-[11rem] py-2 my-12">
        <titlegroup title="Articles de blog" subtitle="Ils parlent de nous" orange/>
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
        v-for="(card, idx) in cards"
        :key="idx"
      >
      <div class="bg-white  shadow-lg rounded-2xl  ">
                <img class=" rounded-t-2xl" src="~/assets/cardtest2.webp">
                <div class="px-8 py-4 flex flex-col gap-3"> 
                  <h3 class="text-vertPale font-bold text-left">{{ card.title }}</h3>
                <p class="text-sm text-vertPale my-6">{{ card.description }}</p>
                <div class="flex justify-end">
                  <NuxtLink class="text-vertPale mt-1 w-1/3 text-sm text-center cursor-pointer block py-2 font-bold">
                    Voir plus >
                  </NuxtLink>
                </div>
                </div>
              </div>
      </SwiperSlide>

      <!-- useSwiper() within a swiper instance -->
      <SwiperControls />
    </Swiper>
</div>
<pre-footer/>
    </body>
  </template>
  
  <script setup>
  import { useAuthStore } from '~/stores/auth'; // import the auth store we just created
  const { userInfo } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs
  import { onMounted } from 'vue';

  var partners = [
  { url: 'caf.png'},
  { url: 'pe.png'},
  { url: 'fnaim.png'},
  { url: 'impots.png'},
  { url: 'caf.png'},
  { url: 'pe.png'},
  { url: 'fnaim.png'},
]


  var cards = [
  { title: 'Simplifiez vos démarches administratives en un clic !', description: 'Dites adieu aux tracas des démarches administratives grâce à Youto, la plateforme révolutionnaire !' },
  { title: 'Le compagnon idéal pour vos démarches administratives', description: 'La vie est trop courte pour passer des heures à remplir des formulaires et à attendre dans les bureaux administratifs.' },
  { title: 'La solution numérique qui simplifie vos relations avec l’administration', description: 'Les longues files d’attente et les formulaires interminables appartiennent désormais au passé.' },
  { title: 'La solution numérique qui simplifie vos relations avec l’administration', description: 'Les longues files d’attente et les formulaires interminables appartiennent désormais au passé.' },
  // Ajoutez d'autres cartes au besoin
]
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
  
  
  </style>
  