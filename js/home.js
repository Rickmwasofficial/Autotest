console.log(document.title)
let cards = document.querySelector(".cardrow")
let images = ["pexels-josh-sorenson-111093.jpg", "pexels-daniel-maforte-5544034.jpg"]
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
  [16, ["Jack Towers", "8000", "One Bedroom", 4.0]],
  [17, ["Dundee Towers", "4000", "Bedsitter", 4.0]],
  [18, ["Power Towers", "4000", "Bedsitter", 4.0]],
  [19, ["Tribe Plaza", "5000", "Bedsitter", 4.0]],
  [20, ["Kent Towers", "6000", "Bedsitter", 4.0]],
  [21, ["Krypton Towers", "12000", "One Bedroom", 4.0]],
  [22, ["Hiddenville Plaza", "13000", "Two Bedroom", 4.0]],
  [23, ["Beacon Apartments", "12000", "One Bedroom", 4.0]],
  [24, ["Hill Towers", "5000", "Bedsitter", 4.0]],
  [25, ["Swellview Towers", "5000", "Bedsitter", 4.0]],
  [26, ["BBottom Towers", "4600", "Bedsitter", 4.0]],
  [27, ["Angeles Apartments", "4900", "Bedsitter", 4.0]],
  [28, ["Jordan Towers", "4500", "Bedsitter", 4.0]],
  [29, ["Carnegie Apartments", "3000", "Outside", 4.0]],
  [30, ["Mars Apartments", "5500", "Bedsitter", 4.0]],
  [31, ["Jupiter Plaza", "6000", "Bedsitter", 4.0]],
  [32, ["Mercury Towers", "7000", "Bedsitter", 4.0]],
  [33, ["Venus Towers", "4600", "Bedsitter", 4.0]],
  [34, ["Earth Apartments", "4900", "Bedsitter", 4.0]],
  [35, ["Pluto Towers", "4500", "Bedsitter", 4.0]],
  [36, ["Makemake Apartments", "3000", "Outside", 4.0]],
  [37, ["Saturn Apartments", "5500", "Bedsitter", 4.0]],
  [38, ["Jupiter Plaza", "6000", "Bedsitter", 4.0]]

])
displayCards(0, 12)
function displayCards(start, stop, def=1) {
  console.log(start, stop)
  cards.innerHTML = ""
  for (let i = start; i < stop; i++) {
    img = images[0]
    cards.innerHTML += `
    <div class="col-12 col-lg-3 col-md-4 col-sm-6">
    <div class="card  my-2">
      <div id="carousel${i}" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="false">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src=${images[0]} class="d-block w-100 img-thumbnail" alt="...">
          </div>
          <div class="carousel-item">
            <img src=${images[1]} class="d-block w-100 img-thumbnail" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carousel${i}" data-bs-slide="prev">
          <span class="carousel-control-prev-icon text-danger" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carousel${i}" data-bs-slide="next">
          <span class="carousel-control-next-icon text-danger" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="card-body">
        <h5 class="card-title">${details.get(i)[0]}</h5>
        <p class="card-text mb-1">Type: ${details.get(i)[2]}</p>
        <div class="d-flex justify-content-between my-0 py-0">
          <p>Rent: ${details.get(i)[1]}</p>
          <p>Rating: <span class="text-danger">${details.get(i)[3]}.0</span></p>
        </div>
        <a href="details.html" class="btn btn-primary" disabled='true'>View More</a>
      </div>
    </div>
  </div>
    `
  }
  id = `carousel${start}`
  if (id !== `carousel0` || def == 0) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }
}
