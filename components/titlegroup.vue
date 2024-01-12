<template>
      <div :class="noMargin ? '' : 'mb-12'"> 
            <h2 class=" font-bold uppercase text-sm" :class="orange ? 'text-melonOrange' : 'text-vertPale'">{{title}}</h2>
          <h3 class="text-black font-bold text-3xl">{{subtitle}}</h3>
    </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  orange: {
    type: Boolean,
    default: false
  },
  noMargin: {
    type: Boolean,
    default: false
  },
});
</script>