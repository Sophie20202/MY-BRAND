function validateForm(event) {
    event.preventDefault();
   
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log(password, username);
    if (username === 'sofidele12@gmail.com' && password === '12345') {
      alert("Login successful!");
      window.location.href="adminpanel.html";
      
    } else {
      alert("Invalid username or password. Please try again.");
    }
  }