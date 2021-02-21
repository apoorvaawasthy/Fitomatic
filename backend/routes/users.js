const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find() // find() returns everything in database
    .then((users) => res.json(users)) //returns the found users as json
    .catch((err) => res.status(400).json("Error: " + err));
});

//adding a newuser to the db
router.route("/add").post((req, res) => {
  const username = req.body.username;

  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
