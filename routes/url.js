const express = require("express");
const shortid = require("shortid");
const Url = require("../models/Url");

const router = express.Router();

// Helper function to validate URLs
function isValidUrl(url) {
    try {
        new URL(url); // Uses the built-in URL constructor
        return true;
    } catch (err) {
        return false;
    }
}

// POST /shorten
router.post("/shorten", async (req, res) => {
    const { originalUrl } = req.body;

    // Check if the URL is valid
    if (!originalUrl || !isValidUrl(originalUrl)) {
        return res.status(400).json({ error: "Invalid URL provided" });
    }

    try {
        const shortId = shortid.generate();
        const baseUrl = process.env.BASE_URL;

        const newUrl = new Url({ originalUrl, shortId });
        await newUrl.save();

        return res.status(201).json({ shortUrl: `${baseUrl}/${shortId}` });
    } catch (err) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
});


// GET /:shortId
router.get("/:shortId", async (req, res) => {
    try {
        const { shortId } = req.params;
        const url = await Url.findOne({ shortId });

        if (!url) {
            return res.status(404).json({ error: "URL not found" });
        }

        url.clicks += 1;
        url.lastAccessed = new Date();
        await url.save();

        return res.redirect(url.originalUrl);
    } catch (err) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

// GET /stats/:shortId
router.get("/stats/:shortId", async (req, res) => {
    try {
        const { shortId } = req.params;
        const url = await Url.findOne({ shortId });

        if (!url) {
            return res.status(404).json({ error: "URL not found" });
        }

        return res.status(200).json({
            originalUrl: url.originalUrl,
            clicks: url.clicks,
            lastAccessed: url.lastAccessed,
        });
    } catch (err) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;

