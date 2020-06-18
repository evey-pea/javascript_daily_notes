# Morning Challenge 20200618

## DOM Manipulation - The Book List

- Create a webpage with an h1 of "My Book List".
- Add a script tag to the bottom of the page, where all your JS will go.
- Copy this array of books:
    ```javascript
    let books = [
      {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: false
      }, {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true
      }
    ];
    ```
- Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.

**Bonuses**:
- Use a ul and li to display the books.
- Add an img to each book that links to a URL of the book cover.
- Change the style of the book depending on whether you have read it or not.