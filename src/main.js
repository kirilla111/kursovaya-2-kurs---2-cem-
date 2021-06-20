import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// Vue.use(VueGmaps, {
//   key: 'AIzaSyC35g-7eOThVeuGrYcnq7eJ3OvJcZ3Cddc'
// })
//Vue.config.productionTip = false
// .use(VueGmaps, {
//     key: 'AIzaSyC35g-7eOThVeuGrYcnq7eJ3OvJcZ3Cddc'
//   }).

createApp(App).use(store).use(router).mount('#app')

// router.onError((error) => {
//     const pattern = /Loading chunk (\d)+ failed/g;
//     const isChunkLoadFailed = error.message.match(pattern);
//     const targetPath = router.history.pending.fullPath;
//     if (isChunkLoadFailed) {
//     router.replace(targetPath);
//     }
// });