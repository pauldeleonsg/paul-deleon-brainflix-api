// export, or to define, all the REST-able requests for comments/

const express = require("express");
const router = express.Router();

// get a list of comments
router.get("/", (req, resp) => {
  resp.send("YOu asked for students teo");
});

/// generally we are SENDING some data to the server...
// send a new coment...
router.post("/", (req, resp) => {
  // let's see what's in the body...
  console.log(req.body.name);
  resp.send("You made a post request to students");
});

// // doing what???
// router.delete("/", (req, resp) => {
//   resp.send("You made a post request");
// });

// exports the router object with all our
module.exports = router;
