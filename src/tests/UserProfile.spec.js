import { describe, it, expect, beforeEach } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import router from '../router'
import { createRouter, createWebHistory } from 'vue-router'
import UserProfile from '../components/UserProfile.vue'

// create local router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/user',
      name: 'User',
      component: UserProfile,
    },
  ]
})

router.currentRoute.value.query = {
  name: 'Jenifer'
}

describe('UserProfile', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(UserProfile, {
      global: {
        plugins: [router],
      },
    })
  })

  it('userName should return route query name value', async () => {
    expect(wrapper.vm.userName).toEqual('Jenifer')
    expect(wrapper.html()).toContain('Welcome Jenifer!')
  })
})
