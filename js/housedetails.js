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
    <img src="${availableHouses[0]}" alt="" loading="lazy" width="auto" height="54" class="img-fluid">
    </div>
    <div class="col col-12 col-md-6">
        <div class="row mb-4 mt-1">
            <div class="col-6">
            <img src="${availableHouses[1]}" alt="" loading="lazy" width="auto" height="54" class="img-fluid">
            </div>
            <div class="col-6">
            <img src="${availableHouses[0]}" alt="" loading="lazy" width="auto" height="54" class="img-fluid">
            </div>
        </div>
        <div class="row">
            <div class="col-6">
            <img src="${availableHouses[1]}" alt="" loading="lazy" width="auto" height="54" class="img-fluid">
            </div>
            <div class="col-6">
            <img src="${availableHouses[0]}" alt="" loading="lazy" width="auto" height="54" class="img-fluid">
            </div>
        </div>
    </div>
    `
    moreActions.innerHTML = `
        <div class="textdet col-md-6 col-12">
                    <h3>${housedetails[0]}</h3>
                    <b><span class="text-danger">County: </span>${housedetails[4]}, Kenya</b><br>
                    <b><span class="text-danger">Location: </span>${housedetails[5]}</b><br>
                    <b><span class="text-danger">Room Type: </span>${housedetails[2]}</b><br>
                    <b><span class="text-danger">${housedetails[6]}</span></b><br>
                    <h5 class="mt-2">Reviews</h5>
                    <div id="reviewsCarousel" class="carousel carousel-dark slidereview my-3 my-md-1" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#reviewsCarousel" data-bs-slide-to="0" class="active bg-transparent" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#reviewsCarousel" class="bg-transparent" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#reviewsCarousel" class="bg-transparent"  data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#reviewsCarousel" class="bg-transparent"  data-bs-slide-to="3" aria-label="Slide 4"></button>
                        </div>
                        

                        <div class="carousel-inner container-fluid text-dark rounded border" style="width: 100%; height: auto; overflow: hidden; overflow-y: scroll;">
                            <div class="carousel-item active">
                                <div class="card reviewer border-bottom border-primary shadow-sm">
                                    <div class="card-body">
                                        <figure class="d-flex align-items-center m-0 p-0">
                                            <img class="img-fluid rounded rounded-circle m-0 border border-5" loading="lazy" src="https://randomuser.me/api/portraits/men/88.jpg" alt="">
                                            <figcaption class="ms-3">
                                                <h4 class="mb-1 h5">John Doe</h4>
                                                <h5 class="fs-6 text-secondary mb-0">Tenant</h5>
                                            </figcaption>
                                        </figure>
                                        <div class="bsb-ratings text-warning mb-3" data-bsb-star="4" data-bsb-star-off="0"></div>
                                        <blockquote class="bsb-blockquote-icon mb-3">Despite its compact size, the room is efficiently designed to maximize functionality and comfort. The layout is well-planned, with designated areas for sleeping, studying, and relaxing. The bed is cozy and equipped with storage drawers underneath, perfect for keeping belongings organized in a limited space. The desk provides ample workspace for studying, with enough room for a laptop and textbooks.</blockquote>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="carousel-item">
                                <div class="card reviewer border-bottom border-primary shadow-sm">
                                    <div class="card-body">
                                        <figure class="d-flex align-items-center m-0 p-0">
                                            <img class="img-fluid rounded rounded-circle m-0 border border-5" loading="lazy" src="https://randomuser.me/api/portraits/women/88.jpg"" alt="">
                                            <figcaption class="ms-3">
                                                <h4 class="mb-1 h5">Jane Doe</h4>
                                                <h5 class="fs-6 text-secondary mb-0">Tenant</h5>
                                            </figcaption>
                                        </figure>
                                        <div class="bsb-ratings text-warning mb-3" data-bsb-star="3" data-bsb-star-off="0"></div>
                                        <blockquote class="bsb-blockquote-icon mb-3">Review 2: Despite its compact size, the room is efficiently designed to maximize functionality and comfort. The layout is well-planned, with designated areas for sleeping, studying, and relaxing. The bed is cozy and equipped with storage drawers underneath, perfect for keeping belongings organized in a limited space. The desk provides ample workspace for studying, with enough room for a laptop and textbooks.</blockquote>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="carousel-item">
                                <div class="card reviewer border-bottom border-primary shadow-sm">
                                    <div class="card-body">
                                        <figure class="d-flex align-items-center m-0 p-0">
                                            <img class="img-fluid rounded rounded-circle m-0 border border-5" loading="lazy" src="https://randomuser.me/api/portraits/men/18.jpg"" alt="">
                                            <figcaption class="ms-3">
                                                <h4 class="mb-1 h5">Mike Doe</h4>
                                                <h5 class="fs-6 text-secondary mb-0">Tenant</h5>
                                            </figcaption>
                                        </figure>
                                        <div class="bsb-ratings text-warning mb-3" data-bsb-star="5" data-bsb-star-off="0"></div>
                                        <blockquote class="bsb-blockquote-icon mb-3">Review 3: Despite its compact size, the room is efficiently designed to maximize functionality and comfort. The layout is well-planned, with designated areas for sleeping, studying, and relaxing. The bed is cozy and equipped with storage drawers underneath, perfect for keeping belongings organized in a limited space. The desk provides ample workspace for studying, with enough room for a laptop and textbooks.</blockquote>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="card reviewer border-bottom border-primary shadow-sm">
                                    <div class="card-body">
                                        <figure class="d-flex align-items-center m-0 p-0">
                                            <img class="img-fluid rounded rounded-circle m-0 border border-1" loading="lazy" src="https://randomuser.me/api/portraits/women/18.jpg"" alt="">
                                            <figcaption class="ms-1 h5">
                                                <h5 class="mb-1">Josephine Doe</h5>
                                                <h5 class="fs-6 text-secondary mb-0">Tenant</h5>
                                            </figcaption>
                                        </figure>
                                        <div class="bsb-ratings text-warning mb-3" data-bsb-star="5" data-bsb-star-off="0"></div>
                                        <blockquote class="bsb-blockquote-icon mb-3">Review 4: Despite its compact size, the room is efficiently designed to maximize functionality and comfort. The layout is well-planned, with designated areas for sleeping, studying, and relaxing. The bed is cozy and equipped with storage drawers underneath, perfect for keeping belongings organized in a limited space. The desk provides ample workspace for studying, with enough room for a laptop and textbooks.</blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev me-4" type="button" data-bs-target="#reviewsCarousel" data-bs-slide="prev" style="width: 5%;">
                            <span class="carousel-control-prev-icon bg-transparent pe-1" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next ms-4" type="button" data-bs-target="#reviewsCarousel" data-bs-slide="next" style="width: 5%;">
                            <span class="carousel-control-next-icon bg-transparent text-danger" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div class="book col-md-6 col-12">
                    <div class="bookdiv">
                        <b style="font-size: 20px;">Ksh ${housedetails[1]} per month</b>
                        <div class="in">
                            <b>Rooms: ${housedetails[7]}</b>
                            <div class="vr mx-auto"></div>
                            <b>Vacancies: ${housedetails[8]}</b>
                        </div>
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
