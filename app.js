const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
//var sleep = require('sleep');
const app = express();
const port = "8080";
app.listen(8080);
const pg = require('pg');
//const R = require('ramda');
    
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'CapstonePBCDemo@gmail.com',
    pass: 'PBCDemo123'
  }
});

var mailOptions = {
  from: 'CapstonePBCDemo@gmail.com',
  to: 'email@yahoo.com',
  subject: 'New Session awaiting!',
  text: 'Your financial coach has created a new session and is awaiting its completion. Visit the Website to see it.'
};

function sendEmail(send)
{
  var mailOptions = {
    from: 'CapstonePBCDemo@gmail.com',
    to: send,
    subject: 'New Session awaiting!',
    text: 'Your financial coach has created a new session as is awaiting its completion. Visit the Website to see it.'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

}
/* Template Table
  CREATE TABLE templates (
  CoachName VARCHAR (32),
  Selections TEXT [],
  PASectionNames TEXT [],
  PAQuestions TEXT [],
  BARowCount INT [],
  TemplateName VARCHAR (32),
  TempID INT
);

Session Table
CREATE TABLE sessions(
CoachName VARCHAR (32),
CoachFName VARCHAR (32),
ClientName VARCHAR (32),
ClientUser VARCHAR (32),
ClientEmail VARCHAR(32),
TempID INT,
DateOf VARCHAR(32),
SessionID INT,
Status BOOL
);

Responses Table

CREATE TABLE responses(



);

WeeklySession Responses
CREATE TABLE weeklyresponses(

);

WeeklySession Templates

CREATE TABLE weeklytemplates(
  CoachName VARCHAR (32),
  WeeklySelections TEXT [],
  TempID INT,
  TemplateName VARCHAR (32)
);

Weekly Session Table

CREATE TABLE weeklysessions(
CoachName VARCHAR (32),
CoachFName VARCHAR (32),
ClientName VARCHAR (32),
ClientUser VARCHAR (32),
ClientEmail VARCHAR(32),
TempID INT,
DateOf VARCHAR(32),
SessionID INT,
Status BOOL,
SessionNo INT
);



*/


process.on('uncaughtException', function (err) {
  console.error(err);
  console.log("Node NOT Exiting...");
});

const cs = 'postgres://wdsatmay:h-_6cGbUfVasbEVtLVig8g_anJ-cYQ6x@kashin.db.elephantsql.com/wdsatmay';
let data;
var dataArray;
var datasend;
const client = new pg.Client(cs);
client.connect();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
  });

app.get("/css/bootstrap.min.css", (req, res) => {
    res.sendFile(path.join(__dirname+'/css/bootstrap.min.css'));
  });

app.get("/css/bootstrap.min.css", (req, res) => {
    res.sendFile(path.join(__dirname+'/css/bootstrap.min.css.map'));
  });
app.get("/scripts/functions.js", (req, res) => {
    res.sendFile(path.join(__dirname+'/scripts/functions.js'));
  });
app.get("/style.css", (req, res) => {
    res.sendFile(path.join(__dirname+'/style.css'));
  });
app.get("/image/logotransparent.png", (req, res) => {
    res.sendFile(path.join(__dirname+'/image/logotransparent.png'));
  });

  app.post('/createTemplate', async function(req,res)
  {
      //console.log(req.body);
      //console.log(req.body.CoachName);
      var queryStr = "INSERT into templates values(\'"+req.body.CoachName+"\',\'{"+req.body.Selections+"}\',\'{"+req.body.PASections+"}\',\'{"+req.body.PAQuestions+"}\',\'{"+req.body.BARowNum+"}\',\'"+req.body.TemplateName+"\',\'"+req.body.TempID+"\');";
      //console.log(queryStr);
      client.query(queryStr);
      //var result = client.query("SELECT * FROM templates");
      var result = "ok";
      res.send(result);
  
  });

  app.post('/createWTemplate', async function(req,res)
  {
      //console.log(req.body);
      //console.log(req.body.CoachName);
      console.log("creating w template");
      var queryStr = "INSERT into weeklytemplates values(\'"+req.body.CoachName+"\',\'{"+req.body.WeeklySelections+"}\',\'"+req.body.TempID+"\',\'"+req.body.TemplateName+"\');";
      //console.log(queryStr);
      client.query(queryStr);
      //var result = client.query("SELECT * FROM templates");
      var result = "ok";
      res.send(result);
  
  });

  app.post('/grabTemplates', async function(req,res)
  {

    

      var queryStr = {
        text:"SELECT templatename,tempid FROM templates WHERE coachname=\'"+req.body.CoachName+"\';",
        rowMode:'array'
      };

      //console.log(queryStr);
      var response = await client.query(queryStr);

      if(response.rowCount==0)
      {
        res.send("NONE");
      }
      else
      {
        var responseString = [];
        for(var i = 0;i<response.rowCount;i++)
        {
          var responseJSON =
          {
            templatename:response.rows[i][0],
            tempid:response.rows[i][1]
          };
          var responseJSONstr = JSON.stringify(responseJSON);
          responseString[i]=responseJSONstr;
        }
        res.send(responseString);
      }
      
  
  });
  app.post('/grabWTemplates', async function(req,res)
  {
    console.log("grabbing w template")
      var queryStr = {
        text:"SELECT templatename,tempid FROM weeklytemplates WHERE coachname=\'"+req.body.CoachName+"\';",
        rowMode:'array'
      };

      //console.log(queryStr);
      var response = await client.query(queryStr);

      if(response.rowCount==0)
      {
        res.send("NONE");
      }
      else
      {
        var responseString = [];
        for(var i = 0;i<response.rowCount;i++)
        {
          var responseJSON =
          {
            templatename:response.rows[i][0],
            tempid:response.rows[i][1]
          };
          var responseJSONstr = JSON.stringify(responseJSON);
          responseString[i]=responseJSONstr;
        }
        res.send(responseString);
      }
      
  
  });
  app.post('/createSession', async function(req,res)
  {
      //console.log(req.body);
      var queryStr = "INSERT into sessions values(\'"+req.body.CoachName+"\',\'"+req.body.CoachFullName+"\',\'"+req.body.CName+"\',\'"+req.body.CUser+"\',\'"+req.body.CEmail+"\',\'"+req.body.templateID+"\',\'"+req.body.Date+"\',\'"+req.body.SeshID+"\',"+req.body.Stat+");";
      client.query(queryStr);
      var result = "ok";
      res.send(result);
  
  });

  app.post('/createWSession', async function(req,res)
  {
      //console.log(req.body);
      var noCheck = "SELECT COUNT(*) FROM weeklysessions WHERE clientuser=\'"+req.body.CUser+"\';"

      var nocheckResult = await client.query(noCheck);
      //console.log(nocheckResult.rows[0].count);
      var sessionNum = parseInt(nocheckResult.rows[0].count) + 1
      console.log(sessionNum);
      var queryStr = "INSERT into weeklysessions values(\'"+req.body.CoachName+"\',\'"+req.body.CoachFullName+"\',\'"+req.body.CName+"\',\'"+req.body.CUser+"\',\'"+req.body.CEmail+"\',\'"+req.body.templateID+"\',\'"+req.body.Date+"\',\'"+req.body.SeshID+"\',"+req.body.Stat+",\'"+sessionNum+"\');";
      client.query(queryStr);
      var result = "ok";
      res.send(result);
      //sendEmail("abrahamc72@gmail.com");
  
  });

  app.post('/grabSessions', async function(req,res)
  {
      var queryStr = {
        text:"SELECT dateof,sessionid,status,clientname FROM sessions WHERE coachname=\'"+req.body.userName+"\';",
        rowMode:'array'
      };

      var response = await client.query(queryStr);

      if(response.rowCount==0)
      {
        res.send("NONE");
      }
      else
      {
        var responseString = [];
        for(var i = 0;i<response.rowCount;i++)
        {
          var responseJSON =
          {
            dateof:response.rows[i][0],
            sessID:response.rows[i][1],
            status:response.rows[i][2],
            clientName:response.rows[i][3]
          };
          var responseJSONstr = JSON.stringify(responseJSON);
          responseString[i]=responseJSONstr;
        }
        res.send(responseString);
      }
      
  
  });

  app.post('/grabWSessions', async function(req,res)
  {
      var queryStr = {
        text:"SELECT dateof,sessionid,status,clientname FROM weeklysessions WHERE coachname=\'"+req.body.userName+"\';",
        rowMode:'array'
      };

      var response = await client.query(queryStr);

      if(response.rowCount==0)
      {
        res.send("NONE");
      }
      else
      {
        var responseString = [];
        for(var i = 0;i<response.rowCount;i++)
        {
          var responseJSON =
          {
            dateof:response.rows[i][0],
            sessID:response.rows[i][1],
            status:response.rows[i][2],
            clientName:response.rows[i][3]
          };
          var responseJSONstr = JSON.stringify(responseJSON);
          responseString[i]=responseJSONstr;
        }
        res.send(responseString);
      }
      
  
  });

  app.post('/grabSessionsClient', async function(req,res)
  {
      var queryStr = {
        text:"SELECT dateof,sessionid,status,clientname FROM sessions WHERE clientuser=\'"+req.body.userName+"\';",
        rowMode:'array'
      };

      var response = await client.query(queryStr);

      if(response.rowCount==0)
      {
        res.send("NONE");
      }
      else
      {
        var responseString = [];
        for(var i = 0;i<response.rowCount;i++)
        {
          var responseJSON =
          {
            dateof:response.rows[i][0],
            sessID:response.rows[i][1],
            status:response.rows[i][2],
            clientName:response.rows[i][3]
          };
          var responseJSONstr = JSON.stringify(responseJSON);
          responseString[i]=responseJSONstr;
        }
        res.send(responseString);
      }
      
  
  });

  app.post('/grabWSessionsClient', async function(req,res)
  {
      var queryStr = {
        text:"SELECT dateof,sessionid,status,clientname FROM weeklysessions WHERE clientuser=\'"+req.body.userName+"\';",
        rowMode:'array'
      };

      var response = await client.query(queryStr);

      if(response.rowCount==0)
      {
        res.send("NONE");
      }
      else
      {
        var responseString = [];
        for(var i = 0;i<response.rowCount;i++)
        {
          var responseJSON =
          {
            dateof:response.rows[i][0],
            sessID:response.rows[i][1],
            status:response.rows[i][2],
            clientName:response.rows[i][3]
          };
          var responseJSONstr = JSON.stringify(responseJSON);
          responseString[i]=responseJSONstr;
        }
        res.send(responseString);
      }
      
  
  });

  app.post('/grabByID', async function(req,res)
  {
      var queryStr = {
        text:"SELECT TempID,CoachName FROM sessions WHERE sessionID=\'"+req.body.sessID+"\';",
        rowMode:'array'
      };
      
      var response = await client.query(queryStr);

      if(response.rowCount==0)
      {
        res.send("NONE");
      }
      else
      {
        var tempid = response.rows[0][0];
        console.log(tempid);
        var queryStr1 ={
        text:"SELECT Selections,PASectionNames,PAQuestions,BARowCount FROM templates WHERE TempID=\'"+tempid+"\';",
        rowMode:'array'
        };
        var response2 = await client.query(queryStr1);

        var responseJSON =
          {
            TempID:response.rows[0][0],
            CoachName:response.rows[0][1],
            selArray:response2.rows[0][0],
            PASectionArray:response2.rows[0][1],
            PAQsArray:response2.rows[0][2],
            BARowArray:response2.rows[0][3]
          };
        var responseString = JSON.stringify(responseJSON)

        res.send(responseString);
      }
      
  
  });

  app.post('/WgrabByID', async function(req,res)
  {
      var queryStr = {
        text:"SELECT TempID,CoachName FROM weeklysessions WHERE sessionID=\'"+req.body.sessID+"\';",
        rowMode:'array'
      };
      
      var response = await client.query(queryStr);

      if(response.rowCount==0)
      {
        res.send("NONE");
      }
      else
      {
        var tempid = response.rows[0][0];
        console.log(tempid);
        var queryStr1 ={
        text:"SELECT WeeklySelections FROM weeklytemplates WHERE TempID=\'"+tempid+"\';",
        rowMode:'array'
        };
        var response2 = await client.query(queryStr1);

        var responseJSON =
          {
            TempID:response.rows[0][0],
            CoachName:response.rows[0][1],
            selArray:response2.rows[0][0]
          };
        var responseString = JSON.stringify(responseJSON)

        res.send(responseString);
      }
      
  
  });




