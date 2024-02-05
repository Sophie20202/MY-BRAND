
function validateForm() {
    var username = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (username === 'sofidele' && password === 'sophie1992@') {
      alert('Login successfull!');
      window.location.href="blog.html";
    } else {
      alert('Invalid username or password. Please try again.');
    }
    }
   

