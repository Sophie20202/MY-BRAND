

window.addEventListener("load", function () {
  const form = document.getElementById("articleForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    var title = document.getElementById("title").value;
    
    var articleContent = document.getElementById("articleContent").value;
    var fileInput = document.getElementById("picture");
    var description = document.getElementById("description").value;

    if (title === "" && articleName === "") {
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

          article.image = e.target.result;
          localStorage.setItem("articles", JSON.stringify(articles));
        };
        reader.readAsDataURL(input.files[0]);
      }
    };
   
    const storeblog = JSON.parse(localStorage.getItem("articles")) || [];
    storeblog.push(object);

    window.localStorage.setItem("articles", JSON.stringify(storeblog));
    processImage(object.id, fileInput);
    window.location.href = "blog.html";
  });
});

