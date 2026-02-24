import { defineStore } from 'pinia'

const useRouteCacheStore = defineStore('route-cache', () => {
  const routeCaches = ref([])

  const addRoute = (route) => {
    if (routeCaches.value.includes(route.name))
      return

    if (route?.meta?.keepAlive)
      routeCaches.value.push(route.name)
  }

  return {
    routeCaches,
    addRoute,
  }
})

export default useRouteCacheStore
