import { useRoute } from 'vue-router'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import router from '@/router'

export const usePaginationStore = defineStore('pagination', () => {
  const route = useRoute()
  const pageV = ref(route.query.page ? route.query.page : 0)
  const searchV = ref(route.query.search)

  const setRoutePage = page => {
    const query = { ...route.query, page }
    router.replace({ path: route.path, query })
    console.log(page)
  }

  const setRouteSearch = search => {
    const query = { ...route.query, search }
    router.replace({ path: route.path, query })
    searchV.value = search
  }
  return {
    pageV,
    searchV,
    setRoutePage,
    setRouteSearch,
  }
})
