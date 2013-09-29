

function initializeSettings() {
    // Initialize all settings flyouts and WinJS controls.
    WinJS.UI.processAll();

    // Populate settings pane and tie commands to settings flyouts.
    WinJS.Application.onsettings = function (e) {
        e.detail.applicationcommands = {
            "help": { href: "HelpUI", title: "Help" }
        };
        WinJS.UI.SettingsFlyout.populateSettings(e);
    }
    WinJS.Application.start();
}


(function () {
    "use strict";


    var table = false;

    WinJS.Binding.optimizeBindingReferences = true;

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    var symbols = new Array();
    symbols[0] = [null];
    symbols[1] = ['H'];
    symbols[2] = ['He'];
    symbols[3] = ['Li'];
    symbols[4] = ['Be'];
    symbols[5] = ['B'];
    symbols[6] = ['C'];
    symbols[7] = ['N'];
    symbols[8] = ['O'];
    symbols[9] = ['F'];
    symbols[10] = ['Ne'];
    symbols[11] = ['Na'];
    symbols[12] = ['Mg'];
    symbols[13] = ['Al'];
    symbols[14] = ['Si'];
    symbols[15] = ['P'];
    symbols[16] = ['S'];
    symbols[17] = ['Cl'];
    symbols[18] = ['Ar'];
    symbols[19] = ['K'];
    symbols[20] = ['Ca'];
    symbols[21] = ['Sc'];
    symbols[22] = ['Ti'];
    symbols[23] = ['V'];
    symbols[24] = ['Cr'];
    symbols[25] = ['Mn'];
    symbols[26] = ['Fe'];
    symbols[27] = ['Co'];
    symbols[28] = ['Ni'];
    symbols[29] = ['Cu'];
    symbols[30] = ['Zn'];
    symbols[31] = ['Ga'];
    symbols[32] = ['Ge'];
    symbols[33] = ['As'];
    symbols[34] = ['Se'];
    symbols[35] = ['Br'];
    symbols[36] = ['Kr'];
    symbols[37] = ['Rb'];
    symbols[38] = ['Sr'];
    symbols[39] = ['Y'];
    symbols[40] = ['Zr'];
    symbols[41] = ['Nb'];
    symbols[42] = ['Mo'];
    symbols[43] = ['Tc'];
    symbols[44] = ['Ru'];
    symbols[45] = ['Rh'];
    symbols[46] = ['Pd'];
    symbols[47] = ['Ag'];
    symbols[48] = ['Cd'];
    symbols[49] = ['In'];
    symbols[50] = ['Sn'];
    symbols[51] = ['Sb'];
    symbols[52] = ['Te'];
    symbols[53] = ['I'];
    symbols[54] = ['Xe'];
    symbols[55] = ['Cs'];
    symbols[56] = ['Ba'];
    symbols[57] = ['La'];
    symbols[58] = ['Ce'];
    symbols[59] = ['Pr'];
    symbols[60] = ['Nd'];
    symbols[61] = ['Pm'];
    symbols[62] = ['Sm'];
    symbols[63] = ['Eu'];
    symbols[64] = ['Gd'];
    symbols[65] = ['Tb'];
    symbols[66] = ['Dy'];
    symbols[67] = ['Ho'];
    symbols[68] = ['Er'];
    symbols[69] = ['Tm'];
    symbols[70] = ['Yb'];
    symbols[71] = ['Lu'];
    symbols[72] = ['Hf'];
    symbols[73] = ['Ta'];
    symbols[74] = ['W'];
    symbols[75] = ['Re'];
    symbols[76] = ['Os'];
    symbols[77] = ['Ir'];
    symbols[78] = ['Pt'];
    symbols[79] = ['Au'];
    symbols[80] = ['Hg'];
    symbols[81] = ['Ti'];
    symbols[82] = ['Pb'];
    symbols[83] = ['Bi'];
    symbols[84] = ['Po'];
    symbols[85] = ['At'];
    symbols[86] = ['Rn'];
    symbols[87] = ['Fr'];
    symbols[88] = ['Ra'];
    symbols[89] = ['Ac'];
    symbols[90] = ['Th'];
    symbols[91] = ['Pa'];
    symbols[92] = ['U'];
    symbols[93] = ['Np'];
    symbols[94] = ['Pu'];
    symbols[95] = ['Am'];
    symbols[96] = ['Cm'];
    symbols[97] = ['Bk'];
    symbols[98] = ['Cf'];
    symbols[99] = ['Es'];
    symbols[100] = ['Fm'];
    symbols[101] = ['Md'];
    symbols[102] = ['No'];
    symbols[103] = ['Lr'];
    symbols[104] = ['Rf'];
    symbols[105] = ['Db'];
    symbols[106] = ['Sg'];
    symbols[107] = ['Bh'];
    symbols[108] = ['Hs'];
    symbols[109] = ['Mt'];
    symbols[110] = ['Ds'];
    symbols[111] = ['Rg'];
    symbols[112] = ['Cn'];
    symbols[113] = ['Uut'];
    symbols[114] = ['Fl'];
    symbols[115] = ['Uup'];
    symbols[116] = ['Lv'];
    symbols[117] = ['Uus'];
    symbols[118] = ['Uuo'];

    var name = new Array();

    name[0] = null;
    name[1] = "Hydrogen";
    name[2] = "Helium";
    name[3] = "Lithum";
    name[4] = "Beryllium";
    name[5] = "Boron";
    name[6] = "Carbon";
    name[7] = "Nitrogen";
    name[8] = "Oxygen";
    name[9] = "Fluorine";
    name[10] = "Neon";
    name[11] = "Sodium";
    name[12] = "Magnesium";
    name[13] = "Aluminium";
    name[14] = "Silicon";
    name[15] = "Phosphorus";
    name[16] = "Sulfur";
    name[17] = "Chlorine";
    name[18] = "Argon";
    name[19] = "Potassium";
    name[20] = "Calcium";
    name[21] = "Scandium";
    name[22] = "Titanium";
    name[23] = "Vanadium";
    name[24] = "Chromium";
    name[25] = "Manganese";
    name[26] = "Iron";
    name[27] = "Cobalt";
    name[28] = "Nickel";
    name[29] = "Copper";
    name[30] = "Zinc";
    name[31] = "Gallium";
    name[32] = "Germanium";
    name[33] = "Arsenic";
    name[34] = "Selenium";
    name[35] = "Bromine";
    name[36] = "Krypton";
    name[37] = "Rubidium";
    name[38] = "Strontium";
    name[39] = "Yttrium";
    name[40] = "Zirconium";
    name[41] = "Niobium";
    name[42] = "Molybdenum";
    name[43] = "Technetium";
    name[44] = "Ruthenium";
    name[45] = "Rhodium";
    name[46] = "Palladium";
    name[47] = "Silver";
    name[48] = "Cadmium";
    name[49] = "Indium";
    name[50] = "Tin";
    name[51] = "Antimony";
    name[52] = "Tellurium";
    name[53] = "Iodine";
    name[54] = "Xenon";
    name[55] = "Caesium";
    name[56] = "Barium";
    name[57] = "Lanthanum";
    name[58] = "Cerium";
    name[59] = "Praseodymium";
    name[60] = "Neodymium";
    name[61] = "Promethium";
    name[62] = "Samarium";
    name[63] = "Europium";
    name[64] = "Gadolinium";
    name[65] = "Terbium";
    name[66] = "Dysprosium";
    name[67] = "Holmium";
    name[68] = "Erbium";
    name[69] = "Thulium";
    name[70] = "Ytterbium";
    name[71] = "Lutetium";
    name[72] = "Hafnium";
    name[73] = "Tantalum";
    name[74] = "Tungsten";
    name[75] = "Rhenium";
    name[76] = "Osmium";
    name[77] = "Iridium";
    name[78] = "Platinum";
    name[79] = "Gold";
    name[80] = "Mercury";
    name[81] = "Thallium";
    name[82] = "Lead";
    name[83] = "Bismuth";
    name[84] = "Polonium";
    name[85] = "Astatine";
    name[86] = "Radon";
    name[87] = "Francium";
    name[88] = "Radium";
    name[89] = "Actinium";
    name[90] = "Thorium";
    name[91] = "Protactinium";
    name[92] = "Uranium";
    name[93] = "Neptunium";
    name[94] = "Plutonium";
    name[95] = "Americium";
    name[96] = "Curium";
    name[97] = "Berkelium";
    name[98] = "Californium";
    name[99] = "Einsteinium";
    name[100] = "Fermium";
    name[101] = "Mendelevium";
    name[102] = "Nobelium";
    name[103] = "Lawrencium";
    name[104] = "Rutherfordium";
    name[105] = "Dubnium";
    name[106] = "Seaborgium";
    name[107] = "Bohrium";
    name[108] = "Hassium";
    name[109] = "Meitnerium";
    name[110] = "Darmstadtium";
    name[111] = "Roentgenium";
    name[112] = "Copernicium";
    name[113] = "Ununtrium";
    name[114] = "Flerovium";
    name[115] = "Ununpentium";
    name[116] = "Livermorium";
    name[117] = "Ununseptium";
    name[118] = "Ununoctium";

    var mass = new Array();
    mass[0] = null;
    mass[1] = 1.0079;
    mass[2] = 4.0026;
    mass[3] = 6.9400;
    mass[4] = 9.0122;
    mass[5] = 10.810;
    mass[6] = 12.011;
    mass[7] = 14.007;
    mass[8] = 15.999;
    mass[9] = 18.998;
    mass[10] = 20.180;
    mass[11] = 22.990;
    mass[12] = 24.305;
    mass[13] = 26.982;
    mass[14] = 28.085;
    mass[15] = 30.974;
    mass[16] = 32.060;
    mass[17] = 35.450;
    mass[18] = 39.948;
    mass[19] = 39.098;
    mass[20] = 40.078;
    mass[21] = 44.956;
    mass[22] = 47.867;
    mass[23] = 50.942;
    mass[24] = 51.996;
    mass[25] = 54.996;
    mass[26] = 55.845;
    mass[27] = 58.993;
    mass[28] = 58.693;
    mass[29] = 63.546;
    mass[30] = 65.380;
    mass[31] = 69.723;
    mass[32] = 72.630;
    mass[33] = 74.922;
    mass[34] = 78.960;
    mass[35] = 79.904;
    mass[36] = 83.798;
    mass[37] = 85.468;
    mass[38] = 87.620;
    mass[39] = 88.906;
    mass[40] = 91.224;
    mass[41] = 92.906;
    mass[42] = 95.960;
    mass[43] = 97.910;
    mass[44] = 101.07;
    mass[45] = 102.91;
    mass[46] = 106.42;
    mass[47] = 107.87;
    mass[48] = 112.41;
    mass[49] = 114.82;
    mass[50] = 118.71;
    mass[51] = 121.76;
    mass[52] = 127.60;
    mass[53] = 126.90;
    mass[54] = 131.29;
    mass[55] = 132.91;
    mass[56] = 137.33;
    mass[57] = 138.91;
    mass[58] = 140.12;
    mass[59] = 140.91;
    mass[60] = 144.24;
    mass[61] = 144.91;
    mass[62] = 150.36;
    mass[63] = 151.25;
    mass[64] = 157.25;
    mass[65] = 158.93;
    mass[66] = 162.50;
    mass[67] = 164.93;
    mass[68] = 167.26;
    mass[69] = 168.93;
    mass[70] = 173.05;
    mass[71] = 174.97;
    mass[72] = 178.49;
    mass[73] = 180.95;
    mass[74] = 183.84;
    mass[75] = 186.21;
    mass[76] = 190.23;
    mass[77] = 192.22;
    mass[78] = 195.08;
    mass[79] = 196.97;
    mass[80] = 200.59;
    mass[81] = 204.38;
    mass[82] = 207.20;
    mass[83] = 208.98;
    mass[84] = 208.98;
    mass[85] = 209.99;
    mass[86] = 222.02;
    mass[87] = 223.02;
    mass[88] = 226.03;
    mass[89] = 227.03;
    mass[90] = 232.04;
    mass[91] = 231.04;
    mass[92] = 238.03;
    mass[93] = 237.05;
    mass[94] = 244.06;
    mass[95] = 243.06;
    mass[96] = 247.07;
    mass[97] = 247.07;
    mass[98] = 251.08;
    mass[99] = 252.08;
    mass[100] = 257.10;
    mass[101] = 258.10;
    mass[102] = 259.10;
    mass[103] = 262.11;
    mass[104] = 265.12;
    mass[105] = 268.13;
    mass[106] = 271.13;
    mass[107] = 270.00;
    mass[108] = 277.15;
    mass[109] = 276.15;
    mass[110] = 281.16;
    mass[111] = 280.16;
    mass[112] = 285.17;
    mass[113] = 284.18;
    mass[114] = 289.19;
    mass[115] = 288.19;
    mass[116] = 293.00;
    mass[117] = 294.00;
    mass[118] = 294.00;

    var last = [1, 5, 6, 7, 8, 9, 15, 16, 19, 23, 39, 53, 74, 92];  //These are the atomic numbers of the elements who's symbols are within the simbols oth other elements
    //for instance, H (hyfrogen) is withing He (Helium)

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {

            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {

                // Add privacy policy to settings charm
                WinJS.Application.onsettings = function (e) {
                    e.detail.applicationcommands = { "help": { title: "Privacy policy", href: "Privacy.html" } };
                    WinJS.UI.SettingsFlyout.populateSettings(e);
                };

                // This application has been newly launched. Initialize
                // your application here.
                var outputValue = WinJS.Application.sessionState.formula;
                if (outputValue) {
                    document.getElementById("nameInput").innerText = outputValue;

                    evaluate(outputValue);
                }
            } else {
                // This application has been reactivated from suspension.
                // Restore application state here.

                var outputValue = WinJS.Application.sessionState.formula;
                if (outputValue) {
                    document.getElementById("nameInput").innerText = "restore";
             
                    evaluate(outputValue);
                }
            }
            args.setPromise(WinJS.UI.processAll());
        }

        var last = [1, 5, 6, 7, 8, 9, 15, 16, 19, 23, 39, 53, 74, 92];  //These are the atomic numbers of te single letter element symbols, used when parsing input strings

        /*
        ***********************************************************
        ***********************************************************
        MATHMATICS
        ***********************************************************
        ***********************************************************
        */

        //returns a list of the mass of each element in the input formula as an array
        function massList(str) {

            var massList = new Array();

            var elementMass;

            var regex = new RegExp();

            for (var i = 1; i <= 118; i++) {
                if (!isin(i, last)) {//itterates through all elements, skipping single letter symols on the first pass

                    elementMass = safeEval(isolate(i, str));//this isolates a singe element's symbol and coefficiant, converts it to a into a math statement, sanitizes said function, and evaluates it to a number representing the mass of that element mulitlied by it's coefficiant. Isolate turns element sumbols into numbers and arithmatic opperators

                    if (elementMass) {//if elemetMass is not null after santization

                        massList[i] = elementMass;

                    } else {

                        massList[i] = 0;

                    }

                    regex = RegExp(symbols[i], 'g');

                    str = str.replace(regex, '0')//each element that is evaluated becomes the number 0

                }

            }

            //finaly the single letter symbols are evaluated
            for (var i = 0; i <= 14; i++) {

                elementMass = safeEval(isolate(last[i], str));

                if (elementMass) {

                    massList[last[i]] = elementMass;

                } else {

                    massList[last[i]] = 0;

                }

            }

            return massList;

        }

        //"is in" checks if array contains element
        function isin(element, array) {

            var output = false;

            for (var i = 0; i <= array.length; i++) {

                if (element == array[i]) {

                    output = true;

                }

            }

            return output;

        }

        //takes a list of element masses and the total mass of the formula, and returns a string formatted and ready to display, containing the mass percent of each element
        function massPercent(_massList, total) {

            var str = '';

            var spaces = ' ';

            var row = 0;

            var nl = 0

            for (var i = 0; i <= _massList.length; i++) {

                if (_massList[i]) {

                    row += 1;

                    for (var n = 0; n < 13 - name[i].length; n++) {

                        spaces += ' ';

                    }

                    str += name[i] + ': ' + ((_massList[i] / total) * 100).toPrecision(3) + ' %' + spaces + ' ';

                    spaces = ' ';

                    if (row == 5) {

                        str += '\n';

                        row = 0;

                        nl += 1;

                    }

                }

            }

            return str;

        }


        //returns the sum of all mass in a mass list
        function calcMass(_massList) {

            var elementMass = 0;

            for (var i = 1; i <= 118; i++) {

                elementMass += _massList[i];

            }

            return elementMass;

        }

        /*
        ***********************************************************
        ***********************************************************
        INPUT VALIDATION
        ***********************************************************
        ***********************************************************
        */

        //returns true only if paramater is a valid molecular formula
        function validate(str) {

            //remove whitespace

            str = str.replace(/ /g, '');



            //Regect a string with empty parathisis: ()

            if (str.match(/\(\)/g)) {

                return false;

            }

            //A valid molecular formula can not have a co-efficant after an open perenthisis, no numbers after open parenthisis

            if (str.match(/\([0-9]/g)) {

                return false;

            }



            //A valid molecular formula can not begin with a number

            if (str[0] && str[0].match(/[0-9]/g)) {

                return false;

            }



            //if the nested parenthisis are correct and the string is not null:

            if (nesting(str) && str) {



                //remove numbers and parenthisis

                str = str.replace(/[0-9\(\) ]/g, '');



                var regex = new RegExp();



                //All valid element symbols are removed

                //a valid input will end up as a blank string



                //Itterate threw every element symbol.

                for (var i = 1; i <= 118; i++) {



                    //We skip the single letter elements first so that we do not remove a partial symbol

                    if (!isin(i, last)) { //the is-in function is used to skip over the single letter elements

                        regex = RegExp(symbols[i], 'g');

                        str = str.replace(regex, '');

                    }

                }



                //we now remove the rest of the symbols

                for (var i = 0; i <= 14; i++) {

                    regex = RegExp(symbols[last[i]], 'g');

                    str = str.replace(regex, '');

                }



                //if we are left with nothing, the input was valid

                return (str == '');

            } else {

                return false;

            }

        }

        //returns true if the parentetical delemeters math
        function nesting(str) {

            var nesting = 0;

            var c;

            for (var i = 0; i < str.length; ++i) {

                c = str.charAt(i);

                switch (c) {

                    case '(':

                        nesting += 1;

                        break;

                    case ')':

                        nesting -= 1;

                        break;

                }

                if (nesting < 0) {

                    return false;

                }

            }

            return (nesting == 0);

        }

        //one last layer of santization
        function safeEval(str) {
            str = str.replace(/[^0-9\+()\*\. ]/g, "");
            try {
                str = eval(str)
            }
            catch (err) {
                str = '';

            }
            return str;
        }
        /*
        ***********************************************************
        ***********************************************************
        INPUT STRING MANIPULATION
        ***********************************************************
        ***********************************************************
        */
        //these functions turn the molecular formula into a math statement

        //appends a '+' to the begining of each element symbol, NaCl(H2O)2 becomes +Na+Cl2(+H2+O)2
        function addPlus(str) {

            for (var i = 1; i <= 118; i++) {

                var regex = new RegExp(symbols[i], 'g');

                str = str.replace(regex, '+' + symbols[i]);

            }

            str = str.replace(/\++/g, "+");

            return str;

        }

        //+Na+Cl2(+H2+O)2 becomes +Na+Cl*2+(+H*2+O)*2
        function math(str) {

            str = str.replace(/\(/g, "+(");
            str = str.replace(/(\d+)/g, "*$1\ ");

            return str;
        }

        //Isolates the mass of a single element and forms a math statement
        //+Na+Cl*2+(+H*2+O)*2 where element = 1 becomes +0+0*2+(+1.0079*2+0)*2
        function isolate(element, str) {
            var regex = new RegExp(symbols[element], 'g');
            str = str.replace(regex, mass[element]);
            str = str.replace(/[a-z]/g, '');
            return str.replace(/[^0-9\+()\*\. ]/g, "0");
        }



        /*
        ***********************************************************
        ***********************************************************
        FORMATTING
        ***********************************************************
        ***********************************************************
        */
        //takes an element name, outputs it's symbol
        function replaceName(str) {

            for (var i = 1; i <= 118; i++) {
                var regex = new RegExp(name[i], 'g');
                str = str.replace(regex, symbols[i]);
            }

            for (var i = 1; i <= 118; i++) {
                var regex = new RegExp(name[i].toLowerCase(), 'g');
                str = str.replace(regex, symbols[i]);
            }

            return str;
        }

        //returns a sting with numbers replaced with thier subscript counterparts
        function subscript(str) {
            str = str.replace(/0/g, "₀");
            str = str.replace(/1/g, "₁");
            str = str.replace(/2/g, "₂");
            str = str.replace(/3/g, "₃");
            str = str.replace(/4/g, "₄");
            str = str.replace(/5/g, "₅");
            str = str.replace(/6/g, "₆");
            str = str.replace(/7/g, "₇");
            str = str.replace(/8/g, "₈");
            str = str.replace(/9/g, "₉");
            return str;
        }

        function addBr(str) {
            if (str) {
                str = str.match(/.{1,10}/g).join("\n");
            }
            return str;
        }

        //takes element symbol and returns an element name
        function element(str) {
            str = str.replace(/ /g, '');
            for (var i = 1; i <= 118; i++) {
                if (str == symbols[i]) {
                    return name[i];
                }
            }
            return str;
        }

        //resets the size of highlighted element symbols on the table
        function resetSize() {
            for (var i = 1; i <= 118; i++) {
                try {
                    document.getElementById(name[i]).style.fontSize = "100%";
                    document.getElementById(name[i]).style.color = "";
                }
                catch (err) {

                }

            }
        }

/*
***********************************************************
***********************************************************
EVENT HANDLILG
***********************************************************
***********************************************************
*/

        //EVALUATE button
        // Retrieve the button and register our event handler. 
        var evalButton = document.getElementById("evalButton");
        evalButton.addEventListener("click", buttonClickHandler, false);

        function buttonClickHandler(event) {
            var formula = document.getElementById("formulaInput").value;
            if (!evaluate(formula)) {
                document.getElementById("right-header").innerText = "Element or Formula\nnot Recognized.";
                document.getElementById("hide").style.display = "none";
            }
        }
        //Input form "onkeyup"
        var nameInput = document.getElementById("formulaInput");

        nameInput.onkeyup = function keyup() {
            var formula = document.getElementById("formulaInput").value;

            if (!validate(replaceName(formula)) && formula) {
                document.getElementById("under").innerText = "Element or Formula not Recognized.";
            }
            else {
                document.getElementById("under").innerText = "";
                evaluate(formula);
            }

            //saves the current state
            var appData = Windows.Storage.ApplicationData.current;
            var roamingSettings = appData.roamingSettings;
            roamingSettings.values["formula"] = formula.value;
        }


 

        function evaluate(formula) {
            if (validate(replaceName(formula))) {
                formula = formula.replace(/ /g, '');//remove whitespace
                formula = replaceName(formula);//replace any element names with symbol

                document.getElementById("wikiButton").innerText = "en.Wikipedia.com/wiki/Special:Search/" + element(formula);//set the proper wikipedia link for the current formula
                document.getElementById("hide").style.display = "block";//unhide the hidden text
                document.getElementById("under").innerText = "";//the text under the input becomes blank
                
                resetSize();//reset the size f the higlighted element symbols on the table

                var right_header = formula;
                if (right_header != element(right_header)) {//if the header is a single element

                    document.getElementById(element(right_header)).style.fontSize = "150%";
                    document.getElementById(element(right_header)).style.color = "red";

                    right_header = element(right_header) + ' [' + right_header + ']';//make the right header the element name, followed by the symbool, in brackets

                }
                else {
                    if (right_header != replaceName(right_header)) {//and vice versa

                        document.getElementById(right_header).style.fontSize = "150%";
                        document.getElementById(right_header).style.color = "red";

                        right_header = right_header + ' [' + replaceName(right_header) + ']';
                    }
                }

                document.getElementById("right-header").innerText = subscript(right_header);//make numbers subscriot

                formula = addPlus(formula);//H2O becomes +H2+O
                formula = math(formula);//H20 becomes +H*2+O

                var molicule = massList(formula);//molicule is a list of the molar mass of each element in the foumula

                var molar_mass = calcMass(molicule);//molar mass is the sum of all mass in the list

                document.getElementById("molar_mass").innerText = molar_mass.toPrecision(5) + " grams / mole"

                document.getElementById("mass_percent").innerText = massPercent(molicule, molar_mass);
                return true;
            }
            return false;
        }

        //WIKIPEDIA BUTTON AND PERIODIC TABLE
        // Retrieve the button and register our event handler. 
        var wikiButton = document.getElementById("wikiButton");
        wikiButton.addEventListener("click", wikipedia_link, false);

        var showtable = document.getElementById("showtable");
        showtable.addEventListener("click", show_table, false);

        function wikipedia_link(event) {
            var formula = document.getElementById("nameInput").value;

            formula = replaceName(formula);

            var search = element(formula);
            var url = new Windows.Foundation.Uri("http://www.wikipedia.com/wiki/Special:Search/" + search);
            Windows.System.Launcher.launchUriAsync(url);
        }

        function show_table(event) {
            if (!table) {
                document.getElementById("periodic-table").style.display = "block";
                table = true;
                document.getElementById("showtable").innerText = "Hide ";

            }
            else {
                document.getElementById("periodic-table").style.display = "none";
                table = false;
                document.getElementById("showtable").innerText = "Show Periodic Table ";
            }
        }

        

        };
    

    app.start();
})();


