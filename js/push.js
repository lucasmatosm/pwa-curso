(function(){
    'use strict';
    var swPush;
    var publicKey = ''

    if ('serviceWorker' in navigator && 'PushManager' in window){
        window.addEventListener('load', function(){
            navigator.serviceWorker.register('/js/pwa-news-push.js')
            .then(function(swRegister){
                swPush = swRegister;
                console.log("Service worker push: Register");
                getSubscription();
            })
        })
    }   
    
    function getSubscription(){
        if(swPush){
            swPush.pushManager.getSubscription()
            .then(function(subscription){
                if(subscription){
                    console.log('User is subscripted')
                }else{
                    console.log('User is not subscripted')
                    registerUser();
                }
            })
        }
    }
    function registerUser(){
        swPush.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey:urlB64ToUint8Array(publicKey)
        }).then(function(subscription){
            console.log(JSON.stringify(subscription));
        })
    }
    function urlB64ToUint8Array(){

    }

})();