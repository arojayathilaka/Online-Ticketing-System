const router = require('express').Router();
const Account = require('../models/account.model');

/**
 * Get details of all Accounts from the database
 * @returns {Account[]} array of accounts / error message
 */
router.route('/').get((req, res) => {
    Account.find()
        .then(accounts =>
                res.status(200).send(accounts)
        )
        .catch(err =>
            res.status(400).send({message: 'Error: ' + err})
        );
});

/**
 * Add a new account to the database
 * @param {string} accNo Account number of the account
 * @param {number} credit credit of the account
 * @returns success or error message
 */
router.route('/add').post((req, res) => {
    const accNo = req.body.accNo;
    const credit = Number(req.body.credit);

    console.log(req.body);

    const newAccount = new Account({ accNo, credit });
    newAccount.save()
        .then(() => res.send({message: 'Account created!'}))
        .catch(err =>
                res.status(400).send({message: 'Error: ' + err})
        );
});

module.exports = router;

