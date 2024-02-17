<template>
    <div class="h-screen flex justify-center ">
      <div class="flex flex-row justify-center items-center mx-24">
        <div class="flex flex-col gap-6">
          <titlegroup title="Je déménage, que dois-je faire ?" subtitle="Facilitez votre déménagement" no-margin/>
          <div class="w-3/4 text-sm"> 
            Chez YOUTO, nous comprenons que déménager peut être une source de stress et de confusion, avec une multitude de démarches à effectuer et de documents à gérer. C’est pourquoi nous avons créé une plateforme qui vous guide à chaque étape de votre déménagement, pour que vous puissiez vous concentrer sur l’essentiel : votre nouvelle vie dans votre nouveau chez-vous.
          </div>
          <NuxtLink
          to="/etapes"
            class="w-1/3 text-center shadow-md cursor-pointer font-bold  block px-4 py-3 bg-melonOrange border-2 border-melonOrange text-white rounded-2xl hover:bg-white hover:text-melonOrange">
            Voir les démarches
          </NuxtLink>
        </div>
          <img class="w-1/2 z-1" src="~/assets/demenagement.png"/>
      </div>
    </div>
    <div class="mx-auto w-3/5 mb-36">
            <h2 class="text-black font-bold text-4xl mb-8">FAQ</h2>
            <question question="Quels organismes dois-je informer de mon changement d’adresse ?" reponse="Si tu changes d’adresse clique ici pour en savoir plus"/>
            <question question="Quels documents dois-je fournir pour justifier mon changement d’adresse ?" reponse="Pour créer votre compte, il vous suffit de cliquer ici. Sinon, vous pouvez aussi créer votre compte lors de votre achat."/>
            <question question="Y a-t-il des frais à payer pour mettre à jour mon adresse ?" reponse="Pour créer votre compte, il vous suffit de cliquer ici. Sinon, vous pouvez aussi créer votre compte lors de votre achat."/>

    </div>
</template>

<script>

</script>