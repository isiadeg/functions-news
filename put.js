function reg(admin){
const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(bodyParser.raw());


app.post('/', (req, res)=>{
 let ref = req.body.ref;
let nums = req.body.content.amount;

  if (typeof nums !== number){
    console.log("it's not a number");
    return res.status(400).json({"error": "The amount you entered is not a number"});
  }
  var db = admin.database();
  var dbref= db.ref(ref);

  //var newuser = dbrefchild.push();
  //newuser.set
  dbref.set(req.body.content,  function(error) {
  if (error) {
    res.status(500).json({"error":"Data could not be saved." + error});
  } else {
    res.status(201).json({"message":"Data saved successfully." });
  }
});

});
return app;
}

module.exports = function(admin){return reg(admin)};
