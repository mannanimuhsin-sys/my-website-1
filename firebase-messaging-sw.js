importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyD6wG5vqu1QMmdt1yeiGRlE1dkkh9FqIeg",
  authDomain: "mum-peruvana.firebaseapp.com",
  projectId: "mum-peruvana",
  storageBucket: "mum-peruvana.firebasestorage.app",
  messagingSenderId: "915370611861",
  appId: "1:915370611861:web:097deb5ebcc284e9cbb79c",
  measurementId: "G-BPKH97NXL6"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// പശ്ചാത്തലത്തിൽ നോട്ടിഫിക്കേഷൻ കൈകാര്യം ചെയ്യാൻ
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png' // നിങ്ങളുടെ ആപ്പ് ഐക്കണിന്റെ പേര് ഇവിടെ നൽകുക
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});