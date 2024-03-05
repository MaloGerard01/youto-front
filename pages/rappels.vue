<template>
    
  <body>
      <div class="h-full flex w-screen bg-white">
          <dashboardMenu/>
          <div class="mx-20 grow pb-16">
          <div class="mt-16 flex flex-col gap-4 justify-center">
                  <p class="font-bold text-3xl">Rappels</p>
          </div>

          <div class="flex flex-col gap-4 my-8">
                        <div class="flex gap-4 rounded-3xl bg-lightOrange">
                          <div class="my-auto flex justify-between grow">
                            <div class="my-auto ml-6"> 
                              <p class="font-semibold">Dans 2 jours n’oublie pas ton rdv avec ton conseiller</p>
                            </div>
                            <div class="flex gap-6"> 
                              <div class="text-center rounded-3xl bg-melonOrange text-white px-2 py-3 font-bold">
                              <p class="text-lg">Modifier</p>
                            </div>
                            <div class="text-center rounded-3xl bg-melonOrange text-white px-2 py-3 font-bold">
                              <p class="text-lg">Supprimer</p>
                            </div>
                            </div>
                          </div>
                        </div>

                        <div class="flex gap-4 rounded-3xl bg-lightOrange">
                          <div class="my-auto flex justify-between grow">
                            <div class="my-auto ml-6"> 
                              <p class="font-semibold">Il te reste 2 documents à nous transmettre</p>
                            </div>
                            <div class="flex gap-6"> 
                              <div class="text-center rounded-3xl bg-melonOrange text-white px-2 py-3 font-bold">
                              <p class="text-lg">Modifier</p>
                            </div>
                            <div class="text-center rounded-3xl bg-melonOrange text-white px-2 py-3 font-bold">
                              <p class="text-lg">Supprimer</p>
                            </div>
                            </div>
                          </div>
                        </div>

                        <div class="flex gap-4 rounded-3xl bg-lightOrange">
                          <div class="my-auto flex justify-between grow">
                            <div class="my-auto ml-6"> 
                              <p class="font-semibold">Penses à prévoir ton changement de box internet</p>
                            </div>
                            <div class="flex gap-6"> 
                              <div class="text-center rounded-3xl bg-melonOrange text-white px-2 py-3 font-bold">
                              <p class="text-lg">Modifier</p>
                            </div>
                            <div class="text-center rounded-3xl bg-melonOrange text-white px-2 py-3 font-bold">
                              <p class="text-lg">Supprimer</p>
                            </div>
                            </div>
                          </div>
                        </div>

                        <div class="flex gap-4 rounded-3xl bg-lightOrange">
                          <div class="my-auto flex justify-between grow">
                            <div class="my-auto ml-6"> 
                              <p class="font-semibold">Penses à télécharger ton contrat de téléphone</p>
                            </div>
                            <div class="flex gap-6"> 
                              <div class="text-center rounded-3xl bg-melonOrange text-white px-2 py-3 font-bold">
                              <p class="text-lg">Modifier</p>
                            </div>
                            <div class="text-center rounded-3xl bg-melonOrange text-white px-2 py-3 font-bold">
                              <p class="text-lg">Supprimer</p>
                            </div>
                            </div>
                          </div>
                        </div>
                        


                        
                      </div>
                  </div>     
      </div>
  </body>
  </template>
  
  
  <script lang="ts">
  import { storeToRefs } from 'pinia';
  import { useAuthStore } from '~/stores/auth';
  var YOUTO_API = "http://localhost:2000/";
  import { ref } from 'vue';
      
  export default {
    setup() {
      const { userInfo } = storeToRefs(useAuthStore()); // make authenticated state reactive with

//         console.log(userInfo)
//         definePageMeta({
//   middleware: ["auth"]
// })
    },
  
    data() {
      return {
      };
    },
    methods: {

},
  };
  </script>