const express = require('express')
const urlModel = require('../models/url')

const router = express.Router()

router.get("/", async (req, res) => {

    const urls = await urlModel.find({})

    return res.render("home", {
        urls
    })
})

module.exports = router