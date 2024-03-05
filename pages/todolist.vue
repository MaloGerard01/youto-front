<template>
    
    <body>
        <div class="h-full flex w-screen bg-white">
            <dashboardMenu/>
            <div class="mx-20 grow pb-16">
            <div class="mt-16 flex flex-col gap-4 justify-left">
                    <p class="font-bold text-3xl">To do list</p>
                    <button>Nouvelle tâche</button>
            </div>

            <div class="flex flex-col gap-4 my-8">
                          <div class="flex gap-4 rounded-3xl bg-lighterGray">
                            <div class="text-center rounded-3xl bg-vertPale text-white w-24 py-2 font-bold">
                              <p class="text-2xl">14</p>
                              <p class="text-sm">décembre</p>
                            </div>
                            <div class="my-auto flex justify-between grow">
                              <div> 
                                <p>Envoyer sa lettre de préavis à son bailleur</p>
                              </div>
                              <img src="~/assets/check.svg" class="bg-vertPale rounded-full h-7 my-auto mr-4" />
                            </div>
                          </div>

                          <div class="flex gap-4 rounded-3xl bg-lighterGray">
                            <div class="text-center rounded-3xl bg-vertPale text-white w-24 py-2 font-bold">
                              <p class="text-2xl">7</p>
                              <p class="text-sm">janvier</p>
                            </div>
                            <div class="my-auto flex justify-between grow">
                              <div> 
                                <p>Fixer une date d'état des lieux</p>
                              </div>
                              <img src="~/assets/check.svg" class="bg-vertPale rounded-full h-7 my-auto mr-4" />
                            </div>
                          </div>

                          <div class="flex gap-4 rounded-3xl bg-lighterGray">
                            <div class="text-center rounded-3xl bg-vertPale text-white w-24 py-2 font-bold">
                              <p class="text-2xl">20</p>
                              <p class="text-sm">janvier</p>
                            </div>
                            <div class="my-auto flex justify-between grow">
                              <div> 
                                <p>Vérifier son éligibilité aux aides au déménagement</p>
                              </div>
                              <img src="~/assets/check.svg" class="bg-vertPale rounded-full h-7 my-auto mr-4" />
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
          user: {
            name: '',
            surname: '',
            date: '',
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
        };
      },
      methods: {
    passwordCheck() {
      if(this.user.password == this.user.confirmPassword)
      {
        const regex = /^(?=.*[A-Z])(?=.*[\W])(?=.*[0-9])(?=.*[a-z]).{8,128}$/;

        if(this.user.password.match(regex))
        {
          this.noMatchConfirm = false
          this.noMatchRegex = false
          return true
        }
        else
        {
          this.noMatchConfirm = false
          this.noMatchRegex = true
        } 
      }
      else
      {
        this.noMatchConfirm = true
        this.noMatchRegex = false
      }
      return false
    },
    async submitForm() {
      if(this.passwordCheck()) {
      const settings = { method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(this.user)
            };
            const response = await fetch( YOUTO_API + "register",
                settings
            );
      console.log(this.user);
      }

    },
  },
    };
    </script>