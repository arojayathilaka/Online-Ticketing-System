const router = require('express').Router();
const Journey = require('../models/makeJourney.model');

router.route('/').get((req, res) => {

    Journey.find()
        .then(journeys =>
            res.status(200).send(journeys)
        )
        .catch(err =>
            res.status(400).send({message: 'Error: ' + err})
        );
});

router.route('/add').post((req, res) => {

    const acNo = req.body.acNo;
    const tokenID = req.body.tokenID;
    const startPoint = req.body.startPoint;
    const desPoint = req.body.desPoint;
    const appFare = req.body.appFare;
    const distance = Number(req.body.distance);
    const jDate = req.body.jDate;
    const jTime = req.body.jTime;
    const fare = Number(req.body.fare);

    console.log(req.body);

    const newJourney = new Journey({ acNo, tokenID, startPoint, desPoint, appFare, distance, jDate, jTime, fare });
    newJourney.save()
        .then(() => res.send({message: 'Journey Added!'}))
        .catch(err =>
            res.status(400).send({message: 'Error: ' + err})
        );
});

module.exports = router;