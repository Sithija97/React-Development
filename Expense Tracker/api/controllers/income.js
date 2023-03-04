const IncomeSchema = require('../models/IncomeModel');

exports.addIncome = async (req, res) => {
    const { title, amount, category, description, date } = req.body;

    const income = IncomeSchema({
        title,
        amount,
        date,
        category,
        description,
    })

    try {
        //validations
        if (!title || !category || !description || !date) {
            return res.status(400).json({ message: 'All fields are required!' })
        }
        if (amount <= 0 || !amount === 'number') {
            return res.status(400).json({ message: 'Amount must be a positive number!' })
        }
        await income.save()
        res.status(200).json({ message: 'Income Added' })
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
}

exports.getIncomes = async (req, res) => {
    try {
        const incomes = await IncomeSchema.find().sort({ createdAt: -1 })
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
}

exports.updateIncome = async (req, res) => {
    const { title, amount, category, description, date } = req.body;
    const { id } = req.params;

    try {
        // find income by ID
        const income = await IncomeSchema.findById(id);

        if (!income) {
            return res.status(404).json({ message: 'income not found' });
        }

        // update income fields
        income.title = title || income.title;
        income.amount = amount || income.amount;
        income.category = category || income.category;
        income.description = description || income.description;
        income.date = date || income.date;

        // save updated income
        await income.save();
        res.status(200).json({ message: 'Income updated' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
};


exports.deleteIncome = async (req, res) => {
    const { id } = req.params;
    IncomeSchema.findByIdAndDelete(id)
        .then((income) => { res.status(200).json({ message: 'Income Deleted' }) })
        .catch(error => { res.status(500).json({ message: 'Server Error' }) })
}