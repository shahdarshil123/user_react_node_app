import express from "express";
import bodyParser from "body-parser";
import { render } from "ejs";
import cors from "cors";

const app = express();
// var cors = cors();
const port = 3000;
const users = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());

app.get("/", (req, res) => {
  res.render('./index.ejs');
  // console.log('User Form Requested');
});

app.get("/id", (req,res)=>{
  res.json(users);
});

app.post("/submit", (req, res) => {
  const details = {
    id: users.length+1,
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    gender: req.body.gender
  }
  users.push(details);
  console.log(details);
  // console.log("Response received\n");
  // res.json(details);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
