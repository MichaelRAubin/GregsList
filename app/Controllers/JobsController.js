import JobsService from "../Services/JobsService.js";
import store from "../store.js";

//Private
function _draw() {
    let jobs = store.State.jobs;
    let template = "";
    jobs.forEach(job => (template += job.Template));
    document.getElementById("listings").innerHTML = template;
    console.log(jobs);
}

//Public
export default class JobsController {
    constructor() {
        store.subscribe("jobs", _draw);
    }

    async getJobs() {
        try {
            await JobsService.getJobs();
        } catch (error) {
            console.log(error);
        }
    }

    async createJob() {
        try {
            event.preventDefault();
            let form = event.target;
            let jobData = {
                // @ts-ignore
                company: form.Company.value,
                // @ts-ignore
                jobTitle: form.JobTitle.value,
                // @ts-ignore
                rate: form.Rate.value,
                // @ts-ignore
                hours: form.Hours.value,
                // @ts-ignore
                description: form.Description.value,
            };

            // @ts-ignore
            let id = form._id.value;
            if (id) {
                jobData._id = id;
                await JobsService.updateCar(jobData);
            } else {
                await JobsService.createCar(jobData);
            }
            // @ts-ignore
            form.reset();
        } catch (error) {
            console.log(error);
        }
    }
    async editJob(id) {
        let job = store.State.jobs.find(j => j._id == id);
        let form = document.getElementById("job-form");
        // @ts-ignore
        form.Company.value = job.company;
        // @ts-ignore
        form.JobTitle.value = job.jobTitle;
        // @ts-ignore
        form.Rate.value = job.rate;
        // @ts-ignore
        form.Hours.value = job.hours;
        // @ts-ignore
        form.Description.value = job.description;
        // @ts-ignore
        form._id.value = job._id;
    }

    async updateJob() {
        try {
            // @ts-ignore
            await JobsService.editJob();
        } catch (error) {
            console.log(error);
        }
    }

    async deleteJob(id) {
        try {
            await JobsService.deleteJob(id);
        } catch (error) {
            console.log(error);
        }
    }
}