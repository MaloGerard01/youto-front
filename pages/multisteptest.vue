<!-- SingleStepForm.vue -->
<template>
    <div>
      <h2>Étape {{ currentStep }}</h2>
  
      <!-- Contenu de chaque étape -->
      <div v-if="currentStep === 1">
        Contenu de la première étape
      </div>
      <div v-if="currentStep === 2">
        Contenu de la deuxième étape
      </div>
      <div v-if="currentStep === 3">
        Contenu de la troisième étape
      </div>
  
      <!-- Boutons de navigation -->
      <button @click="prevStep" v-if="currentStep > 1">Précédent</button>
      <button @click="nextStep" v-if="currentStep < 3">Suivant</button>
      <button @click="submitForm" v-if="currentStep === 3">Soumettre</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentStep: 1,
      };
    },
    methods: {
      nextStep() {
        if (this.currentStep < 3) {
          this.currentStep++;
        }
      },
      prevStep() {
        if (this.currentStep > 1) {
          this.currentStep--;
        }
      },
      submitForm() {
        // Logique de soumission du formulaire
      },
    },
  };
  </script>
  