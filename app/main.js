import HomeController from "./Controllers/HomeController.js";
import CarsController from "./Controllers/CarsController.js";
import HousesController from "./Controllers/HousesController.js";
import JobsController from "./Controllers/JobsController.js";

class App {
  homeController = new HomeController();
  carsController = new CarsController();
  housesController = new HousesController();
  jobsController = new JobsController();
}

window["app"] = new App();

