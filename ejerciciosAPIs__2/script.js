const btnUsuario =
      document.getElementById("btnUsuario");

    btnUsuario.addEventListener("click", () => {

      fetch("https://jsonplaceholder.typicode.com/users/1")

        .then(response => response.json())

        .then(data => {

          document.getElementById("nombreUsuario")
            .textContent = data.name;

          document.getElementById("emailUsuario")
            .textContent = "Email: " + data.email;

          document.getElementById("telefonoUsuario")
            .textContent = "Telefono: " + data.phone;
        });
    });

   