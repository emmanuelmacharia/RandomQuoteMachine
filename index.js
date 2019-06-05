// JS FOR THE APPLICATION

//DOM SETUP
let generateQuote = document.querySelector('#new-quote')
let tweetQuote = document.querySelector('#tweet-quote')
let postQuote = document.querySelector('#post')
let randomQuote = document.querySelector('#text')
let authorName = document.querySelector('#author')

//STYLE SETUP
const backgroundColors=[
    '#16a085', '#27ae60', '#2c3e50',
    '#f39c12', '#e74c3c', '#9b59b6', 
    '#FB6964', '#342224', "#472E32", 
    "#BDBB99", "#77B1A9", "#73A857",
    "grey", "yellow", "azure", "aqua", 
    "green", "green-yellow",
    "#011B38", "#395794", "#62BDEC",
    "#282c28"
]

//API SETUP
const URL = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

// Readying the DOM
$(document).ready(function(){
    quote()
})

function changeColor(){
    let index = Math.floor(Math.random() * 23)
    document.body.style.backgroundColor = backgroundColors[index]
    document.body.style.color = backgroundColors[index]
    // document.querySelectorAll(".buttons").style.backgroundColor = backgroundColors[index]
}

const clickEvent = generateQuote.addEventListener('click', () =>  {
    console.log("clicked")
    changeColor()
    quote()
    
})

function quote(){

        return $.ajax({
            type: 'GET',
            headers: {
                Accept: "application/json"
            },
            url: URL,
            success: function (data) {
                if(typeof data == "string"){
                    quotesData = JSON.parse(data);
                    console.log('quotesdata: ', quotesData)
                    getQuote()
                }
                // console.log('success', data)
                }
        })
    }

    const getRandomQuote = () => quotesData.quotes[Math.floor(Math.random()*quotesData.quotes.length)];

    const getQuote = () => {
        let randomQuotes = getRandomQuote()
        const {author, quote} = randomQuotes
        randomQuote.innerHTML = quote
        authorName.innerHTML = `-- ${author}`
    }

    const tweet = () => {

    }