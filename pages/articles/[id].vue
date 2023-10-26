<template>
  <div v-if="loading">
    is loading
  </div>
  <div v-else-if="postData">
    <h1>
      {{postData.title}}
    </h1>
    <p>
      {{postData.body}}
    </p>
  </div>
  <div v-if="error">
    No matches
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      loading: false,
      error: false,
      postData: {
        title: null,
        body: null,
      },
    }
  },
  methods: {
    async getArticleData(){
      console.log(this.$route.params.id);
        this.loading = true
        const { data, pending }: any = await useFetch('https://dummyjson.com/posts/' + this.$route.params.id, {
          method: 'get',
          onResponseError({ request, response, options }) {
            console.log("response error")
            this.error = true;
          }
        });

        this.loading = pending;
        console.log(this.loading);
        console.log(data)
        if (data.value) {
          console.log(data.value)
          this.postData = data.value;
          this.loading = false;
        }


    }
  },
  created() {
    this.getArticleData()
  }
}

</script>