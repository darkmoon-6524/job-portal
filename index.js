const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("public"));

const pg = require('pg');

const bodyParser = require("body-parser");

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "job-portal",
    password: "gm@123098",
    port: 5433,
});

db.connect();
app.use(bodyParser.urlencoded({ extended: true }));


//app.get()
app.get('/', (req, res) => {
    res.render('landing.ejs');
})

app.get('/index', (req, res) => {
    res.render('index.ejs');
})

app.get('/login', (req, res) => {
    res.render('login.ejs');
})

app.get('/register', (req, res) => {
    res.render('register.ejs');
})

app.get('/forget_password', (req, res) => {
    res.render('forget_password.ejs');
})

app.get('/about', (req, res) => {
    res.render('about.ejs');
})

app.get('/job', (req, res) => {
    res.render('job.ejs');
})


// app.post()
app.post('/login', async (req, res) => {
    const data = req.body;
    const result = await db.query('select * from customers where username = $1', [data.username]);
    if (result.rows.length === 0) {
        res.redirect('/register');
    }
    else {
        res.redirect('/index');
    }
});

app.post('/register', async (req, res) => {
    const user_data = req.body;
    await db.query('insert into customers (name, username, email, password) values ($1, $2, $3, $4)',
        [user_data.name, user_data.username, user_data.email, user_data.password]);
    res.redirect('/login');
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
