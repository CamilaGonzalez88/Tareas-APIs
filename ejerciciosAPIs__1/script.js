
function mostrarDatos(title){
  const contenedorPosts = document.querySelector('#posts')
  const desordenadaLista = document.createElement ('ul')
  const itemLista = document.createElement('li')
  itemLista.textContent = title
  desordenadaLista.appendChild(itemLista)
  contenedorPosts.appendChild(desordenadaLista)
}