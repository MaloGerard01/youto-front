<template>
  <div v-if="loading">
    is loading
  </div>
  <div class="px-[11rem] mb-10">
    <div class="mt-16 mb-16 flex flex-col gap-4 m-auto"> 
        <h1 class="text-3xl font-bold m-auto">
          {{postData.NAME}}
        </h1>
        <div class="flex gap-8 m-auto mb-6">
            <div> 
              12 janvier 2024
            </div>
            <div> 
              {{ readingTime }} minutes de lecture
            </div>
          </div>

          <div class="flex items-center justify-center h-96">
            <img src="~/assets/cardtest2.webp" alt="Description de l'image" class="object-cover h-full w-full rounded-3xl" />
          </div>
        </div>

    <div>
      <p>{{postData.DESCRIPTION}}</p>
    </div>


  </div>
  <div v-if="error">
    No matches
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      error: false,
      postData: [],
      readingTime: 0,
    }
  },
  methods: {
    async getArticleData(){
      console.log(this.$route.params.id);
        this.loading = true

        const response = await fetch('http://localhost:3032/articles/' + this.$route.params.id);
        this.postData = await response.json();
        console.log(this.postData.DESCRIPTION)

        this.loading = false

        // const { data, pending }: any = await useFetch('https://dummyjson.com/posts/' + this.$route.params.id, {
        //   method: 'get',
        //   onResponseError({ request, response, options }) {
        //     console.log("response error")
        //     this.error = true;
        //   }
        // });

        // this.loading = pending;
        // console.log(this.loading);
        // console.log(data)
        // if (data.value) {
        //   console.log(data.value)
        //   this.postData = data.value;
        //   this.loading = false;
        // }


    },
    getReadingTime() {
      // Nombre moyen de mots lus par minute
      const wordsPerMinute = 200;

      // Vérifier si this.postData.DESCRIPTION est défini avant de l'utiliser
      if (this.postData.DESCRIPTION) {
        // Calcul du nombre de mots dans le texte
        const wordCount = this.postData.DESCRIPTION.split(/\s+/).length;

        // Estimation du temps de lecture en minutes
        this.readingTime = Math.ceil(wordCount / wordsPerMinute);
      }
    },
  },


  created() {
    this.getArticleData()
    this.getReadingTime()
  }
}

</script>