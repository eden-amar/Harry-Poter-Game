const express = require("express");
const app = express(); // express application

app.use(express.json());

app.listen( 3300,() => {console.log('application is running')})