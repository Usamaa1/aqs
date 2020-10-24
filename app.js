// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBwJD6hoSm-Lw4bXa9oNxEthJsAqhJofnM",
  authDomain: "aqsservices3.firebaseapp.com",
  databaseURL: "https://aqsservices3.firebaseio.com",
  projectId: "aqsservices3",
  storageBucket: "aqsservices3.appspot.com",
  messagingSenderId: "248955492838",
  appId: "1:248955492838:web:ba9cdc2ac4aada0dd6de27"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Refrence contactInfo collections

let contactInfo = firebase.database().ref("infos");

// listen for a submit

document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();
    

    // Get input values

    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let subject = document.querySelector(".subject").value;
    let message = document.querySelector(".message").value;
    console.log(name, email, subject, message);
    
    saveContactInfo(name, email, subject, message);


    // document.querySelector(".contact-form").reset();
    
        document.getElementById("form1").reset();
}



    



// Save Infos to firebase

function saveContactInfo(name, email, subject, message){
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        name: name,
        email: email,
        subject: subject,
        message: message,
    });
}