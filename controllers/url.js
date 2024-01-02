const shortid = require('shortid')

const urlModel = require('../models/url')

async function generateShortUrl(req, res){
    const body = req.body

    if(!body.url) return res.status(400).json({ msg: "URL is required"})

    const shortId = shortid()
    await urlModel.create({
        shortUrl: shortId,
        redirectUrl: body.url,
        visitedHistory: []
    })

    res.status(200).json({
        success: true,
        id: shortId
    })
}

async function getUrl(req, res){
    const shortUrl = req.params.shortId

    const urlEntry = await urlModel.findOneAndUpdate({
        shortUrl
    }, {
        $push: {
            visitedHistory: {
                timestamp: Date.now()
            }
        }
    })

    res.redirect(urlEntry.redirectUrl)
}

const getAnalytics = async (req, res) => {
    const shortId = req.params.shortId

    const analytics = await urlModel.findOne({shortUrl: shortId})

    res.status(200).json({
        totalClicks: analytics.visitedHistory.length,
        analytics: analytics.visitedHistory
    })
}

module.exports = {
    generateShortUrl,
    getUrl,
    getAnalytics
}