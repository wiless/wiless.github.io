console.log('service.js: Hello from service worker')

// self.addEventListener('activate', async () => {
//     // This will be called only once when the service worker is activated.
//     console.log('service.js: Attempting on activate');


//     try {
//         const options = { userVisibleOnly: true, applicationServerKey: "BEveyLxjdgvClfx_ddbGnFkqdhUcdf8eEX_3KiDST1o6T5_12MhUaDV-rVMNOYorGhph5vCzxNY0G-yvGfrUcPk" }
//         const subscription = await self.registration.pushManager.subscribe(options)
//         console.log(JSON.stringify(subscription))
//     } catch (err) {
//         console.log('Error', err)
//     }

// })

self.addEventListener('push',pushEvent=>{      
    var winclient;
    self.clients.matchAll({type:"all",includeUncontrolled:true})
            .then(clientList=>
                  {
                    console.log("Found these clients ",clientList);
                    var count=0;
                    clientList.forEach(w=>
                        {
                        console.log("About the window ",w);
                        if (w.url=="https://blog.sendildevar.in/apps/viewer") {
                            w.focus();
                            winclient=w;
                            break;
                        }
                        //w.document.getElementById("kind").innerHTML="Found you !! "+count;
                        count++;
                        });
                    //window.document.getElementById("kind").innerHTML="Found you sss..."
                  }
                 );
    if (winclient) {
        console.log("Window=",winclient);        
    }
                                                  
    if (pushEvent.data) {
        console.log('Service Worker :PUSH  event!! ', pushEvent.data.text())
        //showLocalNotification("Message", event.data.text(), self.registration);
        self.registration.showNotification("Title : Message", {body:pushEvent.data.text()});
    } else {
        console.log('Push event but no data')
    }
});


// self.addEventListener('push', function (event) {
//     if (event.data) {
//         console.log('Push event!! ', event.data.text())
//         showLocalNotification("Message", event.data.text(), self.registration);
//     } else {
//         console.log('Push event but no data')
//     }
// })




// const showLocalNotification = (title, body, swRegistration) => {
//     // actions: [{ action: "button", title: "<" }, { action: "right", title: ">" }],
//     self.clients.matchAll({type:"window"}).then(function(clientList) {        
        
//   // do something with your clients list
//          for (var i = 0; i < clientList.length; i++) {
//       var client = clientList[i];
//       if (client.url == '/' && 'focus' in client) {
//         client.focus();
//         break;
//       }
//     }
        
        
// });
    
//     const options = {
//         body: body,
//         // here you can add more properties like icon, image, vibrate, etc.
//     };
//     swRegistration.showNotification(title, options);

// }
