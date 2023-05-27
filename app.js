Vue.component('task-form', {
    data() {
      return {
        newTask: ''
      };
    },
    methods: {
      agregarTarea() {
        if (this.newTask !== '') {
          this.$emit('task-added', { task: this.newTask, completed: false, completedText: '' });
          this.newTask = '';
        }
      }
    },
    template: `
      <div class="card">
        <div class="card-body">
          <p class="card-title">Agregar tarea:</p>
          <div class="text-center">
          <div class="row">
          <div class="col-md-12">
          <input v-model="newTask" class="inputclass neon-button mb-2" placeholder="Ingrese una tarea">
          </div>
          </div>
         <div class="row">
         <div class="col-md-12">
         <button @click="agregarTarea" class="btn neon-button">Agregar tarea</button>
         </div>
         </div>
         </div>
        </div>
      </div>
    `
  });
  
  Vue.component('task-list', {
    data() {
      return {
        tasks: []
      };
    },
    methods: {
      deleteTask(index) {
        this.tasks.splice(index, 1);
      },
      agregarTareaAlista(task) {
        this.tasks.push(task);
      }
    },
    template: `
    <div class="campo mb-5">
    <h1 class="text-center mt-5">LISTA DE TAREAS</h1>
    <div v-if="tasks.length === 0" class="text-center mb-5" style="color: red;">No hay tareas</div>
    <div v-else>
      <div class="card mb-3" v-for="(task, index) in tasks" :key="index" :class="{ completed: task.completed }">
        <div class="card-body colortarjeta">
          <p class="card-title">Tarea {{ index + 1 }}</p>
          <p class="card-text">{{ task.task }}</p>
          <input type="checkbox" v-model="task.completed" class=" neon-button">
          <p v-if="task.completed" class="completed-text" style="color: green;">Tarea completada</p>
          
        </div>
        <div class="card-footer colortarjeta">
        <button class="btn btn-danger btn-fixed-size btn-sm small-button eliminar" @click="deleteTask(index)">
        <div class="fas fa-trash small-button"></div> 
      </button>
      
        </div>
      </div>
    </div>
    <task-form @task-added="agregarTareaAlista"></task-form>
  </div>
  
    `
  });
  
  new Vue({
    el: '#app'
  });
  