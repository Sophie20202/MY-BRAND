
    document.addEventListener('DOMContentLoaded', () => {
      const storeblog = localStorage.getItem('articles');
      if (storeblog) {
          const blogDataArray = JSON.parse(storeblog);
          const blogContainer = document.getElementById('tbody');
          blogDataArray.forEach(object => {
              const blogElement = document.createElement('tr');
              blogElement.innerHTML = `
               <tr> 
              
                <td>${object.title}</td>
                <td>sofidele12@gmail.com</td>
                <td>content</td>
                <td>picture</td>
                <td> <td/>
                <td>
                  <i class="fa fa-edit icon-primary"></i> &nbsp;<i
                    class="fa fa-trash icon-danger"
                  ></i>
                </td>
              </tr>
              `;
            blogContainer.appendChild(blogElement);
          })  
      };
    })
  