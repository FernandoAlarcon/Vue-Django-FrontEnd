<template>             
    <div class="container" >
        <BreadCumbs></BreadCumbs>
        <div>
            <div>
                
                <div class="grid grid-cols-6 gap-4">
                    <div class="col-start-1 col-end-7 ...">
                        <center><br>
                            <h1 class="text-xl font-medium text-black" >
                                Nuestros Empleados 
                                <button class=" bg-yellow-500 
                                                        hover:bg-yellow-700 
                                                        text-white 
                                                        font-bold 
                                                        h-10 w-10 flex items-center justify-center
                                                        border-yellow-700 
                                                        rounded-full
                                                        "
                                                        v-on:click="AbrirModalCrear()"
                                                        title="Nuevo registro">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bookmark-plus" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z"/>
                                                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                                                </svg>
                                </button>

                            </h1><br><br>
                        </center>
                    </div>
                </div>
                 
                 
                           
                  <div class="row" > 
                        <div class="col-md-4" v-for="( Empleado, index) of Empleados" :key="index" >
                            
                            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <div class="flex justify-end px-4 pt-4">
                                    <!-- <button id="dropdownButton" data-dropdown-toggle="dropdown" class="hidden sm:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                                    </button>

                                    <div id="dropdown" class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                                        <ul class="py-1" aria-labelledby="dropdownButton">                                             
                                            <li>
                                                <a href="#" class="block py-2 px-4 text-sm text-orange-600 hover:bg-gray-100 dark:hover:bg-orange-600 dark:text-gray-200 dark:hover:text-white">
                                                    Aun no hay opciones :( 
                                                </a>
                                            </li>
                                        </ul>
                                    </div> -->
                                </div>
                                <div class="flex flex-col items-center pb-10">
                                    <img class="mb-3 w-24 h-24 rounded-full shadow-lg" :src="Empleado.PhotoFileName" :alt="Empleado.EmployeeName">
                                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{Empleado.EmployeeName}}</h5>
                                    <span class="text-sm text-gray-500 dark:text-gray-400">{{Empleado.Department}} - {{Empleado.DataOfJoining}}</span> 
                                    <div class="flex mt-4 space-x-3 lg:mt-6">
                                        
                                        <button 
                                            v-on:click.prevent="AbrirModalUpdate(Empleado)"
                                            class="  bg-green-300 hover:bg-green-400 text-green-800 font-bold py-2 px-4  rounded-full 
                                                    inline-flex items-center">
                                            
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brush-fill" viewBox="0 0 16 16">
                                                    <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.117 8.117 0 0 1-3.078.132 3.658 3.658 0 0 1-.563-.135 1.382 1.382 0 0 1-.465-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.393-.197.625-.453.867-.826.094-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.2-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.175-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04z"/>
                                                </svg>
                                                <span>Editar</span>
                                        </button> 
                                        <button 
                                            v-on:click.prevent="DeleteData(Empleado)"
                                            class="  bg-red-300 hover:bg-red-400 text-red-800 font-bold py-2 px-4  rounded-full 
                                                    inline-flex items-center">
                                            
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash2-fill" viewBox="0 0 16 16">
                                                    <path d="M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z"/>
                                                </svg>
                                                <span>Eliminar</span>
                                        </button> 
                                         
                                    </div>
                                </div>
                            </div>

                        </div> 
                        
                </div>  
            
            </div>            
        </div>  
             
        <div> 
            <div v-if="showModal" 
                class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
                <div class="relative w-auto my-4 mx-auto max-w-4xl">
                 
                    <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    
                        <div class="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                            <p class="text-2xl font-semibold">
                                {{ActionType}}
                            </p>
                            <button class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" v-on:click="toggleModal()">
                            <span class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                            </span>
                            </button>
                        </div> 
                        <div class="relative p-6 flex-auto">
                            <form class="w-full max-w-lg">
                                <div class="flex flex-wrap -mx-3 mb-6">
                                    <div class="w-full px-3">
                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                            Empleado nuevo
                                        </label>
                                        <input  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                id="grid-first-name"
                                                type="text"
                                                placeholder="Nombre Empleado " 
                                                v-model="NuevaData.EmployeeName"
                                                />
                                        <p class="text-red-500 text-xs italic">Por favor llene el campo.</p>
                                    </div>
                                </div> 
                                <div class="flex flex-wrap -mx-3 mb-6">
                                    <div class="w-full px-3">
                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                            A que Departamento pertenece
                                        </label>
                                         <select v-model="NuevaData.Department" class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                             
                                            <option v-for="( departamento, index ) in Departamentos" :key="index"
                                                        :value="departamento.DepartmentId" > {{departamento.DepartmentName}} 
                                            </option>
                                        </select>
                                        <p class="text-red-500 text-xs italic">Por favor llene el campo.</p>
                                    </div>
                                </div> 
                                <div class="flex flex-wrap -mx-3 mb-6">
                                    <div class="w-full px-3">
                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                            Dia que se unio a la empresa
                                        </label>
                                         
                                        <div class="relative">
                                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                            </div>
                                            <input datepicker="" v-model="NuevaData.DataOfJoining" datepicker-format="dd/mm/yyyy" type="date" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input" placeholder="Select date">
                                        </div>

                                        <p class="text-red-500 text-xs italic">Por favor llene el campo.</p>
                                    </div>
                                </div>
                                 <div class="flex flex-wrap -mx-3 mb-6">
                                    <div class="w-full px-3">

                                        <input  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                id="grid-first-name"
                                                type="text"
                                                placeholder="Link - URL" 
                                                v-model="NuevaData.PhotoFileName"
                                                />
                                        <br>
                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" style="width: 100%; heigth:20%" for="grid-first-name">
                                            Foto ( Link )
                                        </label>
                                         
                                        <img  v-if="NuevaData.PhotoFileName != '' " :src="NuevaData.PhotoFileName" @error="imageUrlUser()"  class="mb-3 w-24 h-24 rounded-full shadow-lg" alt="image"   >
                                        <img  v-if="NuevaData.PhotoFileName == '' " :src="DefaultPic"  @error="imageUrlUser()" class="mb-3 w-24 h-24 rounded-full shadow-lg" alt="image"    > 
                                         

                                        <p class="text-red-500 text-xs italic">Recuerda que el link solo puwede ser de 1k caracteres</p>
                                    </div>
                                </div> 
                            </form> 
                        </div> 
                        <div class="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                            
                            <button class=" text-orange-500 bg-transparent border border-solid border-orange-500 hover:bg-orange-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1" 
                                    type="button"
                                    style="transition: all .15s ease" 
                                    v-if="ButtonUpdate"
                                    v-on:click="UpdateData()">

                            Actualizar
                            </button> 
                            <button class=" text-green-500 bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1" 
                                    type="button"
                                    style="transition: all .15s ease" 
                                    v-if="ButtonNew"
                                    v-on:click="CrearData()">

                            Nuevo Registro
                            </button> 
                            <button class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease" v-on:click="toggleModal()">
                            Cerrar
                            </button>
                            
                        </div>
                    </div> 
                </div>
            </div>
            <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>  
    </div>
    
</template>

<script>

    import axios from 'axios';
    import swal from 'sweetalert';
    import BreadCumbs from '../../components/BreadCumbs.vue'

    export default {
        name: "empledos-component",
        components:{
            BreadCumbs
        },
        created: function () {
            this.getData();
            this.getDptos();
        },
        data(){
                return { 
                        
                        NuevaData  : { 
                                'EmployeeName'   : '',
                                'Department'     : '',
                                'DataOfJoining'  : '',
                                'PhotoFileName'  : ''
                            },
                        Departamentos : [],
                        Empleados     : [],
                        DataSend     : '',
                        showModal    : false,
                        SendData     : 'Crear Empleado',
                        ActionType   : 'Nuevo Empleado',
                        DefaultPic   : 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
                        ButtonNew    : true,
                        Ruta         : 'http://localhost:8000/employee',
                        RutaDptos    : 'http://localhost:8000/department',
                        ButtonUpdate : false
                }
        }, 
        methods: {
                imageUrlUser() {
                    this.NuevaData.DataOfJoining = "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                },    
                changePage: function(page) {
                this.pagination.current_page = page;
                this.getData(page);
                this.getDptos();
                },
                getData: function(){
                    var URL_BASE = this.Ruta
                    axios.get(URL_BASE).then((res) =>{
                    this.Empleados = res.data
                    });	    		 
                },
                getDptos: function(){
                    var URL_BASE = this.RutaDptos
                    axios.get(URL_BASE).then((res) =>{
                    this.Departamentos = res.data
                    });	    		 
                },
                CrearData: function(){

                    if( this.NuevaData.EmployeeName == '' || this.NuevaData.Department == '' || this.NuevaData.DataOfJoining == '' )
                    {
                        this.$toasted.error('Debes llenar todos los campos')
                    }
                    else{

                        if (this.NuevaData.DataOfJoining == '') {
                            this.NuevaData.DataOfJoining = "https://cdn-icons-png.flaticon.com/512/149/149071.png" 
                        }
                        var URL_BASE = this.Ruta;
                        axios.post(URL_BASE, this.NuevaData).then(() => {
                                this.getData();
                                this.NuevaData.EmployeeName   = ''; 
                                this.NuevaData.Department     = ''; 
                                this.NuevaData.DataOfJoining  = ''; 
                                this.NuevaData.PhotoFileName  = ''; 
                                    
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
                    text: "Vas a eliminar al dato  " + Data.EmployeeName + ", perderas este registro",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                    })
                    .then((willDelete) => {
                    if (willDelete) {
                        let IdData = Data.EmployeeId;
                            axios.delete(URL_BASE + IdData).then(() =>{
                                    
                            this.getData();
                            swal("Eliminaste el empleado " + Data.EmployeeName + " de la base de datos", {
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
                    text: "Vas a actualizar el empleado " + this.NuevaData.EmployeeName + ", cambiaras este registro",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                    })
                    .then((willDelete) => {
                    if (willDelete) { 

                            axios.put(URL_BASE,this.NuevaData).then(() =>{
                                    
                            this.getData();
                            this.NuevaData.EmployeeName   = ''; 
                            this.NuevaData.Department     = ''; 
                            this.NuevaData.DataOfJoining  = ''; 
                            this.NuevaData.PhotoFileName  = ''; 
                            this.showModal                = !this.showModal;
        
                            swal("se actualizo el departamento a " + Data.EmployeeName + " de la base de datos", {
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
                    this.NuevaData.EmployeeId     = ''; 
                    this.NuevaData.EmployeeName   = ''; 
                    this.NuevaData.Department     = ''; 
                    this.NuevaData.DataOfJoining  = ''; 
                    this.NuevaData.PhotoFileName  = ''; 
                },
                AbrirModalUpdate: function(UpdateData){
                    this.ButtonNew                  = false;
                    this.ButtonUpdate               = true;
                    this.showModal                  = !this.showModal;
                    this.ActionType                 = 'Actualizar Info';
                    this.NuevaData.EmployeeId       = UpdateData.EmployeeId
                    this.NuevaData.EmployeeName     = UpdateData.EmployeeName
                    this.NuevaData.Department       = UpdateData.Department
                    this.NuevaData.DataOfJoining    = UpdateData.DataOfJoining
                    this.NuevaData.PhotoFileName    = UpdateData.PhotoFileName
                }
        },

    }
</script>