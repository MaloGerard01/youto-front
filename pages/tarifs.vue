<template>
      <div class="flex gap-3 w-full justify-center mt-12">
      <button class="rounded-l-2xl bg-vertClair px-6 py-3 uppercase font-bold text-vertPale border-2" :class="{ 'border-vertPale': step == 0}" @click="setStep(0)">
        Liberté
      </button>
      <button class="bg-vertClair px-6 py-3 uppercase font-bold text-vertPale border-2" :class="{ 'border-vertPale': step == 1}" @click="setStep(1)">
        Confort
      </button>
      <button class="rounded-r-2xl bg-vertClair px-6 py-3 uppercase font-bold text-vertPale  border-2" :class="{ 'border-vertPale': step == 2}" @click="setStep(2)">
        Premium
      </button>
    </div>
  <div class="h-full flex justify-center my-20 gap-4 ">



    <div class="relative"> 
          <div class="absolute -right-24 w-1/2 h-full my-auto ">
        <img :class="{ 'hidden': step != 0}" src="~/assets/tarif1.png"/>
        <img :class="{ 'hidden': step != 1}" src="~/assets/tarif2.png"/>
        <img :class="{ 'hidden': step != 2}" src="~/assets/tarif3.png"/>
      </div>

    <div class="flex flex-row items-center mx-24 ">
      <div class="flex flex-col gap-6 w-1/2">
        <div> 
          <ul class="flex flex-col gap-12"> 
            <li class="flex items-center gap-6">
              <img src="~/assets/check2.svg" class="h-full m-auto rounded-full" />
              <p class="font-bold text-lg grow">Accès libre aux informations</p>
            </li>
            <li class="flex items-center gap-6">
              <img src="~/assets/check2.svg" class="h-full m-auto rounded-full" />
              <p class="font-bold text-lg grow">Articles de blog courts et simple</p>
            </li>
            <li class="flex items-center gap-6">
              <img src="~/assets/check2.svg" class="h-full m-auto rounded-full" />
              <p class="font-bold text-lg grow">FAQ</p>
            </li>
            <li class="flex items-center gap-6" v-if="step == 0">
              <img src="~/assets/check2.svg" class="h-full m-auto rounded-full" />
              <p class="font-bold text-lg grow">Possibilité d’essayer la formule confort pendant 1 mois</p>
            </li>
            <li class="flex items-center gap-6">
              <img src="~/assets/check2.svg" class="h-full m-auto rounded-full" :class="{ 'hidden': step < 1}" />
              <img src="~/assets/cross.svg" class="h-full m-auto rounded-full " :class="{ 'hidden': step > 0}" />
              <p class="font-bold text-lg grow" :class="{ 'text-lightGray': step == 0}">
                Accès à un calendrier personnalisé avec toutes les dates importantes à retenir pour ne pas oublier un événement important
              </p>
            </li>
            <li class="flex items-center gap-6">
              <img src="~/assets/check2.svg" class="h-full m-auto rounded-full" :class="{ 'hidden': step < 1}" />
              <img src="~/assets/cross.svg" class="h-full m-auto rounded-full " :class="{ 'hidden': step > 0}" />
              <p class="font-bold text-lg grow" :class="{ 'text-lightGray': step == 0}">Notifications de rappels 5 à 10 jours avant la date butoir</p>
            </li>
            <li class="flex items-center gap-6">
              <img src="~/assets/check2.svg" class="h-full m-auto rounded-full" :class="{ 'hidden': step < 2}" />
              <img src="~/assets/cross.svg" class="h-full m-auto rounded-full " :class="{ 'hidden': step > 1}" />
              <p class="font-bold text-lg grow" :class="{ 'text-lightGray': step == 0}">Suivi accompagné</p>
            </li>
            <li class="flex items-center gap-6">
              <img src="~/assets/check2.svg" class="h-full m-auto rounded-full" :class="{ 'hidden': step < 2}" />
              <img src="~/assets/cross.svg" class="h-full m-auto rounded-full " :class="{ 'hidden': step > 1}" />
              <p class="font-bold text-lg grow" :class="{ 'text-lightGray': step == 0}">1h d’appel par mois avec l’un de nos conseillers</p>
            </li>
          </ul>
        </div>
      </div>

    </div>

    </div>

  </div>
  <pre-footer/>
</template>

  <script>
  export default {
    data() {
      return {
        step: 0,
      };
    },
    methods: {
      setStep(index) {
        this.step = index;
      }

    },
    mounted() {

    },
  };
  </script>