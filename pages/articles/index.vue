<template>
    <div class="px-[11rem]">
      <div class="mt-16 mb-16 flex flex-col gap-4 justify-center">
        <h1 class="font-bold text-3xl">Découvrez le blog de Youto</h1>
        <p>Retrouvez ici nos dernières nouveautés pour vous aider au quotidien dans vos différentes démarches administratives <br /> Bonne lecture !</p>
      </div>
  
      <div v-if="articles && articles.length > 0" class="bg-white shadow-md rounded-2xl flex my-16">
        <img class="rounded-tl-2xl rounded-bl-2xl w-1/2" src="~/assets/cardtest2.webp">
        <div class="px-8 py-4 flex flex-col gap-2 my-auto w-1/2">
          <h3 class="text-black font-bold text-left">{{ articles[0].NAME }}</h3>
          <p class="text-sm text-black my-6">{{ articles[0].DESCRIPTION }}</p>
          <p>12 octobre 2023</p>
          <div class="flex">
            <NuxtLink :to="'/articles/' + articles[0].ID" class="text-white bg-vertPale rounded-xl mt-1 w-1/3 text-sm text-center cursor-pointer block py-3 font-bold">
              Lire l'article
            </NuxtLink>
          </div>
        </div>
      </div>
  
      <div class="grid grid-cols-3 gap-6">
        <div v-for="(article, index) in displayedArticles" :key="article.ID" class="bg-white shadow-md rounded-2xl">
          <img class="rounded-t-2xl" src="~/assets/cardtest2.webp">
          <div class="px-8 py-4 flex flex-col gap-2">
            <h3 class="text-black font-bold text-left">{{ article.NAME }}</h3>
            <p class="text-sm text-black my-6">{{ article.DESCRIPTION }}</p>
            <p>12 octobre 2023</p>
            <div class="flex">
              <NuxtLink :to="'/articles/' + article.ID" class="text-white bg-vertPale rounded-xl mt-1 w-1/3 text-sm text-center cursor-pointer block py-3 font-bold">
                Voir plus >
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
  
      <div class="flex justify-center w-full my-8">
        <button class="bg-vertPale p-4 rounded-full text-white" v-if="(articles.length - 1 ) > displayedArticles.length" @click="loadMore">Charger plus d'articles</button>
      </div>
  
      <div class="flex justify-center w-full my-8">
        <p class="bg-vertPale p-4 rounded-full text-white" v-if="loading">Chargement en cours...</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        articles: [],
        displayedArticles: [],
        loading: false,
        articlesPerPage: 20,
      };
    },
    methods: {
      async getArticles() {
        this.loading = true;
        const response = await fetch('http://localhost:3032/articles');
        this.articles = await response.json();
        this.loading = false;
        // Commencer la boucle à partir du deuxième article
        this.displayedArticles = this.articles.slice(1, this.articlesPerPage + 1);
      },
      loadMore() {
        const currentLength = this.displayedArticles.length;
        const nextArticles = this.articles.slice(currentLength, currentLength + this.articlesPerPage);
        this.displayedArticles = [...this.displayedArticles, ...nextArticles];
      },
    },
    mounted() {
      this.getArticles();
    },
  };
  </script>
  