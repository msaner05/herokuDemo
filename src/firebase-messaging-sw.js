
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-messaging.js');


firebase.initializeApp({
  messagingSenderId: '417755979900',
  apiKey: "AIzaSyC_vNfvnni0876y0iHoC29IPUI8lf7WiLc",
  projectId: "hrmsnotification-3a10f",
  appId: "1:417755979900:web:a194861e7c546f007469f9",
});

const messaging = firebase.messaging();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('firebase-messaging-sw.js')
    .then(function(registration) {
      console.log('Registration successful, scope is:', registration.scope);
    }).catch(function(err) {
      console.log('Service worker registration failed, error:', err);
    });
  }
