// Constants

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');



// loading Function
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// show New Quote
function newQuote() {
    // loading Func.Calling
     loading();
    // pich a Random Quote From Array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    authorText.textContent = quote.author;
    
    
    if (quote.text.length > 100) {
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
    // complete Func.Calling
    complete();
}


// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}
// Event Listeners
  newQuoteBtn.addEventListener('click',newQuote);
  twitterBtn.addEventListener('click',tweetQuote);


//   Loading NewQuote Function
  newQuote();

