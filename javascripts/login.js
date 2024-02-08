

function validateForm(event) {
  event.preventDefault();
  var username = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  console.log(password, username);
  if (username === 'sofidele12@gmail.com' && password === '12345') {
    window.location.href="adminpanel.html";
    alert("Login successful!");
  } else {
    alert("Invalid username or password. Please try again.");
  }
}
   

