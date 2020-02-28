const TransactionModel = require("../models/Transactions")


//@desc     Get all transactions
//@route    GET /api/v1/transactions
//@access   public
exports.getTransactions = async (req, res, next) => {
   try {
       const transactions  = await TransactionModel.find();
       return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
       });
   } catch (err) {
       return res.status(500).json({
           success: false,
           data:[],
           errorMessage: err.message
       });
   }
}

//@desc     Add transactions
//@route    POST /api/v1/transactions
//@access   public
exports.addTransactions = async (req, res, next) => {
   try {
    const {amount, text} = req.body;
    const transaction = await TransactionModel.create(req.body);

    return res.status(201).json({
        success: true,
        data: transaction
    });
   } catch (err) {
       res.status(500).json({
           success: false,
           data:[],
           errorMessage: err.message
       });
   }
}

//@desc     Get all transactions
//@route    DELETE /api/v1/transactions/:id
//@access   public
exports.deleteTransactions = (req, res, next) => {
    res.send("DELETE Transactions");
}