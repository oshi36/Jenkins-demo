const express = require("express");

const app = express();

//define port
const port=9090;

app.get("/", (req, res) => {

res.json({message:'Root page'})

})

//get example

app.get("/get-data", (req, res) => {

res.json({message:'Get JSON Example'})

})

//run the application
app.listen(port, () => {
  console.log(`running at port ${port}`);
});
