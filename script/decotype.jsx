#targetengine "sewLetterSpriteion"
#target "InDesign"
/*
 *
 *	Decotype
 *	by: ori livni
 *
 *	version: 0.1
 *
 */


// font mandatory by Yanek Iontef -> http://www.fontef.com
var FONT_MANDATORY_29 = {
	"id"     : "Mandatory 29",
	"name"   : "Mandatory",
	"styles" : [
			"29",
			"29 Shaded"
		],
	"font": {"2010": {"name": "hyphen1", "width": "398"}, "2013": {"name": "endash", "width": "485"}, "2014": {"name": "emdash", "width": "672"}, "2018": {"name": "quoteleft", "width": "181"}, "2019": {"name": "quoteright", "width": "181"}, "2020": {"name": "dagger", "width": "266"}, "2021": {"name": "daggerdbl", "width": "266"}, "2022": {"name": "bullet", "width": "228"}, "2026": {"name": "ellipsis", "width": "593"}, "2030": {"name": "perthousand", "width": "804"}, "2039": {"name": "guilsinglleft", "width": "229"}, "2122": {"name": "trademark", "width": "400"}, "2212": {"name": "minus", "width": "398"}, "0020": {"name": "space", "width": "132"}, "0021": {"name": "exclam", "width": "220"}, "0022": {"name": "quotedbl", "width": "274"}, "0023": {"name": "numbersign", "width": "477"}, "0024": {"name": "dollar", "width": "361"}, "0025": {"name": "percent", "width": "554"}, "0026": {"name": "ampersand", "width": "466"}, "0027": {"name": "quotesingle", "width": "127"}, "0028": {"name": "parenleft", "width": "242"}, "0029": {"name": "parenright", "width": "244"}, "002A": {"name": "asterisk", "width": "304"}, "002B": {"name": "plus", "width": "418"}, "002C": {"name": "comma", "width": "191"}, "002D": {"name": "hyphen", "width": "290"}, "002E": {"name": "period", "width": "197"}, "002F": {"name": "slash", "width": "286"}, "0030": {"name": "zero", "width": "376"}, "0031": {"name": "one", "width": "294"}, "0032": {"name": "two", "width": "346"}, "0033": {"name": "three", "width": "359"}, "0034": {"name": "four", "width": "354"}, "0035": {"name": "five", "width": "359"}, "0036": {"name": "six", "width": "368"}, "0037": {"name": "seven", "width": "337"}, "0038": {"name": "eight", "width": "373"}, "0039": {"name": "nine", "width": "373"}, "003A": {"name": "colon", "width": "197"}, "003B": {"name": "semicolon", "width": "191"}, "003C": {"name": "less", "width": "378"}, "003D": {"name": "equal", "width": "403"}, "003E": {"name": "greater", "width": "377"}, "003F": {"name": "question", "width": "338"}, "0040": {"name": "at", "width": "535"}, "0041": {"name": "A", "width": "395"}, "0042": {"name": "B", "width": "372"}, "0043": {"name": "C", "width": "360"}, "0044": {"name": "D", "width": "375"}, "0045": {"name": "E", "width": "351"}, "0046": {"name": "F", "width": "343"}, "0047": {"name": "G", "width": "364"}, "0048": {"name": "H", "width": "381"}, "0049": {"name": "I", "width": "193"}, "004A": {"name": "J", "width": "358"}, "004B": {"name": "K", "width": "351"}, "004C": {"name": "L", "width": "342"}, "004D": {"name": "M", "width": "474"}, "004E": {"name": "N", "width": "380"}, "004F": {"name": "O", "width": "369"}, "0050": {"name": "P", "width": "364"}, "0051": {"name": "Q", "width": "369"}, "0052": {"name": "R", "width": "376"}, "0053": {"name": "S", "width": "348"}, "0054": {"name": "T", "width": "325"}, "0055": {"name": "U", "width": "377"}, "0056": {"name": "V", "width": "396"}, "0057": {"name": "W", "width": "566"}, "0058": {"name": "X", "width": "347"}, "0059": {"name": "Y", "width": "334"}, "005A": {"name": "Z", "width": "338"}, "005B": {"name": "bracketleft", "width": "279"}, "005C": {"name": "backslash", "width": "344"}, "005D": {"name": "bracketright", "width": "278"}, "005E": {"name": "asciicircum", "width": "333"}, "005F": {"name": "underscore", "width": "546"}, "0060": {"name": "grave", "width": "250"}, "0061": {"name": "a", "width": "395"}, "0062": {"name": "b", "width": "372"}, "0063": {"name": "c", "width": "360"}, "0064": {"name": "d", "width": "375"}, "0065": {"name": "e", "width": "351"}, "0066": {"name": "f", "width": "343"}, "0067": {"name": "g", "width": "364"}, "0068": {"name": "h", "width": "381"}, "0069": {"name": "i", "width": "193"}, "006A": {"name": "j", "width": "358"}, "006B": {"name": "k", "width": "351"}, "006C": {"name": "l", "width": "342"}, "006D": {"name": "m", "width": "474"}, "006E": {"name": "n", "width": "380"}, "006F": {"name": "o", "width": "369"}, "0070": {"name": "p", "width": "364"}, "0071": {"name": "q", "width": "369"}, "0072": {"name": "r", "width": "376"}, "0073": {"name": "s", "width": "348"}, "0074": {"name": "t", "width": "325"}, "0075": {"name": "u", "width": "377"}, "0076": {"name": "v", "width": "396"}, "0077": {"name": "w", "width": "566"}, "0078": {"name": "x", "width": "347"}, "0079": {"name": "y", "width": "334"}, "007A": {"name": "z", "width": "338"}, "007B": {"name": "braceleft", "width": "318"}, "007D": {"name": "braceright", "width": "318"}, "20AC": {"name": "Euro", "width": "471"}, "00A0": {"name": "nbspace", "width": "875"}, "00A1": {"name": "exclamdown", "width": "221"}, "00A2": {"name": "cent", "width": "360"}, "00A3": {"name": "sterling", "width": "362"}, "00A4": {"name": "currency", "width": "605"}, "00A5": {"name": "yen", "width": "369"}, "00A6": {"name": "brokenbar", "width": "181"}, "00A7": {"name": "section", "width": "348"}, "00A8": {"name": "dieresis", "width": "454"}, "00A9": {"name": "copyright", "width": "610"}, "00AA": {"name": "ordfeminine", "width": "201"}, "00AB": {"name": "guillemotleft", "width": "377"}, "00AC": {"name": "logicalnot", "width": "657"}, "00AE": {"name": "registered", "width": "610"}, "00AF": {"name": "macron", "width": "252"}, "00B0": {"name": "degree", "width": "299"}, "00B1": {"name": "plusminus", "width": "426"}, "00B2": {"name": "twosuperior", "width": "223"}, "00B3": {"name": "threesuperior", "width": "224"}, "00B4": {"name": "acute", "width": "387"}, "03BC": {"name": "mu", "width": "733"}, "00B6": {"name": "paragraph", "width": "384"}, "00B7": {"name": "periodcentered", "width": "188"}, "00B8": {"name": "cedilla", "width": "190"}, "00B9": {"name": "onesuperior", "width": "163"}, "00BA": {"name": "ordmasculine", "width": "272"}, "00BB": {"name": "guillemotright", "width": "377"}, "00BC": {"name": "onequarter", "width": "457"}, "00BD": {"name": "onehalf", "width": "451"}, "00BE": {"name": "threequarters", "width": "507"}, "00BF": {"name": "questiondown", "width": "337"}, "00C0": {"name": "Agrave", "width": "395"}, "00C1": {"name": "Aacute", "width": "395"}, "00C2": {"name": "Acircumflex", "width": "395"}, "00C3": {"name": "Atilde", "width": "395"}, "00C4": {"name": "Adieresis", "width": "395"}, "00C5": {"name": "Aring", "width": "395"}, "00C6": {"name": "AE", "width": "459"}, "00C7": {"name": "Ccedilla", "width": "360"}, "00C8": {"name": "Egrave", "width": "351"}, "00C9": {"name": "Eacute", "width": "351"}, "00CA": {"name": "Ecircumflex", "width": "351"}, "00CB": {"name": "Edieresis", "width": "351"}, "00CC": {"name": "Igrave", "width": "193"}, "00CD": {"name": "Iacute", "width": "193"}, "00CE": {"name": "Icircumflex", "width": "193"}, "00CF": {"name": "Idieresis", "width": "193"}, "00D0": {"name": "Eth", "width": "379"}, "00D1": {"name": "Ntilde", "width": "381"}, "00D2": {"name": "Ograve", "width": "369"}, "00D3": {"name": "Oacute", "width": "369"}, "00D4": {"name": "Ocircumflex", "width": "369"}, "00D5": {"name": "Otilde", "width": "369"}, "00D6": {"name": "Odieresis", "width": "369"}, "00D7": {"name": "multiply", "width": "420"}, "00D8": {"name": "Oslash", "width": "380"}, "00D9": {"name": "Ugrave", "width": "377"}, "00DA": {"name": "Uacute", "width": "377"}, "00DB": {"name": "Ucircumflex", "width": "377"}, "00DC": {"name": "Udieresis", "width": "377"}, "00DD": {"name": "Yacute", "width": "334"}, "00DE": {"name": "Thorn", "width": "364"}, "00DF": {"name": "germandbls", "width": "375"}, "00E0": {"name": "agrave", "width": "395"}, "00E1": {"name": "aacute", "width": "395"}, "00E2": {"name": "acircumflex", "width": "395"}, "00E3": {"name": "atilde", "width": "395"}, "00E4": {"name": "adieresis", "width": "395"}, "00E5": {"name": "aring", "width": "395"}, "00E6": {"name": "ae", "width": "459"}, "00E7": {"name": "ccedilla", "width": "360"}, "00E8": {"name": "egrave", "width": "351"}, "00E9": {"name": "eacute", "width": "351"}, "00EA": {"name": "ecircumflex", "width": "351"}, "00EB": {"name": "edieresis", "width": "351"}, "00EC": {"name": "igrave", "width": "193"}, "00ED": {"name": "iacute", "width": "193"}, "00EE": {"name": "icircumflex", "width": "193"}, "00EF": {"name": "idieresis", "width": "193"}, "00F0": {"name": "eth", "width": "379"}, "00F1": {"name": "ntilde", "width": "381"}, "00F2": {"name": "ograve", "width": "369"}, "00F3": {"name": "oacute", "width": "369"}, "00F4": {"name": "ocircumflex", "width": "369"}, "00F5": {"name": "otilde", "width": "369"}, "00F6": {"name": "odieresis", "width": "369"}, "00F7": {"name": "divide", "width": "430"}, "00F8": {"name": "oslash", "width": "380"}, "00F9": {"name": "ugrave", "width": "377"}, "00FA": {"name": "uacute", "width": "377"}, "00FB": {"name": "ucircumflex", "width": "377"}, "00FC": {"name": "udieresis", "width": "377"}, "00FD": {"name": "yacute", "width": "334"}, "00FE": {"name": "thorn", "width": "364"}, "00FF": {"name": "ydieresis", "width": "334"}, "0131": {"name": "dotlessi", "width": "193"}, "0141": {"name": "Lslash", "width": "356"}, "0142": {"name": "lslash", "width": "356"}, "None": {"name": "lamedholamdageshhebrew", "width": "330"}, "0153": {"name": "oe", "width": "464"}, "0160": {"name": "Scaron", "width": "348"}, "0161": {"name": "scaron", "width": "348"}, "0178": {"name": "Ydieresis", "width": "334"}, "017D": {"name": "Zcaron", "width": "338"}, "017E": {"name": "zcaron", "width": "338"}, "0192": {"name": "florin", "width": "358"}, "02C6": {"name": "circumflex", "width": "292"}, "02C7": {"name": "caron", "width": "306"}, "02D8": {"name": "breve", "width": "273"}, "02D9": {"name": "dotaccent", "width": "139"}, "02DA": {"name": "ring", "width": "235"}, "02DB": {"name": "ogonek", "width": "190"}, "02DC": {"name": "tilde", "width": "254"}, "02DD": {"name": "hungarumlaut", "width": "336"}, "05B0": {"name": "shevahebrew", "width": "0"}, "05B1": {"name": "hatafsegolhebrew", "width": "0"}, "05B2": {"name": "hatafpatahhebrew", "width": "0"}, "05B3": {"name": "hatafqamatshebrew", "width": "0"}, "05B4": {"name": "hiriqhebrew", "width": "0"}, "05B5": {"name": "tserehebrew", "width": "0"}, "05B6": {"name": "segolhebrew", "width": "0"}, "05B7": {"name": "patahhebrew", "width": "0"}, "05B8": {"name": "qamatshebrew", "width": "0"}, "05B9": {"name": "holamhebrew", "width": "0"}, "05BB": {"name": "qubutshebrew", "width": "0"}, "05BC": {"name": "dageshhebrew", "width": "0"}, "05BD": {"name": "meteg", "width": "875"}, "05BE": {"name": "maqaf", "width": "292"}, "05BF": {"name": "rafehebrew", "width": "0"}, "05C1": {"name": "shindot", "width": "0"}, "05C2": {"name": "sindot", "width": "0"}, "05D0": {"name": "alefhebrew", "width": "389"}, "05D1": {"name": "bethebrew", "width": "384"}, "05D2": {"name": "gimelhebrew", "width": "308"}, "05D3": {"name": "dalethebrew", "width": "357"}, "05D4": {"name": "hehebrew", "width": "374"}, "05D5": {"name": "vavhebrew", "width": "210"}, "05D6": {"name": "zayinhebrew", "width": "257"}, "05D7": {"name": "hethebrew", "width": "374"}, "05D8": {"name": "tethebrew", "width": "418"}, "05D9": {"name": "yodhebrew", "width": "205"}, "05DA": {"name": "finalkafhebrew", "width": "328"}, "05DB": {"name": "kafhebrew", "width": "358"}, "05DC": {"name": "lamedhebrew", "width": "327"}, "05DD": {"name": "finalmemhebrew", "width": "374"}, "05DE": {"name": "memhebrew", "width": "400"}, "05DF": {"name": "finalnunhebrew", "width": "198"}, "05E0": {"name": "nunhebrew", "width": "222"}, "05E1": {"name": "samekhhebrew", "width": "391"}, "05E2": {"name": "ayinhebrew", "width": "394"}, "05E3": {"name": "finalpehebrew", "width": "382"}, "05E4": {"name": "pehebrew", "width": "395"}, "05E5": {"name": "finaltsadihebrew", "width": "373"}, "05E6": {"name": "tsadihebrew", "width": "393"}, "05E7": {"name": "qofhebrew", "width": "368"}, "05E8": {"name": "reshhebrew", "width": "341"}, "05E9": {"name": "shinhebrew", "width": "578"}, "05EA": {"name": "tavhebrew", "width": "396"}, "201A": {"name": "quotesinglbase", "width": "181"}, "201C": {"name": "quotedblleft", "width": "353"}, "201D": {"name": "quotedblright", "width": "354"}, "201E": {"name": "quotedblbase", "width": "354"}, "203A": {"name": "guilsinglright", "width": "229"}, "05F3": {"name": "gereshhebrew", "width": "180"}, "05F4": {"name": "gershayimhebrew", "width": "352"}, "20AA": {"name": "sheqelhebrew", "width": "695"}, "FB01": {"name": "fi", "width": "472"}, "FB02": {"name": "fl", "width": "619"}, "FB1F": {"name": "yodyodpatahhebrew", "width": "733"}, "FB2A": {"name": "shinshindothebrew", "width": "578"}, "FB2B": {"name": "shinsindothebrew", "width": "578"}, "FB2C": {"name": "shindageshshindothebrew", "width": "578"}, "FB2D": {"name": "shindageshsindothebrew", "width": "578"}, "FB31": {"name": "betdageshhebrew", "width": "384"}, "FB32": {"name": "gimeldageshhebrew", "width": "301"}, "FB33": {"name": "daletdageshhebrew", "width": "380"}, "FB34": {"name": "hedageshhebrew", "width": "374"}, "FB35": {"name": "vavdageshhebrew", "width": "277"}, "FB36": {"name": "zayindageshhebrew", "width": "319"}, "FB38": {"name": "tetdageshhebrew", "width": "418"}, "FB39": {"name": "yoddageshhebrew", "width": "208"}, "FB3A": {"name": "finalkafdageshhebrew", "width": "338"}, "FB3B": {"name": "kafdageshhebrew", "width": "358"}, "FB3C": {"name": "lameddageshhebrew", "width": "327"}, "FB3E": {"name": "memdageshhebrew", "width": "400"}, "FB40": {"name": "nundageshhebrew", "width": "227"}, "FB41": {"name": "samekhdageshhebrew", "width": "391"}, "FB44": {"name": "pedageshhebrew", "width": "395"}, "FB46": {"name": "tsadidageshhebrew", "width": "393"}, "FB47": {"name": "qofdageshhebrew", "width": "368"}, "FB49": {"name": "shindageshhebrew", "width": "578"}, "FB4A": {"name": "tavdageshhebrew", "width": "396"}, "FB4B": {"name": "vavholamhebrew", "width": "210"}, "0152": {"name": "OE", "width": "464"}, "007E": {"name": "asciitilde", "width": "564"}, "007C": {"name": "bar", "width": "180"}, "00AD": {"name": "uni00AD", "width": "394"} }
};

var FONTS = [
	FONT_MANDATORY_29
];




(function() {
	'use strict'; // not supported in adobe, but helps with jslint

	// consts
	var WIN_TITLE               = 'Decotype - v0.1';
	var DONT_DOUBLE_CHARS       = [' ', '\r', '\n', '\t'];

	//vars
	var activeDoc,
		colors, // swatches of the active document
		fonts, // array of the supported avalable fonts in the system
		activeFont, // the active font
		dialog = {};





	// Functions

	// DIALOG

	// creating the dialog object and window
	function createDialog() {
		var d = {
				groups          : [],
				dropdowns       : [] },
			i,
			group;


		// init window
		d.win = new Window(
			"palette",
			WIN_TITLE,
			undefined, {
				resizeable: false
			}
		);

		d.win.alignment   = "left";
		d.win.orientation = "column";
		d.win.spacing     = 0;
		d.win.margins     = 0;


		// create group for font picker
		d.fontPickerGroup = d.win.add( "group" );


		// create groups for dropdowns
		d.dropdownsGroup = d.win.add( "group" );

		// create group for convert button
		group = d.win.add( "group" );
		d.groups.push( group );

		// add the Refresh buttons and append to it events
		d.RefreshBtn = group.add( "button", undefined, "Refresh" );
		d.RefreshBtn.onClick = dialogRefreshBtnOnClick;

		// add the convert buttons and append to it events
		d.convertBtn = group.add( "button", undefined, "Convert" );
		d.convertBtn.onClick = dialogConvertBtnOnClick;


		// closing dialog event
		d.win.onClose = quit;


		return d;
	}



	function createDialogFontPicker( d ) {
		// TODO
	}


	// create dropdowns to given dialogs on the first group
	// d => dialog
	function createDialogDropdowns( doc, d, font, colors ) {

		// if no active document
		if (doc == null) {
			return;
		}


		var i, iLen,
			group,
			dropdown;


		group             = d.dropdownsGroup;
		group.alignment   = 'center';
		group.margins     = 5;
		group.orientation = 'column';


		iLen = font['styles'].length;

		for (i=0; i < iLen; i++) {
			dropdown           = group.add( 'dropdownlist', undefined, colors );
			dropdown.selection = 0;
			dropdown.margins   = 0;

			d.dropdowns.push( dropdown );
		}
	}



	function removeDialogDropdowns( d ) {
		var	i, iLen,
			dropdown,
			group = d.dropdownsGroup;

		iLen  = d.dropdowns.length;

		for (i=0; i < iLen; i++) {
			group.remove( d.dropdowns.shift() );
		}
	}



	// EVENTS

	function dialogRefreshBtnOnClick() {
		// set the correct active doc

		if (activeDoc !== app.activeDocument) {
			removeDialogDropdowns( dialog );

			activeDoc = app.activeDocument;

			// checks if activeDoc isn't null
			if ( activeDoc != null ) {
				colors = getColors( doc ); // colors of document swatches
				createDialogDropdowns( activeDoc, dialog, activeFont, colors );
			}
		}
	}



	function dialogConvertBtnOnClick() {
		// convert to types
		if ( checkIfPosibbleToConvert() ) {
			alert ("There is no selection");
		} else  {
			app.doScript(
				convertTextBinder,
				ScriptLanguage.JAVASCRIPT,
				undefined,
				UndoModes.ENTIRE_SCRIPT,
				"Font Decoration Style"
			);

			// for Test:
			// convertTextBinder();
		}
	}




	// MISC

	// check if supported font is avalable in the system/adobe fonts
	function checkAvalableFonts ( fonts ) {
		var i, iLen,
			j, jLen,
			strFontName, strFontStyle,
			fontIndex,
			returnValue = false,
			_fonts = [];


		iLen =  fonts.length;

		for (i=0; i < iLen; i++) {
			strFontName = fonts [i]["name"];

			jLen =  fonts[i]["styles"].length;

			for (j=0; j < jLen; j++) {
				strFontStyle =  fonts [i]["styles"][j];
				fontIndex = (app.fonts.itemByName ( strFontName + "\t" + strFontStyle )).index;

				if ( ! (fontIndex < 0) ) {
					returnValue = true;
					_fonts.push( fonts[i] );
				}
			}
		}

		if ( returnValue ) {
			return _fonts;
		}

		return false;
	}



	// get the swatch colos of given document
	function getColors( doc ) {
		var colors = [];
		var i, iLen;

		iLen = doc.colors.length;

		for (i=0; i < iLen; i++ ) {
			if ( doc.colors[i].name.length > 0 ) {
				colors.push( doc.colors[i].name );
			}
		}

		return colors;
	}



	// TEXT FUNCTIONS
	function checkIfPosibbleToConvert() {
		if ( app.selection[0].insertionPoints.length < 2 ) {
			alert ("There is no selection");
			return false;
		}
	}



	function convertTextBinder() {
		convertText( activeDoc, dialog, activeFont, colors );
	}



	function getUnicode ( _strCH ) {
		var sUni;

		sUni = ""+_strCH;
		sUni = sUni.charCodeAt(0);
		sUni = sUni.toString (16);
		sUni = sUni.toUpperCase();

		while ( sUni.length < 4 ) {
			sUni = "0" + sUni;
		}

		return sUni;
	}



	function isUnicodeHebrew ( _strCH ) {
		var intCH = parseInt("0x" + _strCH);

		if ( intCH >= 1488 && intCH <= 1514 ) return true; // alef - tav
		if ( intCH == 8326 ) return true; // NIS sign
		if ( intCH >= 64298 && intCH <= 64328 ) return true; //letters with nikud

		return false;
	}



	function getKerningValue ( _strCH, kerningMap ) {
		var sUni = getUnicode( _strCH )

		if ( kerningMap[sUni] != null ) {
			return -1 * parseInt ( (kerningMap[sUni])["width"] );
		}

		return 0;
	}



	function convertText( doc, dialog, font, colors ) {
		var i, iLen, j, k,
			aChCount,
			flagSpecialChar,
			flagHebrewChar,
			dontDoubleCharsLen,
			fontStylesLen,
			dropdownIndex,
			dropdownsLength,
			dropdownsColors,
			aCh,
			kerningMap;


		// init vars for the loop
		aCh                = app.selection[0].characters;
		kerningMap         = font['font'];
		aChCount           = aCh.count();
		dontDoubleCharsLen = DONT_DOUBLE_CHARS.length;
		fontStylesLen      = font.styles.length;
		dropdownIndex      = 0;
		dropdownsLength    = dialog.dropdowns.length;
		dropdownsColors    = [];



		// creates an array of colors selected in the dropdown menus
		for (i=0; i < fontStylesLen; i++) {
			for (j=0; j < colors.length; j++) {
				if ( colors[j] ==  dialog.dropdowns[i].selection.text ) {
					dropdownsColors.push( j );
					break;
				}
			}
		}


		// makes the magic
		for (i=aChCount-1; i >= 0; i--) {
			// check for special chars
			flagSpecialChar = false;

			for (j=0; j < dontDoubleCharsLen; j++) {
				if ( aCh.item(i).contents === DONT_DOUBLE_CHARS[j] ) {
					flagSpecialChar = true;
					// break;
				}
			}

			if ( flagSpecialChar ) {
				continue;
			}


			// check for right to left langauge (right now only support Hebrew)
			// check if it's Hebrew word
			flagHebrewChar = isUnicodeHebrew(
				getUnicode( aCh.item(i).contents )
			);


			for (j=0; j < fontStylesLen; j++) {

				// if hebrew char replace the order
				if (flagHebrewChar) {
					k = fontStylesLen - 1 - j;
				} else {
					k = j;
				}

				//duplicates letters
				if ( j !== 0 ) { // if ( j < (fontStylesLen - 1) ) {
					aCh.item(i).insertionPoints.item(1).contents = aCh.item(i).contents; // assign: item(1)
				}

				// apply to font and correct weigth
				aCh.item(i).appliedFont = app.fonts.item( "" + font.name + "\t" + font.styles[k] );


				// change color
				aCh.item(i).fillColor = doc.colors[ dropdownsColors[k] ];


				//kerning
				if ( j > 0 ) {
					// BUG
					aCh.item(i).kerningValue = getKerningValue( aCh.item(i).contents, kerningMap );
				}
			}
		}

		return true;
	}



	// ERRORS

	function errorNoSupportedFontsIstalled() {
		alert( 'Error - There are no supported fonts installed');
		quit();
	}



	// MAIN FUNCTIONS

	function quit () {
		dialog.win.close();
		exit();
	}



	function main() {
		activeDoc = app.activeDocument;

		// check if supported fonts installed
		fonts = checkAvalableFonts( FONTS );

		if (fonts === false) {
			errorNoSupportedFontsIstalled();
		}

		activeFont = fonts[0];

		// create window dialog
		dialog = createDialog();

		// TODO: create a function that gives dropdown for checking font
		// TODO: createDialogFontPicker( dialog );

		if  ( activeDoc != null ) {
			// colors of document swatches
			colors = getColors( activeDoc );

			// adds dropdowns of swatches in the amount of styles
			createDialogDropdowns( activeDoc, dialog, activeFont, colors );
		}


		dialog.win.show();
	}



	(function init () {
		main();
	})();
})();