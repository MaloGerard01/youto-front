<template>
    <div class="flex items-center">
      <div
        v-for="(step, index) in steps"
        :key="index"
        class="relative flex items-center"
      >
        <div
          class="rounded-full bg-lightGray h-12 w-12 -left-5 absolute"
          :class="{ 'bg-vertPale': index <= currentStep}"
        >

        <img src="~/assets/check.svg" class="h-full p-2 m-auto" :class="{ 'hidden': index > currentStep }" />
        <img src="~/assets/circle.svg" class="h-full p-2 m-auto" :class="{ 'hidden': index <= currentStep }" />
        <div class="text-center  mt-2" v-if="step.emoji && step.emojiText">
            <p class="text-2xl">{{ step.emoji }}</p>
            <p class="font-bold text-sm absolute w-36 -left-12 mt-2">{{ step.emojiText }}</p>
        </div>
        </div>
        <div v-if="index < steps.length - 1" class="flex-1 w-48 h-6 rounded-lg my-auto bg-lightGray " :class="{ 'bg-vertPale': index < currentStep }"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        steps: [
            {
                name :'Étape 1', 
                emoji:'👋',
                emojiText:"C'est parti"
            },
            {
                name :'Étape 2', 
                emoji:'⭐️',
                emojiText:"C’est un bon début"
            },
            {
                name :'Étape 3', 
                emoji:'🚀',
                emojiText:"Plus que la moitié"
            },
            {
                name :'Étape 4', 
                emoji:'💪',
                emojiText:"Encore un effort !"
            },
            {
                name :'Étape 5', 
                emoji:'📦',
                emojiText:"Bon aménagement !"
            }],
        currentStep: 2,
      };
    },
  };
  </script>