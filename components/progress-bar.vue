<template>
    <div class="flex items-center">
      <div
        v-for="(step, index) in steps"
        :key="index"
        class="relative flex items-center"
      >
        <div
          class="rounded-full bg-lightGray h-12 w-12 "
          :class="{ 'bg-vertPale': index < currentStep, 'bg-vertPale': index === currentStep }"
        >

        <img src="~/assets/check.svg" class="h-8 m-auto" :class="{ 'hidden': index > currentStep }" />
    </div>
        <div v-if="index < steps.length - 1" class="flex-1 w-20 h-8 rounded-lg my-auto" :class="{ 'bg-vertPale': index < currentStep, 'bg-blue-500': index === currentStep }"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        steps: ['Étape 1', 'Étape 2', 'Étape 3', 'Étape 4'], // Ajoutez ici vos étapes
        currentStep: 2,
      };
    },
  };
  </script>


<!-- <template>
    <div class="flex items-center">
      <div
        v-for="(step, index) in steps"
        :key="index"
        class="relative flex items-center"
      >
        <div
          class="w-4 h-4 rounded-full bg-lightGray"
          :class="{ 'bg-vertPale': index <= currentStep, 'bg-blue-500': index === currentStep }"
        ></div>
        <div v-if="index < steps.length - 1" class="flex-1 h-px w-20 bg-lightGray" :class="{ 'bg-vertPale': index < currentStep, 'bg-blue-500': index === currentStep }"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        steps: ['Étape 1', 'Étape 2', 'Étape 3', 'Étape 4'],
        currentStep: 1,
      };
    },
  };
  </script> -->
  