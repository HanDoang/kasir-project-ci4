const greatAuthors = books.filter((book) => book.sales > 1000000).
map((data) => {
        return `${data.author} adalah penulis buku ${data.title} yang sangat hebat!`
    })

console.log(greatAuthors);