const ExpenseSchema = require("../models/ExpenseModel")


exports.addExpense = async (req, res) => {
    const {title, amount, category, description, date}  = req.body

    const expense = ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        //validations
        if(!title || !category || !description || !date){
            return res.status(400).json({message: 'All fields are required!'})
        }
        if(amount <= 0 || !amount === 'number'){
            return res.status(400).json({message: 'Amount must be a positive number!'})
        }
        await expense.save()
        res.status(200).json({message: 'Expense Added'})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Server Error'})
    }

    console.log(expense)
}

exports.getExpenses = async (req, res) =>{
    try {
        const expenses = await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json(expenses)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}

exports.updateExpense = async (req, res) => {
    const { title, amount, category, description, date } = req.body;
    const { id } = req.params;

    try {
        // find expense by ID
        const expense = await ExpenseSchema.findById(id);

        if (!expense) {
            return res.status(404).json({ message: 'Expense not found' });
        }

        // update expense fields
        expense.title = title || expense.title;
        expense.amount = amount || expense.amount;
        expense.category = category || expense.category;
        expense.description = description || expense.description;
        expense.date = date || expense.date;

        // save updated expense
        await expense.save();
        res.status(200).json({ message: 'Expense updated' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
};


exports.deleteExpense = async (req, res) =>{
    const {id} = req.params;
    ExpenseSchema.findByIdAndDelete(id)
        .then((income) =>{
            res.status(200).json({message: 'Expense Deleted'})
        })
        .catch((err) =>{
            res.status(500).json({message: 'Server Error'})
        })
}