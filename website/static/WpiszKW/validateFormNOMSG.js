
    function validateFormNOMSG() {
	var input3 = document.getElementById("Email").value;
      var input1 = document.getElementById("input1").value;
	var input2 = document.getElementById("input2").value.toUpperCase();
	var input2 = document.getElementById("input2").value;
      var validOptions = ["WL1A", "SU1A", "OL1Y", "PT1B", "LU1B", "RA2G", "KO1B",
       "BI1B", "BI1P", "BB1B", "OL1B", "ZA1B", "TR1O", "JG1B",
       "EL1B", "TO1B", "OP1B", "TR1B", "LD1B", "KS1B", "KI1B",
       "BY1B", "KA1Y", "SL1B", "KA1B", "LU1C", "TO1C", "PO1H",
       "SL1C", "KA1C", "SZ1C", "KR1C", "PL1C", "BB1C", "PO2T",
       "KR1K", "CZ1C", "SL1Z", "KR2Y", "KO1D", "EL1D", "SW1D",
       "KA1D", "TR1D", "RZ1D", "EL1E", "OL1E", "SI1G", "GD1G",
       "GD1Y", "OL1G", "GL1G", "PO1G", "SZ1O", "TO1G", "NS1G",
       "GW1G", "PL1G", "PO1Y", "LM1G", "WA1G", "PO1S", "TO1U",
       "SZ1G", "SZ1Y", "RA1G", "ZG2K", "LE1G", "OP1G", "BI2P",
       "ZA1H", "BY1I", "EL1I", "ZA1J", "KZ1J", "PR1J", "GL1J",
       "KS1J", "LE1J", "KA1J", "JG1J", "KI1J", "KZ1A", "JG1K",
       "SZ1K", "GD1R", "KA1K", "KI1I", "KI1L", "OP1U", "TB1K",
       "KN1N", "KO1K", "RA1K", "KN1K", "KO1L", "KI1K", "PO1K",
       "GD1E", "KR1P", "ZA1K", "LU1K", "KS1K", "ZG1K", "KZ1R",
       "KR2K", "LD1K", "GD1I", "OP1K", "KZ1E", "OL1K", "KR2E",
       "CZ2C", "SW1K", "WA1L", "LE1L", "KS1E", "PO1L", "RZ1E",
       "OL1L", "NS1L", "WL1L", "RA1L", "PR1L", "LU1A", "JG1L",
       "LE1U", "LU1I", "CZ1L", "JG1S", "SL1L", "GD1M", "SL1M",
       "KR1M", "TB1M", "KA1M", "WR1M", "PO2A", "GW1M", "SI1M",
       "BY1M", "EL2O", "OL1M", "NS2L", "NS1M", "CZ1M", "KA1L",
       "KR1Y", "SZ1M", "PL1M", "BY1N", "OL1N", "KR2I", "TB1N",
       "SW2K", "ZG1N", "EL1N", "GD2M", "WA1N", "NS1S", "NS1T",
       "PO1N", "OP1N", "PO1O", "OL1C", "OP1L", "WR1E", "KR1O",
       "OL1O", "KI1T", "PT1O", "OP1O", "LU1O", "KI1O", "OS1O",
       "KZ1O", "EL1O", "OS1M", "KZ1W", "WA1O", "WR1O", "KR1E",
       "LD1P", "SR2W", "WA1I", "RA2Z", "PT1P", "OL1P", "PO1I",
       "KI1P", "KZ1P", "SR2L", "SZ2S", "PO1P", "PO2P", "KR1H",
       "OP1P", "WA1P", "OS1P", "PR1P", "PR1R", "RA1P", "KA1P",
       "GD2W", "LU1P", "OS1U", "SZ2T", "PL1P", "PL1L", "GL1R",
       "RA1R", "PT1R", "WL1R", "LU1R", "LD1R", "PO1R", "RZ1R",
       "GL1S", "GL1Y", "LU1Y", "WL1Y", "RZ1Z", "KI1S", "KS1S",
       "SU1N", "SI1S", "KA1I", "BI3P", "PR2R", "SR1S", "PL1E",
       "KI1R", "KR3I", "KR2P", "LD1H", "PL1O", "SI1P", "BI1S",
       "GD1S", "KA1S", "TB1S", "KI1H", "SZ1T", "GD1A", "KI1A",
       "GW1K", "OP1S", "WR1T", "RZ1S", "KR1B", "ZG2S", "GW1U",
       "SU1S", "PO1A", "SZ1S", "KO1I", "OL1S", "GD2I", "BY1U",
       "RA1S", "BY2T", "KO1E", "KR1S", "GW1S", "KN1S", "SL1S",
       "TB1T", "GL1T", "TR1T", "GD1T", "ZA1T", "PT1T", "TO1T",
       "PO1T", "WR1W", "BY1T", "TR2T", "KN1T", "KA1T", "RZ2Z",
       "KS2E", "KR1W", "WA3M", "WA1M", "WA2M", "WA4M", "WA5M",
       "WA6M", "CIKW", "SW1W", "KO1W", "GD1W", "KR1I", "SR1W",
       "GL1W", "PO1E", "WA1W", "WR1L", "WR1K", "PO1F", "ZG1W",
       "PO2H", "LM1W", "OS1W", "TO1W", "PO1B", "OL2G", "SI1W",
       "WL1W", "LU1W", "KI1W", "GL1Z", "NS1Z", "LM1Z", "ZA1Z",
       "CZ1Z", "SR1Z", "LD1G", "JG1Z", "ZG1E", "RA1Z", "SW1Z",
       "LE1Z", "PO1Z", "SR1L", "RZ1A", "SZ1L", "LM1L", "SI2S",
       "LD1O", "LU1U", "LD1M", "LD1Y", "PO1M", "PO1D", "WR1S",
       "SW1S", "LU1S", "KO2B", "ZG1S", "BY1S", "SZ1W", "ZG1G",
       "ZG1R", "BY1Z", "GL1X", "PL2M", "PL1Z", "BB1Z"];
      

       var emailRegex = /^\S+@\S+\.\S+$/;

       var errorMessage = ""; // Initialize an empty error message string
     
       if (!validOptions.includes(input1)) {
         errorMessage += "Wpisz Znak Wydziału Sądu.\n";
       }
     
       if (!input2 || !/^\d{8}$/.test(input2)) {
         errorMessage += "Wpisz Numer Księgi Wieczystej.\n";
       }
     
       if (!emailRegex.test(input3)) {
         errorMessage += "Nieprawidłowy adres e-mail.\n";
       }
     
       if (errorMessage) {
         // If there's an error message, display it in a single alert
       
         return false;
       }
     
       return true; // Return true if all validations pass
     }
     
    
     
