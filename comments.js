// export, or to define, all the REST-able requests for comments/

const express = require("express");
const router = express.Router();

// router.use((req, res, next) => {
//   console.log("A request was made...");
//   if (req.method === "GET") {
//     console.log("Check their read credentials");
//     next();
//   } else if (req.method === "POST") {
//     // imagine wou want to stop them
//     // validate that all field were filled in.
//     console.log("Invalid Auth");
//     res.status(401).send("Invalid authentication");
//   }
//   // is a function, that calls the next handler... carry on
// });

let comments = [
  { name: "test comment", comment: "some comment data" },
  { name: "test comment 2", comment: "some comment data" },
  { name: "test comment 3", comment: "some comment data" },
];

// get a list of comments
router.get("/", (req, resp) => {
  resp.send(comments);
});

/// generally we are SENDING some data to the server...
// send a new coment...
router.post("/", (req, resp) => {
  // push our new comment onto our array of comments
  comments.push({
    name: req.body.name,
    message: req.body.message,
  });
  console.log(comments);
  resp.status(201).send(comments);
});

// // doing what???
// router.delete("/", (req, resp) => {
//   resp.send("You made a post request");
// });

// exports the router object with all our
module.exports = router;
