const version="1.7a"
console.log('service.js: Hello from service worker : version ',version);

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

// // On the Service Worker side we have to listen to the message event
// self.addEventListener('message', (event) => {
//   if (event.data && event.data.type === 'MESSAGE_IDENTIFIER') {
//     console.log("Wow someone sent me somthing.. thanks, I will follow-up");
//     // do something
//   }else
//   {
//       console.log("UNKNOWN  thanks, I will follow-up ",event.data,event.data.type);
//   }
// });

// Connection to a broadcast channel
const bc = new BroadcastChannel('counterupdates');

let getVersionPort;
let count = 0;
self.addEventListener("message", event => {
  
//   if (event.data && event.data.type === 'INIT_PORT') {
//     getVersionPort = event.ports[0];
//   }

  if (event.data && event.data.type === 'INCREASE_COUNT') {
//     getVersionPort.postMessage({ payload: ++count });    
    // Also broadcast to other tabs and windows
    console.log("Broadcasting about new submission : ","INCREASE_COUNT");
    bc.postMessage({ count: ++count, type:"SUBMITTED",uid:event.data.uid });
    return;
  }
  
  console.log("UNKNOWN  thanks, I will follow-up ",event.data,event.data.type);
  
});



self.addEventListener('notificationclick', function(event) {
  console.log('[Service Worker] Notification click Received.');
 console.log('[Service Worker] ',event);

  event.notification.close();
  event.waitUntil(    clients.openWindow('https://blog.sendildevar.in/apps/viewer')  );
});


 
self.addEventListener('push', pushEvent => {   

   if (pushEvent.data) {
       count++;
       var data=pushEvent.data;
       var obj={count:count,data:data};     
        obj = JSON.parse(JSON.stringify(obj));     
     console.log("Extra " ,obj.toString());
//         console.log("Inside .. service.js : push listener",pushEvent.data.text());     
        console.log('Service Worker :PUSH Received : ', pushEvent.data.text());   
        var bcpush = new BroadcastChannel('counterupdates');
        console.log("Broadcast channel exists ?? ",bcpush);
        //  bcpush.postMessage(obj);       
     
        pushEvent.waitUntil(self.registration.showNotification("Title : GCM Message ", { body: pushEvent.data.text() }));
     
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




function showLocalNotification (title, body, swRegistration) {
    // actions: [{ action: "button", title: "<" }, { action: "right", title: ">" }],
//     self.clients.matchAll({type:"window"}).then(function(clientList) {        
//   // do something with your clients list
//          for (var i = 0; i < clientList.length; i++) {
//       var client = clientList[i];
//       if (client.url == '/' && 'focus' in client) {
//         client.focus();
//         break;
//       }
//     }
//    });
 
   const options = {body: body,          };
   swRegistration.showNotification(title, options);

}
