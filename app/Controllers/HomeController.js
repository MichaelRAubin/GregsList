export default class HomeController {

    constructor() {
        this.drawHomePage();
    }

    get Template() {
        return /* html */ `
     <div class="col-12 col-md-4 col-lg-3">
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                        <img class="img-fluid" src="assets/auto.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                        <img class="img-fluid" src="assets/house4.jpg" class="d-block w-100" alt="...">
                </div>
            </div>
        </div>
     </div>
        `;
    }

    drawHomePage() {
        try {
            let template = "";
            document.getElementById("listings").innerHTML = template
        } catch (error) {
            console.log(error);
        }
    }
}
