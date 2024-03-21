<template>
    <div class="w-full h-full sm:h-80 bg-vertPale">
         <div class="flex flex-col sm:flex-row justify-around gap-6 sm:gap-0 px-4 sm:px-0 pt-6 sm:pt-16"> 
            <div> 
                <span class="uppercase font-bold text-xl text-white">Coordonnées</span>
                <ul class="mt-6 text-white font-light	">
                    <li>
                        Campus de Ker Lann
                    </li>
                    <li>
                        Rue Pierre de Maupertuis
                    </li>
                    <li>
                        35170 Bruz
                    </li>
                    <li>
                        02 99 78 63 91
                    </li>
                    <li>
                       contact@youto.com
                    </li>
                </ul>
            </div>
            <div> 
                <span class="uppercase font-bold text-xl text-white">Navigation</span> 
                <ul class="mt-6 text-white font-light	">
                    <li>
                        Qui sommes-nous ?
                    </li>
                    <li>
                        Notre accompagnement
                    </li>
                    <li>
                        Mon compte
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
            </div>
            <div> 
                <span class="uppercase font-bold text-xl text-white">FAQ</span>
            </div>
            <div> 
                <NuxtLink to="/" class="">
                    <img src="~/assets/logo.png" class="h-14 mx-auto sm:mx-0 sm:mr-3" />
                </NuxtLink>
                <div class=" mt-6 flex flex-row gap-6 justify-center"> 
                    <img src="~/assets/facebook.png" class="h-6 mr-3" />
                    <img src="~/assets/insta.png" class="h-6 mr-3" />
                    <img src="~/assets/tiktok.png" class="h-6 mr-3" />
                </div>


            </div>
         </div>
         <div class="text-center"> 
            <span class="text-sm">© 2023 YOUTO</span>
         </div>
    </div>
</template>