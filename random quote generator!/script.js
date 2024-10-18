let quotesList = [
  {
    quote:"All the world's a stage, and all the men and women merely players.",
    author:"William Shakespeare"
  },
  {
    quote:"To live is the rarest thing in the world. Most people exist, that is all.",
    author:"Oscar Wilde"
  },
  {
    quote:"That it will never come again is what makes life so sweet.",
    author:" Emily Dickinson"
  },
  {
    quote:"Pain is inevitable. Suffering is optional.",
    author:"Haruki Murakami"
  },
  {
    quote:"Be kind, for everyone you meet is fighting a hard battle.",
    author:"Plato"
  },
  {
    quote:"Unable are the loved to die for love is immortality.",
    author:"Emily Dickinson"
  },
  {
    quote:"Don't let your happiness depend on something you may lose.",
    author:"C.S. Lewis"
  },
  {
    quote:"We are all broken, that's how the light gets in.",
    author:"Ernest Hemingway"
  },
  {
    quote:"Life is tough my darling, but so are you.",
    author:"Stephanie Bennett Henry"
  },
  {
    quote:"Self-awareness and self-love matter. Who we are is how we lead.",
    author:"Brene Brown"
  },
  {
    quote:"Amateurs sit and wait for inspiration, the rest of us just get up and go to work.",
    author:"Stephen King"
  },
]

let quoteEle = document.getElementById("quote")

let authorEle = document.getElementById("author")

function getLocalQuotes(){
  let i = Math.floor(Math.random()*quotesList.length)  //0.89*10 = 8.9 = 8
  quoteEle.innerText = quotesList[i].quote
  authorEle.innerText = "--" + " " + quotesList[i].author
}

  // document.getElementById("getQuote").onclick = getLocalQuotes

async function quoteAPI(){
  let response = await fetch("https://api.quotable.io/random");
  console.log(response)
  let quote = await response.json()
  console.log(quote)
  quoteEle.innerText = quote.content
  authorEle.innerText = "--" + " " + quote.author
}

document.getElementById("getQuote").onclick = quoteAPI