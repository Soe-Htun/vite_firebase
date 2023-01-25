importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyBvEdYU9uC0GRa5JbrXs2GKMkGOK67Rd0A",
    authDomain: "vite-firebase-def90.firebaseapp.com",
    projectId: "vite-firebase-def90",
    storageBucket: "vite-firebase-def90.appspot.com",
    messagingSenderId: "701547920614",
    appId: "1:701547920614:web:0496f3dda535dbc0ea4f27",
    measurementId: "G-FV6X3SGM2S"
  };

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body
    };
    // return self.registration.showNotification(notificationTitle,notificationOptions);
});
