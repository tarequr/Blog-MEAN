const express = require('express');
const cors    = require('cors');

const connect = require("./config/connect");

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    connect.connectToServer();
    console.log(`Server is running on port ${PORT}`);
});