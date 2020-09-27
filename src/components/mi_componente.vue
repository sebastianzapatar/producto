<template>
    <div id="mi_componente">
        <h1>Este es mi componente</h1>
        <h2>{{subtitulo}}</h2>
    </div>
</template>
<script>
export default {
    name:'mi_componente',
    data(){
        return{
            subtitulo:"No sé que poner no tengo ideas :P"
        }
    }
}
</script>