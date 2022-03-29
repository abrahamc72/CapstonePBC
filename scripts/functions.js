var selectionArray = new Array();
    selectionArray = [0,0,0,0,0,0,0,0,0,0,0,0]
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
    paSectionArray = ["x","x","x","x","x","x","x","x","x","x"]
    //0-10 - Section names of PA


var paQuestionArray = new Array();
    paQuestionArray = ["x","x","x","x","x","x","x","x","x","x"];
    //0-10 - Questions for each section

var baRowCount = new Array();
    baRowCount = [5,5,5,5];

var TemplateName = "";
var added = 1;

var selTempName = "";

var features = ["Finances","Health","Mindset","Knowledge","Relationships","Time"]
var PATicks = [0,0,0,0,0,0]

//window.location.href = "#CoachHome";
    //grab template selections
    function grabSelections1()
    {

        for(i=0;i<12;i++)
        {
            var element = "tempbox";
            element+=i;
            console.log(element);

        if(document.getElementById(element).checked==true)
        {
            selectionArray[i]=1;

        }
        else
        {
            selectionArray[i]=0;
        }
        }
        console.log(selectionArray);

    }

    //add a row to Personal Alignment
    function addRowPA()
    {
        if(document.getElementById("PA5").hidden==true)
        {
            paRowCount++;
            document.getElementById("PA5").hidden = false;
            document.getElementById("PAQ5").hidden = false;
        }
        else if(document.getElementById("PA6").hidden==true)
        {
            paRowCount++;
            document.getElementById("PA6").hidden = false;
            document.getElementById("PAQ6").hidden = false;
        }
        else if(document.getElementById("PA7").hidden==true)
        {
            paRowCount++;
            document.getElementById("PA7").hidden = false;
            document.getElementById("PAQ7").hidden = false;
        }
        else if(document.getElementById("PA8").hidden==true)
        {
            paRowCount++;
            document.getElementById("PA8").hidden = false;
            document.getElementById("PAQ8").hidden = false;
        }
        else if(document.getElementById("PA9").hidden==true)
        {
            paRowCount++;
            document.getElementById("PA9").hidden = false;
            document.getElementById("PAQ9").hidden = false;
        }
        else if(document.getElementById("PA10").hidden==true)
        {
            paRowCount=10;
            document.getElementById("PA10").hidden = false;
            document.getElementById("PAQ10").hidden = false;
        }
        
    }

    //remove a row from Personal Alignment
    function removeRowPA()
    {
        if(document.getElementById("PA10").hidden==false)
        {
            paRowCount--;
            document.getElementById("PA10").hidden = true;
            document.getElementById("PAQ10").hidden = true;
        }
        else if(document.getElementById("PA9").hidden==false)
        {
            paRowCount--;
            document.getElementById("PA9").hidden = true;
            document.getElementById("PAQ9").hidden = true;
        }
        else if(document.getElementById("PA8").hidden==false)
        {
            paRowCount--;
            document.getElementById("PA8").hidden = true;
            document.getElementById("PAQ8").hidden = true;
        }
        else if(document.getElementById("PA7").hidden==false)
        {
            paRowCount--;
            document.getElementById("PA7").hidden = true;
            document.getElementById("PAQ7").hidden = true;
        }
        else if(document.getElementById("PA6").hidden==false)
        {
            paRowCount--;
            document.getElementById("PA6").hidden = true;
            document.getElementById("PAQ6").hidden = true;
        }
        else if(document.getElementById("PA5").hidden==false)
        {
            paRowCount=4;
            document.getElementById("PA5").hidden = true;
            document.getElementById("PAQ5").hidden = true;
        }
    }

    //grab Personal Alignment answers
    function grabPASelections()
    {
        paQuestionArray = ["x","x","x","x","x","x","x","x","x","x"];
        paSectionArray = ["x","x","x","x","x","x","x","x","x","x"];
        for(i=1;i<paRowCount+1;i++)
        {
            var grabSection ="PA";
            var grabQ = "PAQ";
            grabSection += i;
            grabQ +=i;

            

            paSectionArray[i-1] = document.getElementById(grabSection).value;
            paQuestionArray[i-1] = document.getElementById(grabQ).value;
        }
        console.log(paRowCount);
        console.log(paSectionArray);
    }

    //add a row to Business Alignment
    function BArem(n)
    {
        if(document.getElementById((n+"BA5")).hidden==false)
        {
            baRowCount[n-1] = baRowCount[n-1]-1;
            document.getElementById(n+"BA5").hidden = true;
            document.getElementById(n+"BA5").hidden = true;
        }
        else if(document.getElementById((n+"BA4")).hidden==false)
        {
            baRowCount[n-1] = baRowCount[n-1]-1;
            document.getElementById(n+"BA4").hidden = true;
            document.getElementById(n+"BA4").hidden = true;
        }
        else if(document.getElementById((n+"BA3")).hidden==false)
        {
            baRowCount[n-1] = baRowCount[n-1]-1;
            document.getElementById(n+"BA3").hidden = true;
            document.getElementById(n+"BA3").hidden = true;
        }
        else if(document.getElementById((n+"BA2")).hidden==false)
        {
            baRowCount[n-1] = 1;
            document.getElementById(n+"BA2").hidden = true;
            document.getElementById(n+"BA2").hidden = true;
        }
        
        console.log(baRowCount);

    }

    //remove row BA
    function BAadd(n)
    {
        if(document.getElementById((n+"BA2")).hidden==true)
        {
            baRowCount[n-1] = baRowCount[n-1]+1;
            document.getElementById(n+"BA2").hidden = false;
            document.getElementById(n+"BA2").hidden = false;
        }
        else if(document.getElementById((n+"BA3")).hidden==true)
        {
            baRowCount[n-1] = baRowCount[n-1]+1;
            document.getElementById(n+"BA3").hidden = false;
            document.getElementById(n+"BA3").hidden = false;
        }
        else if(document.getElementById((n+"BA4")).hidden==true)
        {
            baRowCount[n-1] = baRowCount[n-1]+1;
            document.getElementById(n+"BA4").hidden = false;
            document.getElementById(n+"BA4").hidden = false;
        }
        else if(document.getElementById((n+"BA4")).hidden==true)
        {
            baRowCount[n-1] = baRowCount[n-1]+1;
            document.getElementById(n+"BA4").hidden = false;
            document.getElementById(n+"BA4").hidden = false;
        }
        else if(document.getElementById((n+"BA5")).hidden==true)
        {
            baRowCount[n-1] = 5;
            document.getElementById(n+"BA5").hidden = false;
            document.getElementById(n+"BA5").hidden = false;
        }
        console.log(baRowCount);
    }

    function grabBASelections()
    {




    }

    function createTemplate()
    {
        TemplateName = document.getElementById("tatempname").value;
        added=0;
    }

    function listTemplate()
    {
        if(added==1)
        {

        }
        else
        {
            document.getElementById("templateSelect").innerHTML += "<option>"+ TemplateName +"</option>";
            added=1;
        }
        

    }

    function selectTemplate(n)
    {
        if(n==1)
        {
            selTempName = document.getElementById("templateSelect").value;
            console.log(selTempName);

            if(selTempName=="Quick Creation (No customization)")
            {
                window.location.href = "#createSession2";
            }
            else
            {
                window.location.hred = "#createSession4"
            }

        }


    }

    function drawPARadar()
    {
        data=[];
        for(i=0;i>5;i++)
        {
            
        }

        let svg = d3.select("body").append("svg")
        .attr("width", 600)
        .attr("height", 600);

        let radialScale = d3.scaleLinear()
        .domain([0,10])
        .range([0,250]);
        

    }
    function currentScoreAvg()
    {
        var arr = document.getElementById("financeCurrent").value;
        var total = 0;
        var avg = 0;

        for(var i = 0; i < arr.length; i++)
        {
            if(parseInt(arr[i].value))
            {
                total += parseInt(arr[i].value);
            }
        }

        avg = total / arr.length;

        


    // will move to 3 parameters for other columns/rows using: revamount, margin, netprofit
    function netProfitCalc(value1, value2, flag)
    {
        
        var aramount = document.getElementById(value1).value;
        var pm = document.getElementById(value2).value;
        if(aramount != null && pm != null){
             var percent = pm / 100;
             var result = aramount * percent;
             if(flag == 0){
                document.getElementById("NPnum").value = result;
             }
             else if(flag == 1){
                document.getElementById("NetPC").value = result;
             }
             else if(flag == 2){
                document.getElementById("NetPi").value = result;
             }
             
        }
        
    }

    function Customers(value1, value2, flag){
        var leadsC = document.getElementById(value1).value;
        var convRate = document.getElementById(value2).value / 100;
        if (leadsC != null && convRate != null){
            var result = leadsC * convRate;
            if(flag == 0){
                document.getElementById("CustomerC").value = result;
            }
            if(flag == 1){
                document.getElementById("Customeri").value = result;
            }
            
        }
    }
    function sync(text){
        document.getElementById("ARPCC").value = text.value;
    }

    // function works when "ARPC" is changed, not "ARPCC"
    function newRevC(value1, value2, flag){
        var cust = document.getElementById(value1).value;
        var revPCust= document.getElementById(value2).value;
        var result = cust * revPCust;
        if(flag == 0){
            document.getElementById("NewRC").value = result;
        }
        else if(flag == 1){
            document.getElementById("NewRi").value = result;
        }
    }

    function TotalSalesCost(value1, value2, flag){
        var costPerson = document.getElementById(value1).value;
        var numberPerson = document.getElementById(value2).value;
        var result = costPerson * numberPerson;
        if(flag == 0){
            document.getElementById("TotalSCC").value = result;
        }
        else if(flag == 1){
            document.getElementById("TotalSCi").value = result;
        }
    }
    
    function AddStuff(value1, value2, flag){
        var add1 = document.getElementById(value1).value;
        var add2 = document.getElementById(value2).value;
        result = add1 + add2;
        if(flag == 0){
            document.getElementById("TotalSaMC").value = result;
        }
        else if(flag == 1){
            document.getElementById("TotalSaMi").value = result;
        }
    }

    function CostAcq(value1, value2, flag){
        var div1 = document.getElementById(value1).value;
        var div2 = document.getElementById(value2).value;
        result = div2 / div1;
        if(flag == 0){
            document.getElementById("CostoAPCC").value = result;
        }
        else if(flag == 1){
            document.getElementById("CostoAPCi").value = result;
        }
    }

    function CostAcqPercent(value1, value2, flag){
        var part1 = document.getElementById(value1).value;
        var part2 = document.getElementById(value2).value;
        result = (part1 / part2) * 100 + "%";
        if(flag == 0){
            document.getElementById("CostoAPCpercentC").value = result;
        }
        else if(flag == 1){
            document.getElementById("CostoAPCpercenti").value = result;
        }
    }