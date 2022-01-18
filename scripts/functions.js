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