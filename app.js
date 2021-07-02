if (process.env.NODE_ENV != 'production') {
    require('dotenv').config();
}
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const Client = require('./models/client');
const methodOverride = require('method-override');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// mongoose.connect('mongodb://localhost:27017/clientDtl',
mongoose.connect(process.env.DB_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log("DB Connected");
    })
    .catch((err) => {
        console.log("Oh no error");
        console.log(err);
    })

// seedDB();

// app.get('/', (req, res) => {
//     res.render('clients/index');
// })

app.get('/', async (req, res) => {
    try {
        const clients = await Client.find({});
        res.render('clients/index', { clients });
    }
    catch (e) {
        console.log("Something went wrong");
        res.render('error');
    }

})
app.get('/clients/new', (req, res) => {
    console.log(req.body.client);
    res.render('clients/new');
})

// create new product
app.post('/clients', async (req, res) => {
    try {
        await Client.create(req.body.client);
        res.redirect('/');
    } catch (e) {
        console.log(e.message);
        res.render('error');
    }

});

app.listen(process.env.PORT || 3000, (req, res) => {
    console.log("server running at port 3000");
})