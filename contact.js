const firebaseConfig = {
    apiKey: "AIzaSyBYCuVR3b68P_E_lmv69oJTzXUwYqmNdhI",
    authDomain: "portfolio-contactform-14cb0.firebaseapp.com",
    databaseURL: "https://portfolio-contactform-14cb0-default-rtdb.firebaseio.com",
    projectId: "portfolio-contactform-14cb0",
    storageBucket: "portfolio-contactform-14cb0.appspot.com",
    messagingSenderId: "773411210550",
    appId: "1:773411210550:web:5f2c4d5a676e523fc19f97",
    measurementId: "G-X73PXLW4S8"
  };


firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref("port");
document.getElementById("port").addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');
    var subject = getElementVal('subject');
    var message = getElementVal('message');

    saveMessages(name, email, subject, message);
}


document.getElementById("port").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
            
                // You can add your AJAX code here to send the form data to the server
                // For this example, we'll just reload the page after a short delay
    setTimeout(function() {
    alert("Form submitted successfully!");
   document.getElementById("port").reset(); // Clear the form fields
    }, 1000); // Delay for 1 second (simulating server response)
            
});
            

const saveMessages = (name, email, subject, message) =>{
    var newContactForm = contactFormDB.push();
    newContactForm.set({
        name : name,
        email : email,
        subject : subject,
        message : message,
    });
};

const getElementVal = (id) =>{
    return document.getElementById(id).value;  // return the value of input field with id=name
};
