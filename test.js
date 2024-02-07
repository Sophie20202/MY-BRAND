let books = [];

function renderBooks() {
    const bookListElement = document.getElementById("bookList");
    bookListElement.innerHTML = "";
    
    books.forEach((book, index) => {
        const li = document.createElement("li");
        li.textContent = `${book.title} by ${book.author}`;
        
        const updateButton = document.createElement("button");
        updateButton.textContent = "Update";
        updateButton.addEventListener("click", () => {
            updateBook(index);
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            deleteBook(index);
        });
        
        li.appendChild(updateButton);
        li.appendChild(deleteButton);
        bookListElement.appendChild(li);
    });
}

function addBook() {
    const titleInput = document.getElementById("titleInput");
    const authorInput = document.getElementById("authorInput");
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    if (title !== "" && author !== "") {
        books.push({ title, author });
        titleInput.value = "";
        authorInput.value = "";
        renderBooks();
    } else {
        alert("Please enter both title and author.");
    }
}

function deleteBook(index) {
    const confirmation = confirm("Are you sure you want to delete this book?");
    if (confirmation) {
        books.splice(index, 1);
        renderBooks();
    }
}

function updateBook(index) {
    const newTitle = prompt("Enter new title:", books[index].title);
    const newAuthor = prompt("Enter new author:", books[index].author);
    if (newTitle !== null && newAuthor !== null) {
        books[index] = { title: newTitle, author: newAuthor };
        renderBooks();
    }
}

// Initial rendering
window.onload = renderBooks;