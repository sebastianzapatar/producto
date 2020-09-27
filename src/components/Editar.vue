<template>

    <div class="center">
     <h1>Formulario</h1>
     <form class="full-form"  v-on:submit.prevent="save()">
         <div class="form-group">
             <label for="nombre">Nombre</label>
             <input type="text" name="nombre" v-model="producto1.nombre" required/>
         </div>
         <div class="form-group">
             <label for="descripcion">Descripción</label>
             <textarea name="descripcion" v-model="producto1.descripcion" required/>
         </div>
         <div class="form-group">
             <label for="cantidad">Cantidad</label>
             <input type="number" name="cantidad" v-model="producto1.cantidad" required/>
         </div>
         <div class="form-group">
             <img :src="'http://localhost:2020/obtener-imagen/'+producto1.imagen" width="70"/>
             <br/>
             <label for="Imagen">Imagen</label>
             <input type="file" id="file" ref="file" name="file0"  v-on:change="filechange()"/>
         </div>
          <div class="form-group">
         <input type="submit" value="Enviar" class="btn btn-success"/>
         </div>
     </form>
    </div>
</template>
<script>
import Axios from 'axios';
import Producto from '../models/producto';
import Global from '../Global/global'
import swal from 'sweetalert'
export default {
    name:"Editar",
    mounted(){
       var productoid=this.$route.params.id;
       this.getProducto(productoid);
    },
    methods:{
        mostrarproducto(){
            console.log(this.producto)
        },
        
        save(){
           var productoid=this.$route.params.id;
            console.log(this.productoid);
           Axios.put(this.url+'actualizar/'+productoid,this.producto1).then(res=>{
                console.log(res.data);
                var productoid=res.data.message._id
                
                //Subida de archivo
                const formdata=new FormData();
                formdata.append('file0',
                this.file,
                this.file.name);
                
                Axios.post(this.url+'subir-imagen/'+productoid,formdata).then(res=>{
                    if(res.data){
                         
                        this.$router.push('/home');
                    }
                    else{
                        //Mostar error;
                        swal(
                            'Estudiante no se puedo crear',
                            'El estudiante se ha creado correctamente',
                            'error'
                        );
                    }
                }).catch(err=>{
                    console.log(err);
                })

            }).catch(err=>{
                console.log(err);
            })
        },
        filechange(){
         this.file=this.$refs.file.files[0];
         console.log(this.file); 
        },
        getProducto(id){
            Axios.get(this.url+'buscarID/'+id).then(res=>{
                this.producto1=res.data.message;
                console.log(this.producto1);

            })
        },
    },
    
    data(){
        return{
           url:Global.url,
           producto1:new Producto('','',null,'',''),
           productos:null,
           file:null
        }
    },
}
</script>