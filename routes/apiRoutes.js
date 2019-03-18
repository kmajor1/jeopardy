const axios = require("axios");
const router = require("express").Router();

router.get("/category", (req, res) => {
  // axios
  //   .get("http://jservice.io/api/category?id=11535")
  //   .then(({ data }) => console.log(data))
  //   .catch(err => res.status(422).json(err));
  console.log("api endpoint has been hit")
});

module.exports = router;
