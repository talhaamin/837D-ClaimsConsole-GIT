

$(document).ready(function () {

    var editorXML1 = CodeMirror.fromTextArea(document.getElementById("xmlPrototype"), {
        mode: "xml",
        theme: "monokai",
        lineNumbers: false,
    

    });
    editorXML1.focus();
    $("#xmlPrototype").focus();
    document.getElementById("saveButton").addEventListener("click", function () {
        generateXML();
    });
    document.getElementById("downloadButton").addEventListener("click", function () {

        generateXML();

        // Get the XML content from the CodeMirror editor
        var xmlContent = $.trim(editorXML1.getValue());

        // Create a Blob object with the XML content
        var blob = new Blob([xmlContent], { type: "text/xml" });

        // Create a URL for the Blob object
        var url = window.URL.createObjectURL(blob);

        // Create a download link
        var a = document.createElement("a");
        a.href = url;
        a.download = "downloaded.xml"; // Specify the file name

        // Programmatically trigger a click event on the link
        a.click();

        // Release the URL and remove the link element
        window.URL.revokeObjectURL(url);
        a.remove();
    });
    var newMessage = "";
    var isEmptyFlag = true;
    initPrototypeSentence("div", "CM", "CM");
    generatePrototypeSentence("div", "CM", "CM");

    initPrototypeLoopSentence("div", 0, "OC", "<ns0:OC_ROW>");
    generatePrototypeLoopSentence("div", 0, "OC", "<ns0:OC_ROW>");

    initPrototypeSentence("div", "PATI", "PATI");
    generatePrototypeSentence("div", "PATI", "PATI");


    initPrototypeLoopSentence("div", 0, "SL", "<ns0:LINE_ROW>");
    generatePrototypeLoopSentence("div", 0, "SL", "<ns0:LINE_ROW>");

    initPrototypeLoopSentence("div", 0, "ML","<ns0:MAILADDRESS_ROW>");
    generatePrototypeLoopSentence("div", 0, "ML","<ns0:MAILADDRESS_ROW>");

    initPrototypeSentence("div", "C", "C");
    generatePrototypeSentence("div", "C", "C");



    $("#addSL").click(function () {
        addSL();
    });


    $("#addOC").click(function () {
        addOC();
    });



    $("#addMailAddress").click(function () {
        addML();       
    });


    
   


    $("#custom-tabs-three-messages-tab").click(function () {
        
        generateXML();
        

    });

    function generateXML() {
        var strXMLValue1 = "<?xml version=\"1.0\"?>" +
            "<ns0:Invoice" + $.trim("xmlns:ns0=\"SkyGen_837D.Schema\">") +
            "<ns0:Claim>" +
            $.trim($("#divCMfooter").text()) +
            "<ns0:OC>" + $.trim($("#divOCfooter").text()) + "</ns0:OC>" +
            $.trim($("#divPATIfooter").text()) +
            "<ns0:LINE>" + $.trim($("#divSLfooter").text()) + "</ns0:LINE>" +
            "<ns0:MAILADDRESS>" + $.trim($("#divMLfooter").text()) + "</ns0:MAILADDRESS>" +
            $.trim($("#divCfooter").text()) +
            "</ns0:Claim>" +
            "</ns0:Invoice>";

        editorXML1.setValue(vkbeautify.xml($.trim(strXMLValue1)));
        // alert('test');
        $("#hdXML").val(vkbeautify.xml($.trim(strXMLValue1)));
        editorXML1.focus();
        $("#xmlPrototype").focus();

    }

   
});


function addML() {
    // Create a new <div> element
    var id = Math.floor(Math.random() * 1000);
    var randomBodyId = "divMLbodyRows" + id;
    var randomFooterId = "divMLfooterRows" + id;
    var newDivBody = $("<div></div>").attr("id", randomBodyId);
    var newDivFooter = $("<div></div>").attr("id", randomFooterId);

    // Add content and styling to the new <div>

    newDivBody.html($.trim($("#divMLbodyRows0").html()));


    var randomColor = customColor();

    newDivBody.css("background-color", randomColor);
    newDivFooter.css("background-color", randomColor);

    // Append the new <div> to the parent div
    $("#divMLbody").append(newDivBody);

    //Get all TEXTbox under the newDivBody and update it's ID's
    $("#divMLbodyRows" + id).find("input[type='text']").each(function (index) {
        var newId = $(this).attr("id") + id; // Generate a new ID

        $(this).attr("id", newId); // Update the ID of the current textbox
    });


    // Append the new <div> to the parent div
    $("#divMLfooter").append(newDivFooter);


    initPrototypeLoopSentence("div", id, "ML", "<ns0:MAILADDRESS_ROW>");
    generatePrototypeLoopSentence("div", id, "ML", "<ns0:MAILADDRESS_ROW>");

    return id;
}



function addOC() {
    // Create a new <div> element
    var id = Math.floor(Math.random() * 1000);
    var randomBodyId = "divOCbodyRows" + id;
    var randomFooterId = "divOCfooterRows" + id;
    var newDivBody = $("<div></div>").attr("id", randomBodyId);
    var newDivFooter = $("<div></div>").attr("id", randomFooterId);

    // Add content and styling to the new <div>

    newDivBody.html($.trim($("#divOCbodyRows0").html()));

   
    var randomColor = customColor();


    newDivBody.css("background-color", randomColor);
    newDivFooter.css("background-color", randomColor);

    // Append the new <div> to the parent div
    $("#divOCbody").append(newDivBody);


    //Get all TEXTbox under the newDivBody and update it's ID's
    $("#divOCbodyRows" + id).find("input[type='text']").each(function (index) {
        var newId = $(this).attr("id") + id; // Generate a new ID
       
        $(this).attr("id", newId); // Update the ID of the current textbox
    });


    // Append the new <div> to the parent div
    $("#divOCfooter").append(newDivFooter);


    initPrototypeLoopSentence("div", id, "OC", "<ns0:OC_ROW>");
    generatePrototypeLoopSentence("div", id, "OC", "<ns0:OC_ROW>");

    return id;
}

function customColor() {
    // Generate random RGB values for a light color
    var red = Math.floor(Math.random() * 128) + 128; // Bias towards higher values
    var green = Math.floor(Math.random() * 128) + 128; // Bias towards higher values
    var blue = Math.floor(Math.random() * 128) + 128; // Bias towards higher values

    // Create a random color in RGB format
    var randomColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    return randomColor;
}



function fillDataFromXML() {
    //alert("Fill data from xml here");
   // alert($("#hdXML").val());
    //alert($("#hdMessageId").val());
    //alert($("#hdUserId").val());
  
    var xml = $("#hdXML").val().replaceAll('ns0:','');
    //debugger;
    var xmlDoc = $.parseXML(xml);
    var $xml = $(xmlDoc);
    var $claim = $(xml).find("Claim");
    $claim.each(function () {
        //debugger;
        //alert($(this).find("CLAIMNUMBER").text());
        //alert($(this).find("CLAIMNUMBER").val());
        //alert($(xmlDoc).find("CLAIMSEQUENCE").text());
        //alert($(xmlDoc).find("CLAIMSEQUENCE").val());


        $("#CLAIMNUMBER").val($(xmlDoc).find("CLAIMNUMBER").text());
        $("#CLAIMSEQUENCE").val($(xmlDoc).find("CLAIMSEQUENCE").text());
        $("#FIRSTDOS").val($(xmlDoc).find("FIRSTDOS").text());
        $("#GROUPNUMBER").val($(xmlDoc).find("GROUPNUMBER").text());
        $("#DIVISIONNUMBER").val($(xmlDoc).find("DIVISIONNUMBER").text());
        $("#PAYMENTORDER").val($(xmlDoc).find("PAYMENTORDER").text());
        $("#PREAUTHSTATUS").val($(xmlDoc).find("PREAUTHSTATUS").text());
        $("#RELATIONSHIPCODE").val($(xmlDoc).find("RELATIONSHIPCODE").text());
        $("#TOTALOCPAYMENT").val($(xmlDoc).find("TOTALOCPAYMENT").text());
        $("#TOTALPATIENTPAYMENT").val($(xmlDoc).find("TOTALPATIENTPAYMENT").text());
        $("#TOTALSUBMITAMOUNT").val($(xmlDoc).find("TOTALSUBMITAMOUNT").text());
        $("#TOTALPLANPAYMENT").val($(xmlDoc).find("TOTALPLANPAYMENT").text());
        $("#PAYMENTDESTINATION").val($(xmlDoc).find("PAYMENTDESTINATION").text());
        $("#CHECKDATE").val($(xmlDoc).find("CHECKDATE").text());
        $("#SUBSCRIBERPERSONNUMBER").val($(xmlDoc).find("SUBSCRIBERPERSONNUMBER").text());
        $("#PATIENTPERSONNUMBER").val($(xmlDoc).find("PATIENTPERSONNUMBER").text());
        $("#CPINVOICENUMBER").val($(xmlDoc).find("CPINVOICENUMBER").text());
        $("#PROVIDERFIRSTNAME").val($(xmlDoc).find("PROVIDERFIRSTNAME").text());
        $("#PROVIDERMIDDLEINITIAL").val($(xmlDoc).find("PROVIDERMIDDLEINITIAL").text());
        $("#PROVIDERLASTNAME").val($(xmlDoc).find("PROVIDERLASTNAME").text());
        $("#PROVIDERNAMESUFFIX").val($(xmlDoc).find("PROVIDERNAMESUFFIX").text());
        $("#PROVIDERLICENSENUMBER").val($(xmlDoc).find("PROVIDERLICENSENUMBER").text());

        $("#PROVIDERNPINUMBER").val($(xmlDoc).find("PROVIDERNPINUMBER").text());
        $("#PROVIDEROPSNUMBER").val($(xmlDoc).find("PROVIDEROPSNUMBER").text());
        $("#PROVIDERADDRESSLINE1").val($(xmlDoc).find("PROVIDERADDRESSLINE1").text());
        $("#PROVIDERADDRESSLINE2").val($(xmlDoc).find("PROVIDERADDRESSLINE2").text());
        $("#PROVIDERADDRESSCITY").val($(xmlDoc).find("PROVIDERADDRESSCITY").text());
        $("#PROVIDERADDRESSSTATE").val($(xmlDoc).find("PROVIDERADDRESSSTATE").text());
        $("#PROVIDERADDRESSZIP").val($(xmlDoc).find("PROVIDERADDRESSZIP").text());
        $("#PROVIDERPAYTOADDRESSLINE1").val($(xmlDoc).find("PROVIDERPAYTOADDRESSLINE1").text());
        $("#PROVIDERPAYTOADDRESSLINE2").val($(xmlDoc).find("PROVIDERPAYTOADDRESSLINE2").text());
        
        $("#PROVIDERPAYTOCITY").val($(xmlDoc).find("PROVIDERPAYTOCITY").text());
        $("#PROVIDERPAYTOSTATE").val($(xmlDoc).find("PROVIDERPAYTOSTATE").text());
        $("#PROVIDERPAYTOZIP").val($(xmlDoc).find("PROVIDERPAYTOZIP").text());
        $("#PROVIDERPAYEENAME").val($(xmlDoc).find("PROVIDERPAYEENAME").text());
        $("#PROVIDERTRAXFILINGID").val($(xmlDoc).find("PROVIDERTRAXFILINGID").text());
        $("#EXTERNALID").val($(xmlDoc).find("EXTERNALID").text());
        $("#SUBSCRIBERCLIENTEXTKEY").val($(xmlDoc).find("SUBSCRIBERCLIENTEXTKEY").text());
        $("#SUBSCRIBERFIRSTNAME").val($(xmlDoc).find("SUBSCRIBERFIRSTNAME").text());
        $("#SUBSCRIBERMIDDLENAME").val($(xmlDoc).find("SUBSCRIBERMIDDLENAME").text());
        $("#SUBSCRIBERLASTNAME").val($(xmlDoc).find("SUBSCRIBERLASTNAME").text());
        $("#SUBSCRIBERSEX").val($(xmlDoc).find("SUBSCRIBERSEX").text());
        $("#SUBSCRIBERDATEOFBIRTH").val($(xmlDoc).find("SUBSCRIBERDATEOFBIRTH").text());

        
        var $ocrow = $(xmlDoc).find("OC_ROW");
        var countOC = 0;
        $ocrow.each(function () {
            if (countOC === 0) {
                
                $("#OCID").val($(this).find("OCID").text());
                $("#OCRELATIONSHIPTOSUBSCRIBER").val($(this).find("OCRELATIONSHIPTOSUBSCRIBER").text());
                $("#OCSUBSCRIBERFIRSTNAME").val($(this).find("OCSUBSCRIBERFIRSTNAME").text());
                $("#OCSUBSCRIBERLASTNAME").val($(this).find("OCSUBSCRIBERLASTNAME").text());
                $("#OCNAME").val($(this).find("OCNAME").text());
            }
            else {
                
                countOC= addOC();
                $("#OCID" + countOC).val($(this).find("OCID").text());
                $("#OCRELATIONSHIPTOSUBSCRIBER" + countOC).val($(this).find("OCRELATIONSHIPTOSUBSCRIBER").text());
                $("#OCSUBSCRIBERFIRSTNAME" + countOC).val($(this).find("OCSUBSCRIBERFIRSTNAME").text());
                $("#OCSUBSCRIBERLASTNAME" + countOC).val($(this).find("OCSUBSCRIBERLASTNAME").text());
                $("#OCNAME" + countOC).val($(this).find("OCNAME").text());
                initPrototypeLoopSentence("div", countOC, "OC", "<ns0:OC_ROW>");
            }
            countOC += 1;
        });

        $("#PATIENTCLIENTEXTKEY").val($(xmlDoc).find("PATIENTCLIENTEXTKEY").text());
        $("#PATIENTFIRSTNAME").val($(xmlDoc).find("PATIENTFIRSTNAME").text());
        $("#PATIENTMIDDLENAME").val($(xmlDoc).find("PATIENTMIDDLENAME").text());
        $("#PATIENTLASTNAME").val($(xmlDoc).find("PATIENTLASTNAME").text());
        $("#PATIENTSEX").val($(xmlDoc).find("PATIENTSEX").text());
        $("#PATIENTDATEOFBIRTH").val($(xmlDoc).find("PATIENTDATEOFBIRTH").text());

        
        var $lrow = $(xmlDoc).find("LINE_ROW");
        var countLINE = 0;
        $lrow.each(function () {
            if (countLINE === 0) {
                
                $("#LINENUMBER").val($(this).find("LINENUMBER").text());
                $("#PROCESSEDLINENUMBER").val($(this).find("PROCESSEDLINENUMBER").text());
                $("#BILLEDADAPROCEDURE").val($(this).find("BILLEDADAPROCEDURE").text());
                $("#CHARGEAMOUNT").val($(this).find("CHARGEAMOUNT").text());
                $("#APPROVALAMOUNT").val($(this).find("APPROVALAMOUNT").text());
                $("#PATIENTPAYMENT").val($(this).find("PATIENTPAYMENT").text());
                $("#NETPAYMENT").val($(this).find("NETPAYMENT").text());
                $("#ADJUSTMENTINDICATOR").val($(this).find("ADJUSTMENTINDICATOR").text());
                $("#OTHERPLANPAYMENT").val($(this).find("OTHERPLANPAYMENT").text());
                $("#BILLEDTOOTHNUMBER").val($(this).find("BILLEDTOOTHNUMBER").text());
                $("#BILLEDTOOTHSURFACE").val($(this).find("BILLEDTOOTHSURFACE").text());
            }
            else {

                countLINE = addSL();
                
                $("#LINENUMBER" + countLINE).val($(this).find("LINENUMBER").text());
                $("#PROCESSEDLINENUMBER" + countLINE).val($(this).find("PROCESSEDLINENUMBER").text());
                $("#BILLEDADAPROCEDURE" + countLINE).val($(this).find("BILLEDADAPROCEDURE").text());
                $("#CHARGEAMOUNT" + countLINE).val($(this).find("CHARGEAMOUNT").text());
                $("#APPROVALAMOUNT" + countLINE).val($(this).find("APPROVALAMOUNT").text());
                $("#PATIENTPAYMENT" + countLINE).val($(this).find("PATIENTPAYMENT").text());
                $("#NETPAYMENT" + countLINE).val($(this).find("NETPAYMENT").text());
                $("#ADJUSTMENTINDICATOR" + countLINE).val($(this).find("ADJUSTMENTINDICATOR").text());
                $("#OTHERPLANPAYMENT" + countLINE).val($(this).find("OTHERPLANPAYMENT").text());
                $("#BILLEDTOOTHNUMBER" + countLINE).val($(this).find("BILLEDTOOTHNUMBER").text());
                $("#BILLEDTOOTHSURFACE" + countLINE).val($(this).find("BILLEDTOOTHSURFACE").text());
                initPrototypeLoopSentence("div", countLINE, "SL", "<ns0:LINE_ROW>");
            }
            countLINE += 1;
            
        });

        var $mrow = $(xmlDoc).find("MAILADDRESS_ROW");
        var countMAIL = 0;
        $mrow.each(function () {
            if (countMAIL === 0) {
                $("#ADDRESSLINE1").val($(this).find("ADDRESSLINE1").text());
                $("#ADDRESSLINE2").val($(this).find("ADDRESSLINE2").text());
                $("#ADDRESSCITY").val($(this).find("ADDRESSCITY").text());
                $("#ADDRESSSTATE").val($(this).find("ADDRESSSTATE").text());
                $("#ADDRESSZIP").val($(this).find("ADDRESSZIP").text());
                $("#ADDRESSCOUNTRY").val($(this).find("ADDRESSCOUNTRY").text());
            }
            else {
                countMAIL = addML();

                $("#ADDRESSLINE1" + countMAIL).val($(this).find("ADDRESSLINE1").text());
                $("#ADDRESSLINE2" + countMAIL).val($(this).find("ADDRESSLINE2").text());
                $("#ADDRESSCITY" + countMAIL).val($(this).find("ADDRESSCITY").text());
                $("#ADDRESSSTATE" + countMAIL).val($(this).find("ADDRESSSTATE").text());
                $("#ADDRESSZIP" + countMAIL).val($(this).find("ADDRESSZIP").text());
                $("#ADDRESSCOUNTRY" + countMAIL).val($(this).find("ADDRESSCOUNTRY").text());
                initPrototypeLoopSentence("div", countMAIL, "ML", "<ns0:MAILADDRESS_ROW>");
            }
            countMAIL += 1;
        });

        $("#COMMENTS").val($(xmlDoc).find("COMMENTS").text());
    });

    
}

// Function to render the XML content in the specified div
function renderLoopXML(xml, containerTagName, divsuffix, seqNo) {
    // Format the XML content for readability
    var formattedXml = vkbeautify.xml(xml);

    $("#" + containerTagName + divsuffix + "footerRows" + seqNo).text(formattedXml);

}

// Function to render the XML content in the specified div
function renderXML(xml, containerTagName, divsuffix) {
    // Format the XML content for readability
    var formattedXml = vkbeautify.xml(xml);

    $("#" + containerTagName + divsuffix + "footer").text(formattedXml);

}


function initPrototypeLoopSentence(containerTagName, seqNo, divsuffix,containerTag) {
    var newSentence = containerTag;
    // Attach an onchange event handler to all textboxes within the specificDiv

    var id = "#" + containerTagName + divsuffix + "bodyRows" + seqNo + " input[type='text']";

    
    // Iterate over all textboxes within the specificDiv
    $(id).each(function (index) {
        // Get the current textbox element
        var textbox = $(this);
        // Get the value of the current textbox title for XML tag and text box value for the XML tag value
       
        newSentence += textbox.attr("title").replace("<", "<ns0:") + textbox.val() + textbox.attr("title").replace("<", "</ns0:");
    });

    newSentence += containerTag.replace("<", "</");
    //debugger;
    renderLoopXML(newSentence, containerTagName, divsuffix, seqNo);

}

function generatePrototypeLoopSentence(containerTagName, seqNo, divsuffix,containerTag) {
    var newSentence;

    var id = "#" + containerTagName + divsuffix + "bodyRows" + seqNo + " input[type='text']";
    //Generating sentence with values on KEYUP event

    $(id).on("keyup", function () {

        newSentence = containerTag;
        // Iterate over all textboxes within the specificDiv
        $(id).each(function (index) {
            // Get the current textbox element
            var textbox = $(this);
            // Get the value of the current textbox title for XML tag and text box value for the XML tag value

            newSentence += textbox.attr("title").replace("<", "<ns0:") + textbox.val() + textbox.attr("title").replace("<", "</ns0:");

        });

        // Do something with the new value, for example, display it in an html element
        newSentence += containerTag.replace("<", "</");
        renderLoopXML(newSentence, containerTagName, divsuffix, seqNo);

    });


}


function initPrototypeSentence(containerTagName, segmentName, divsuffix) {
    var newSentence = "";
    // Attach an onchange event handler to all textboxes within the specificDiv

    var id = "#" + containerTagName + divsuffix + "body input[type='text']";


    // Iterate over all textboxes within the specificDiv
    $(id).each(function (index) {
        // Get the current textbox element
        var textbox = $(this);
        // Get the value of the current textbox title for XML tag and text box value for the XML tag value

        newSentence += textbox.attr("title").replace("<", "<ns0:") + textbox.val() + textbox.attr("title").replace("<", "</ns0:");
    });



    renderXML(newSentence, containerTagName, divsuffix);

}


function generatePrototypeSentence(containerTagName, segmentName, divsuffix) {
    var newSentence;

    var id = "#" + containerTagName + divsuffix + "body input[type='text']";
    //Generating sentence with values on KEYUP event

    $(id).on("keyup", function () {

        newSentence = "";
        // Iterate over all textboxes within the specificDiv
        $(id).each(function (index) {
            // Get the current textbox element
            var textbox = $(this);
            // Get the value of the current textbox title for XML tag and text box value for the XML tag value

            newSentence += textbox.attr("title").replace("<", "<ns0:") + textbox.val() + textbox.attr("title").replace("<", "</ns0:");

        });

        // Do something with the new value, for example, display it in an html element
        
        renderXML(newSentence, containerTagName, divsuffix);

    });


}

function addSL() {
    // Create a new <div> element
    var id = Math.floor(Math.random() * 1000);
    var randomBodyId = "divSLbodyRows" + id;
    var randomFooterId = "divSLfooterRows" + id;
    var newDivBody = $("<div></div>").attr("id", randomBodyId);
    var newDivFooter = $("<div></div>").attr("id", randomFooterId);

    // Add content and styling to the new <div>

    newDivBody.html($.trim($("#divSLbodyRows0").html()));

    var randomColor = customColor();


    newDivBody.css("background-color", randomColor);
    newDivFooter.css("background-color", randomColor);

    // Append the new <div> to the parent div
    $("#divSLbody").append(newDivBody);

    //Get all TEXTbox under the newDivBody and update it's ID's
    $("#divSLbodyRows" + id).find("input[type='text']").each(function (index) {
        var newId = $(this).attr("id") + id; // Generate a new ID

        $(this).attr("id", newId); // Update the ID of the current textbox
    });


    // Append the new <div> to the parent div
    $("#divSLfooter").append(newDivFooter);


    initPrototypeLoopSentence("div", id, "SL", "<ns0:LINE_ROW>");
    generatePrototypeLoopSentence("div", id, "SL", "<ns0:LINE_ROW>");

    return id;
}