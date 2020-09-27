<template>
    <div id="Prueba">
        <h1>Listar productos</h1>
        <div class="center" v-for="producto in productos" :key="producto.id">
            <h2>{{producto.nombre}}</h2>
            <h4>{{producto.descripcion}}</h4>
            <div v-if="producto.imagen">
                    <img :src="'http://localhost:2020/obtener-imagen/'+producto.imagen" width="80"/>
            </div>
            <div v-else>
                    <img src="https://i.pinimg.com/originals/81/69/5c/81695c9b2a40ab4c076ce95e0481b106.gif"
                    width="80"/>
            </div>
            <h4>{{producto.date | moment('from','now')}}</h4>
            <router-link :to="'/editar/'+producto._id" class="btn btn-warning">Editar </router-link>
            <a @click="deleteProducto(producto._id)" class="btn btn-danger">Eliminar </a>
        </div>
    </div>
</template>
<script>
import Global from '../Global/global'
import Axios from 'axios'

export default {
   
     name:'ComponentePrueba',
      mounted(){
        this.getProductos();
    },
    methods:{
        deleteProducto(productoId){
            Axios.delete(this.url+'borrar/'+productoId).then(res=>{
                if(res.data){
                    console.log("Eliminado");
                }
            }).catch(err=>{
                console.log(err);
            })
        },
        mostrarproducto(){
            console.log(this.producto)
        },
        getProductos(){
            Axios.get(this.url+'listar').then(res=>{
                console.log(res.data.Productos);
                if(res.data.status=='exito'){
                    this.productos=res.data.Productos
                }
                else{
                    console.log("F por el servidor")
                }
                console.log(this.Productos);
            })
        }
    },
    data(){
        return{
           url:Global.url,
           productos:null,
        }
    },
}
</script>
