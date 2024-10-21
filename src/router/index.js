import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '../components/WelcomePage.vue'
import UserProfile from '../components/UserProfile.vue'
import CreateAccount from '../components/CreateAccount.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: WelcomePage
    },
    {
      path: '/user',
      name: 'User',
      component: UserProfile
    },
    {
      path: '/account',
      name: 'CreateAccount',
      component: CreateAccount
    }
  ]
})

export default router


