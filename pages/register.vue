<template>

<body>
    <div class="h-screen flex mx-[11rem] mb-16">
      <div class=" w-full mt-16 ">
        <div class="flex flex-col w-3/5 gap-4" v-if="currentStep === 0">
          <h1 class="text-black font-bold text-4xl pb-2">Bienvenue chez YOUTO !</h1>
          <p class="text-sm pb-2">
            Inscris-toi pour créer un compte Youto, cela te permettras d’avoir…
          </p>
      <input
          v-model="user.email"
          type="email"
          class="border-2 border-gray-200 rounded-2xl py-3 pl-3"
          placeholder="Adresse email"
          name="uname"
          required
      />
          <button @click="nextStep"
            class="text-center uppercase shadow-lg cursor-pointer font-bold  block px-4 py-3 bg-vertPale text-white rounded-2xl hover:bg-white hover:text-vertPale">
            M'inscrire
        </button>

        </div>

        <div class="flex flex-col w-3/5 gap-4" v-if="currentStep === 1">
          <h1 class="text-black font-bold text-4xl pb-2">Inscription</h1>
          <p class="text-sm pb-2">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
          </p>
          <div class="flex justify-between w-full">
            <input
          v-model="user.name"
          type="email"
          class="border-2 border-gray-200 rounded-2xl py-3 pl-3"
          placeholder="Prénom"
          name="uname"
          required
      />
      <input
          v-model="user.surname"
          type="password"
          class="border-2 border-gray-200 rounded-2xl py-3 pl-3"
          placeholder="Nom"
          name="psw"
          required
      />
          </div>

          <p class="font-semibold text-sm">Date de naissance</p>
          <div class="flex justify-between w-full">
            
            <input
          v-model="user.dob"
          type="number"
          class="border-2 border-gray-200 rounded-2xl py-3 pl-3 w-28	"
          placeholder="Jour"
          name="uname"
          required
      />
      <input
          v-model="user.mob"
          type="number"
          class="border-2 border-gray-200 rounded-2xl py-3 pl-3 w-28"
          placeholder="Mois"
          name="psw"
          required
      />

      <input
          v-model="user.yob"
          type="number"
          class="border-2 border-gray-200 rounded-2xl py-3 pl-3 w-28"
          placeholder="Année"
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
          v-model="user.password"
          type="password"
          class="border-2 border-gray-200 rounded-2xl py-3 pl-3"
          placeholder="Mot de passe"
          name="psw"
          required
      />
      <input
          v-model="user.confirmpassword"
          type="password"
          class="border-2 border-gray-200 rounded-2xl py-3 pl-3"
          placeholder="Confirmer le mot de passe"
          name="psw"
          required
      />
      <div class="flex gap-3">
        <input
          v-model="user.cgu"
          type="checkbox"
          class="py-3 pl-3"
          name="psw"
          required
      />
      <p class="text-xs">
        J’accepte que Youto collecte et utilise les données renseignées, en accord avec leur <NuxtLink class="text-vertPale font-bold">CGU</NuxtLink> et <NuxtLink class="text-vertPale font-bold">Politique de confidentialité</NuxtLink>
      </p>
      </div>

      <div class="flex gap-3">
        <input
          v-model="user.newsletter"
          type="checkbox"
          class="py-3 pl-3"
          name="psw"
          required
      />
      <p class="text-xs">
        J’accepte la newsletter pour <span class="text-vertPale font-bold">bénéficier de -10% sur mon prochain abonnement pendant 1 mois</span>
      </p>
      </div>



          <button @click.prevent="submitForm"
            class="text-center uppercase shadow-lg cursor-pointer font-bold  block px-4 py-3 bg-vertPale text-white rounded-2xl hover:bg-white hover:text-vertPale">
            Créer mon compte
          </button>

          <div class="flex gap-2"> 
            <p class="text-sm">
            J'ai déjà un compte ?
          </p>

          <NuxtLink class="text-sm text-vertPale font-bold">
            Je me connecte !
          </NuxtLink>
          </div>

        </div>
      </div>

      <div class=" w-1/2 mt-16 ">

      </div>
    </div>
</body>
</template>


<script lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/stores/auth';
var YOUTO_API = "http://localhost:2000/";

export default {
  setup() {
    const { authenticateUser } = useAuthStore();
    const { authenticated } = storeToRefs(useAuthStore());

    const router = useRouter();
  },

  data() {
    return {
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
        confirmpassword: '',
        city: '',
        cgu: false,
        newsletter: false,
      }
    };
  },
  methods: {
    nextStep() {
      if (this.currentStep < 3) {
        this.currentStep++;
      }
    },
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
    async submitForm() {
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
      // Logique de soumission du formulaire
    },
  },
};
</script>