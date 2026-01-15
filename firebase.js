// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  sendPasswordResetEmail  // <--- Add this here
} from 'https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js';  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
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
    // console.log(email,password)

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


//Forgot Password sending password reset email if forgotten
// const email = emailInpLogin.value.trim();
const forgot_password_btn = document.getElementById("forgot_password");

forgot_password_btn.addEventListener("click", ()=>{
  const email = emailInpLogin.value.trim();
  console.log(email);
      console.log(`forgot button is clicked`,forgot_password_btn);
      sendPassResetLink(email);
  })
  function sendPassResetLink(email){
    if(!email){
      console.log("Enter an email address");
      return;
    }
    sendPasswordResetEmail(auth, email)
  .then(() => {
    console.log("Password reset email sent!"); 
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  }
  
 
