const { addExpense, getExpenses, deleteExpense, updateExpense } = require('../controllers/expense');
const { addIncome, getIncomes, deleteIncome, updateIncome } = require('../controllers/income');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('hello world')
})

router.post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    .put('/update-income/:id', updateIncome)
    .delete('/delete-income/:id', deleteIncome)
    .post('/add-expense', addExpense)
    .get('/get-expenses', getExpenses)
    .put('/update-expense/:id', updateExpense)
    .delete('/delete-expense/:id', deleteExpense)

module.exports = router