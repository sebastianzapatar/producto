<template>
    <div class="center">
        <h2>Esto es reactividad </h2>
        <input type="text" v-model="nombre"/><br/>
        Mi nombre es <strong>{{nombre}}</strong>
    </div>
</template>
<script>
export default {
    name:"Blog",
    data(){
        return{
            nombre:''
        }
    }
}
</script>