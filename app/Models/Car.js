export default class Car {
  constructor(data) {
    this._id = data._id;
    this.make = data.make;
    this.model = data.model;
    this.year = data.year;
    this.description = data.description;
    this.price = data.price;
    this.imgUrl = data.imgUrl;
  }

  get Template() {
    return /* html */ `
    <div class="col-12 col-md-4 col-lg-6">
        <div class="card shadow">
            <img src="${this.imgUrl}" class="card-img-top" alt="a car image">
            <div class="card-body">
                <div class="card-title">${this.make} - ${this.model}</div>
                <div class="card-subtitle">${this.price}</div>
                <p class="card-text">${this.description}</p>
            </div>
            <button class="btn btn-info" onclick="app.carsController.editCar('${this._id}')">Edit</button>
            <button class="btn btn-danger" onclick="app.carsController.deleteCar('${this._id}')">Delete</button>
        </div>
     </div>
     `;
  }

  get formTemplate() {
    return /*html*/ `
    <div class="col-12 col-md-4 col-lg-6">
    <form id="form" onsubmit="app.carsController.createCar()">
    <input name="_id" type="text" class="d-none" disabled />
    <div class="form-group">
      <label for="Make">Make:</label>
      <input name="Make" type="text" class="form-control" />
    </div>
    <div class="form-group">
      <label for="Model">Model:</label>
      <input name="Model" type="text" class="form-control" />
    </div>
    <div class="form-group">
      <label for="Year">Year:</label>
      <input name="Year" type="text" class="form-control" />
    </div>
    <div class="form-group">
      <label for="Price">Price:</label>
      <input name="Price" type="text" class="form-control" />
    </div>
    <div class="form-group">
      <label for="Description">Description:</label>
      <textarea name="Description" type="text" class="form-control"></textarea>
    </div>
    <div class="form-group">
      <label for="ImageURL">Image URL:</label>
      <input name="ImageURL" type="text" class="form-control" />
    </div>
    <button type="submit">Submit</button>
  </form>
    `;
  }
}
