<template>
    <div class="center">
        <h1>Ciclos en vue.js</h1>
        <ul v-for="pelicula in peliculas" :key="pelicula.title">
            <h2>{{pelicula.title}}</h2>
            <h3>Año de lanzamiento {{pelicula.year}}</h3>
            
            <iframe width="560" height="315" :src="pelicula.image" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
        </ul>
    </div>
</template>
<script>
export default {
    name:"Ejemplo",
    data(){
        return{
            peliculas:[
                {title:"Back to the future 2",year:1989,image:"https://www.youtube.com/embed/TkyLnWm1iCs"},
                {title:"Footloose",year:1984,image:"https://www.youtube.com/embed/kK2hpeqkYjA"},
                

            ]
        }
    }
}
</script>