<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const userName = computed(() => {
  return route.query.name
})
</script>

<template>
  <h1 class="welcome-message">Welcome {{ userName }}!</h1>
</template>
