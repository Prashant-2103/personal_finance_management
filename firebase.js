// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";
//   import { getAuth } from 'https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js';
  import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js';
import {  signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js';
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
  const auth = getAuth(app);
  console.log(auth);


  //Implementation of sign up/registration logic
  const emailInput = document.querySelector("#gmail");
  console.log(`email in firebase is ${emailInput}`);
  const passwordInput = document.querySelector("#pass");
  console.log(`password in firebase is ${passwordInput}`)
  const signupbutton = document.querySelector("#signUpBtnFromRegistration");
  console.log(`signupbutton in firebase is ${signupbutton}`)
  if (signupbutton)
  {
        signupbutton.addEventListener("click",(e)=>{
    e.preventDefault();
    const email = emailInput.value.trim();
    console.log("email", email);
    const password = passwordInput.value.trim();
    console.log("pass", password);
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    alert("signed up");
    window.location.href = 'dashboard.html'
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
})

  }
  
  

//Implementing login logic
const emailInpLogin = document.getElementById("username");
const passwordInpLogin = document.getElementById("password");
const loginBtnLogin = document.getElementById("submit")
if(loginBtnLogin){
    loginBtnLogin.addEventListener("click", (e)=>{
    e.preventDefault();

    const email = emailInpLogin.value.trim();
    const password = passwordInpLogin.value;
    console.log(email,password)

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    alert("Loging you in");
    window.location.href = 'dashboard.html'
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });


})

}

