window.addEventListener("load", function () {
    idConseguido = localStorage.getItem("MonedaElegida");
    var url = new URL("https://api.coingecko.com/api/v3/coins/" + idConseguido);
    loadIntoDetalle(url);
})


async function loadIntoDetalle(url) {
    const descripcion = document.getElementById("descripcionCrypto");
    const nombreDetalle = document.getElementById("nombreCrypto");
    const precioDetalle = document.getElementById("precioDetalle")
    const response = await fetch(url);
    const data = await response.json();
    monedaDetalle = data
    nombreDetalle.innerHTML = monedaDetalle.id
    descripcion.innerHTML = monedaDetalle.description.en
    precioDetalle.innerHTML = monedaDetalle.market_data.current_price.usd
    console.log(data);
}