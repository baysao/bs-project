//Subtitles Config
var btnSubtitles = document.getElementById("btn-subtitles");
var subtitlesConfig = document.getElementById("subtitles-config");

btnSubtitles.addEventListener('click', function(){

	var className=subtitlesConfig.getAttribute("class")
	if(className=="subtitles-config"){
		subtitlesConfig.className="subtitles-config show";
		btnSubtitles.classList.remove('has-tooltip');
        btnSubtitles.classList.add('on');
	}else {
		subtitlesConfig.className="subtitles-config";
		btnSubtitles.classList.add('has-tooltip');
        btnSubtitles.classList.remove('on');
        
        //remove language option
        removeOptionLanguage(); 

	}

    if (checkOnOff.checked == true) {
        if(btnSubtitles) {
            btnSubtitles.className += ' on';
        }
        console.log('on');
    }else {
        console.log('off');
    }

});

//check On/off subtitles
var checkOnOff = document.getElementById("sc-toggle-1");

//call language option
var btnOptionLanguge = document.getElementById("btn-option-languge"),
    wrapperConfig = document.getElementById("wrapper-config"),
    optionLanguage = document.getElementById("option-language"),

    subtitlesConfig = document.getElementById("subtitles-config"),
    btnBackSubtitles = document.getElementById("btn-back-subtitles"),

    optionSubtitles = document.getElementById("option-subtitles"),
    btnRemoveOption = document.getElementById("btn-remove-option"),
    btnOptionSubtitles = document.getElementById("btn-option-subtitles"),

    optionField = document.getElementById("option-field"),
    btnOptionField = document.getElementById("btn-option-field"),
    btnRemoveOptionField = document.getElementById("btn-remove-option-field");

function addOptionLanguage() {
    
        subtitlesConfig.setAttribute("style", "height: 120px;");  
    
        wrapperConfig.setAttribute("style", "margin-left: -200px;");
    
    
    optionLanguage.setAttribute("style", "display: table;");
}

function removeOptionLanguage() {
    subtitlesConfig.setAttribute("style", "height: 100px;");
    wrapperConfig.setAttribute("style", "margin-left: 0;");
    setTimeout(function(){ 
        optionLanguage.setAttribute("style", "display: none;");
     }, 300);
}

//add language option
btnOptionLanguge.addEventListener('click', function(){
    addOptionLanguage();
});

//remove language option
btnBackSubtitles.addEventListener('click', function(){
    removeOptionLanguage(); 
    console.log("hello");
});

function addOptionSubtitles() {
    var newStyle = 'height: 180px;' + 'width: 280px;' + 'left: -178px;';
    if( typeof( subtitlesConfig.style.cssText ) != 'undefined' ) {
        subtitlesConfig.style.cssText = newStyle; 
    } else {
        subtitlesConfig.setAttribute('style',newStyle);
    }

    wrapperConfig.setAttribute("style", "margin-left: -200px;");
    optionSubtitles.setAttribute("style", "display: table;");
}

//add option subtitles
btnOptionSubtitles.addEventListener('click', function(){
    addOptionSubtitles();
});

//remove option subtitles
btnRemoveOption.addEventListener('click', function(){
    removeOptionLanguage();
});

function addOptionField() {
    var newStyle = 'height: 180px;' + 'width: 200px;' + 'left: -98px;';
    if( typeof( subtitlesConfig.style.cssText ) != 'undefined' ) {
        subtitlesConfig.style.cssText = newStyle; 
    } else {
        subtitlesConfig.setAttribute('style',newStyle);
    }

    wrapperConfig.setAttribute("style", "margin-left: -480px;");
    optionField.setAttribute("style", "display: table;");
}

//add option subtitles
btnOptionField.addEventListener('click', function(){
    addOptionField();
});

//remove option field
btnRemoveOptionField.addEventListener('click', function(){
    addOptionSubtitles();
});