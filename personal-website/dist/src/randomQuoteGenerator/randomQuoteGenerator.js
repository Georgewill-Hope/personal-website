const randomQuoteGeneratorElement = document.getElementById(
  "random-quote-generator"
);

const colors = [
  ["#FF6B6B", "#4ECDC4"],
  ["#6C5CE7", "#A29BFE"],
  ["#FDCB6E", "#E17055"],
  ["#0984E3", "#74B9FF"],
  ["#00B894", "#55EFC4"],
  ["#E84393", "#FD79A8"],
  ["#2D3436", "#636E72"],
  ["#FAB1A0", "#FF7675"],
  ["#6AB04C", "#BADC58"],
  ["#30336B", "#686DE0"],
  ["#F9CA24", "#F0932B"],
  ["#22A6B3", "#7ED6DF"],
  ["#BE2EDD", "#E056FD"],
  ["#130F40", "#4834D4"],
  ["#EA2027", "#EE5A24"],
  ["#009432", "#C4E538"],
  ["#0652DD", "#1289A7"],
  ["#D980FA", "#FDA7DF"],
  ["#1B9CFC", "#25CCF7"],
  ["#2C3A47", "#CAD3C8"],
];

const getRandomColorCombo = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const getNewRandomQuote = async () => {
  const response = await fetch("http://api.quotable.io/quotes/random");
  if (!response.ok) {
    alert("There was a problem getting a new quote");
  }
  const data = await response.json();
  const quoteText = data[0].content;
  const quoteAuthor = data[0].author;
  document.getElementById("random-quote-text").innerHTML = quoteText;
  document.getElementById("random-quote-author").innerHTML = quoteAuthor;

  const colorCombo = getRandomColorCombo();
  randomQuoteGeneratorElement.style.background = `linear-gradient(45deg, ${colorCombo[0]}, ${colorCombo[1]})`;
};
