const express = require('express');
const { addTransaction, getAllTranscation } = require('../controllers/transactionCtrl');

// Router object
const router = express.Router(); // ✅ Use express.Router()

//routes
//add transaction POST method
router.post('/add-transaction', addTransaction);

//get Transactions
router.post('/get-transaction', getAllTranscation);

module.exports = router;
