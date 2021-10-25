console.log("FB messaging loaded..");
// firebase-messsaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.1.0/firebase-messaging.js');
importScripts('https://www.gstatic.com/firebasejs/9.1.0/init.js');

//  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js"
        
//         import { getAuth, signOut, signInWithPopup, EmailAuthProvider, GoogleAuthProvider, SignInMethod, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js"
//         import { getDatabase,get, query,limitToLast, ref, onChildAdded, update, set, onValue } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js"
//         import { getMessaging,getToken,onMessage } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-messaging.js"
//         import { onBackgroundMessage } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-messaging-sw.js"


//         import { getMessaging } from "firebase/messaging/sw";

        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration


        const firebaseConfig = {
            apiKey: "AIzaSyCA2SJwPEXnWB9MBJgvNbrCzNydrMctFpc",
            authDomain: "sendildevar.firebaseapp.com",
            databaseURL: "https://kiot.firebaseio.com/", // https://sendildevar-default-rtdb.asia-southeast1.firebasedatabase.app
            projectId: "sendildevar",
            storageBucket: "sendildevar.appspot.com",
            messagingSenderId: "554219100937",
            appId: "1:554219100937:web:7e8dc521b4a7e94b23d1d8",
            measurementId: "G-TW4LTM2R0Y"
        };



 firebase.initializeApp(firebaseConfig);

   // Retrieve firebase messaging
   const messaging = firebase.messaging();

    messaging.setBackgroundMessageHandler(function (payload) {
       console.log('setBackgroundMessageHandler background message ', payload);

       const promiseChain = clients
          .matchAll({
              type: "window",
              includeUncontrolled: true
          })
         .then(windowClients => {
              for (let i = 0; i < windowClients.length; i++) {
                 const windowClient = windowClients[i];
                 windowClient.postMessage(payload);
              }
         })
         .then(() => {
              return self.registration.showNotification("my notification title");
          });
         return promiseChain;
     });


// // Retrieve an instance of Firebase Messaging so that it can handle background
// // messages.
// const messaging = getMessaging(firebaseApp);

 
// onMessage(messaging ,(payload) => {
//     console.log('Message received. ', payload);
//     // Update the UI to include the received message.
// navigator.serviceWorker.ready.then(function (registration) {
//                         registration.showNotification('FCM',{ body: payload,vibrate: [200, 100, 200, 100, 200, 100, 200],tag:'Reboot'});
//                     });
// // document.getElementById("bootreason").innerText=payload;
//   });


// onBackgroundMessage(messaging, (payload) => {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png'
//   };

//   self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });
 
        
