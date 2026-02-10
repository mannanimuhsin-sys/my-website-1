// import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6wG5vqu1QMmdt1yeiGRlE1dkkh9FqIeg",
  authDomain: "mum-peruvana.firebaseapp.com",
  projectId: "mum-peruvana",
  storageBucket: "mum-peruvana.firebasestorage.app",
  messagingSenderId: "915370611861",
  appId: "1:915370611861:web:097deb5ebcc284e9cbb79c",
  measurementId: "G-BPKH97NXL6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);