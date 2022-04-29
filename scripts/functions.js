var coachName = "testcoach1";
var clientName = "testclient1";

var selectionArray = new Array();
selectionArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//0 means excluded from template,1 means included
//0 - Personal Alignment
//1 - Personal Goals
//2 - Business Alignment
//3 - Business goals
//4 - Business SWOT
//5 - Business Purpose
//6 - Model,Product/Services and Customers
//7 - Thought Assessment
//8 - Thought Assessment Outcomes
//9 - Thought Assessment Profiles
//10 - Business Financial Performance
//11 - Business Funnel Performance

var paRowCount = 4;

var paSectionArray = new Array();
paSectionArray = ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x"]
//0-10 - Section names of PA


var paQuestionArray = new Array();
paQuestionArray = ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x"];
//0-10 - Questions for each section

var baRowCount = new Array();
baRowCount = [5, 5, 5, 5];

var TemplateName = "";
var added = 1;
var currentSessionArray;
var selTempName = "";

var features = ["Finances", "Health", "Mindset", "Knowledge", "Relationships", "Time"]
var PATicks = [0, 0, 0, 0, 0, 0]

var selectedSession = {
    coach: "None",
    datecreated: "NaN",
    modules: ["none"]
};


var responseArray = {
    PAResponsesCurrent: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    PAResponsesIdeal: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],


};

var weeklySelections = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

function changeUser() {
    var user = document.getElementById("UserField");
    coachName = user.value;
    updateUser();
}
function updateUser() {
    var welcome = document.getElementById("UserWelcome");
    welcome.innerHTML = "Welcome    " + coachName;
}
function updateCUser() {
    var welcome = document.getElementById("ClientWelcome");
    welcome.innerHTML = "Welcome    " + clientName;
}
function changeUser() {
    var user = document.getElementById("UserField2");
    clientName = user.value;
    updateCUser();
}

//window.location.href = "#CoachHome";
//grab template selections
function grabSelections1() {

    for (i = 0; i < 12; i++) {
        var element = "tempbox";
        element += i;
        console.log(element);

        if (document.getElementById(element).checked == true) {
            selectionArray[i] = 1;

        }
        else {
            selectionArray[i] = 0;
        }
    }
    console.log(selectionArray);

}

//add a row to Personal Alignment
function addRowPA() {
    if (document.getElementById("PA5").hidden == true) {
        paRowCount++;
        document.getElementById("PA5").hidden = false;
        document.getElementById("PAQ5").hidden = false;
    }
    else if (document.getElementById("PA6").hidden == true) {
        paRowCount++;
        document.getElementById("PA6").hidden = false;
        document.getElementById("PAQ6").hidden = false;
    }
    else if (document.getElementById("PA7").hidden == true) {
        paRowCount++;
        document.getElementById("PA7").hidden = false;
        document.getElementById("PAQ7").hidden = false;
    }
    else if (document.getElementById("PA8").hidden == true) {
        paRowCount++;
        document.getElementById("PA8").hidden = false;
        document.getElementById("PAQ8").hidden = false;
    }
    else if (document.getElementById("PA9").hidden == true) {
        paRowCount++;
        document.getElementById("PA9").hidden = false;
        document.getElementById("PAQ9").hidden = false;
    }
    else if (document.getElementById("PA10").hidden == true) {
        paRowCount = 10;
        document.getElementById("PA10").hidden = false;
        document.getElementById("PAQ10").hidden = false;
    }

}

//remove a row from Personal Alignment
function removeRowPA() {
    if (document.getElementById("PA10").hidden == false) {
        paRowCount--;
        document.getElementById("PA10").hidden = true;
        document.getElementById("PAQ10").hidden = true;
    }
    else if (document.getElementById("PA9").hidden == false) {
        paRowCount--;
        document.getElementById("PA9").hidden = true;
        document.getElementById("PAQ9").hidden = true;
    }
    else if (document.getElementById("PA8").hidden == false) {
        paRowCount--;
        document.getElementById("PA8").hidden = true;
        document.getElementById("PAQ8").hidden = true;
    }
    else if (document.getElementById("PA7").hidden == false) {
        paRowCount--;
        document.getElementById("PA7").hidden = true;
        document.getElementById("PAQ7").hidden = true;
    }
    else if (document.getElementById("PA6").hidden == false) {
        paRowCount--;
        document.getElementById("PA6").hidden = true;
        document.getElementById("PAQ6").hidden = true;
    }
    else if (document.getElementById("PA5").hidden == false) {
        paRowCount = 4;
        document.getElementById("PA5").hidden = true;
        document.getElementById("PAQ5").hidden = true;
    }
}

//grab Personal Alignment answers
function grabPASelections() {
    paQuestionArray = ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x"];
    paSectionArray = ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x"];
    for (i = 1; i < paRowCount + 1; i++) {
        var grabSection = "PA";
        var grabQ = "PAQ";
        grabSection += i;
        grabQ += i;



        paSectionArray[i - 1] = document.getElementById(grabSection).value;
        paQuestionArray[i - 1] = document.getElementById(grabQ).value;
    }
    console.log(paRowCount);
    console.log(paSectionArray);
}

//add a row to Business Alignment
function BArem(n) {
    if (document.getElementById((n + "BA5")).hidden == false) {
        baRowCount[n - 1] = baRowCount[n - 1] - 1;
        document.getElementById(n + "BA5").hidden = true;
        document.getElementById(n + "BA5").hidden = true;
    }
    else if (document.getElementById((n + "BA4")).hidden == false) {
        baRowCount[n - 1] = baRowCount[n - 1] - 1;
        document.getElementById(n + "BA4").hidden = true;
        document.getElementById(n + "BA4").hidden = true;
    }
    else if (document.getElementById((n + "BA3")).hidden == false) {
        baRowCount[n - 1] = baRowCount[n - 1] - 1;
        document.getElementById(n + "BA3").hidden = true;
        document.getElementById(n + "BA3").hidden = true;
    }
    else if (document.getElementById((n + "BA2")).hidden == false) {
        baRowCount[n - 1] = 1;
        document.getElementById(n + "BA2").hidden = true;
        document.getElementById(n + "BA2").hidden = true;
    }

    console.log(baRowCount);

}

//remove row BA
function BAadd(n) {
    if (document.getElementById((n + "BA2")).hidden == true) {
        baRowCount[n - 1] = baRowCount[n - 1] + 1;
        document.getElementById(n + "BA2").hidden = false;
        document.getElementById(n + "BA2").hidden = false;
    }
    else if (document.getElementById((n + "BA3")).hidden == true) {
        baRowCount[n - 1] = baRowCount[n - 1] + 1;
        document.getElementById(n + "BA3").hidden = false;
        document.getElementById(n + "BA3").hidden = false;
    }
    else if (document.getElementById((n + "BA4")).hidden == true) {
        baRowCount[n - 1] = baRowCount[n - 1] + 1;
        document.getElementById(n + "BA4").hidden = false;
        document.getElementById(n + "BA4").hidden = false;
    }
    else if (document.getElementById((n + "BA4")).hidden == true) {
        baRowCount[n - 1] = baRowCount[n - 1] + 1;
        document.getElementById(n + "BA4").hidden = false;
        document.getElementById(n + "BA4").hidden = false;
    }
    else if (document.getElementById((n + "BA5")).hidden == true) {
        baRowCount[n - 1] = 5;
        document.getElementById(n + "BA5").hidden = false;
        document.getElementById(n + "BA5").hidden = false;
    }
    console.log(baRowCount);
}

function grabBASelections() {




}

function createTemplate() {
    TemplateName = document.getElementById("tatempname").value;
    added = 0;
}

function listTemplate() {
    if (added == 1) {

    }
    else {
        document.getElementById("templateSelect").innerHTML += "<option>" + TemplateName + "</option>";
        added = 1;
    }


}

function selectTemplate(n) {
    if (n == 1) {
        selTempName = document.getElementById("templateSelect").value;
        console.log(selTempName);

        if (selTempName == 0) {
            window.location.href = "#createSession2";
        }
        else {
            //console.log("3");
            window.location.href = "#createSession3";
        }

    }
    if (n == 0) {
        selTempName = document.getElementById("templateWSelect").value;
        console.log(selTempName);

        if (selTempName == 0) {
            window.location.href = "#createWSession2";
        }
        else {
            //console.log("3");
            window.location.href = "#createWSession3";
        }
    }


}

function drawPARadar() {
    data = [];
    for (i = 0; i > 5; i++) {

    }

    let svg = d3.select("body").append("svg")
        .attr("width", 600)
        .attr("height", 600);

    let radialScale = d3.scaleLinear()
        .domain([0, 10])
        .range([0, 250]);


}
function currentScoreAvg() {
    var arr = document.getElementById("financeCurrent").value;
    var total = 0;
    var avg = 0;

    for (var i = 0; i < arr.length; i++) {
        if (parseInt(arr[i].value)) {
            total += parseInt(arr[i].value);
        }
    }

    avg = total / arr.length;

}


// will move to 3 parameters for other columns/rows using: revamount, margin, netprofit
function netProfitCalc(value1, value2, flag) {

    var aramount = document.getElementById(value1).value;
    var pm = document.getElementById(value2).value;
    if (aramount != null && pm != null) {
        var percent = pm / 100;
        var result = aramount * percent;
        if (flag == 0) {
            document.getElementById("NPnum").value = result;
        }
        else if (flag == 1) {
            document.getElementById("NetPC").value = result;
        }
        else if (flag == 2) {
            document.getElementById("NetPi").value = result;
        }

    }

}

function Customers(value1, value2, flag) {
    var leadsC = document.getElementById(value1).value;
    var convRate = document.getElementById(value2).value / 100;
    if (leadsC != null && convRate != null) {
        var result = leadsC * convRate;
        if (flag == 0) {
            document.getElementById("CustomerC").value = result;
        }
        if (flag == 1) {
            document.getElementById("Customeri").value = result;
        }

    }
}
function sync(text) {
    document.getElementById("ARPCC").value = text.value;
}

// function works when "ARPC" is changed, not "ARPCC"
function newRevC(value1, value2, flag) {
    var cust = document.getElementById(value1).value;
    var revPCust = document.getElementById(value2).value;
    var result = cust * revPCust;
    if (flag == 0) {
        document.getElementById("NewRC").value = result;
    }
    else if (flag == 1) {
        document.getElementById("NewRi").value = result;
    }
}

function TotalSalesCost(value1, value2, flag) {
    var costPerson = document.getElementById(value1).value;
    var numberPerson = document.getElementById(value2).value;
    var result = costPerson * numberPerson;
    if (flag == 0) {
        document.getElementById("TotalSCC").value = result;
    }
    else if (flag == 1) {
        document.getElementById("TotalSCi").value = result;
    }
}

function AddStuff(value1, value2, flag) {
    var add1 = document.getElementById(value1).value;
    var add2 = document.getElementById(value2).value;
    result = add1 + add2;
    if (flag == 0) {
        document.getElementById("TotalSaMC").value = result;
    }
    else if (flag == 1) {
        document.getElementById("TotalSaMi").value = result;
    }
}

function CostAcq(value1, value2, flag) {
    var div1 = document.getElementById(value1).value;
    var div2 = document.getElementById(value2).value;
    result = div2 / div1;
    if (flag == 0) {
        document.getElementById("CostoAPCC").value = result;
    }
    else if (flag == 1) {
        document.getElementById("CostoAPCi").value = result;
    }
}

function CostAcqPercent(value1, value2, flag) {
    var part1 = document.getElementById(value1).value;
    var part2 = document.getElementById(value2).value;
    result = (part1 / part2) * 100 + "%";
    if (flag == 0) {
        document.getElementById("CostoAPCpercentC").value = result;
    }
    else if (flag == 1) {
        document.getElementById("CostoAPCpercenti").value = result;
    }
}

function clearSession() {
    document.getElementById("sessionDate").value = "";
    document.getElementById("sessionClientName").value = "";
    document.getElementById("sessionClientUser").value = "";
    document.getElementById("sessionClientEmail").value = "";
    document.getElementById("sessionCoachFName").value = "";
}

function createTemplate() {


    var templateName = document.getElementById("tatempname").value;
    if (templateName == "") {
    }
    else {


        var URL = 'http://localhost:8080/createTemplate';

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;

        var rand = Math.floor(Math.random() * (99999999 - 10000000) + 10000000);


        var dataObject = {
            CoachName: coachName,
            Selections: selectionArray,
            PASections: paSectionArray,
            PAQuestions: paQuestionArray,
            BARowNum: baRowCount,
            TemplateName: templateName,
            TempID: rand
        };
        var jsonObj = JSON.stringify(dataObject);

        var dataReturned = "";
        var post = $.ajax({
            traditional: true,
            async: false,
            type: 'POST',
            contentType: 'application/json',
            dataType: 'json',
            data: jsonObj,
            url: URL,
            success: function (data) {
                return data;
            }
        });

    }

}

function createWTemplate() {


    var templateName = document.getElementById("tatempname2").value;
    if (templateName == "") {

    }
    else {
        var URL = 'http://localhost:8080/createWTemplate';

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;

        var rand = Math.floor(Math.random() * (99999999 - 10000000) + 10000000);


        var dataObject = {
            CoachName: coachName,
            WeeklySelections: weeklySelections,
            TempID: rand,
            TemplateName: templateName
        };

        var jsonObj = JSON.stringify(dataObject);

        var dataReturned = "";
        var post = $.ajax({
            traditional: true,
            async: false,
            type: 'POST',
            contentType: 'application/json',
            dataType: 'json',
            data: jsonObj,
            url: URL,
            success: function (data) {
                return data;
            }
        });

    }

}

function listTemplate() {
    var coachObj = {
        CoachName: coachName
    }
    var coachJson = JSON.stringify(coachObj);

    var URL2 = 'http://localhost:8080/grabTemplates';
    var post2 = $.ajax({
        traditional: true,
        async: false,
        type: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: coachJson,
        url: URL2,
        success: function (data) {
            return data;
        }
    });

    var optionselect = document.getElementById("templateSelect");
    optionselect.innerHTML = "<option value=0 selected>Quick Creation (No customization)</option>";
    if (post2.responseText == "NONE") {

    }
    else {
        returnJson = post2.responseJSON;
        for (var i = 0; i < returnJson.length; i++) {
            var newjson = JSON.parse(returnJson[i]);
            //<option selected>Quick Creation (No customization)</option>
            var optionselect = document.getElementById("templateSelect");
            optionselect.innerHTML += "<option value=" + newjson.tempid + " selected>" + newjson.templatename + "</option>";

        }
    }


}
function listWTemplate() {
    var coachObj = {
        CoachName: coachName
    }
    var coachJson = JSON.stringify(coachObj);

    var URL2 = 'http://localhost:8080/grabWTemplates';
    var post2 = $.ajax({
        traditional: true,
        async: false,
        type: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: coachJson,
        url: URL2,
        success: function (data) {
            return data;
        }
    });

    var optionselect = document.getElementById("templateWSelect");
    optionselect.innerHTML = "<option value=0 selected>Quick Creation (No customization)</option>";
    if (post2.responseText == "NONE") {

    }
    else {
        returnJson = post2.responseJSON;
        for (var i = 0; i < returnJson.length; i++) {
            var newjson = JSON.parse(returnJson[i]);
            //<option selected>Quick Creation (No customization)</option>
            var optionselect = document.getElementById("templateWSelect");
            optionselect.innerHTML += "<option value=" + newjson.tempid + " selected>" + newjson.templatename + "</option>";

        }
    }


}


function listSessions(n) {
    var clientObj;
    var URL2;
    var tobedoenSessions;
    var compSessions;
    if(n==0)
    {
        var URL2 = 'http://localhost:8080/grabSessions';
        var clientObj = {
            userName: coachName
        }
        tobedoneSessions = document.getElementById("TBCSessions");
        compSessions = document.getElementById("completedSessions");
    }
    else{
        var URL2 = 'http://localhost:8080/grabSessionsClient';
        var clientObj = {
            userName: clientName
        }
        tobedoneSessions = document.getElementById("TBCSessions2");
        compSessions = document.getElementById("completedSessions2");
    }
    
    var userJson = JSON.stringify(clientObj);

    //var URL2 = 'http://localhost:8080/grabSessions';

    var post2 = $.ajax({
        traditional: true,
        async: false,
        type: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: userJson,
        url: URL2,
        success: function (data) {
            return data;
        }
    });

    //var tobedoneSessions = document.getElementById("TBCSessions");
    tobedoneSessions.innerHTML = "";

    //var compSessions = document.getElementById("completedSessions");
    compSessions.innerHTML = "";

    if (post2.responseText == "NONE") {

    }
    else {
        returnJson = post2.responseJSON;
        for (var i = 0; i < returnJson.length; i++) {
            var newjson = JSON.parse(returnJson[i]);
            if (newjson.status == false) {
                tobedoneSessions.innerHTML += "<option id=" + newjson.sessID + " value=" + newjson.sessID + " data-sesh='A' >Alignment - Date Assigned: " + newjson.dateof + " For: " + newjson.clientName + "</option>";
            }
            else {
                compSessions.innerHTML += "<option value=" + newjson.sessID + " data-sesh='A' >Alignment - Date Assigned: " + newjson.dateof + " From: " + newjson.clientName + "</option>";
            }

        }
    }

}

function listWSessions(n) {
    var clientObj;
    var URL2;
    var tobedoneSessions; 
    var compSessions;

    if(n==0)
    {
        var URL2 = 'http://localhost:8080/grabWSessions';
        var clientObj = {
            userName: coachName
        }
        var tobedoneSessions = document.getElementById("TBCSessions");
        var compSessions = document.getElementById("completedSessions");
    }
    else{
        var URL2 = 'http://localhost:8080/grabWSessionsClient';
        var clientObj = {
            userName: clientName
        }
        var tobedoneSessions = document.getElementById("TBCSessions2");
        var compSessions = document.getElementById("completedSessions2");
    }
    var userJson = JSON.stringify(clientObj);

    //var URL2 = 'http://localhost:8080/grabWSessions';

    var post2 = $.ajax({
        traditional: true,
        async: false,
        type: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: userJson,
        url: URL2,
        success: function (data) {
            return data;
        }
    });


    if (post2.responseText == "NONE") {

    }
    else {
        returnJson = post2.responseJSON;
        for (var i = 0; i < returnJson.length; i++) {
            var newjson = JSON.parse(returnJson[i]);
            if (newjson.status == false) {
                tobedoneSessions.innerHTML += "<option id=" + newjson.sessID + " value=" + newjson.sessID + " data-sesh='W' >Weekly - Date Assigned: " + newjson.dateof + " For: " + newjson.clientName + "</option>";
            }
            else {
                compSessions.innerHTML += "<option id=" + newjson.sessID + " value=" + newjson.sessID + " data-sesh='W' >Weekly - Date Assigned: " + newjson.dateof + " From: " + newjson.clientName + "</option>";
            }

        }
    }

}



function createSession() {

    var URL3 = 'http://localhost:8080/createSession';

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    var rand = Math.floor(Math.random() * (99999999 - 10000000) + 10000000);



    var sessionObject = {
        CoachName: coachName,
        CoachFullName: document.getElementById("sessionCoachFName").value,
        CName: document.getElementById("sessionClientName").value,
        CUser: document.getElementById("sessionClientUser").value,
        CEmail: document.getElementById("sessionClientEmail").value,
        templateID: selTempName,
        Date: document.getElementById("sessionDate").value,
        SeshID: rand,
        Stat: false
    };

    var jsonObj = JSON.stringify(sessionObject);

    var dataReturned = "";
    var post = $.ajax({
        traditional: true,
        async: false,
        type: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: jsonObj,
        url: URL3,
        success: function (data) {
            return data;
        }
    });

    location.href = "#CoachHome";

}
function createWSession() {

    var URL3 = 'http://localhost:8080/createWSession';

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    var rand = Math.floor(Math.random() * (99999999 - 10000000) + 10000000);



    var sessionObject = {
        CoachName: coachName,
        CoachFullName: document.getElementById("sessionWCoachFName").value,
        CName: document.getElementById("sessionWClientName").value,
        CUser: document.getElementById("sessionWClientUser").value,
        CEmail: document.getElementById("sessionWClientEmail").value,
        templateID: selTempName,
        Date: document.getElementById("sessionWDate").value,
        SeshID: rand,
        Stat: false
    };

    var jsonObj = JSON.stringify(sessionObject);

    var dataReturned = "";
    var post = $.ajax({
        traditional: true,
        async: false,
        type: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: jsonObj,
        url: URL3,
        success: function (data) {
            return data;
        }
    });

    location.href = "#CoachHome";

}

function sessionSelected(n, j) {

    if (n == 1) {
        var sel;
        if (j == 0) {
            var sel = document.getElementById("TBCSessions2").value;
        }
        else {
            var sel = document.getElementById("completedSessions2").value;
            //console.log(document.getElementById("completedSessions2").type)
        }


        var seshtype = document.getElementById(sel).getAttribute('data-sesh');
        var isAlignment = false;
        var URL2;
        var idObj = {
            sessID: sel
        };
        if (seshtype == 'A') {
            isAlignment = true;
            URL2 = 'http://localhost:8080/grabByID';
        }
        else {

            URL2 = 'http://localhost:8080/WgrabByID'
        }

        

        console.log(sel);

        var idObj = {
            sessID: sel
        };

        var userJson = JSON.stringify(idObj);


        var post2 = $.ajax({
            traditional: true,
            async: false,
            type: 'POST',
            contentType: 'application/json',
            dataType: 'json',
            data: userJson,
            url: URL2,
            success: function (data) {
                return data;
            }
        });
        //console.log(post2.responseJSON.TempID);
        //console.log(jsonres.TempID);
        //console.log(jsonres.CoachName);

        currentSessionArray = post2.responseJSON;
        var sessionArray = post2.responseJSON.selArray;
        var tbcContent = document.getElementById("TBCAssigned2");
        tbcContent.innerHTML = ""

        if (isAlignment) {
            if (sessionArray[0] == 1) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Personal Alignment" + "</h5></div>"
            }
            if (sessionArray[1] == 1) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Personal Goals" + "</h5></div>"
            }
            if (sessionArray[2] == 1) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Business Alignment" + "</h5></div>"
            }
            if (sessionArray[3] == 1) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Business Goals" + "</h5></div>"
            }
            if (sessionArray[4] == 1) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Business SWOT" + "</h5></div>"
            }
            if (sessionArray[5] == 1) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Business Purpose" + "</h5></div>"
            }
            if (sessionArray[6] == 1) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Model/Product/Service & Customers" + "</h5></div>"
            }
            if (sessionArray[7] == 1) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Thought Assessment" + "</h5></div>"
            }
            if (sessionArray[8] == 1) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Thought Assessment Outcomes" + "</h5></div>"
            }
            if (sessionArray[9] == 1) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Thought Assessment Profile" + "</h5></div>"
            }
            if (sessionArray[10] == 1) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Business Financial Performance" + "</h5></div>"
            }
            if (sessionArray[11] == 1) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Business Funnel Performance" + "</h5></div>"
            }

        }
        else {
            if (sessionArray[0] > 0) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Agenda for Today" + "</h5></div>"
            }
            if (sessionArray[1] > 0) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Key Outcomes for Next Week" + "</h5></div>"
            }
            if (sessionArray[2] > 0) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Wins for the Week" + "</h5></div>"
            }
            if (sessionArray[3] > 0) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Challenges for the Week" + "</h5></div>"
            }
            if (sessionArray[4] > 0) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "How to overcome?" + "</h5></div>"
            }
            if (sessionArray[5] >0) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Review Progress" + "</h5></div>"
            }
            if (sessionArray[6] > 0) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Actions for Next Week" + "</h5></div>"
            }
            if (sessionArray[7] > 0) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Key Takeaways" + "</h5></div>"
            }
            if (sessionArray[8] > 0) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Key Business Financial Metric" + "</h5></div>"
            }
            if (sessionArray[9] > 0) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Key Business Funnel Metric" + "</h5></div>"
            }
            if (sessionArray[10] > 0) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Goals for Next 12 Months" + "</h5></div>"
            }
            if (sessionArray[11] > 0) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Additional Sections" + "</h5></div>"
            }
            if (sessionArray[12] > 0) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Notes from Today" + "</h5></div>"
            }
        }
       
    }

    else {

        var sel = document.getElementById("TBCSessions").value;
        console.log(sel);
        var seshtype = document.getElementById(sel).getAttribute('data-sesh');
        var isAlignment = false;
        var URL2;
        var idObj = {
            sessID: sel
        };
        if (seshtype == 'A') {
            isAlignment = true;
            URL2 = 'http://localhost:8080/grabByID';
        }
        else {

            URL2 = 'http://localhost:8080/WgrabByID'
        }

        var userJson = JSON.stringify(idObj);


        var post2 = $.ajax({
            traditional: true,
            async: false,
            type: 'POST',
            contentType: 'application/json',
            dataType: 'json',
            data: userJson,
            url: URL2,
            success: function (data) {
                return data;
            }
        });
        console.log(post2.responseJSON.TempID);
        //console.log(jsonres.TempID);
        //console.log(jsonres.CoachName);

        currentSessionArray = post2.responseJSON;
        var sessionArray = post2.responseJSON.selArray;
        var tbcContent = document.getElementById("TBCAssigned");
        tbcContent.innerHTML = ""

        if (isAlignment) {
            if (sessionArray[0] == 1) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Personal Alignment" + "</h5></div>"
            }
            if (sessionArray[1] == 1) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Personal Goals" + "</h5></div>"
            }
            if (sessionArray[2] == 1) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Business Alignment" + "</h5></div>"
            }
            if (sessionArray[3] == 1) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Business Goals" + "</h5></div>"
            }
            if (sessionArray[4] == 1) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Business SWOT" + "</h5></div>"
            }
            if (sessionArray[5] == 1) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Business Purpose" + "</h5></div>"
            }
            if (sessionArray[6] == 1) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Model/Product/Service & Customers" + "</h5></div>"
            }
            if (sessionArray[7] == 1) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Thought Assessment" + "</h5></div>"
            }
            if (sessionArray[8] == 1) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Thought Assessment Outcomes" + "</h5></div>"
            }
            if (sessionArray[9] == 1) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Thought Assessment Profile" + "</h5></div>"
            }
            if (sessionArray[10] == 1) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Business Financial Performance" + "</h5></div>"
            }
            if (sessionArray[11] == 1) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Business Funnel Performance" + "</h5></div>"
            }

        }
        else {
            if (sessionArray[0] > 0) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Agenda for Today" + "</h5></div>"
            }
            if (sessionArray[1] > 0) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Key Outcomes for Next Week" + "</h5></div>"
            }
            if (sessionArray[2] > 0) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Wins for the Week" + "</h5></div>"
            }
            if (sessionArray[3] > 0) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Challenges for the Week" + "</h5></div>"
            }
            if (sessionArray[4] > 0) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "How to overcome?" + "</h5></div>"
            }
            if (sessionArray[5] >0) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Review Progress" + "</h5></div>"
            }
            if (sessionArray[6] > 0) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Actions for Next Week" + "</h5></div>"
            }
            if (sessionArray[7] > 0) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Key Takeaways" + "</h5></div>"
            }
            if (sessionArray[8] > 0) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Key Business Financial Metric" + "</h5></div>"
            }
            if (sessionArray[9] > 0) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Key Business Funnel Metric" + "</h5></div>"
            }
            if (sessionArray[10] > 0) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Goals for Next 12 Months" + "</h5></div>"
            }
            if (sessionArray[11] > 0) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Additional Sections" + "</h5></div>"
            }
            if (sessionArray[12] > 0) {
                tbcContent.innerHTML += "<div style=text-align:center><h5>" + "Notes from Today" + "</h5></div>"
            }
        }

    }
}
function loadSession() {
    


}

function saveCurrent(n) {

    if (n == 0) {

    }

}
function startRadar() {
    /* Radar chart design created by Nadieh Bremer - VisualCinnamon.com */

    ////////////////////////////////////////////////////////////// 
    //////////////////////// Set-Up ////////////////////////////// 
    ////////////////////////////////////////////////////////////// 

    var margin = { top: 100, right: 100, bottom: 100, left: 100 },
        width = Math.min(700, window.innerWidth - 10) - margin.left - margin.right,
        height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

    ////////////////////////////////////////////////////////////// 
    ////////////////////////// Data ////////////////////////////// 
    ////////////////////////////////////////////////////////////// 
    console.log(parseInt(document.getElementById("financeCurrent").value) / 10)
    currentValues = [parseInt(document.getElementById("financeCurrent").value) / 10,
    parseInt(document.getElementById("hwbCurrent").value) / 10,
    parseInt(document.getElementById("mindCurrent").value) / 10,
    parseInt(document.getElementById("kskCurrent").value) / 10,
    parseInt(document.getElementById("prCurrent").value) / 10]

    idealValues = [parseInt(document.getElementById("financeIdeal").value) / 10,
    parseInt(document.getElementById("hwbIdeal").value) / 10,
    parseInt(document.getElementById("mindIdeal").value) / 10,
    parseInt(document.getElementById("kskIdeal").value) / 10,
    parseInt(document.getElementById("prIdeal").value) / 10]

    console.log(currentValues[0]);
    var data = [
        [
            { axis: "Finances", value: idealValues[0] },
            { axis: "Health/Wellbeing", value: idealValues[1] },
            { axis: "Mindset", value: idealValues[2] },
            { axis: "Knowledge", value: idealValues[3] },
            { axis: "PersonalRelationships", value: idealValues[4] }
        ], [
            { axis: "Finances", value: currentValues[0] },
            { axis: "Health/Wellbeing", value: currentValues[1] },
            { axis: "Mindset", value: currentValues[2] },
            { axis: "Knowledge", value: currentValues[3] },
            { axis: "PersonalRelationships", value: currentValues[4] }
        ]
    ];
    ////////////////////////////////////////////////////////////// 
    //////////////////// Draw the Chart ////////////////////////// 
    ////////////////////////////////////////////////////////////// 

    var color = d3.scale.ordinal()
        .range(["#EDC951", "#CC333F", "#00A0B0"]);

    var radarChartOptions = {
        w: width,
        h: height,
        margin: margin,
        maxValue: 0.5,
        levels: 5,
        roundStrokes: true,
        color: color
    };
    //Call function to draw the Radar chart
    RadarChart(".radarChart", data, radarChartOptions);
}

function RadarChart(id, data, options) {
    var cfg = {
        w: 600,				//Width of the circle
        h: 600,				//Height of the circle
        margin: { top: 20, right: 20, bottom: 20, left: 20 }, //The margins of the SVG
        levels: 3,				//How many levels or inner circles should there be drawn
        maxValue: 0, 			//What is the value that the biggest circle will represent
        labelFactor: 1.25, 	//How much farther than the radius of the outer circle should the labels be placed
        wrapWidth: 60, 		//The number of pixels after which a label needs to be given a new line
        opacityArea: 0.35, 	//The opacity of the area of the blob
        dotRadius: 4, 			//The size of the colored circles of each blog
        opacityCircles: 0.1, 	//The opacity of the circles of each blob
        strokeWidth: 2, 		//The width of the stroke around each blob
        roundStrokes: false,	//If true the area and stroke will follow a round path (cardinal-closed)
        color: d3.scale.category10()	//Color function
    };

    //Put all of the options into a variable called cfg
    if ('undefined' !== typeof options) {
        for (var i in options) {
            if ('undefined' !== typeof options[i]) { cfg[i] = options[i]; }
        }//for i
    }//if

    //If the supplied maxValue is smaller than the actual one, replace by the max in the data
    var maxValue = Math.max(cfg.maxValue, d3.max(data, function (i) { return d3.max(i.map(function (o) { return o.value; })) }));

    var allAxis = (data[0].map(function (i, j) { return i.axis })),	//Names of each axis
        total = allAxis.length,					//The number of different axes
        radius = Math.min(cfg.w / 2, cfg.h / 2), 	//Radius of the outermost circle
        Format = d3.format('%'),			 	//Percentage formatting
        angleSlice = Math.PI * 2 / total;		//The width in radians of each "slice"

    //Scale for the radius
    var rScale = d3.scale.linear()
        .range([0, radius])
        .domain([0, maxValue]);

    /////////////////////////////////////////////////////////
    //////////// Create the container SVG and g /////////////
    /////////////////////////////////////////////////////////

    //Remove whatever chart with the same id/class was present before
    d3.select(id).select("svg").remove();

    //Initiate the radar chart SVG
    var svg = d3.select(id).append("svg")
        .attr("width", cfg.w + cfg.margin.left + cfg.margin.right)
        .attr("height", cfg.h + cfg.margin.top + cfg.margin.bottom)
        .attr("class", "radar" + id);
    //Append a g element		
    var g = svg.append("g")
        .attr("transform", "translate(" + (cfg.w / 2 + cfg.margin.left) + "," + (cfg.h / 2 + cfg.margin.top) + ")");

    /////////////////////////////////////////////////////////
    ////////// Glow filter for some extra pizzazz ///////////
    /////////////////////////////////////////////////////////

    //Filter for the outside glow
    var filter = g.append('defs').append('filter').attr('id', 'glow'),
        feGaussianBlur = filter.append('feGaussianBlur').attr('stdDeviation', '2.5').attr('result', 'coloredBlur'),
        feMerge = filter.append('feMerge'),
        feMergeNode_1 = feMerge.append('feMergeNode').attr('in', 'coloredBlur'),
        feMergeNode_2 = feMerge.append('feMergeNode').attr('in', 'SourceGraphic');

    /////////////////////////////////////////////////////////
    /////////////// Draw the Circular grid //////////////////
    /////////////////////////////////////////////////////////

    //Wrapper for the grid & axes
    var axisGrid = g.append("g").attr("class", "axisWrapper");

    //Draw the background circles
    axisGrid.selectAll(".levels")
        .data(d3.range(1, (cfg.levels + 1)).reverse())
        .enter()
        .append("circle")
        .attr("class", "gridCircle")
        .attr("r", function (d, i) { return radius / cfg.levels * d; })
        .style("fill", "#CDCDCD")
        .style("stroke", "#CDCDCD")
        .style("fill-opacity", cfg.opacityCircles)
        .style("filter", "url(#glow)");

    //Text indicating at what % each level is
    axisGrid.selectAll(".axisLabel")
        .data(d3.range(1, (cfg.levels + 1)).reverse())
        .enter().append("text")
        .attr("class", "axisLabel")
        .attr("x", 4)
        .attr("y", function (d) { return -d * radius / cfg.levels; })
        .attr("dy", "0.4em")
        .style("font-size", "10px")
        .attr("fill", "#737373")
        .text(function (d, i) { return Format(maxValue * d / cfg.levels); });

    /////////////////////////////////////////////////////////
    //////////////////// Draw the axes //////////////////////
    /////////////////////////////////////////////////////////

    //Create the straight lines radiating outward from the center
    var axis = axisGrid.selectAll(".axis")
        .data(allAxis)
        .enter()
        .append("g")
        .attr("class", "axis");
    //Append the lines
    axis.append("line")
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", function (d, i) { return rScale(maxValue * 1.1) * Math.cos(angleSlice * i - Math.PI / 2); })
        .attr("y2", function (d, i) { return rScale(maxValue * 1.1) * Math.sin(angleSlice * i - Math.PI / 2); })
        .attr("class", "line")
        .style("stroke", "white")
        .style("stroke-width", "2px");

    //Append the labels at each axis
    axis.append("text")
        .attr("class", "legend")
        .style("font-size", "11px")
        .attr("text-anchor", "middle")
        .attr("dy", "0.35em")
        .attr("x", function (d, i) { return rScale(maxValue * cfg.labelFactor) * Math.cos(angleSlice * i - Math.PI / 2); })
        .attr("y", function (d, i) { return rScale(maxValue * cfg.labelFactor) * Math.sin(angleSlice * i - Math.PI / 2); })
        .text(function (d) { return d })
        .call(wrap, cfg.wrapWidth);

    /////////////////////////////////////////////////////////
    ///////////// Draw the radar chart blobs ////////////////
    /////////////////////////////////////////////////////////

    //The radial line function
    var radarLine = d3.svg.line.radial()
        .interpolate("linear-closed")
        .radius(function (d) { return rScale(d.value); })
        .angle(function (d, i) { return i * angleSlice; });

    if (cfg.roundStrokes) {
        radarLine.interpolate("cardinal-closed");
    }

    //Create a wrapper for the blobs	
    var blobWrapper = g.selectAll(".radarWrapper")
        .data(data)
        .enter().append("g")
        .attr("class", "radarWrapper");

    //Append the backgrounds	
    blobWrapper
        .append("path")
        .attr("class", "radarArea")
        .attr("d", function (d, i) { return radarLine(d); })
        .style("fill", function (d, i) { return cfg.color(i); })
        .style("fill-opacity", cfg.opacityArea)
        .on('mouseover', function (d, i) {
            //Dim all blobs
            d3.selectAll(".radarArea")
                .transition().duration(200)
                .style("fill-opacity", 0.1);
            //Bring back the hovered over blob
            d3.select(this)
                .transition().duration(200)
                .style("fill-opacity", 0.7);
        })
        .on('mouseout', function () {
            //Bring back all blobs
            d3.selectAll(".radarArea")
                .transition().duration(200)
                .style("fill-opacity", cfg.opacityArea);
        });

    //Create the outlines	
    blobWrapper.append("path")
        .attr("class", "radarStroke")
        .attr("d", function (d, i) { return radarLine(d); })
        .style("stroke-width", cfg.strokeWidth + "px")
        .style("stroke", function (d, i) { return cfg.color(i); })
        .style("fill", "none")
        .style("filter", "url(#glow)");

    //Append the circles
    blobWrapper.selectAll(".radarCircle")
        .data(function (d, i) { return d; })
        .enter().append("circle")
        .attr("class", "radarCircle")
        .attr("r", cfg.dotRadius)
        .attr("cx", function (d, i) { return rScale(d.value) * Math.cos(angleSlice * i - Math.PI / 2); })
        .attr("cy", function (d, i) { return rScale(d.value) * Math.sin(angleSlice * i - Math.PI / 2); })
        .style("fill", function (d, i, j) { return cfg.color(j); })
        .style("fill-opacity", 0.8);

    /////////////////////////////////////////////////////////
    //////// Append invisible circles for tooltip ///////////
    /////////////////////////////////////////////////////////

    //Wrapper for the invisible circles on top
    var blobCircleWrapper = g.selectAll(".radarCircleWrapper")
        .data(data)
        .enter().append("g")
        .attr("class", "radarCircleWrapper");

    //Append a set of invisible circles on top for the mouseover pop-up
    blobCircleWrapper.selectAll(".radarInvisibleCircle")
        .data(function (d, i) { return d; })
        .enter().append("circle")
        .attr("class", "radarInvisibleCircle")
        .attr("r", cfg.dotRadius * 1.5)
        .attr("cx", function (d, i) { return rScale(d.value) * Math.cos(angleSlice * i - Math.PI / 2); })
        .attr("cy", function (d, i) { return rScale(d.value) * Math.sin(angleSlice * i - Math.PI / 2); })
        .style("fill", "none")
        .style("pointer-events", "all")
        .on("mouseover", function (d, i) {
            newX = parseFloat(d3.select(this).attr('cx')) - 10;
            newY = parseFloat(d3.select(this).attr('cy')) - 10;

            tooltip
                .attr('x', newX)
                .attr('y', newY)
                .text(Format(d.value))
                .transition().duration(200)
                .style('opacity', 1);
        })
        .on("mouseout", function () {
            tooltip.transition().duration(200)
                .style("opacity", 0);
        });

    //Set up the small tooltip for when you hover over a circle
    var tooltip = g.append("text")
        .attr("class", "tooltip")
        .style("opacity", 0);

    /////////////////////////////////////////////////////////
    /////////////////// Helper Function /////////////////////
    /////////////////////////////////////////////////////////

    //Taken from http://bl.ocks.org/mbostock/7555321
    //Wraps SVG text	
    function wrap(text, width) {
        text.each(function () {
            var text = d3.select(this),
                words = text.text().split(/\s+/).reverse(),
                word,
                line = [],
                lineNumber = 0,
                lineHeight = 1.4, // ems
                y = text.attr("y"),
                x = text.attr("x"),
                dy = parseFloat(text.attr("dy")),
                tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");

            while (word = words.pop()) {
                line.push(word);
                tspan.text(line.join(" "));
                if (tspan.node().getComputedTextLength() > width) {
                    line.pop();
                    tspan.text(line.join(" "));
                    line = [word];
                    tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
                }
            }
        });
    }//wrap	

}//RadarC

function saveWSelections(n) {
    if (n == 1) {
        var selectName = "WSection";
        for (i = 0; i < 13; i++) {
            var num = i + 1
            var sectionId = selectName + num
            weeklySelections[i] = parseInt(document.getElementById(sectionId).value)
        }
    }
}