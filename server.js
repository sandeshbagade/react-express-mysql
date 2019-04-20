const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const uuidv4 = require('uuid/v4')
app.use(express.urlencoded());
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const selectAll = "SELECT * from user";
app.use(cors());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database : "coral_blockchain_user"
});
  
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
app.post('/api/customers/addCustomers', (req, res) => {
      var {username , email , phoneNo,  password} = JSON.parse(JSON.stringify(req.body));
      const ID =parseInt(Math.random()*2000);
      var check_email_exixts=null;
       check_email_exixts= selectAll+" where emailId ="+mysql.escape(email);
       con.query(check_email_exixts, function (err, result) {
	    if (err) throw err;
	    console.log(result);
	 
       //  res.send('test worked');
       // res.end("yes");
	   if(result.length==0){
		var sql = `INSERT INTO user (ID ,userName, emailId ,password ,phoneNo ,dateTime) VALUES (`;
		sql+= ID+",";
		sql+= mysql.escape(username)+",";
		sql+= mysql.escape(email)+",";
		sql+= mysql.escape(password)+","+mysql.escape(phoneNo)+`,now());`;
		console.log(sql);
	  con.query(sql, function (err, result) {
	    if (err) throw err;
	    console.log("1 record inserted");
	  });
	  }
	  else {
         console.log("will try to update now ");
		        var sql_for_update = "UPDATE user SET"; 
				sql_for_update+= "userName=" + mysql.escape(username)+",";
				sql_for_update+= "emailId=" + mysql.escape(email)+",";
				sql_for_update+= "password="+mysql.escape(password)+","+"phoneNo="+mysql.escape(phoneNo)+",dateTime=now()";
				sql_for_update+=  "where emailId = "+mysql.escape(email);
				console.log(sql_for_update);
			  con.query(sql_for_update, function (err, result) {
			    if (err) throw err;
			    console.log("1 record UPDATEd");
			  });
	  	 
	  	   }
	  });
});
app.get('/api/customers', (req, res) => {
   var customers=[];
   
  con.query("SELECT * FROM user", function (err, result, fields) {
    if (err) throw err;
    res.json({customers : result});
  });
 
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);