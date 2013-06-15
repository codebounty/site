'use strict';

var quotes = [
  {
    msg: 'Code Bounty is a brilliant initiative to help fuel open-source development.',
    author: 'Marak'
  }
];

window.onload = function () {
  var htmlQuote = document.getElementById('quote');
  var quote = document.createElement('blockquote');
  var i = Math.round(Math.random() * (quotes.length - 1));
  quote.innerHTML = '<p>' + quotes[i].msg + '<\/p>\n<small>' + quotes[i].author + '<\/small>';
  htmlQuote.parentNode.replaceChild(quote, htmlQuote);
};
