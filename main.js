function jogos (time1, hora, time2) {
  return `
    <li>
        <img src="./assets/${time1}.svg" alt="${time1}">
        <strong>${hora}</strong>
        <img src="./assets/${time2}.svg" alt="${time2}">
    </li>
  `
}

let delay = -0.5;
function createCard (data, dia, jogos) {
  delay = delay + 0.5;
  return `
  <div class="card" style="animation-delay: ${delay}s">
      <h2>${data} <span>${dia}</span></h2>
          <ul>
            ${jogos}
          </ul>
  </div>
  `
}

document.querySelector("#cards").innerHTML =

            createCard(
              "24/11", "quinta",
                jogos("uruguay", "10:00", "south korea") +
                jogos("portugal", "13:00", "ghana") +
                jogos("brazil", "16:00", "serbia")) +

            createCard(
              "28/11", "segunda",
                jogos("south korea", "10:00", "ghana") +
                jogos("brazil", "13:00", "switzerland") +
                jogos("portugal", "16:00", "uruguay")) +

            createCard(
              "02/12", "sexta",
                jogos("south korea", "12:00", "portugal") +
                jogos("ghana", "12:00", "uruguay") +
                jogos("cameroon", "16:00", "brazil"))