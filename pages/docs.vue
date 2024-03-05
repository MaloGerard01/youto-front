<template>
    
    <body>
        <div class="h-full flex w-screen bg-white">
            <dashboardMenu/>
            <div class="mx-20 grow pb-16">
            <div class="mt-16 flex flex-col gap-4 justify-center">
                    <p class="font-bold text-3xl">Mes Documents</p>
                    <p class="font-semibold">Déménagement</p>
            </div>

            <div class="flex flex-col gap-4 my-8">
                          <div class="flex gap-4 rounded-3xl bg-lighterGray">
                            <div class="my-auto flex justify-between grow">
                              <div class="my-auto ml-6"> 
                                <p class="font-semibold">Pièce d’identité</p>
                              </div>
                              <div class="flex gap-6"> 
                                <div class="text-center rounded-3xl bg-vertPale text-white px-2 py-3 font-bold">
                                <p class="text-lg">Modifier</p>
                              </div>
                              <div class="text-center rounded-3xl bg-vertPale text-white px-2 py-3 font-bold">
                                <p class="text-lg">Supprimer</p>
                              </div>
                              </div>
                            </div>
                          </div>

                          <div class="flex gap-4 rounded-3xl bg-lighterGray">
                            <div class="my-auto flex justify-between grow">
                              <div class="my-auto ml-6"> 
                                <p class="font-semibold">Pièce d’identité</p>
                              </div>
                              <div class="flex gap-6"> 
                              <div class="text-center rounded-3xl bg-vertPale text-white px-2 py-3 font-bold">
                                <p class="text-lg">Télécharger</p>
                              </div>
                              </div>

                            </div>
                          </div>


                          <div class="flex gap-4 rounded-3xl bg-lighterGray">
                            <div class="my-auto flex justify-between grow">
                              <div class="my-auto ml-6"> 
                                <p class="font-semibold">Contrat de location actuel</p>
                              </div>
                              <div class="flex gap-6"> 
                              <div class="text-center rounded-3xl bg-vertPale text-white px-2 py-3 font-bold">
                                <p class="text-lg">Télécharger</p>
                              </div>
                              </div>
                            </div>
                          </div>

                          <div class="flex gap-4 rounded-3xl bg-lighterGray">
                            <div class="my-auto flex justify-between grow">
                              <div class="my-auto ml-6"> 
                                <p class="font-semibold">Attestation de déménagement</p>
                              </div>
                              <div class="flex gap-6"> 
                              <div class="text-center rounded-3xl bg-vertPale text-white px-2 py-3 font-bold">
                                <p class="text-lg">Télécharger</p>
                              </div>
                              </div>
                            </div>
                          </div>

                          <div class="flex gap-4 rounded-3xl bg-lighterGray">
                            <div class="my-auto flex justify-between grow">
                              <div class="my-auto ml-6"> 
                                <p class="font-semibold">Assurance habitation</p>
                              </div>
                              <div class="flex gap-6"> 
                                <div class="text-center rounded-3xl bg-vertPale text-white px-2 py-3 font-bold">
                                <p class="text-lg">Modifier</p>
                              </div>
                              <div class="text-center rounded-3xl bg-vertPale text-white px-2 py-3 font-bold">
                                <p class="text-lg">Supprimer</p>
                              </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="mt-16 flex flex-col gap-4 justify-center">
                    <p class="font-semibold">Services</p>

                    <div class="flex flex-col gap-4 my-8">
                          <div class="flex gap-4 rounded-3xl bg-lighterGray">
                            <div class="my-auto flex justify-between grow">
                              <div class="my-auto ml-6"> 
                                <p class="font-semibold">Contrat d’énergie</p>
                              </div>
                              <div class="flex gap-6"> 
                                <div class="text-center rounded-3xl bg-vertPale text-white px-2 py-3 font-bold">
                                <p class="text-lg">Modifier</p>
                              </div>
                              <div class="text-center rounded-3xl bg-vertPale text-white px-2 py-3 font-bold">
                                <p class="text-lg">Supprimer</p>
                              </div>
                              </div>
                            </div>
                          </div>


                          <div class="flex gap-4 rounded-3xl bg-lighterGray">
                            <div class="my-auto flex justify-between grow">
                              <div class="my-auto ml-6"> 
                                <p class="font-semibold">Contrat internet</p>
                              </div>
                              <div class="flex gap-6"> 
                                <div class="text-center rounded-3xl bg-vertPale text-white px-2 py-3 font-bold">
                                <p class="text-lg">Modifier</p>
                              </div>
                              <div class="text-center rounded-3xl bg-vertPale text-white px-2 py-3 font-bold">
                                <p class="text-lg">Supprimer</p>
                              </div>
                              </div>
                            </div>
                          </div>

                          <div class="flex gap-4 rounded-3xl bg-lighterGray">
                            <div class="my-auto flex justify-between grow">
                              <div class="my-auto ml-6"> 
                                <p class="font-semibold">Contrat de téléphone</p>
                              </div>
                              <div class="flex gap-6"> 
                              <div class="text-center rounded-3xl bg-vertPale text-white px-2 py-3 font-bold">
                                <p class="text-lg">Télécharger</p>
                              </div>
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