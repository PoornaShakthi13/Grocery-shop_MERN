const router = require('express').Router();
const CustomerRoutes = require('./CustomerRoutes');

const url_prefix = "/api/v1";

router.use(`${url_prefix}/customer`, new CustomerRoutes().getRouter());
module.exports = router;