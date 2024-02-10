
document.addEventListener('DOMContentLoaded', () => {
  const storeblog = localStorage.getItem('articles');
  if (storeblog) {
      const blogDataArray = JSON.parse(storeblog);
      if (Array.isArray(blogDataArray)) { // Check if blogDataArray is an array
          const blogContainer = document.getElementById('Inspire');
          blogDataArray.forEach(object => {
              const blogElement = document.createElement('div');
              blogElement.innerHTML = `
                  <div class="blog">
                      <div class="Inspiration">
                          <div class="paragraph">
                              <h1>${object.title}</h1>
                              <p>${object.articleContent}</p>
                              <a href="#" class="btn" onclick="display()">Read more</a>
                          </div>
                          <div class="photo">
                              <img src="${object.image}" alt=""/>
                          </div>
                      </div> 
                  </div>
                  <span>${object.description}</span>
              `;
              blogContainer.appendChild(blogElement);
          });
      } else {
          console.error("Error: 'articles' in localStorage is not an array.");
      }
  }
});
