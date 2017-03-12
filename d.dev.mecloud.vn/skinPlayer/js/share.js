//playlist
var btnShareMep = document.getElementById("btn-share-mep"),
    btnCloseShare = document.getElementById("btn-close-share"),
    btnEmbedShare = document.getElementById("btn-embed-share"),
    btnBackShare = document.getElementById("btn-back-share"),
    cbTopRight = document.getElementById("cb-top-right"),
    wrapperControls = document.getElementsByClassName("wrapper-controls"),
    networkShareMep = document.getElementsByClassName("network-share-mep"),
    embedShareMep = document.getElementsByClassName("embed-share-mep");
    

btnShareMep.addEventListener('click', function(){
    this.classList.add('hide');
    wrapperControls[0].classList.add('hide');
    networkShareMep[0].classList.add('show');
    btnCloseShare.classList.add('show');
    cbTopRight.classList.add('active');
});

btnCloseShare.addEventListener('click', function(){
    btnShareMep.classList.remove('hide');
    wrapperControls[0].classList.remove('hide');
    networkShareMep[0].classList.remove('show');
    btnCloseShare.classList.remove('show');
    embedShareMep[0].setAttribute('style','top:-100%;');
    cbTopRight.classList.remove('active');


    
    setTimeout(function(){ 
        embedShareMep[0].setAttribute('style','left:100%;top:-100%;');
    }, 300);
    
    setTimeout(function(){ 
        networkShareMep[0].setAttribute('style','');
        embedShareMep[0].setAttribute('style','');
        embedShareMep[0].classList.remove('show');
    }, 600);


    
    
});

btnEmbedShare.addEventListener('click', function(){
    networkShareMep[0].setAttribute('style','left:-100%;')
    embedShareMep[0].classList.add('show');
});

btnBackShare.addEventListener('click', function(){
    networkShareMep[0].setAttribute('style','')
    embedShareMep[0].classList.remove('show');
});