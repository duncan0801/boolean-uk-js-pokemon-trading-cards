// write your code here!
// This variable has the data you're working with


// Each card has:

// -h2>data[n].name
// -img class="card--img">data.[n].sprites.official-artwork
// -div > p > data[n].stats[m].name - data[n].stats[m].base-stat

// m= a counter going from 0- stats.length 

console.log(data);

//1. Create a function that creates all the elements of the card
//2. create a function that organises all the elements together
let numberOfPokemonCards = 5

for (let i = 0; i <= numberOfPokemonCards; i++) {

    let cardDiv = document.createElement("article") //create the card div
    cardDiv.setAttribute("class", "card")           // given the card a class of card

    let cardTitle = document.createElement("h2")    //create card title
    cardTitle.setAttribute("class", "card--title")  //set class in card title

    let cardImage = document.createElement("img")
    cardImage.setAttribute("class", "card--img")
    cardImage.setAttribute("src", data[i].sprites.other["official-artwork"].front_default)
    cardImage.setAttribute("alt", `A photo of the pokemon ${data[i].name}.`)
    
    let cardTextDiv = document.createElement("div")
    cardTextDiv.setAttribute("class", "card--text")

    cardDiv.appendChild(cardTitle)
    cardDiv.appendChild(cardImage)
    cardDiv.appendChild(cardTextDiv)


    function generateCardText () {
        for (let j = 0; j<=5; j++) {
            let pTag = document.createElement("p")
            pTag.setAttribute("class", data[i].stats[j].stat.name)
            pTag.innerText = data[i].stats[j].stat.name.toUpperCase() + ": " + data[i].stats[j].base_stat
            cardTextDiv.appendChild(pTag)
        }
    }
    
    let cardSection = document.querySelector(".cards")
    cardSection.append(cardDiv)
    
    generateCardText()
    console.log(cardDiv)
        
}
