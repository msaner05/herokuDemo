
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');


firebase.initializeApp({
  'messagingSenderId': '380867304054',
  'projectId' : 'notifications-de6a6',
  'apiKey': 'AIzaSyBXIhq6NxzcnAW9BeKg-6OFyuEFw-3icdA',
  'appId' : '1:380867304054:web:e14f03d7f77bc774fc5d57'
});
// // firebase.messaging();
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/favicon.ico'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});
// messaging.setBackgroundMessageHandler(function(payload) {
//   const sender = JSON.parse(payload.data.message);
//   const notificationTitle = 'New CometChat message';
//   const notificationOptions = {
//     body: payload.data.alert,
//     icon: sender.data.entities.sender.entity.avatar,
//   };
//   return self.registration.showNotification(
//     notificationTitle,
//     notificationOptions,
//   );
// });
// messaging.onMessageCallback = (payload) => {
//   console.log(payload);
//   }
// self.addEventListener('notificationclick', function(event) {
//   console.log('[firebase-messaging-sw.js] Received notificationclick event ', event);
  
//   var click_action = event.notification.data;
//   event.notification.close();
//   // This looks to see if the current is already open and
//   // focuses if it is
//   event.waitUntil(clients.matchAll({
//       type: "window"
//   }).then(function(clientList) {
//       for (var i = 0; i < clientList.length; i++) {
//           var client = clientList[i];
//           if (client.url == click_action  && 'focus' in client)
//               return client.focus();
//       }
//       if (clients.openWindow)
//           return clients.openWindow(click_action);
//       }));
  
//   });
//   const showMessage = function(payload){
//       console.log('showMessage', payload);
//       const notificationTitle = payload.data.title;
//       const notificationOptions = {
//           body: payload.data.body,
//           icon: payload.data.icon,
//           image: payload.data.image,
//           click_action: payload.data.click_action,
//           data:payload.data.click_action
//       };  
  
  
//     return self.registration.showNotification(notificationTitle,notificationOptions); 
//   }   
//   messaging.setBackgroundMessageHandler(showMessage);
  
//   self.addEventListener('message', function (evt) {     
//     console.log("self",self);
//     showMessage( evt.data );
//   })
  
// messaging.onMessage(function(payload) {
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//       body: payload.notification.body,
//       icon: payload.notification.icon,        
//   };

//   if (!("Notification" in window)) {
//       console.log("This browser does not support system notifications");
//   }
//   // Let's check whether notification permissions have already been granted
//   else if (Notification.permission === "granted") {
//       // If it's okay let's create a notification
//       var notification = new Notification(notificationTitle,notificationOptions);
//       notification.onclick = function(event) {
//           event.preventDefault(); // prevent the browser from focusing the Notification's tab
//           window.open(payload.notification.click_action , '_blank');
//           notification.close();
//       }
//   }
// });
// messaging.setBackgroundMessageHandler(function(payload) {

//   console.log(payload.data.badgeCount);

//   return self.registration.showNotification(title, options);
// });
// messaging.onMessage(function(payload) {

//   console.log(payload.data.badgeCount);

// });
// messaging.setBackgroundMessageHandler( payload => {
//   return self.clients.claim().then(() => {
//     return self.clients.matchAll({type: 'window'}).then(clients => {
//       if (somethingGood) {
//         return self.registration.showNotification('Title', {body: 'Body', icon: '/icon.png'});
//       } else {
//         return null;
//       }
//     })
//   })
// });
// messaging.onMessage(function(payload) {

//   console.log(payload.data.badgeCount);

// });
// messaging.onMessage((payload) => {
//   console.log('Message received. ', payload);
// });
// self.addEventListener("push", payload => { console.log('Push Received.' ,payload);})
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
// self.addEventListener("push", payload => { console.log('Push Received.' ,payload);})
// messaging.setBackgroundMessageHandler(function(payload) {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png'
//   };

//   return self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });
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