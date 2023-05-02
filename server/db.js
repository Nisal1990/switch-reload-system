import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

const app = express();
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24
    }
}))

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: "",
    database: 'switch_db'
})

app.get('/', (req, res) => {
    if(req.session.username){
        return res.json({valid: true, username: req.session.username})
    } else {
        return res.json({valid: false})
    }
})

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO users (`first_name`, `last_name`, `username`, `mobile_number`, `password`, `confirm_password`) VALUES (?)";
    const values = [
        req.body.firstname,
        req.body.lastname,
        req.body.username,
        req.body.telephone,
        req.body.password,
        req.body.confirmpassword
    ]
    db.query(sql, [values], (err, data) =>{
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM users WHERE username = ? AND password = ?";
    db.query(sql, [req.body.username, req.body.password], (err, data) =>{
        if(err) return res.json({Message: "Error inside server"});
        if(data.length > 0){
            req.session.username = data[0].username;
            return res.json({Login: true, username: req.session.username})
        } else {
            return res.json({Login: false})
        }
    })
})

app.listen(8081, () => {
    console.log("connect to the server");
})