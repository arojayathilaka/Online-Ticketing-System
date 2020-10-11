const router = require('express').Router();
const Credit = require('../models/credits.model');

router.route('/').get((req, res) => {

    Credit.find()
        .then(credits =>
            res.status(200).send(credits)
        )
        .catch(err =>
            res.status(400).send({message: 'Error: ' + err})
        );
});

router.route('/add').post((req, res) => {

    const tokenType = req.body.tokenType;
    const acNo = req.body.acNo;
    const currentBalance = Number(req.body.currentBalance);
    const credits = Number(req.body.credits);
    const paymentMethod = req.body.paymentMethod;


    console.log(req.body);

    const newCredits = new Credit({ tokenType, acNo, currentBalance, credits, paymentMethod });
    newCredits.save()
        .then(() => res.send({message: 'Credit Added!'}))
        .catch(err =>
            res.status(400).send({message: 'Error: ' + err})
        );
});

module.exports = router;