const todos = JSON.parse(localStorage.getItem("todos")) || []; //Almacena los todos del localStorage en un arreglo

const render = () => {
  const todoList = document.getElementById("todo-list");
  /*todoList.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    todoList.innerHTML += "<li>" + todos[i] + "</li>";
  }*/
  //map transforma el elemento en lo que nosotros retornemos dentro de la funcion
  const todosTemplate = todos.map((t) => "<li>" + t + "</li>");
  todoList.innerHTML = todosTemplate.join("");
  const elementos = document.querySelectorAll("#todo-list li"); //Selecciona todos los elementos li dentro de la etiqueta con el id "todo-list"
  elementos.forEach((elemento, i) => {
    //Recorre la constante elementos
    elemento.addEventListener("click", () => {
      //Espera algun click para activar la funcion
      elemento.parentNode.removeChild(elemento); //Remueve el elemento al que se hizo click dentro del HTML
      todos.splice(i, 1); //Remueve el elemento dentro del arrego
      actualizaTodos(todos); //Llama a la funcion actualizaTodos
      render(); //Renderiza de nuevo
      //console.log(todos, i);
    });
  });
};

const actualizaTodos = (todos) => {
  //Actualiza los todos que estan en el arreglo
  const todoStrings = JSON.stringify(todos);
  localStorage.setItem("todos", todoStrings);
};

window.onload = () => {
  render();
  const form = document.getElementById("todo-form"); //Permite interactuar con el formulario
  form.onsubmit = (e) => {
    e.preventDefault(); //Impide que la pagina se recargue cuando se hace click al boton
    const todo = document.getElementById("todo"); //Referencia a la etiqueta con el ID 'todo'
    const todoText = todo.value; //Se guarda el valor dentro de la etiqueta 'todo'
    todos.push(todoText);
    todo.value = ""; //Setea el valor en el texto como vacio
    actualizaTodos(todos);
    //console.log(todoText); //Imprime en la consola el valor almacenado en totoText
    render();
  };
};
