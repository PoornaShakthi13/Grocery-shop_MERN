const Customer = require('../models/Customer');

class CustomerController {
    getAllCustomers = async(req, res) => {
        try{
            // let allCustomers = await Customer.find();
            let allCustomers = [{id:"C001", name:"Kamal"}, {id:"C002", name:"Nimal"}];
            return res.status(200).json({message: "Load All Customers", response: allCustomers});

        }catch(error){
            if(error instanceof Error){
                return res.status(500).json({message: error.message});
            }else{
                return res.status(500).json({message: "Unknown Error Occured..!"});
            }
        }
    }
}

module.exports = CustomerController;