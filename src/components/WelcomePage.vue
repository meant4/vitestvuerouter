<script setup>
import { useRouter } from 'vue-router'
import { useStore } from '../stores/index.js'
import { computed } from 'vue'

const store = useStore()
const router = useRouter()

const userId = store.userId
const userName = store.userName

const buttonText = computed(() => {
  return userId ? "Go to profile" : "Create account"
})

function onClick() {
  if (userId) {
    router.push({
      name: 'User',
      params: { userId: userId },
      query: {
        name: userName,
      },
    })
  } else {
    router.push({
      name: 'CreateAccount',
    })
  }
}
</script>

<template>
  <div>
    <h1>Welcome to our website!</h1>
    <button @click="onClick">{{ buttonText }}</button>
  </div>
</template>
