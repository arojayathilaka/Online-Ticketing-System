const router = require('express').Router();
const JourneyExpress = require('../models/makeJourneyExpress.model');

router.route('/').get((req, res) => {

    JourneyExpress.find()
        .then(express =>
            res.status(200).send(express)
        )
        .catch(err =>
            res.status(400).send({message: 'Error: ' + err})
        );
});

router.route('/add').post((req, res) => {

    const acNo = req.body.acNo;
    const tokenID = req.body.tokenID;
    const expressWay = req.body.expressWay;
    const appFare = req.body.appFare;
    const distance = Number(req.body.distance);
    const jDate = req.body.jDate;
    const jTime = req.body.jTime;
    const fare = Number(req.body.fare);

    console.log(req.body);

    const newJourneyExpress = new JourneyExpress({ acNo, tokenID, expressWay, appFare, distance, jDate, jTime, fare });
    newJourneyExpress.save()
        .then(() => res.send({message: 'Journey Added!'}))
        .catch(err =>
            res.status(400).send({message: 'Error: ' + err})
        );
});

module.exports = router;