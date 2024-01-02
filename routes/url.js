const express = require('express')
const { generateShortUrl, getAnalytics } = require('../controllers/url')

const router = express.Router()

router.post("/", generateShortUrl)
router.get("/analytics/:shortId", getAnalytics)

module.exports = router
