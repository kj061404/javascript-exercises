getTitle = function(book) {
    return book.title;
}


const getTheTitles = function(books) {
    titles = books.map(getTitle);
    return titles;

};

// Do not edit below this line
module.exports = getTheTitles;
