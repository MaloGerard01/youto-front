<template>
    <title>
        Youto    
    </title>
    <body>
        <div class="bg-gradient-to-b from-vertClair h-screen">
            <div class="">
                <span>
                    welcome <span v-if="userInfo">{{userInfo.username}}</span>
                </span>
                <li><NuxtLink to="/testpage">login test page</NuxtLink></li>
                <li><NuxtLink to="/articles/1">articles</NuxtLink></li>
            </div>
        </div>
    </body>

</template>

<script lang="ts" setup>
import { useAuthStore } from '~/stores/auth'; // import the auth store we just created
const { userInfo } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs
</script>

