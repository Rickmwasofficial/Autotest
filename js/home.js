
let cards = document.querySelector(".cardrow")
let details = new Map([
  [0, ["JC-FELT Towers", "4000", "Bedsitter", 4.0]],
  [1, ["Doe Towers", "4000", "Bedsitter", 4.0]],
  [2, ["Anthropic Plaza", "5000", "Bedsitter", 4.0]],
  [3, ["Open Towers", "6000", "Bedsitter", 4.0]],
  [4, ["Detail Towers", "12000", "One Bedroom", 4.0]],
  [5, ["Star Plaza", "13000", "Two Bedroom", 4.0]],
  [6, ["UOE Apartments", "12000", "One Bedroom", 4.0]],
  [7, ["Mike Towers", "5000", "Bedsitter", 4.0]],
  [8, ["Homify Towers", "5000", "Bedsitter", 4.0]],
  [9, ["Kirubi Towers", "4600", "Bedsitter", 4.0]],
  [10, ["China Apartments", "4900", "Bedsitter", 4.0]],
  [11, ["Unknown Towers", "4500", "Bedsitter", 4.0]],
  [12, ["Lagos Apartments", "3000", "Outside", 4.0]],
  [13, ["Space Apartments", "5500", "Bedsitter", 4.0]],
  [14, ["Tesla Plaza", "6000", "Bedsitter", 4.0]],
  [15, ["Benz Towers", "7000", "Bedsitter", 4.0]],
  [16, ["Jack Towers", "8000", "One Bedroom", 4.0]]

])
displayCards()
function displayCards() {
  for (let i = 0; i < 12; i++) {
    img = "https://picsum.photos/300/300"
    cards.innerHTML += `
    <div class="col-12 col-lg-3 col-md-4 col-sm-6">
    <div class="card  my-2">
      <img src=${img} class="card-img-top img-thumbnail" alt="...">
      <div class="card-body">
        <h5 class="card-title">${details.get(i)[0]}</h5>
        <p class="card-text mb-1">Type: ${details.get(i)[2]}</p>
        <div class="d-flex justify-content-between my-0 py-0">
          <p>Rent: ${details.get(i)[1]}</p>
          <p>Rating: <span class="text-danger">${details.get(i)[3]}.0</span></p>
        </div>
        <button class="btn btn-primary" disabled='true'>Add to cart</button>
      </div>
    </div>
  </div>
    `
  }
}
