
const todoItem= {
props:['todo'],

    
    
    
        template: `
      <div>{{todo.title}}
      <input type="checkbox" :checked="todo.completed" />
      
      
      </div>
      
      `,
        };
        
        const app = Vue.createApp({ 
          data(){
                return{
                    todoList: [],
                };
            },


    components:{
      "todo-item": todoItem,
       },

       mounted(){
        // // fetch("https://jsonplaceholder.typicode.com/")
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then((response)=>response.json())
        .then((json)=>(this.todoList=json));
    
    
        }
      });
    
        app.mount("#app");





// const counter={
// props: ["todo","index"],
// template: `
// <div> {{index}} - {{todo.title}}
// <input type="checkbox" :checked="todo.completed" />
// </div>
// `,
// }

// const app=Vue.createApp({  
// data(){
//     return{
//         todoList: [],
//     };
// },

// components:{
// "todo-item": todoItem,
// },

// mounted(){
// // fetch("https://jsonplaceholder.typicode.com/")
// fetch("https://jsonplaceholder.typicode.com/todos/")
// .then((response)=>response.json())
// .then((json)=>(this.todolist=json));
// },
// })

// app.mount("#app");