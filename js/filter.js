var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
var clearFilterTrigger = document.getElementById('clearFilterToastBtn')
var clearFilterToast = document.getElementById('clearFilterToast')

let section = document.querySelector(".loadfilter")
let clearbtn = document.querySelector(".clear")
let load = document.querySelector(".loader")

let rent = document.querySelector(".rentdiv")
let room = document.querySelector(".roomdiv")
let wifi = document.querySelector(".wifidiv")

// Toast trigger logic for successfully applying filters
toastTrigger.addEventListener('click', function () {
    displayFilterLoad()
    let apply = new bootstrap.Toast(toastLiveExample)
    setTimeout(() => {apply.show(); removeFilterLoad()}, 4000)

})

// Display the loading icon
function displayFilterLoad() {
    section.innerHTML = `
        <div class="d-flex justify-content-center loader" style="display: none;">
        <div class="spinner-grow text-dark" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    `
}

// Remove the Loading Icon
function removeFilterLoad() {
    section.innerHTML = `

    <button class="btn btn-primary" type="button" id="liveToastBtn">Apply Filters</button>
    <button class="btn btn-danger clear" type="button" id="clearFilterToastBtn">Clear Filters</button>
    `
}

// Clear all filters
function clearFilter() {
    rent.innerHTML = `
    <div class="form-check defaultchecked">
            <input class="form-check-input" type="radio" name="rent" id="rent0" value="3" checked>
            <label class="form-check-label text-dark" for="rent0">
              All
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="rent" id="rent1" value="1">
            <label class="form-check-label text-dark" for="rent1">
              KSH 3000 - 7000
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="rent" id="rent2" value="2">
            <label class="form-check-label text-dark" for="rent2">
              KSH 7000 - 12000
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="rent" id="rent3" value="3">
            <label class="form-check-label text-dark" for="rent3">
              KSH 12000 - 15000
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="rent" id="rent4" value="4">
            <label class="form-check-label text-dark" for="rent4">
              KSH 15000 - 20000
            </label>
          </div>
    `
    room.innerHTML = `
    <div class="form-check defaultchecked">
    <input class="form-check-input" type="radio" name="roomtype" id="allroom" value="3" checked>
    <label class="form-check-label text-dark" for="allroom">
      All
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="roomtype" id="bedsitter" value="0">
    <label class="form-check-label text-dark" for="bedsitter">
      Bedsitter
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="roomtype" id="onebedroom" value="1">
    <label class="form-check-label text-dark" for="onebedroom">
      One bedroom
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="roomtype" id="twobedroom" value="2">
    <label class="form-check-label text-dark" for="twobedroom">
      Two Bedroom
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="roomtype" id="moreroom" value="3">
    <label class="form-check-label text-dark" for="moreroom">
      More
    </label>
  </div>
    `
    wifi.innerHTML = `
    <div class="form-check defaultchecked">
            <input class="form-check-input" type="radio" name="Wifi" id="wifiyes" value="1" checked>
            <label class="form-check-label text-dark" for="wifiyes">
              Yes
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="Wifi" id="wifino" value="0">
            <label class="form-check-label text-dark" for="wifino">
              No
            </label>
          </div>
    `
    
}
// Toast Trigger for successfully clearing all filters
clearFilterTrigger.addEventListener('click', function () {
    displayFilterLoad()
    let clear = new bootstrap.Toast(clearFilterToast)
    setTimeout(() => {clear.show(); removeFilterLoad()}, 4000)
    clearFilter()
})
