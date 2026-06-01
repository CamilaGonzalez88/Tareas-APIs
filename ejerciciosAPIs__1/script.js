  
    const btnPersonaje =
      document.getElementById("btnPersonaje");

    btnPersonaje.addEventListener("click", () => {

      fetch("https://rickandmortyapi.com/api/character/1")

        .then(response => response.json())

        .then(data => {

          document.getElementById("nombrePersonaje")
            .textContent = data.name;

          document.getElementById("imagenPersonaje")
            .src =  data.image;

         const estado = document.getElementById("estadoPersonaje");

         estado.textContent = "Estado: " + data.status;

         if(data.status === "Alive"){
           estado.style.color = "green";
         }
           else if(data.status === "Dead"){
            estado.style.color = "red";
         }
          else{
            estado.style.color = "gray";
          }
        });
    });

    