import React, { useState } from "react";

const BOOKS = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 3, title: "Pride and Prejudice", author: "Jane Austen" },
  { id: 4, title: "1984", author: "George Orwell" },
  { id: 5, title: "Brave New World", author: "Aldous Huxley" }
];

function App() {
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  const handleAddToFavorite = (book) => {
    setFavoriteBooks([...favoriteBooks, book]);
  };

  return (
    <div>
      <h1>Bookstore</h1>
      <h2>Available books:</h2>
      <ul>
        {BOOKS.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}{" "}
            <button onClick={() => handleAddToFavorite(book)}>
              Add to favorite
            </button>
          </li>
        ))}
      </ul>
      <h2>Favorite books:</h2>
      <ul>
        {favoriteBooks.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;