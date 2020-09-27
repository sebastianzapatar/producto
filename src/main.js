import 'bootstrap'
import 'vue-moment'
import 'bootstrap/dist/css/bootstrap.css'
import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import ComponentePrueba from './components/Componenteprueba.vue'
import Hooks from './components/Hooks.vue'
import Blog from './components/Blog.vue'
import Pelicula from './components/Pelicula.vue'
import Formulario from './components/Formulario.vue'
import ErrorComponent from './components/ErrorComponent.vue'
import Editar from './components/Editar.vue'
import VueMoment from 'vue-moment';
Vue.config.productionTip = false
Vue.use(Router)

Vue.use(VueMoment)
const routes=[//Acá van nuestras rutas
  {path:'/',component:ComponentePrueba},
  {path:'/home/',component:ComponentePrueba},
  {path:'/hooks',component:Hooks},
  {path:'/blog',component:Blog},
  {path:'/ejemplo',component:Pelicula},
  {path:'/insertar',component:Formulario},
  {path:'/editar/:id',component:Editar},
  {path:'*',component:ErrorComponent},//Siempre vaya al final de todo
]
const router=new Router({
  routes,
  mode:'history'
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
