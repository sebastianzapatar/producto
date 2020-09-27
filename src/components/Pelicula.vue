<template>
    <div class="center">
        <h2>{{pelicula.title}}</h2>
        <h3>Año de lanzamiento {{pelicula.year}}</h3> 
        <iframe width="560" height="315" :src="pelicula.image" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</template>
<script>
export default {
    name:"Pelicula",
    props:['pelicula'],
}
</script>