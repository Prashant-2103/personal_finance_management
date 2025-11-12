// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCPBHY4-PE5i-HyIBQNI6d4HsZVISF9PxM",
    authDomain: "personal-finance-managem-f3153.firebaseapp.com",
    projectId: "personal-finance-managem-f3153",
    storageBucket: "personal-finance-managem-f3153.firebasestorage.app",
    messagingSenderId: "615466262785",
    appId: "1:615466262785:web:554ae49aa779d394c5bb00",
    measurementId: "G-W21MNXMBE0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);