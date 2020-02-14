export default class House {
    constructor(data) {
        this._id = data._id;
        this.bedrooms = data.bedrooms;
        this.bathrooms = data.bathrooms;
        this.levels = data.levels;
        this.year = data.year;
        this.description = data.description;
        this.price = data.price;
        this.imgUrl = data.imgUrl;
    }

    get Template() {
        return /* html */ `
     <div class="col-12 col-md-4 col-lg-3">
        <div class="card">
            <img src="${this.imgUrl}" class="card-img-top" alt="a car image">
            <div class="card-body">
                <div class="card-title">${this.year} - ${this.bedrooms} - ${this.bathrooms}</div>
                <div class="card-subtitle">${this.price}</div>
                <p class="card-text">${this.description}</p>
            </div>
            <button class="btn btn-info" onclick="app.housesController.editHouse('${this._id}')">Edit</button>
            <button class="btn btn-danger" onclick="app.housesController.deleteHouse('${this._id}')">Delete</button>
        </div>
     </div>
        `;
    }
}