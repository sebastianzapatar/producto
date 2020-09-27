<template>
    <div class="center">
        <h1>Listado de películas</h1>
        <div v-for="pelicula in peliculas" :key="pelicula.title">
            <Pelicula :pelicula="pelicula"></Pelicula>
        </div>    
    </div>
</template>
<script>
import Pelicula from './Pelicula.vue'
export default {
    components:{
        Pelicula,
    },
    data(){
        return{
            peliculas:[
                {title:"Back to the future 2",year:1989,image:"https://www.youtube.com/embed/TkyLnWm1iCs"},
                {title:"Footloose",year:1984,image:"https://www.youtube.com/embed/kK2hpeqkYjA"},
            ]
        }
    },
}
</script>