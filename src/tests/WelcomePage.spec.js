import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import { useStore } from '../stores/index.js'
import router from '../router'
import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '../components/WelcomePage.vue'

// create local router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: WelcomePage,
    },
  ],
})

describe('WelcomePage', () => {
  let pinia
  let wrapper

  beforeEach(() => {
    // creating a pinia instance
    pinia = createPinia()
    setActivePinia(pinia)
  })

  it('redirect user to User page', async () => {
    const push = vi.spyOn(router, 'push')
    const store = useStore()
    store.userName = 'Jenifer'
    store.userId = 12345
    wrapper = mount(WelcomePage, {
      global: {
        plugins: [router],
      },
    })

    wrapper.vm.onClick()

    expect(push).toHaveBeenCalledTimes(1)
    expect(push).toHaveBeenCalledWith({
      name: 'User',
      params: { userId: 12345 },
      query: {
        name: 'Jenifer',
      },
    })
  })

  it('redirect user to CreateAccount page', async () => {
    const push = vi.spyOn(router, 'push')
    const store = useStore()
    store.userName = null
    store.userId = null

    wrapper = mount(WelcomePage, {
      global: {
        plugins: [router],
      },
    })

    wrapper.vm.onClick()
    expect(push).toHaveBeenCalledTimes(1)
    expect(push).toHaveBeenCalledWith({
      name: 'CreateAccount',
    })
  })
})
