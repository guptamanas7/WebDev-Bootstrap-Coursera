const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (request, response) =>
  response.sendFile(index.html));
app.post("/", function (req, res) {
  var n1 = Number(req.body.n1);
  var n2 = Number(req.body.n2);
  var result = n1 + n2;
  res.send("The Result of your calculation is: ");
});

app.listen(8000, function () {
  console.log("Server is running on port 8000");
});
