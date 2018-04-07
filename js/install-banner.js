(function(){
    'use strict';
    var eventInstall;
    var btInstall = $("#bt_install");
    window.addEventListener('beforeinstallprompt', function(event){
        eventInstall = event;
        event.preventDefault();
        btInstall.show();
    });
    btInstall.click(function(){
        if(eventInstall){
            eventInstall.prompt();
            eventInstall.userChoice.then(function(choiceResult){
                if(choiceResult.outcome == "dismissed"){
                    alert("Que pena!")
                }else{
                    alert("você instalou o melhor pwa!")
                }
            })
            eventInstall = null;
            btInstall.hide();
        }
    })
})();