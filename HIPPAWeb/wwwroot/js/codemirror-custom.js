//$(function () {
//    var editorXML1 = CodeMirror.fromTextArea(document.getElementById("xmlPrototype"), {
//        mode: "xml",
//        theme: "monokai",
//        lineNumbers: false,

//        // readOnly: true

//    });
//    // editorXML.setSize(1223, 470);
//    var strXMLValue1 = "<segments> " +
//        "<element> " +
//        "test " +
//        "</element> " +
//        "</segments> ";
//    var lines = strXMLValue1.split(" ");
//    editorXML1.setValue(lines.join("\n"));
//    editorXML1.focus();


//})


//$(function () {


//    // CodeMirror
//    var editorEDI = CodeMirror.fromTextArea(document.getElementById("EDI"), {
//        mode: "htmlmixed",
//        theme: "monokai",
//        lineNumbers: false,
       
//        //readOnly: true
//    });
//   // editorEDI.setSize(1223, 470);
//    var strEDIValue = "ISA*00*          *00*          *ZZ*10-1234588     *ZZ*123456789      *170207*0928*^*00501*000000001*0*T*:~" +
//        "GS * HC * 10 - 1234588 * 123456789 * 20170207 * 0928 * 1 * X * 005010X224A2~" +
//        "ST * 837 * 0002 * 005010X224A2~" +
//        "BHT * 0019 * 00 * 0123 * 20170207 * 0928 * RP~" +
//        "NM1 * 41 * 2 * ACME DENTAL ***** 46 * 10 - 1234588~" +
//        "PER * IC * HELPDESK * TE * 5555555555~" +
//        "NM1 * 40 * 2 * ACME HEALTH PLAN ***** 46 * 123456789~" +
//        "HL * 1 ** 20 * 1~" +
//        "NM1 * 85 * 2 * BOBBY WAKJER DDS PC ***** XX * 0123456789~" +
//        "N3 * 100 BORAD~" +
//        "N4 * DALLAS * TX * 75201~" +
//        "REF * EI * 098765432~" +
//        "HL * 2 * 1 * 22 * 0~" +
//        "SBR * P * 18 * 66500021 ****** ZZ~" +
//        "NM1 * IL * 1 * JENKINS * ALBERT **** MI * 09876543212~" +
//        "N3 * 100 HOLLY COURT~" +
//        "N4 * DALLAS * TX * 75201~" +
//        "MG * D8 * 19601117 * F~" +
//        "NM1 * PR * 2 * ACME DENTAL ***** PI * 10 - 1234588~" +
//        "N4 * DALLAS * TX * 75201~" +
//        "CLM * 01234567890123456 * 1370 *** 11: B: 1 * Y * C * W * Y~" +
//        "DTP * 472 * D8 * 20170102~" +
//        "REF * D9 * 1111111111~" +
//        "HCP * 10 * 0~" +
//        "NM1 * 82 * 1 * WAKJER * BOBBY * W *** XX * 0123456789~" +
//        "PRV * PE * PXC * 100000000X~" +
//        "LX * 1~" +
//        "SV3 * AD: D2740 * 1100~" +
//        "REF * 6R * 0989842042940302~" +
//        "SVD * 10 - 1234588 * 0 * AD: D2740 ** 1~" +
//        "DTP * 573 * D8 * 20170113~" +
//        "LX * 2~" +
//        "SV3 * AD: D2950 * 270~" +
//        "REF * 6R * 0989842042940302~" +
//        "SVD * 10 - 1234588 * 0 * AD: D2950 ** 1~" +
//        "DTP * 573 * D8 * 20170113~" +
//        "HL * 3 ** 20 * 1~" +
//        "NM1 * 85 * 2 * RALPH SAHAKIAN, DMDPC ***** XX * 1437374352~" +
//        "N3 * 14 LAKE AVE~" +
//        "N4 * WORCESTER * MA * 016049998~" +
//        "REF * EI * 010862267~" +
//        "REF * 0B * 16963~" +
//        "PER * IC * RALPH SAHAKIAN DMDPC * TE * 5087535115~" +
//        "HL * 4 * 7 * 22 * 1~" +
//        "SBR * P ** 76960005 ****** CI~" +
//        "NM1 * IL * 1 * LOFTUS * JOHN **** MI * 6025652870~" +
//        "NM1 * PR * 2 * ALTUS DENTAL ***** PI * 50503~" +
//        "HL * 5 * 8 * 23 * 0~" +
//        "PAT * 19~" +
//        "NM1 * QC * 1 * LOFTUS - FASTL * JOHNJOSEF~" +
//        "N3 * 55 WESTBOROUGH ST~" +
//        "N4 * WORCESTER * MA * 016049998~" +
//        "DMG * D8 * 20010618 * M~" +
//        "CLM * DNT1161010804 * 190 *** 11: B: 1 * Y * C * Y * Y~" +
//        "DTP * 472 * D8 * 20230911~" +
//        "DN2 * C * M **** JP~" +
//        "DN2 * H * M **** JP~" +
//        "DN2 * J * M **** JP~" +
//        "DN2 * 1 * M **** JP~" +
//        "DN2 * 16 * M **** JP~" +
//        "DN2 * 17 * M **** JP~" +
//        "DN2 * 32 * M **** JP~" +
//        "REF * D9 * X1874685430~" +
//        "NTE * ADD * ENL 14 LAKE AVE\WORCESTER\MA\01604~" +
//        "NM1 * 82 * 1 * SAHAKIAN * RALPH **** XX * 1811915267~" +
//        "PRV * PE * PXC * 122300000X~" +
//        "REF * 0B * 16963~" +
//        "LX * 1~" +
//        "SV3 * AD: D0120 * 60 **** 1~" +
//        "REF * 6R * DNT1161010804 - 1~" +
//        "LX * 2~" +
//        "SV3 * AD: D1110 * 130 **** 1~" +
//        "REF * 6R * DNT1161010804 - 2~" +
//        "SE * 72 * 0002~" +
//        "GE * 1 * 1~" +
//        "IEA * 1 * 000000001~";

   
    
//    var lines = strEDIValue.split("~");
//    editorEDI.setValue(lines.join("\n"));
//    editorEDI.focus();


//    var editorXML = CodeMirror.fromTextArea(document.getElementById("XML"), {
//        mode: "xml",
//        theme: "monokai",
//        lineNumbers: false,
      
//       // readOnly:true
              
//    });
//   // editorXML.setSize(1223, 470);
//    var strXMLValue = "<segments> " +
//        "<element> " +
//        "test " +
//        "</element> " +
//        "</segments> ";
//    var lines = strXMLValue.split(" ");
//    editorXML.setValue(lines.join("\n"));
//    editorXML.focus();



    
//})