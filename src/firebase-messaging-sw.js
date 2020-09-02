
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-messaging.js');


firebase.initializeApp({
  'messagingSenderId': '380867304054',
});

const messaging = firebase.messaging();


if(navigator.serviceWorker){
  console.log("Will the service worker register?");
  navigator.serviceWorker.register('/sw.js')
  .then(function(reg){
  console.log("Yes, it did.");
  }).catch(function(err) {
  console.log("No it didn't. This happened: ", err)
  });
  }