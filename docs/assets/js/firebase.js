'use strict';
//grab a form
const form = document.querySelector('.form-inline');

//grab an input
const inputEmail = form.querySelector('#inputEmail');

const afterInput = document.getElementById("afterInput");
const subscribeNewsletter = document.getElementById("subscribeNewsletter");

//config your firebase push
const config = {
  apiKey: "AIzaSyCRpIvHwAZGMx_Z6vLlpmwuOn4a_kJ65o8",
  authDomain: "qrunner-app.firebaseapp.com",
  databaseURL: "https://qrunner-app.firebaseio.com",
  projectId: "qrunner-app",
  storageBucket: "qrunner-app.appspot.com",
  messagingSenderId: "643357544409",
  appId: "1:643357544409:web:b8511fd7057d12129a93c8",
  measurementId: "G-6T2F2RM8YT"
};

firebase.initializeApp(config);
var firestore = firebase.firestore();
//create a functions to push
    function firebasePush(input) {  
        //push itself       
        firestore.collection("newsletter").doc(input.value).set({
          email: input.value
        })
        .then(function (mailsRef) {
          console.log("Email subscribed with id: ", input.value)
        })
        .catch(function (error) {
          console.error("Error adding the email: ", error)
        })
    }

//push on form submit
    if (form) {
        form.addEventListener('submit', function (evt) {
            evt.preventDefault();
            firebasePush(inputEmail);

            afterInput.style.display = "inline";
            subscribeNewsletter.style.display = "none";
        })
    }