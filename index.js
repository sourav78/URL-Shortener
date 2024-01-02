const express = require('express')

const urlRoute = require('./routes/url')
const { databaseConnect } = require('./connection')
const { getUrl } = require('./controllers/url')

const app = express()
const port = 3001

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

databaseConnect()

app.use("/url", urlRoute)
app.get("/:shortId", getUrl)

app.listen(port, () => console.log(`App listening on port ${port}!`))