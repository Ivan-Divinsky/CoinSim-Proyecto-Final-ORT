window.addEventListener("load", function() {
    idConseguido = localStorage.getItem("MonedaElegida");
    var url = new URL("https://api.coingecko.com/api/v3/coins/" + idConseguido);
    loadIntoDetalle(url);
})


async function loadIntoDetalle(url) {
    const descripcion = document.getElementById("descripcionCrypto");
    const nombreDetalle = document.getElementById("nombreCrypto");
    const response = await fetch(url);
    const data = await response.json();
    monedaDetalle = data
    nombreDetalle.innerHTML = monedaDetalle.id
    descripcion.innerHTML = monedaDetalle.description.en
    console.log(data);
}
//monedaDetalle.description.en






