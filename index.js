const express = require('express')
const path =  require("path")
const ejs = require('ejs')

const urlRoute = require('./routes/url')
const urlForm = require('./routes/urlForm')
const { databaseConnect } = require('./connection')
const { getUrl } = require('./controllers/url')

const app = express()
const port = 3001

//setup ejs for server side rendering

app.set("view engine", "ejs")
app.set("views", path.resolve('./views'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

databaseConnect()

app.use("/url", urlRoute)
app.use("/home", urlForm)
app.get("/:shortId", getUrl)    

app.listen(port, () => console.log(`App listening on port ${port}!`))