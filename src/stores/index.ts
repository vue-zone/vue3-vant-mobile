import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import useUserStore from './modules/user'
import useCounterStore from './modules/counter'
import useRouteCacheStore from './modules/routeCache'
import useThemeStore from './modules/theme'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export { useUserStore, useCounterStore, useRouteCacheStore, useThemeStore }
export default pinia
