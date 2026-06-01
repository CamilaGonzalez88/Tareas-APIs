 const btnFrase =
      document.getElementById("btnFrase");

    btnFrase.addEventListener("click", () => {

      fetch("https://dummyjson.com/quotes/random")

        .then(response => response.json())

        .then(data => {

          document.getElementById("frase")
            .textContent = data.quote;

          document.getElementById("autor")
            .textContent = "Autor: " + data.author;
        });
    });