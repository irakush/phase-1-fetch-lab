function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => {
    renderBooks(json)
    console.log(fifthElement(json))
    console.log(characterInSeries(json, 1031))
    console.log(totalNumberOfPages(json))
  })
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

function fifthElement(books) {
  return books[4].name
}

function characterInSeries(books, numOfCharacter){
  let counter = 0
  
  for (let index = 0; index < books.length; index++) {
    const caracters = books[index].characters

    for (let index = 0; index < caracters.length; index++) {
      if (counter === numOfCharacter) {
        return caracters[index]
      }

      counter++
    }
  }
}

function totalNumberOfPages(books){
  let totalNumberOfPages = 0

  books.forEach(book => {
    totalNumberOfPages += book.numberOfPages
  })

  return totalNumberOfPages
}