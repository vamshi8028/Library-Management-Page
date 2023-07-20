const books = [
  { id: 1, title: 'Wings of Fire by Dr. A. P. J. Abdul Kalam'  },
  { id: 2, title: 'The Guide by R. K. Narayan	' },
  { id: 3, title: 'Fasting, Feasting by Anita Desai	' },
{ id: 4, title: 'The White Tiger  by Aravind Adiga' },
{ id: 5, title: 'The God of Small Things by Arundhati Roy' },
{ id: 6, title: 'A Suitable Boy by Vikram Seth' },
{ id: 7, title: 'The Inheritance of Loss by Kiran Desai' },
{ id: 8, title: 'Train to Pakistan  by Khushwant Singh' },
{ id: 9, title: 'Malgudi Days by R. K. Narayan' },



  // Add more books as needed
];

document.addEventListener('DOMContentLoaded', () => {
  const bookList = document.getElementById('book-list');
  const cartItems = document.getElementById('cart-items');

  // Display books on the page
  books.forEach((book) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book');
    bookCard.innerHTML = `
      <h3>${book.title}</h3>
     
      <button class="add-to-cart" data-id="${book.id}">Add to Cart</button>
    `;
    bookList.appendChild(bookCard);
  });

  // Add event listeners to "Add to Cart" buttons
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach((button) => {
    button.addEventListener('click', addToCart);
  });

  // Function to add book to cart
  function addToCart(event) {
    const bookId = parseInt(event.target.dataset.id);
    const selectedBook = books.find((book) => book.id === bookId);
    if (selectedBook) {
      const cartItem = document.createElement('li');
      cartItem.textContent = `${selectedBook.title} - $${selectedBook.price}`;
      cartItems.appendChild(cartItem);
    }
  }
});
