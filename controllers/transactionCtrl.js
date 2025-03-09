const transactionModel = require('../models/transactionModel');

const getAllTranscation = async (req, res) => {
    try {
        console.log("Fetching transactions for user:", req.body.userid); // Debugging line
        const { userid, frequency, selectedDate, type } = req.body;
        let dateFilter = {};
        let typeFilter = {};

        if (frequency !== "Custom") {
            const date = new Date();
            date.setDate(date.getDate() - parseInt(frequency));
            dateFilter = { date: { $gte: date } };
        } else if (selectedDate && selectedDate.length === 2) {
            dateFilter = {
                date: {
                    $gte: new Date(selectedDate[0]),
                    $lte: new Date(selectedDate[1])
                }
            };
        }

        if (type !== "All") {
            typeFilter = { type };
        }

        const transactions = await transactionModel.find({
            userid,
            ...dateFilter,
            ...typeFilter
        });
        console.log("Transactions fetched successfully:", transactions); // Debugging line
        res.status(200).json(transactions);
    } catch (error) {
        console.error("Error in getAllTranscation:", error); // Debugging line
        res.status(500).json(error);
    }
};

const addTransaction = async (req, res) => {
    try {
        console.log("Received transaction data:", req.body); // Debugging line
        const newTransaction = new transactionModel(req.body);
        await newTransaction.save();
        console.log("Transaction added successfully:", newTransaction); // Debugging line
        res.status(201).send("Transaction added successfully");
    } catch (error) {
        console.error("Error in addTransaction:", error);
        res.status(500).json({ success: false, message: "Failed to add transaction", error: error.message });
    }
};

module.exports = { getAllTranscation, addTransaction };
