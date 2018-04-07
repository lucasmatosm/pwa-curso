(function(){
    'use strict';
    self.addEventListener('push', function(event){
        var options = {
            body : 'Não me deixe',
            icon: '../favicon_package_v0.16/android-chrome-192x192.png',
            badge: '../favicon_package_v0.16/android-chrome-192x192.png',
        };
        event.waitUntil(self.registration.showNotification("EI VOLTE AQUI!", options ));
    })
});