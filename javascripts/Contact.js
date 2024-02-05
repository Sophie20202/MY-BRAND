function validateForm(){

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var errorMessage = document.getElementById("messageError");
  errorMessage.style.padding= "10px";

  if (name === ""){
    // alert ("All fields are required");
    errorMessage.innerHTML ="Name  can not be blank";
    return false;
  }

  if (email===""||email.length<6) {
    errorMessage.innerHTML = "please enter a valid email address";
    return false;
  }
  if (message.length <=20) {
    errorMessage.innerHTML = "Message can not be less than 20 character";
    return false;
  }
  alert("form submitted successfully")
  return true;
}
  // If all validations pass, save data to local storage
  var contactData = {
    name: name,
    email: email,
    message: message,
  };

  // Convert the data to a JSON string and save it to local storage
  localStorage.setItem("contactData", JSON.stringify(contactData));

  // You can add code to display a success message or redirect the user here
  console.log("Form submitted successfully");
  