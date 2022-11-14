const express = require("express");

const app = express();

//define port
const port=9090;

app.get("/", (req, res) => {

res.json({message:'Root page for CY cloudengineer bootcamp demo'})

})

//get example

app.get("/get-data", (req, res) => {

res.json({message:'Get JSON Example in demo'})

})

//run the application
app.listen(port, () => {
  console.log(`running at a port ${port}`);
});
