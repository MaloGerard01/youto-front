<template>
    <span>
        You need to be logged in to see this message
    </span>
  <div>
    <span>
      You infos are :
    </span>
    <li v-for="info in userInfo">
      {{ info }}
    </li>
  </div>

    <test/>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["auth"]
})

import { useAuthStore } from '~/stores/auth'; // import the auth store we just created
const { userInfo } = storeToRefs(useAuthStore()); // make authenticated state reactive with


</script>