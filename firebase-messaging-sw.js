console.log("Global firebase-messaging-sw.js loaded...");
importScripts('https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.1.0/firebase-messaging.js');


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
console.log(messaging);
