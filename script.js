
const todoItem= {
  props: ["todo","index"],      
    
      
      template: `
      <ul>
      <li>{{todo.title}}  
     
      </li>  
      </ul>
      `,


        };
        
        const app = Vue.createApp({ 
          data(){            

                return{
                    todoList: [],
                };
            },
            methods: {
              
              removeTask(index) {
                  this.todoList.splice(index, 1)
              }
          },

    components:{
       "li": todoItem,

      "todo-item": todoItem,
       },

       mounted(){
        
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then((response)=>response.json())
        .then((json)=>(this.todoList=json));
    
    
        }
      });
    
        app.mount("#app");





