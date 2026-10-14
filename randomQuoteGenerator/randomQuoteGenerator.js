const getNewRandomQuote = async () => {
  fetch("http://api.quotable.io/quotes/random")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then((data) => {
      const quoteText = data[0].content;
      const quoteAuthor = data[0].author;
      document.getElementById("random-quote-text").innerHTML = quoteText;
      document.getElementById("random-quote-author").innerHTML = quoteAuthor;
    })
    .catch((err) => {
      alert("There was a problem getting a new quote", err);
    });
};
