<template>
      <div class="mb-12"> 
            <h2 class="text-vertPale font-bold uppercase text-sm">{{title}}</h2>
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
});
const { review } = props;
</script>