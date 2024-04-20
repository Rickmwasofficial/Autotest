let cards = document.querySelector(".cardrow")

// Dummy values for Images and details in the future this will be extracted from the database

let images = ["pexels-josh-sorenson-111093.jpg", "pexels-daniel-maforte-5544034.jpg"]
let details = new Map([
  [0, ["JC-FELT Towers", "4000", "Bedsitter", 4.0, "Embu", "Kangaru", "Free Wifi Available", 30, 15]],
  [1, ["Doe Towers", "4000", "Bedsitter", 4.0, "Embu", "Kangaru", "Free Wifi Available", 30, 15]],
  [2, ["Anthropic Plaza", "5000", "Bedsitter", 4.0, "Embu", "Kangaru", "Free Wifi Available", 30, 15]],
  [3, ["Open Towers", "6000", "Bedsitter", 4.0, "Embu", "Kangaru", "Free Wifi Available", 30, 15]],
  [4, ["Detail Towers", "12000", "One Bedroom", 4.0, "Embu", "Kangaru", "Free Wifi Available", 30, 15]],
  [5, ["Star Plaza", "13000", "Two Bedroom", 4.0, "Embu", "Kangaru", "Free Wifi Available", 30, 15]],
  [6, ["UOE Apartments", "12000", "One Bedroom", 4.0, "Embu", "Kangaru", "Free Wifi Available", 30, 15]],
  [7, ["Mike Towers", "5000", "Bedsitter", 4.0, "Embu", "Kangaru", "Free Wifi Available", 30, 15]],
  [8, ["Homify Towers", "5000", "Bedsitter", 4.0, "Embu", "Kangaru", "Free Wifi Available", 30, 15]],
  [9, ["Kirubi Towers", "4600", "Bedsitter", 4.0, "Embu", "Kangaru", "Free Wifi Available", 30, 15]],
  [10, ["China Apartments", "4900", "Bedsitter", 4.0, "Embu", "Kangaru", "Free Wifi Available", 30, 15]],
  [11, ["Unknown Towers", "4500", "Bedsitter", 4.0, "Embu", "Kangaru", "Free Wifi Available", 30, 15]],
  [12, ["Lagos Apartments", "3000", "Outside", 4.0, "Embu", "Kangaru", "Free Wifi Available", 30, 15]],
  [13, ["Space Apartments", "5500", "Bedsitter", 4.0, "Embu", "Kangaru", "Free Wifi Available", 30, 15]],
  [14, ["Tesla Plaza", "6000", "Bedsitter", 4.0, "Embu", "Kangaru", "Free Wifi Available", 30, 15]],
  [15, ["Benz Towers", "7000", "Bedsitter", 4.0, "Embu", "Kangaru", "Free Wifi Available", 30, 15]],
  [16, ["Jack Towers", "8000", "One Bedroom", 4.0, "Embu", "Kangaru", "Free Wifi Available", 30, 15]],
  [17, ["Dundee Towers", "4000", "Bedsitter", 4.0, "Embu", "Kangaru", "Free Wifi Available", 30, 15]],
  [18, ["Power Towers", "4000", "Bedsitter", 4.0, "Embu", "Kangaru", "Free Wifi Available", 30, 15]],
  [19, ["Tribe Plaza", "5000", "Bedsitter", 4.0, "Embu", "Kangaru", "Free Wifi Available", 30, 15]],
  [20, ["Kent Towers", "6000", "Bedsitter", 4.0, "Embu", "Kangaru", "Free Wifi Available", 30, 15]],
  [21, ["Krypton Towers", "12000", "One Bedroom", 4.0, "Embu", "Kangaru", "Free Wifi Available", 30, 15]],
  [22, ["Hiddenville Plaza", "13000", "Two Bedroom", 4.0, "Embu", "Kangaru", "Free Wifi Available", 30, 15]],
  [23, ["Beacon Apartments", "12000", "One Bedroom", 4.0, "Embu", "Kangaru", "Free Wifi Available", 30, 15]],
  [24, ["Hill Towers", "5000", "Bedsitter", 4.0, "Embu", "Kangaru", "Free Wifi Available", 30, 15]],
  [25, ["Swellview Towers", "5000", "Bedsitter", 4.0, "Embu", "Kangaru", "Free Wifi Available", 30, 15]],
  [26, ["BBottom Towers", "4600", "Bedsitter", 4.0, "Embu", "Kangaru", "Free Wifi Available", 30, 15]],
  [27, ["Angeles Apartments", "4900", "Bedsitter", 4.0, "Embu", "Kangaru", "Free Wifi Available", 30, 15]],
  [28, ["Jordan Towers", "4500", "Bedsitter", 4.0, "Embu", "Kangaru", "Free Wifi Available", 30, 15]],
  [29, ["Carnegie Apartments", "3000", "Outside", 4.0, "Embu", "Kangaru", "Free Wifi Available", 30, 15]],
  [30, ["Mars Apartments", "5500", "Bedsitter", 4.0, "Embu", "Kangaru", "Free Wifi Available", 30, 15]],
  [31, ["Jupiter Plaza", "6000", "Bedsitter", 4.0, "Embu", "Kangaru", "Free Wifi Available", 30, 15]],
  [32, ["Mercury Towers", "7000", "Bedsitter", 4.0, "Embu", "Kangaru", "Free Wifi Available", 30, 15]],
  [33, ["Venus Towers", "4600", "Bedsitter", 4.0, "Embu", "Kangaru", "Free Wifi Available", 30, 15]],
  [34, ["Earth Apartments", "4900", "Bedsitter", 4.0, "Embu", "Kangaru", "Free Wifi Available", 30, 15]],
  [35, ["Pluto Towers", "4500", "Bedsitter", 4.0, "Embu", "Kangaru", "Free Wifi Available", 30, 15]],
  [36, ["Makemake Apartments", "3000", "Outside", 4.0, "Embu", "Kangaru", "Free Wifi Available", 30, 15]],
  [37, ["Saturn Apartments", "5500", "Bedsitter", 4.0, "Embu", "Kangaru", "Free Wifi Available", 30, 15]],
  [38, ["Jupiter Plaza", "6000", "Bedsitter", 4.0, "Embu", "Kangaru", "Free Wifi Available", 30, 15]]

])

//send the data to localStorage
function saveInfo(index) {
  function navigate() {
    localStorage.clear()
    console.log(details.get(index))
    localStorage.setItem("housedetails", JSON.stringify(details.get(index)))
    window.location.href = "https://rickmwasofficial.github.io/Autotest/Public/housedetails.html";
  }
  document.querySelector(`.carousel${index}`).innerHTML = `
    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    Loading...
  `
  setTimeout(() => {
    document.querySelector(`.carousel${index}`).innerHTML = `
    See More details`;
    navigate()
  }, 3000)
}
// Display the first set of cards when the page loads
displayCards(0, 12)

// function that uses pagination on home.html to determine which cards are on the page
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
            <img src=${images[0]} loading="lazy" class="d-block w-100 img-thumbnail" alt="...">
          </div>
          <div class="carousel-item">
            <img src=${images[1]} loading="lazy" class="d-block w-100 img-thumbnail" alt="...">
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
        <button class="btn btn-primary carousel${i}" onclick="saveInfo(${i})">See More details</button>
      </div>
    </div>
  </div>
    `
  }
  // This logic stops the browser from putting the first house into view when the page loads initially, and puts the house into view only when the pagination buttons were clicked
  id = `carousel${start}`
  if (id !== `carousel0` || def == 0) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }
}
function toTop() {
  console.log("hello")
  document.getElementById('navigation').scrollIntoView({ behavior: 'smooth' })
}
