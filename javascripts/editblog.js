const button=document.querySelector(".update")
const id = location.hash.slice(1);
const editblog = JSON.parse(localStorage.getItem("articles")) || [];
const article = editblog.find((f) => f.id == id);
console.log(article, editblog, id);

var title = document.getElementById("title");
var articleContent = document.getElementById("articleContent");
var fileInput = document.getElementById("picture");
var description = document.getElementById("description");
title.value = article.title;
articleContent.value = article.articleContent;
description.value = article.description;
fileInput.files[0] = article.image;

function update() {
  const up = {
    id:id,
    title: title.value,
    articleContent: articleContent.value,
    image: article.image,
    description: description.value,
  };
   const index = editblog.findIndex((element) => element.id == id);

   if (index !== -1) {
     editblog[index] = up;
   }
  localStorage.setItem("articles",JSON.stringify(editblog))
  window.location.href="adminpanel.html"
}
button.addEventListener("click", (e)=>{
    e.preventDefault()
    update()
} )
