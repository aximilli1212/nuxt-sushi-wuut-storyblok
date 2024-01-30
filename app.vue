<script setup lang="ts">
   const story = await useStoryblok('home', {version: 'draft'})
</script>


<template>
  <div>
    <TheHeader />
    <pre>
      {{story}}
    </pre>
  </div>
</template>
