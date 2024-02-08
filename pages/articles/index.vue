<template>
    <div>
      <h1>Liste des articles</h1>
      <ul>
        <li v-for="article in displayedArticles" :key="article.id">
          <h2>{{ article.title }}</h2>
          <p>{{ article.body }}</p>
        </li>
      </ul>
      <button v-if="articles.length > displayedArticles.length" @click="loadMore">Charger plus d'articles</button>
      <div v-if="loading">Chargement en cours...</div>
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
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        this.articles = await response.json();
        this.loading = false;
        this.displayedArticles = this.articles.slice(0, this.articlesPerPage);
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