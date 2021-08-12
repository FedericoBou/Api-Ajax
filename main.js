var contenido = document.querySelector('#contenido')

function traer() {
    fetch("https://api.icndb.com/jokes/random")
        .then(res => res.json())
        .then(data => {
            contenido.innerHTML =
                $(".quote").removeClass("hide");
            $(".text").html(data.value.joke);

        })
}