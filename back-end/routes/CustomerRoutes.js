const CustomerController = require("../controller/CustomerController");

const express = require("express");

class CustomerRoutes{
    #router = express.Router();
    #customerController = new CustomerController();

    constructor(){
        this.#configRoutes();
    };

    #configRoutes = () => {
        this.#router.get("/", this.#customerController.getAllCustomers);
    };

    getRouter = () => {
        return this.#router;
    };
}

module.exports = CustomerRoutes;