<template>
    
    <body>
        <div class="h-full flex w-screen bg-white">
            <dashboardMenu/>
            <div class="mx-20 grow">
                <div class="mt-16 flex flex-col gap-4 justify-center">
                    <p class="font-bold text-3xl">Mon profil</p>
                    <p>Gérez vos informations personnelles...</p>
                </div>

                <div class="flex gap-12 mt-4">
                    <div class="flex flex-col w-3/5 gap-4">
                    
                    <p class="font-bold">Informations personnelles</p>
                    <input
                  v-model="user.email"
                  type="email"
                  class="border-2 border-gray-200 rounded-2xl py-3 pl-3"
                  placeholder="Adresse mail"
                  name="psw"
                  required
              />
                  <div class="flex gap-6 w-full">
                    <input
                  v-model="user.name"
                  type="text"
                  class="border-2 border-gray-200 rounded-2xl py-3 pl-3 w-full"
                  placeholder="Prénom"
                  name="uname"
                  required
              />
              <input
                  v-model="user.surname"
                  type="text"
                  class="border-2 border-gray-200 rounded-2xl py-3 pl-3 w-full"
                  placeholder="Nom"
                  name="psw"
                  required
              />
                  </div>
        
                  <input
                  v-model="user.city"
                  type="text  "
                  class="border-2 border-gray-200 rounded-2xl py-3 pl-3"
                  placeholder="Ville"
                  name="psw"
                  required
              />
        
              <input
                  v-model="user.tel"
                  type="phone"
                  class="border-2 border-gray-200 rounded-2xl py-3 pl-3"
                  placeholder="Téléphone"
                  name="psw"
                  required
              />
        
              <input
                  v-model="user.date"
                  type="date"
                  class="border-2 border-gray-200 rounded-2xl py-3 pl-3"
                  placeholder="Date de naissance"
                  name="psw"
                  required
              />
              
                </div>

                <div class="flex flex-col w-3/5 gap-4">
                    
                    <p class="font-bold">Changer de mot de passe</p>

                    <input
                  v-model="user.password"
                  type="password"
                  class="border-2 border-gray-200 rounded-2xl py-3 pl-3"
                  placeholder="Mot de passe actuel"
                  name="psw"
                  required
              />
        
              <input
                  v-model="user.password"
                  type="password"
                  class="border-2 border-gray-200 rounded-2xl py-3 pl-3"
                  placeholder="Nouveau mot de passe"
                  name="psw"
                  required
              />
              <input
                  v-model="user.confirmPassword"
                  type="password"
                  class="border-2 border-gray-200 rounded-2xl py-3 pl-3"
                  placeholder="Confirmer le mot de passe"
                  name="psw"
                  required
              />

              <p class="font-bold">Suppression du compte</p>

              <p class="text-sm">Membre depuis 2022</p>

              <button class="text-left text-sm text-vertPale font-semibold">Supprimer mon compte</button>
              
                </div>
                </div>


        

        
        <div class="w-full m-auto flex justify-center mt-10"> 
            <button @click.prevent="submitForm"
            class="text-center w-2/5 uppercase shadow-lg cursor-pointer font-bold  block px-4 py-3 bg-vertPale text-white rounded-2xl hover:bg-white hover:text-vertPale">
            Enregistrer
          </button>
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