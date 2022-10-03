const express = require("express");
const router = express.Router();

const vidfig = require('./data/video.json');
const vidfigdetails = require('./data/video-details.json');


// get a list of comments
router.get("/", (req, resp) => {
    resp.send(vidfigdetails);
});


module.exports = router;
