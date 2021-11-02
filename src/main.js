import { createApp } from 'vue'
import VotingHome from '@/views/VotingHome.vue'
import router from './router'
import store from './store'

createApp(VotingHome).use(store).use(router).mount('#app')
