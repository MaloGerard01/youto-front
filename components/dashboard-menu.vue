<template>
    <nav class="w-1/5 bg-lighterGray h-90 sticky flex justify-center">
            <ul class="font-semibold text-lg flex flex-col gap-6 mt-12">
            <li>
              <NuxtLink to="/dashboard" class="">Accueil</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/profile" class="">Mon profil</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs" >Mes documents</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/todolist" >To do List</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/rappels" >Rappels</NuxtLink>
            </li>
          </ul>
    </nav>
</template>