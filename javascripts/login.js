

function validateForm(event) {
  event.preventDefault();
  var username = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  const myemail = "sofidele12@gmail.com";
  const mypassword = "sophie1992@";
  console.log(password, username);
  if (username === myemail && password === mypassword) {
    window.location.href="adminpanel.html";
    alert("Login successful!");
  } else {
    alert("Invalid username or password. Please try again.");
  }
}
   

