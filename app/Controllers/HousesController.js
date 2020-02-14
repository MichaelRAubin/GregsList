import HousesService from "../Services/HousesService.js";
import store from "../store.js";

//Private
function _draw() {
    let houses = store.State.houses;
    let template = "";
    houses.forEach(house => (template += house.Template));
    document.getElementById("listings").innerHTML = template;
    console.log(houses);
}

//Public
export default class HousesController {
    constructor() {
        store.subscribe("houses", _draw);
    }

    async getHouses() {
        try {
            await HousesService.getHouses();
        } catch (error) {
            console.log(error);
        }
    }

    async createHouse() {
        try {
            event.preventDefault();
            let form = event.target;
            let houseData = {
                // @ts-ignore
                bedrooms: form.Bedrooms.value,
                // @ts-ignore
                bathrooms: form.Bathrooms.value,
                // @ts-ignore
                levels: form.Levels.value,
                // @ts-ignore
                year: form.Year.value,
                // @ts-ignore
                price: form.Price.value,
                // @ts-ignore
                description: form.Description.value,
                // @ts-ignore
                imgUrl: form.ImageURL.value
            };

            // @ts-ignore
            let id = form._id.value;
            if (id) {
                houseData._id = id;
                await HousesService.updateHouse(houseData);
            } else {
                await HousesService.createHouse(houseData);
            }
            // @ts-ignore
            form.reset();
        } catch (error) {
            console.log(error);
        }
    }
    async editHouse(id) {
        let house = store.State.houses.find(h => h._id == id);
        let form = document.getElementById("house-form");
        // @ts-ignore
        form.Bedrooms.value = house.bedrooms;
        // @ts-ignore
        form.Bathrooms.value = house.bathrooms;
        // @ts-ignore
        form.Levels.value = house.levels;
        // @ts-ignore
        form.Year.value = house.year;
        // @ts-ignore
        form.Price.value = house.price;
        // @ts-ignore
        form.Description.value = house.description;
        // @ts-ignore
        form.ImageURL.value = house.imgUrl;
        // @ts-ignore
        form._id.value = house._id;
    }

    async updateHouse() {
        try {
            // @ts-ignore
            await HousesService.editHouse();
        } catch (error) {
            console.log(error);
        }
    }

    async deleteHouse(id) {
        try {
            await HousesService.deleteHouse(id);
        } catch (error) {
            console.log(error);
        }
    }
}