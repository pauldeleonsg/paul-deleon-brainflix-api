require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const { PORT } = process.env;

const commentRoutes = require("./comments"); // this comments file will eventually have all our comment routes
const studentsRoutes = require("./students"); // this comments file will eventually have all our comment routes
const videoRoutes = require("./videos");


app.use(cors());
app.use(express.json());
app.use(express.static("public"));


app.use("/comments", commentRoutes); // commentRoutes = a router object with avilable routes.
app.use("/students", studentsRoutes); // commentRoutes = a router object with avilable routes.
app.use("/videos", videoRoutes);


app.get("/", (req, res) => {
  res.send("Welcome to paul-deleon-brainflix-api!");
});


app.listen(PORT, () => {
  console.log("Server is listening on port: " + PORT);
});

