const newQuoteBtn = document.getElementById("new-quote");
const quoteText = document.getElementById("text");
const quoteAuthor = document.getElementById("author")
const quoteList = [
  {
    text: '1',
    author: '1'  
  },
  {
    text: '2',
    author: '2'  
  },
  {
    text: '3',
    author: '3'  
  },
  {
    text: '4',
    author: '4'  
  }
];

const updateQuote = () => {
  
  let quoteCount = Math.floor(Math.random() * (quoteList.length))
  console.log(quoteCount)
  
  quoteText.innerText = quoteList[quoteCount].text;
  quoteAuthor.innerText = quoteList[quoteCount].author;
};



newQuoteBtn.addEventListener("click", updateQuote);
updateQuote();
