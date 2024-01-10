<template>
    <div class="w-full h-80 bg-vertClair">
         <div class="flex flex-row justify-around pt-16"> 
            <div> 
                <span class="uppercase font-bold text-xl">Coordonnées</span>
                <ul class="mt-6">
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
                <span class="uppercase font-bold text-xl">Navigation</span> 
                <ul class="mt-6">
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
                <span class="uppercase font-bold text-xl">FAQ</span>
            </div>
            <div> 
                <NuxtLink to="/" class="">
                    <img src="~/assets/youtovtf.png" class="h-14 mr-3" />
                </NuxtLink>
                <div class=" mt-6 flex flex-row gap-6 justify-center"> 
                    <img src="~/assets/facebook.svg" class="h-6 mr-3" />
                    <img src="~/assets/Instagram.svg" class="h-6 mr-3" />
                    <img src="~/assets/TikTok.svg" class="h-6 mr-3" />
                </div>


            </div>
         </div>
         <div class="text-center"> 
            <span class="text-sm">© 2023 YOUTO</span>
         </div>
    </div>
</template>