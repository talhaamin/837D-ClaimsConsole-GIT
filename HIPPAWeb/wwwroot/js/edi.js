$(document).ready(function () {
   
    var newMessage = "";
    var isEmptyFlag = true;
    initSentence("div", "ST", "ST");
    generateSentence("div", "ST", "ST");


    initSentence("div", "BHT", "BHT");
    generateSentence("div", "BHT", "BHT");


    initSentence("div", "NM1","NM1-SN");
    generateSentence("div", "NM1","NM1-SN");


    initSentence("div", "PER","PER-SECI");
    generateSentence("div", "PER", "PER-SECI");


    initSentence("div", "NM1", "NM1-REC");
    generateSentence("div", "NM1", "NM1-REC");


    initSentence("div", "HL", "HL-BPHL0");
    generateSentence("div", "HL", "HL-BPHL0");
    

    initSentence("div", "NM1", "NM1-BPHL0");
    generateSentence("div", "NM1", "NM1-BPHL0");


    initSentence("div", "N3", "N3-BPHL0");
    generateSentence("div", "N3", "N3-BPHL0");


    initSentence("div", "N4", "N4-BPHL0");
    generateSentence("div", "N4", "N4-BPHL0");



    initSentence("div", "REF", "REF-BPHL0");
    generateSentence("div", "REF", "REF-BPHL0");



    initSentence("div", "HL", "HL-SHL0");
    generateSentence("div", "HL", "HL-SHL0");



    initSentence("div", "SBR", "SBR-SHL0");
    generateSentence("div", "SBR", "SBR-SHL0");


    initSentence("div", "NM1", "NM1-SHL0");
    generateSentence("div", "NM1", "NM1-SHL0");



    initSentence("div", "N3", "N3-SHL0");
    generateSentence("div", "N3", "N3-SHL0");


    initSentence("div", "N4", "N4-SHL0");
    generateSentence("div", "N4", "N4-SHL0");



    initSentence("div", "NM1", "NM1-PAY0");
    generateSentence("div", "NM1", "NM1-PAY0");



    initSentence("div", "N4", "N4-PAY0");
    generateSentence("div", "N4", "N4-PAY0");



    initSentence("div", "HL", "HL-PHL0");
    generateSentence("div", "HL", "HL-PHL0");


    initSentence("div", "PAT", "PAT-PHL0");
    generateSentence("div", "PAT", "PAT-PHL0");


    initSentence("div", "NM1", "NM1-PHL0");
    generateSentence("div", "NM1", "NM1-PHL0");


    initSentence("div", "N3", "N3-PHL0");
    generateSentence("div", "N3", "N3-PHL0");


    initSentence("div", "N4", "N4-PHL0");
    generateSentence("div", "N4", "N4-PHL0");



    initSentence("div", "DMG", "DMG-PHL0");
    generateSentence("div", "DMG", "DMG-PHL0");




});

function initSentence(containerTagName, segmentName, divsuffix)
{
    var newSentence = segmentName + "*";
    // Attach an onchange event handler to all textboxes within the specificDiv

    var id = "#" + containerTagName + divsuffix + "body input[type='text']";

    //Initialize Sentence
    // Iterate over all textboxes within the specificDiv
    $(id).each(function (index) {
        // Get the current textbox element
        var textbox = $(this);
        if (index > 0) {
            // Get the value of the current textbox
            newSentence += "*" + textbox.val();
        }
        else {
            // Get the value of the current textbox
            newSentence += textbox.val();
        }


    });
    newSentence += "~";
    $("#" + containerTagName + divsuffix + "footer").html(newSentence);


}

function generateSentence(containerTagName, segmentName, divsuffix)
{
    var newSentence;

    var id = "#" + containerTagName + divsuffix + "body input[type='text']";
    //Generating sentence with values on KEYUP event
    
    $(id).on("keyup", function () {

        newSentence = segmentName + "*";
        // Iterate over all textboxes within the specificDiv
        $(id).each(function (index) {
            // Get the current textbox element
            var textbox = $(this);
            if (index > 0) {
                // Get the value of the current textbox
                newSentence += "*" + textbox.val();
            }
            else {
                // Get the value of the current textbox
                newSentence += textbox.val();
            }

        });

        // Do something with the new value, for example, display it in an html element
        // Set the content of the specificDiv using .html()
        newSentence += "~";


        $("#" + containerTagName + divsuffix + "footer").html(newSentence);


    });


}