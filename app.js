require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT

app.use(express.json()); 
app.use(cors('*'));

let todos = [
    {id: 1, task: "Learn Node.js", completed: false},
    {id: 2, task: "Build a REST API", completed: false},
    {id: 3, task: "Test the API", completed: false}
];
 
app.get("/todos", (req, res) => {
    res.status(200).json(todos);
});




app.listen(PORT, () => {
  console.log(`API is live on ${PORT}`);
});









