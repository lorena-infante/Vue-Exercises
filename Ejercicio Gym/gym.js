new Vue ({
    el:'#app',
    data:{
        titulo: 'To-do List',
        tareas:[],
        nuevaTarea:'',
        tareasHechas:[],
        tareaHecha:''
    },
    methods:{
        agregarTarea(){
            //console.log(this.nuevaTarea)
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            this.nuevaTarea= "";
            localStorage.setItem('gym-vue',JSON.stringify(this.tareas));
        },
        editarTarea(index){
            //console.log("editar ", index)
            //this.tareas[index].estado = true;
            if(this.tareas[index].estado === true){
                this.tareas[index].estado = false;
            }else{
                this.tareas[index].estado = true;
            }
            localStorage.setItem('gym-vue',JSON.stringify(this.tareas));
        },

        quitarTarea(index){
            //console.log(index)
            this.tareas.splice(index,1);
            console.log(index + " c jue");
            localStorage.setItem('gym-vue',JSON.stringify(this.tareas));
        },
        /*agregarTareaHecha(index){
            let taskStatus = this.tareas[index].estado;
            
            //console.log(taskDone)
             if(taskStatus === true){
                console.log(this.tareaHecha)
                this.tareasHechas.push({
                    nombre: this.tareaHecha,
                    estado: true
                })
                console.log(tareasHechas)
                //console.log(this.tareas[index])
                /* this.tareaHecha.push({ 
                }); 
            } 

        }*/
    },
    //antes de cargar toda la app se llama este método
    created: function (){
        let datosDB = JSON.parse(localStorage.getItem('gym-vue')); 
        //console.log(datosDB)
        if (datosDB === null){
            this.tareas = [];
        }else{
            this.tareas = datosDB;
        }
    }
})