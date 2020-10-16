const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const accountsRouter = require('./routes/account.route');
const managersRouter = require('./routes/publicTransportManager.route');
const journeyRouter = require('./routes/makeJourney.route');
const expressJourneyRouter = require('./routes/makeJourneyExpress.route');
const creditsRouter = require('./routes/credits.route');
const journeyDetailsForVariableFareRouter = require('./routes/journeyDetailsForVariableFare.route');
const journeyDetailsForFixedFareRouter = require('./routes/journeyDetailsForFixedFare.route')
const inspectionRouter = require('./routes/inspection.route');

const app = express();

// utils
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended:true }));

// db config
const uri = process.env.MONGO_URI;

//connect to mongo
mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB database connection established successfully'))
    .catch(err => console.log(err));

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://acjayathilake:<password>@cluster0.1s3yg.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });

// use routes
app.use('/accounts', accountsRouter);
app.use('/managers', managersRouter);
app.use('/journey', journeyRouter);
app.use('/express', expressJourneyRouter);
app.use('/credit', creditsRouter);
app.use('/journeyDetailsForVariableFare', journeyDetailsForVariableFareRouter);
app.use('/journeyDetailsForFixedFare', journeyDetailsForFixedFareRouter);
app.use('/inspections', inspectionRouter);

const port = process.env.PORT || 5000;

app.listen(port, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(`Server is running on port ${port}`);
});
