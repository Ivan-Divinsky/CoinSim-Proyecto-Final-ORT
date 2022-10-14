async function loadIntoTable(url, table) {
  const tableHead = table.querySelector("thead");
  const tableBody = table.querySelector("tbody");
  const response = await fetch(url);
  const data = await response.json();
  data.forEach((moneda) => {
    
    table.innerHTML += createRow(moneda);
    
  });
  
}

function createRow(moneda) {
  return `<tr class="bg-white">
  <th scope="row" class = "tablaPrincipal">${moneda.market_cap_rank}</th>
  <td id="nombreCyptoTabla" class = "tablaPrincipal" >
      <a onClick="redireccionar('${moneda.id}')" id=${moneda.id}> ${moneda.name}</a>
  </td>
  <td class = "tablaPrincipal "> <img class = "imagenCryptoTabla" src = ${moneda.image}></td>
  <td class = "tablaPrincipal ">${ConvertidorNumeros(moneda.current_price)} $USD</td>
  <td id = "porcentaje" class = "tablaPrincipal">${moneda.price_change_percentage_24h.toFixed(2)} %</td>
  <td class = "tablaPrincipal ">${ConvertidorNumeros(moneda.total_volume)} $USD</td>
  <td class = "tablaPrincipal ">${ConvertidorNumeros(moneda.market_cap)} $USD</td>
  </tr>`;

  
}

/* ------------------------------------- */

function redireccionar(moneda) {
  localStorage.setItem("MonedaElegida", moneda);
  console.log(moneda)
  location.href = "http://127.0.0.1:5501/detalle.html";
}

/* ------------------------------------- */

loadIntoTable(
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h",
  document.getElementById("TablaCrypto")
);

/* ------------------------------------- */

/* function ChangeColor (moneda) {
console.log(moneda)
  if (moneda > 0) {
    document.getElementById("MyElement").classList.remove('defaultt');
    document.getElementById("MyElement").classList.add('positivo');
  }

  if (moneda < 0) {
    document.getElementById("MyElement").classList.add('negativo');
    document.getElementById("MyElement").classList.remove('defaultt');
  }

  if (moneda < 0) {
    document.getElementById("MyElement").classList.add('negativo');
    document.getElementById("MyElement").classList.remove('positivo');
  }

  if (moneda > 0) {
    document.getElementById("MyElement").classList.add('positivo');
    document.getElementById("MyElement").classList.remove('negativo');
  }

} */

 function ChangeColor (moneda) {
const porcentaje = document.getElementById("porcentaje")

  if (moneda > 0) {
    porcentaje.setAttribute('color: green');
  }

  if (moneda < 0) {
    porcentaje.setAttribute('color: red');
  }
console.log (moneda)
}

function ConvertidorNumeros(moneda) {

  if (moneda >= 1000000000) {
    return (
      (moneda / 1000000000).toFixed(1).replace(/\.$/, "") + "B"
    );
  }
  if (moneda >= 1000000) {
    return (
      (moneda / 1000000).toFixed(1).replace(/\.$/, "") + "M"
    );
  }
  if (moneda >= 1000) {
    return (moneda / 1000).toFixed(1).replace(/\.$/, "") + "K";
  }
  if (moneda >= 1.5) {
    return (moneda / 1).toFixed(1)
  }

  return moneda;
}