const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('hello world')
})

router.post('/add-income', addIncome)
      .get('/get-income', getIncomes)
      .delete('/delete-income/:id', deleteIncome)

module.exports = router