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
    
    // Helper method to create paragraph elements
    const createParaContent = (object) => {
        const read = (object.alreadyRead)? 'read' : 'not read';
        return `I have ${read} ${object.title} by ${object.author}.`;
    }

    //Add paragraphs to page
    books.forEach((book) => {
        let para = document.createElement('p');
        para.innerHTML = createParaContent(book);
        document.body.appendChild(para);
    })

    /* Bonus section: Adding books as unordered list
    let ul = document.createElement('UL');

    books.forEach((book) => {
        let li = document.createElement('LI');
        li.innerHTML = `${book.title} by ${book.author}`;
        ul.appendChild(li);
    })
    document.body.appendChild(ul);
    */