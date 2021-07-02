// const express = require('express');
// const router = express.Router();
// const Client = require('../models/client');

// router.get('/clients', async (req, res) => {
//     try {
//         const clients = await Client.find({});
//         res.render('clients/index', { clients });
//     }
//     catch (e) {
//         console.log("Something went wrong");
//         res.render('error');
//     }

// })
// router.get('/error', (req, res) => {
//     res.status(500).render('error');
// })
// module.exports = router;