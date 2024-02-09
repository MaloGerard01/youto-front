<template>
    <div class="py-6">
      <!-- En-tête avec la phrase et l'icône -->
      <div @click="toggleContent" class="flex items-center cursor-pointer ">
        <p class="mr-2 text-xl font-bold">{{ question }}</p>
        <svg
          v-if="!showContent"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-4 w-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-4 w-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </div>
  
      <!-- Contenu déroulant -->
      <div v-if="showContent" class="mt-4">
        <!-- Votre texte ici -->
        {{ reponse }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
    question: {
      type: String,
      default: "Cliquez pour afficher le texte",
    },
    reponse: {
      type: String,
      default: "Le texte détaillé que vous souhaitez afficher lorsque l'utilisateur clique.",
    },
  },
    data() {
      return {
        showContent: false,
        phrase: "Cliquez pour afficher le texte",
        expandedText: "Le texte détaillé que vous souhaitez afficher lorsque l'utilisateur clique.",
      };
    },
    methods: {
      toggleContent() {
        this.showContent = !this.showContent;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Styles spécifiques au composant si nécessaire */
  </style>
  