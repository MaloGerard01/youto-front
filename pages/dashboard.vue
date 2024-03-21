<template>
    
    <body>
        <div class="h-full flex w-screen bg-white">
            <dashboardMenu/>
            <div class="mx-20 grow">
                <div class="mt-16 flex flex-col gap-4 justify-center">
                    <p class="font-bold text-3xl">Bonjour <span class="text-vertPale">{name},</span></p>
                    <p>Gérez vos informations, ainsi que la confidentialité et la sécurité de vos données pour profiter au mieux des services YOUTO.</p>
                    <p>Que souhaitez-vous faire aujourd'hui ?</p>
                </div>

                <div class="mx-10">
                  <div class="w-full flex justify-center mt-10 mb-32">
                    <progress-bar/>
                  </div>
        
                    <div class="grid grid-cols-3 grid-rows-2 gap-3 w-full my-8">
                      <div class="col-span-2 rounded-lg border-2 border-vertPale h-5/6">
                        <h2 class="w-full text-center font-bold text-md my-4">To do list</h2>

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
                      <div class="col-start-3 rounded-lg border-2 border-melonOrange h-5/6">
                        <h2 class="w-full text-center font-bold text-md my-4">Rappels</h2>

                        <div class="flex flex-col gap-4 px-8 my-8">
                          <div class="flex gap-2 rounded-3xl bg-lightOrange">
                            <div class="text-center rounded-2xl bg-melonOrange text-white w-16 py-3 px-1 font-bold">
                              <img src="~/assets/bell.svg" class="h-full m-auto"/>
                            </div>
                            <div class="my-auto mr-6 flex justify-between grow text-xs">
                              <div> 
                                <p>Dans 2 jours n'oublie pas ton rdv avec ton conseiller</p>
                              </div>
                            </div>
                          </div>

                          <div class="flex gap-2 rounded-3xl bg-lightOrange">
                            <div class="text-center rounded-2xl bg-melonOrange text-white w-14 py-3 px-1 font-bold">
                              <img src="~/assets/bell.svg" class="h-full m-auto"/>
                            </div>
                            <div class="my-auto mr-6 flex justify-between grow text-xs">
                              <div> 
                                <p>Il te reste 2 documents à nous transmettre</p>
                              </div>
                            </div>
                          </div>

                          <div class="flex gap-2 rounded-3xl bg-lightOrange">
                            <div class="text-center rounded-2xl bg-melonOrange text-white w-16 py-3 px-1 font-bold">
                              <img src="~/assets/bell.svg" class="h-full m-auto"/>
                            </div>
                            <div class="my-auto mr-6 flex justify-between grow text-xs">
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
                        <h2 class="w-full text-center font-bold text-md my-4">Mon calendrier personnalisé</h2>
                        <div class="w-full mt-8">
                          <VCalendar v-model="date" :attributes="attributes" expanded transparent borderless />
                          <div class="flex flex-col gap-3 mx-8"> 
                            <div class="flex flex-row gap-2">
                              <div class="rounded-full bg-melonOrange p-3"></div>
                              <p>Date du jour</p>
                            </div>
                            <div class="flex flex-row gap-2">
                              <div class="rounded-full bg-vertPale p-3"></div>
                              <p>Prochain événement important</p>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                      <div class="row-start-2 rounded-lg border-2 border-melonOrange">
                        <h2 class="w-full text-center font-bold text-md my-4">Temps d'appel restant</h2>
                        <RadialProgressBar />
                        <p class="text-center my-4">Il te reste 45 minutes d'appel ce mois-ci</p>
                      </div>
                      <div class="row-start-2 rounded-lg border-2 border-vertPale">
                        <h2 class="w-full text-center font-bold text-md my-4">Prise de rendez-vous en ligne</h2>
                        <div class="px-8 my-8">
                          <p class="mb-6 text-md">Voici les prochaines disponibilités de ton conseiller</p>

                        <div class="flex flex-col gap-16 ">
                            <div class="flex flex-col gap-3">
                              <div class="flex justify-between w-full">
                                <p class="w-1/3 text-center">Matin</p>
                                <div class="flex gap-3 grow px-4">
                                  <p class="bg-vertPale px-4 py-1 w-full text-center rounded-2xl text-white text-md">Lun. 04</p>
                                </div>
                              </div>

                              <div class="flex justify-between w-full">
                                <p class="w-1/3 text-center">Après-midi</p>
                                <div class="flex gap-3 grow px-4">
                                  <p class="bg-vertPale px-4 py-1 w-full text-center rounded-2xl text-white text-md">Lun. 04</p>
                                </div>
                              </div>
                          </div>


                          <div class="flex flex-col gap-3">
                            <div class="flex justify-between w-full">
                              <p class="w-1/3 text-center">Matin</p>
                              <div class="flex gap-3 grow px-4">
                                <p class="bg-vertPale px-4 py-1 w-full text-center rounded-2xl text-white text-md">Lun. 04</p>
                              </div>
                            </div>

                            <div class="flex justify-between w-full">
                              <p class="w-1/3 text-center">Après-midi</p>
                              <div class="flex gap-3 grow px-3">
                                <p class="bg-vertPale py-1 w-full text-center rounded-2xl text-white text-md">Lun. 04</p>
                                <p class="bg-vertPale py-1 w-full text-center rounded-2xl text-white text-md">Lun. 04</p>

                              </div>
                            </div>
                          </div>
                        </div>
                        <p class="text-right mt-6 font-semibold text-vertPale">
                            Voir plus >
                          </p>
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
        // const { userInfo } = storeToRefs(useAuthStore()); // make authenticated state reactive with

        // console.log(userInfo)
//         definePageMeta({
//   middleware: ["auth"]
// })
      },
    
      data() {
        return {
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
const day = date.getDate();
        this.attributes = ref([
  {
    highlight: {
      color: 'melonOrange',
      fillMode: 'outline',
    },
    dates: new Date(year, month, day),
  },
  {
    highlight: {
      color: 'vertPale',
      fillMode: 'outline',
    },
    dates: new Date(year, month, day + 1),
  },
]);
      }
    };
    </script>

    <style>
    .vc-melonOrange {
  --vc-accent-50: #f39454;
  --vc-accent-100: #f39454;
  --vc-accent-200: #f39454;
  --vc-accent-300: #f39454;
  --vc-accent-400: #f39454;
  --vc-accent-500: #f39454;
  --vc-accent-600: #f39454;
  --vc-accent-700: #f39454;
  --vc-accent-800: #f39454;
  --vc-accent-900: #f39454;
}

.vc-vertPale {
  --vc-accent-50: #8d9e7e;
  --vc-accent-100: #8d9e7e;
  --vc-accent-200: #8d9e7e;
  --vc-accent-300: #8d9e7e;
  --vc-accent-400: #8d9e7e;
  --vc-accent-500: #8d9e7e;
  --vc-accent-600: #8d9e7e;
  --vc-accent-700: #8d9e7e;
  --vc-accent-800: #8d9e7e;
  --vc-accent-900: #8d9e7e;
}
    </style>