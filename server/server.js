const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const accountsRouter = require('./routes/account.route');

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

const port = process.env.PORT || 5000;

// app.get('/', (req, res)=> {
//     const c = [{accNo: 'z1234', credit:1234}];
//     res.json(c);
// })

app.listen(port, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(`Server is running on port ${port}`);
});
