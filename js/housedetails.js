let imgs = document.querySelector(".detailrow")
let housedetails = JSON.parse(localStorage.getItem("housedetails"))
let moreActions = document.querySelector(".morecont")
let availableHouses = [
    "pexels-josh-sorenson-111093.jpg", "pexels-daniel-maforte-5544034.jpg"
]

document.title = housedetails[0]
document.addEventListener("DOMContentLoaded", function() {
    imgs.innerHTML = `
    <div class="col col-12 mt-1 col-md-6">
    <img src="${availableHouses[0]}" alt="" width="auto" height="54" class="img-fluid">
    </div>
    <div class="col col-12 col-md-6">
        <div class="row mb-4 mt-1">
            <div class="col-6">
            <img src="${availableHouses[1]}" alt="" width="auto" height="54" class="img-fluid">
            </div>
            <div class="col-6">
            <img src="${availableHouses[0]}" alt="" width="auto" height="54" class="img-fluid">
            </div>
        </div>
        <div class="row">
            <div class="col-6">
            <img src="${availableHouses[1]}" alt="" width="auto" height="54" class="img-fluid">
            </div>
            <div class="col-6">
            <img src="${availableHouses[0]}" alt="" width="auto" height="54" class="img-fluid">
            </div>
        </div>
    </div>
    `
    moreActions.innerHTML = `
        <div class="textdet col-md-6 col-12">
                    <h1>${housedetails[0]}</h1>
                    <b>County: ${housedetails[4]}, Kenya</b><br>
                    <b>Location: ${housedetails[5]}</b><br>
                    <b>Room Type: ${housedetails[2]}</b><br>
                    <b>${housedetails[6]}</b><br>
                    <div class="review">
                        <h2>Reviews</h2>
                        <div class="reviewer">
                            <img src="me.jpg">
                            <div class="reviwerdet">
                                <b style="padding-top: 4px;">John Doe</b><br>
                                <b>Tenant</b><br>
                                <b>Rating: 4.5/5.0</b>
                            </div>
                        </div>
                        <div class="reviewtext">
                            
                            <p>Despite its compact size, the room is efficiently designed to maximize functionality and comfort. The layout is well-planned, with designated areas for sleeping, studying, and relaxing. The bed is cozy and equipped with storage drawers underneath, perfect for keeping belongings organized in a limited space. The desk provides ample workspace for studying, with enough room for a laptop and textbooks.</p>
                        </div>
                    </div>
                </div>
                <div class="book col-md-6 col-12">
                    <div class="bookdiv">
                        <b style="font-size: 20px;">Ksh ${housedetails[1]} per month</b>
                        <div class="in">
                            <b>Rooms: ${housedetails[7]}</b><hr>
                            <b>Vacancies: ${housedetails[8]}</b>
                        </div>
                        <button class="bookbutton container">
                            <b>Book Room</b>
                        </button>
                        <button class="bookbutton container">
                            <b>Book Room</b>
                        </button>
                        <button class="addcart container">
                            <b>Add to Cart</b>
                        </button>
                        <button class="report container">
                            <b>Report House</b>
                        </button>
                        
                    </div>
    
                </div>
    `
})
