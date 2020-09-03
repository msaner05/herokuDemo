
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-messaging.js');


firebase.initializeApp({
  'messagingSenderId': '380867304054',
});
// // firebase.messaging();
const messaging = firebase.messaging();
// messaging.onMessage((payload) => {
//   console.log('Message received. ', payload);
//   // ...
// });
// messaging.onMessage((payload) => {
//   console.log('Message received. ', payload);
//   // [START_EXCLUDE]
//   // Update the UI to include the received message.
//   appendMessage(payload);
//   // [END_EXCLUDE]
// });
// function appendMessage(payload) {
//   const messagesElement = document.querySelector('#messages');
//   const dataHeaderELement = document.createElement('h5');
//   const dataElement = document.createElement('pre');
//   dataElement.style = 'overflow-x:hidden;';
//   dataHeaderELement.textContent = 'Received message:';
//   dataElement.textContent = JSON.stringify(payload, null, 2);
//   messagesElement.appendChild(dataHeaderELement);
//   messagesElement.appendChild(dataElement);
// }
// messaging.onMessage((payload) => {
//   console.log('Message received. ', payload);
// });
self.addEventListener("push", payload => { console.log('Push Received.' ,payload);})
messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});
// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('../firebase-messaging-sw.js')
//     .then(function(registration) {
//       console.log('Registration successful, scope is:', registration.scope);
//     }).catch(function(err) {
//       console.log('Service worker registration failed, error:', err);
//     });
//   }

// if(navigator.serviceWorker){
//   console.log("Will the service worker register?");
//   navigator.serviceWorker.register('/sw.js')
//   .then(function(reg){
//   console.log("Yes, it did.");
//   }).catch(function(err) {
//   console.log("No it didn't. This happened: ", err)
//   });
//   }