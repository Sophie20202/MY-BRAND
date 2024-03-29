

window.addEventListener("load", function () {
  const form = document.getElementById("articleForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    fetch('https://backend-jdw6.onrender.com/greet/v1/blog')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(blogDataArray => {
        console.log(blogDataArray)
    })
    var title = document.getElementById("title").value;
    var articleContent = document.getElementById("articleContent").value;
    var fileInput = document.getElementById("picture");
    var description = document.getElementById("description").value;

    if (title === "" || articleContent === "") {
      alert("Please enter both title and content of blog.");
      return false;
    }

    var object = {
      id: new Date().getTime(),
      title: title,
      articleContent: articleContent,
      description: description,
    };

    const processImage = (id, input) => {
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const articles = JSON.parse(localStorage.getItem("articles")) || [];
          const article = articles.find((article) => article.id === id);

          if (article) {
            article.image = e.target.result;
            localStorage.setItem("articles", JSON.stringify(articles));
          }
        };
        reader.readAsDataURL(input.files[0]);
      }
    };

    let storeblog = JSON.parse(localStorage.getItem("articles")) || [];
    if (!Array.isArray(storeblog)) {
      storeblog = [];
    }

    storeblog.push(object);
    localStorage.setItem("articles", JSON.stringify(storeblog));
    processImage(object.id, fileInput);
    window.location.href = "blog.html";
  });
});

