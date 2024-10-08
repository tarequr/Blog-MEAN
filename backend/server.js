const express = require('express');
const colors  = require('colors');
const cors    = require('cors');
const dotenv  = require('dotenv');
const connectDB = require('./config/db');


//dot env configuration
dotenv.config();

//DB connection
connectDB()

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

// app.use(morgan("dev"));

//route
//URL => http://localhost:8080
app.use('/api/v1/posts', require('./routes/postRoutes'));
app.use('/api/v1/users', require('./routes/userRoutes'));


app.get('/', (req, res) => {
    return res.status(200).send("<h1>Welcome to Blog Server</h1>");
});


//PORT => 8080
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, (req, res) => {
    console.log(`Server running on ${PORT}`.white.bgMagenta);
});