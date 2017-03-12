Meteor.startup(function(){
    Meteor.autorun(function(){
        var hashPath  = window.location.hash;
        if(!Meteor.userId() && hashPath != '#!/login' && hashPath !== '#!/register') {
            routie.navigate('!/login');
        }
    })
})