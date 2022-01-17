var selectionArray = new Array();
    selectionArray = [0,0,0,0,0,0,0,0,0,0,0,0,]
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