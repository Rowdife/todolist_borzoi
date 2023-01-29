const quotes = [
  {
    quote: "Let me do it for you",
    author: "-Your lovely Borzoi-",
  },
  {
    quote: "Didn't I do it for you",
    author: "-Your kawaii Borzoi-",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
