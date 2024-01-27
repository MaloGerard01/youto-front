<template>
    
    <body>
        <div class="h-full flex w-screen">
            <dashboardMenu/>
            <div class="mx-20 grow">
                <div class="mt-16 flex flex-col gap-4 justify-center">
                    <p class="font-bold text-3xl">Bonjour <span class="text-vertPale">{name},</span></p>
                    <p>Gérez vos informations, ainsi que la confidentialité et la sécurité de vos données pour profiter au mieux des services YOUTO.</p>
                    <p>Que souhaitez-vous faire aujourd’hui ?</p>
                </div>

                <div class="mx-10">
                    <div class="flex justify-stretch ">
                        <div class="rounded-full bg-vertPale h-12 w-12 flex align-center">
                            <img src="~/assets/check.svg" class="h-8 m-auto" />
                        </div>
                        <div class="w-1/6 h-8 rounded-lg bg-vertPale my-auto"></div>  
                        <div class="rounded-full bg-vertPale h-12 w-12 flex align-center">
                            <img src="~/assets/check.svg" class="h-8 m-auto" />
                        </div>  
                        <div class="rounded-full bg-lightGray h-12 w-12 flex align-center">
                            <div class="h-8 w-8 m-auto  rounded-full bg-white flex align-center">
                              <div class="h-6 w-6 m-auto  rounded-full bg-lightGray">
                              </div>
                            </div>
                        </div>  
                        <div class="rounded-full bg-lightGray h-12 w-12 flex align-center">
                            <div class="h-8 w-8 m-auto  rounded-full bg-white flex align-center">
                              <div class="h-6 w-6 m-auto  rounded-full bg-lightGray">
                              </div>
                            </div>
                        </div>  
                    </div>
                    <div class="grid grid-cols-3 grid-rows-2 gap-3 w-full">
                      <div class="col-span-2 rounded-lg border-2 border-vertPale">
                        <h2 class="w-full text-center font-bold text-md">To do list</h2>

                        <div class="flex flex-col gap-2 px-8 my-8">
                          <div class="flex gap-4 rounded-3xl bg-lightGray">
                            <div class="text-center rounded-3xl bg-vertPale text-white w-24 py-2 font-bold">
                              <p class="text-2xl">14</p>
                              <p class="text-sm">décembre</p>
                            </div>
                            <div class="my-auto flex justify-between grow">
                              <div> 
                                <p class="font-bold">Je démenage</p>
                                <p>Envoyer sa lettre de préavis à son bailleur</p>
                              </div>
                              <img src="~/assets/check.svg" class="bg-vertPale rounded-full h-7 my-auto mr-4" />
                            </div>
                          </div>

                          <div class="flex gap-4 rounded-3xl bg-lightGray">
                            <div class="text-center rounded-3xl bg-vertPale text-white w-24 py-2 font-bold">
                              <p class="text-2xl">7</p>
                              <p class="text-sm">janvier</p>
                            </div>
                            <div class="my-auto flex justify-between grow">
                              <div> 
                                <p class="font-bold">Je démenage</p>
                                <p>Fixer une date d'état des lieux</p>
                              </div>
                              <img src="~/assets/check.svg" class="bg-vertPale rounded-full h-7 my-auto mr-4" />
                            </div>
                          </div>

                          <div class="flex gap-4 rounded-3xl bg-lightGray">
                            <div class="text-center rounded-3xl bg-vertPale text-white w-24 py-2 font-bold">
                              <p class="text-2xl">20</p>
                              <p class="text-sm">janvier</p>
                            </div>
                            <div class="my-auto flex justify-between grow">
                              <div> 
                                <p class="font-bold">Je démenage</p>
                                <p>Vérifier son éligibilité aux aides au déménagement</p>
                              </div>
                              <img src="~/assets/check.svg" class="bg-vertPale rounded-full h-7 my-auto mr-4" />
                            </div>
                          </div>
                          
                          <p class="text-right mt-6 font-semibold text-vertPale">
                            Voir plus >
                          </p>
                        </div>

                      </div>
                      <div class="col-start-3 rounded-lg border-2 border-melonOrange">
                        <h2 class="w-full text-center font-bold text-md">Rappels</h2>

                        <div class="flex flex-col gap-4 px-8 my-8">
                          <div class="flex gap-2 rounded-3xl bg-lightOrange">
                            <div class="text-center rounded-3xl bg-melonOrange text-white w-12 py-2 font-bold">
                              <p class="text-2xl">14</p>
                            </div>
                            <div class="my-auto flex justify-between grow text-xs">
                              <div> 
                                <p>Dans 2 jours n'oublie pas ton rdv avec ton conseiller</p>
                              </div>
                            </div>
                          </div>

                          <div class="flex gap-2 rounded-3xl bg-lightOrange">
                            <div class="text-center rounded-3xl bg-melonOrange text-white w-12 py-2 font-bold">
                              <p class="text-2xl">7</p>
                            </div>
                            <div class="my-auto flex justify-between grow text-xs">
                              <div> 
                                <p>Il te reste 2 documents à nous transmettre</p>
                              </div>
                            </div>
                          </div>

                          <div class="flex gap-2 rounded-3xl bg-lightOrange">
                            <div class="text-center rounded-3xl bg-melonOrange text-white w-12 py-2 font-bold">
                              <p class="text-2xl">20</p>
                            </div>
                            <div class="my-auto flex justify-between grow text-xs">
                              <div> 
                                <p>Penses à prévoir ton changement de box internet</p>
                              </div>
                            </div>
                          </div>
                          
                          <p class="text-right mt-6 font-semibold text-melonOrange">
                            Voir plus >
                          </p>
                        </div>


                      </div>
                      <div class="row-start-2 rounded-lg border-2 border-vertPale">
                        <h2 class="w-full text-center font-bold text-md">Mon calendrier personnalisé</h2>
                        <div class="w-full mt-8">
                          <VCalendar v-model="date" :attributes="attributes" expanded />
                        </div>
                        
                      </div>
                      <div class="row-start-2 rounded-lg border-2 border-melonOrange">
                        <h2 class="w-full text-center font-bold text-md">Temps d'appel restant</h2>
                      </div>
                      <div class="row-start-2 rounded-lg border-2 border-vertPale">
                        <h2 class="w-full text-center font-bold text-md">Prise de rendez-vous en ligne</h2>
                      </div>
                    </div>
                </div>
            
                
            </div>
        </div>
    </body>
    </template>

<script setup>
import { ref } from 'vue';

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const attributes = ref([
  {
    key: 'today',
    highlight: {
      color: 'purple',
      fillMode: 'solid',
      contentClass: 'italic',
    },
    dates: new Date(year, month, 12),
  },
  {
    highlight: {
      color: 'purple',
      fillMode: 'light',
    },
    dates: new Date(year, month, 13),
  },
  {
    highlight: {
      color: 'purple',
      fillMode: 'outline',
    },
    dates: new Date(year, month, 14),
  },
]);
</script>
    
    
    <!-- <script lang="ts">
    import { storeToRefs } from 'pinia';
    import { useAuthStore } from '~/stores/auth';
    var YOUTO_API = "http://localhost:2000/";
    import { ref } from 'vue';
    
    export default {
      setup() {
        const { userInfo } = storeToRefs(useAuthStore()); // make authenticated state reactive with

        console.log(userInfo)
        definePageMeta({
  middleware: ["auth"]
})
      },
    
      data() {
        return {
            userName: '',
          currentStep: 0,
          user: {
            name: '',
            surname: '',
            dob: '',
            mob: '',
            yob: '',
            tel: '',
            email: '',
            password: '',
            confirmPassword: '',
            city: '',
            cgu: false,
            newsletter: false,
          },
          noMatchConfirm: false,
          noMatchRegex: false,
          errorMessage: '',
          date: new Date(),
          attributes: ref([]) as Ref<{ key: string; highlight: { color: string; fillMode: string; contentClass: string }; dates: Date }[]>,
        };
      },
      methods: {
  
      },

      mounted: function() {
        const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
        this.attributes = ref([
  {
    key: 'today',
    highlight: {
      color: 'purple',
      fillMode: 'solid',
      contentClass: 'italic',
    },
    dates: new Date(year, month, 12),
  },
  {
    highlight: {
      color: 'purple',
      fillMode: 'light',
    },
    dates: new Date(year, month, 13),
  },
  {
    highlight: {
      color: 'purple',
      fillMode: 'outline',
    },
    dates: new Date(year, month, 14),
  },
]);
      }
    };
    </script> -->