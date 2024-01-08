const express = require('express')
const path =  require("path")
const ejs = require('ejs')
require('dotenv').config()

const urlRoute = require('./routes/url')
const urlForm = require('./routes/urlForm')
const { databaseConnect } = require('./connection')
const { getUrl } = require('./controllers/url')

const app = express()
// const port = 3001

//setup ejs for server side rendering

app.set("view engine", "ejs")
app.set("views", path.resolve('./views'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

databaseConnect()

app.use("/url", urlRoute)
app.use("/home", urlForm)
app.get("/u/:shortId", getUrl)  

app.listen(process.env.PORT, () => console.log(`App listening on port ${process.env.PORT}!`))