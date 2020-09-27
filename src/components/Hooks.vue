<template>
    <div id="Hooks">
        <h1>Soy el componente de los Hooks</h1>
    </div>
</template>

<script>
export default {
    name:"Hooks",
    created(){//Cuando se crea el componente
        console.log("Se creo");
    },
    mounted(){//Se termina de cargar
        console.log("Componente acabó de cargar")
    },
    updated(){//Se actualizo el componente
        console.log("Componente actualizado")
    },
    destroyed(){//Cuando se sale del componente
        console.log("Suerte les dice el componente")
    }
}
</script>
