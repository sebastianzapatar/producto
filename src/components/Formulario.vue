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
             <label for="Imagen">Imagen</label>
             <input type="file" id="file" ref="file" name="file0"  v-on:change="filechange()" required/>
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
import swal from 'sweetalert';
export default {
    name:"Formulario",
    mounted(){
       
    },
    methods:{
        mostrarproducto(){
            console.log(this.producto)
        },
        
        save(){
            console.log(this.producto1);
            Axios.post(this.url+'guardar',this.producto1).then(res=>{
                console.log(res);
                //Obtenemos el id del mensaje
                var productoid=res.data.message._id;
                console.log(productoid);
                const formdata=new FormData();
                formdata.append('file0',
                this.file,
                this.file.name);
                Axios.post(this.url+'subir-imagen/'+productoid,formdata).then(res=>{
                    if(res.data.ProductoUpdate){
                        console.log("Exito");
                        swal(
                            'Producto creado',
                            'Se ha creado correctamente',
                            'success'
                        );
                        this.$router.push('/home')
                    }
                    else{
                        console.log("F al servidor")
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