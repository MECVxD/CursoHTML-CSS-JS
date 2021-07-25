window.onload = () => {
  // Permite esperar a que el HTML termine de cargar antes de ejecutar JS
  const parrafo = document.getElementById("text"); //Permite interactuar con las etiquetas del HTML
  console.log(parrafo.innerHTML); // Muestra el valor de las etiquetas
  //parrafo.innerText = "Texto Actualizado";// Modifica el valor de la etiqueta en el HTML
  parrafo.innerHTML = "<li>elemento 1</li><li>elemento 2</li>"; // Permite agregar otros nodos en HTML
};
