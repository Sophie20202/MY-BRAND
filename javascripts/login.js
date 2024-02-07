
function validateForm() {
    var username = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    console.log(password,username)
    if (username === 'sofidele12@gmail.com' && password === 'sophie1992@') {
      // alert('Login successfull!');
      window.location.href="./adminpanel.html"
    } else {
      alert('Invalid username or password. Please try again.');
    }
    }
   

