window.addEventListener("load", function () {
    idConseguido = localStorage.getItem("MonedaElegida");
    var url = new URL("https://api.coingecko.com/api/v3/coins/" + idConseguido);
    loadIntoDetalle(url);
})


async function loadIntoDetalle(url) {
    const descripcion = document.getElementById("descripcionCrypto");
    const nombreDetalle = document.getElementById("nombreCrypto");
    const precioDetalle = document.getElementById("precioCrypto");
    const SiglaDetalle = document.getElementById("siglaCrypto");
    const porcentajeDetalle = document.getElementById("porcentajeCrypto")
    const SiglaDetalle2 = document.getElementById("siglaCrypto2");
    const response = await fetch(url);
    const data = await response.json();
    monedaDetalle = data
    nombreDetalle.innerHTML = (monedaDetalle).id
    descripcion.innerHTML = monedaDetalle.description.en
    precioDetalle.innerHTML = monedaDetalle.market_data.current_price.usd
    SiglaDetalle.innerHTML = monedaDetalle.symbol
    SiglaDetalle2.innerHTML = monedaDetalle.symbol
    porcentajeDetalle.innerHTML = "Last 7 Days " + monedaDetalle.market_data.price_change_percentage_7d.toFixed(2) + "%"
    console.log(data);
}