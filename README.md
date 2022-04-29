# PBC Capstone


How to use:  
	1.Install node.js from https://nodejs.org/en/download/  
	2.Make sure that npm is a runnable command (node js should added to path in installation)  
	3.When node.js is installed properly, StartApp.bat should open your browser and start a node.js server.  
	4.Its reccommended to allow the app to run through the firewall when the popup appears.  
	5.The app runs on port 8080. Make sure no other service is taking this port.  
	6.Hitting your browsers back/forward buttons may mess with the code. Only use navigation through the UI  
	7.Clicking the small link on top should reset the app, also visiting http://localhost:8080 should do the same.  


Inside of app.js theres is a PostgreSQL database key. The database is free hosted by elephantsql.com

PostgreSQL tables

CREATE TABLE templates (
  CoachName VARCHAR (32),
  Selections TEXT [],
  PASectionNames TEXT [],
  PAQuestions TEXT [],
  BARowCount INT [],
  TemplateName VARCHAR (32),
  TempID INT
);

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

CREATE TABLE weeklytemplates(
  CoachName VARCHAR (32),
  WeeklySelections TEXT [],
  TempID INT,
  TemplateName VARCHAR (32)
);