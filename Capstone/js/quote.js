var quotes = [
  "\"The question is not, can they reason? Nor, can they talk? But, can they suffer?\" - Jeremy Bentham" , "\"The love for all living creatures is the most noble attribute of man.\" - Charles Darwin", "\"Life is as dear to a mute creature as it is to man. Just as one wants happiness and fears pain, just as one wants to live and not die, so do other creatures.\" - The Dalai Lama", "\"Our task must be to free ourselves from this prison by widening our circle of comapssion to embrace all living creatures and the whole of nature in its beauty\" - Albert Einstein", "\"We have to speak up on behalf of those who cannot speak for themselves.\" - Peter Singer"
];

 function randomQuote() {
  var randNum = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote-text").innerHTML = quotes[randNum];
}