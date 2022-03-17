<template>             
    <div class="" > 
        <NavBar></NavBar>
        <!-- <BreadCumbs></BreadCumbs> -->

        <div class="container" >
        
            <router-view></router-view>

        </div>
    </div>
    
</template>

<script>

    import axios from 'axios';
    import swal from 'sweetalert';
    import NavBar     from './components/NavBar.vue'
    //import BreadCumbs from './components/BreadCumbs.vue'

  export default {
      name: "home-component",
      components:{
          NavBar, // BreadCumbs
      },
      created: function () {
        this.getData();
      },
      data(){
              return { 
                     
                      NuevaData  : {
                              'DepartmentId'   : '',
                              'DepartmentName' : '',  
                          },
                      Departmentos : [],
                      DataSend     : '',
                      showModal    : false,
                      SendData     : 'CrearData',
                      ActionType   : 'Nueva Info',
                      ButtonNew    : true,
                      Ruta         : 'http://localhost:8000/department',
                      ButtonUpdate : false
              }
      }, 
      methods: {
          changePage: function(page) {
              this.pagination.current_page = page;
              this.getData(page);
          },
          getData: function(){
            var URL_BASE = this.Ruta
            axios.get(URL_BASE).then((res) =>{
              this.Departmentos = res.data
              console.log(res)
            });	    		 
          },
          CrearData: function(){

              if(this.NuevaData.DepartmentName == '')
              {
                  this.$toasted.error('Debes llenar todos los campos')
              }
              else{

                  var URL_BASE = this.Ruta;
                  axios.post(URL_BASE, this.NuevaData).then(() => {
                        this.getData();
                        this.NuevaData.DepartmentId   = ''; 
                        this.NuevaData.DepartmentName = ''; 
                             
                        this.errors=[];
                        this.showModal = !this.showModal; 
                        swal("Informacion agregada", {
                          icon: "success",
                        });  
                            
                  }).catch(error => {
                      this.errors = error.res.data
                  });
              }///// final else

          },
          DeleteData: function(Data){
               var URL_BASE = this.Ruta + '/';
               swal({
               title: "Estas seguro ?",
               text: "Vas a eliminar al dato  " + Data.DepartmentName + ", perderas este registro",
               icon: "warning",
               buttons: true,
               dangerMode: true,
               })
               .then((willDelete) => {
               if (willDelete) {
                   let IdData = Data.DepartmentId;
                       axios.delete(URL_BASE + IdData).then(() =>{
                             
                       this.getData();
                       swal("Eliminaste la Categoria " + Data.DepartmentName + " de la base de datos", {
                           icon: "success",
                       }); 
                   }).catch(error=>{
                       alert("Error "+error)
                   })
                    
               } else {
                   swal("No se eliminara!");
               }
               });  
          },
          UpdateData: function(Data){
                
               var URL_BASE = this.Ruta;
               swal({
               title: "Estas seguro de actualizar ?",
               text: "Vas a actualizar la Categoria " + this.NuevaData.DepartmentName + ", cambiaras este registro",
               icon: "warning",
               buttons: true,
               dangerMode: true,
               })
               .then((willDelete) => {
               if (willDelete) { 

                       axios.put(URL_BASE,this.NuevaData).then(() =>{
                             
                       this.getData();
                       this.NuevaData.DepartmentId   = ''; 
                       this.NuevaData.DepartmentName = ''; 
                       this.showModal                = !this.showModal;
  
                       swal("se actualizo el departamento a " + Data.DepartmentName + " de la base de datos", {
                           icon: "success",
                       }); 

                   }).catch(error=>{
                       alert("Error "+error)
                   })
                    
               } 
               });  

          },
          toggleModal: function(){
              this.showModal = !this.showModal;
          },
          AbrirModalCrear: function(){
              this.showModal     = !this.showModal;
              this.ButtonNew     = true;
              this.ButtonUpdate  = false;
              this.ActionType    = 'Nueva Info';
              this.NuevaData.DepartmentId    = ''; 
              this.NuevaData.DepartmentName  = ''; 
          },
          AbrirModalUpdate: function(UpdateData){
              this.ButtonNew                  = false;
              this.ButtonUpdate               = true;
              this.showModal                  = !this.showModal;
              this.ActionType                 = 'Actualizar Info';
              this.NuevaData.DepartmentId     = UpdateData.DepartmentId; 
              this.NuevaData.DepartmentName   = UpdateData.DepartmentName; 
          }
      },

  }
</script>