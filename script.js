const quote = document.querySelector(".quote"),
authorName = document.querySelector(".author"),
quoteBtn = document.querySelector(".new-quote");
twitterBtn = document.querySelector(".tweet-quote");

function randomQuote(){
  quoteBtn.innerText = "Loading Quote..."
  fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
    authorName.innerText = result.author + " once said...";
    quote.innerText = result.content;
    quoteBtn.innerText = "New Quote"
  });
}

twitterBtn.addEventListener("click", ()=>{
  let tweetUrl= `https://twitter.com/intent/tweet?url=${authorName.innerText}${quote.innerText}`;
  window.open(tweetUrl, "_blank");
});

quoteBtn.addEventListener("click", randomQuote);

randomQuote();
      