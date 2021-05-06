// write your code here!
// This variable has the data you're working with
/*Repo: boolean-uk-js-pokemon-trading-cards

Description
We're going to create a Pokemon Trading Cards show page. To achieve this, you'll use JS to dynamically create all the elements on the page!

✔ Instructions
- Use this template as the starting point => https://codesandbox.io/s/pokemon-trading-cards-template-rd5vq?file=/index.js
- Download the folder, don't use CodeSandbox, it will not work properly.
- Make sure you check and understand the data that is given to you! 
- Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example commented out in the index.html
- Use the exact CSS classes you see in the example HTML to obtain the same style for each card
- The cards should be nested inside <section class="cards"></section>
- Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
- Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS

Tips
- Use functions to your advantage. Break each card into smaller parts, and think how you can turn them into functions.
- Once you've got a card, think of a way to programmatically create all the others
- Make sure you understand well the data structure before starting to create the cards

Challenge
Add an extra section to each card that contains information about which games each pokemon appeared in.

Challenge 2
See if you can find a way to toggle between the different images of each card! (this is a hard one! You might want to use google...

Each card has:

-h2>data[n].name
-img class="card--img">data.[n].sprites.official-artwork
-div > p > data[n].stats[m].name - data[n].stats[m].base-stat

m= a counter going from 0- stats.length 
*/

console.log(data);

//1. Create a function that creates and appends name/title
//2. Create a function that creates and appends image
//3. Create a function that creates and appends the card info
//4. create a function that organises all the elements together

function generateCards () {

    for (let i = 0; i <= data.length; i++) {

        let cardDiv = document.createElement("article") //create the card div
        cardDiv.setAttribute("class", "card")           // given the card a class of card

        function generateTitle() {
            let cardTitle = document.createElement("h2")    //create card title
            cardTitle.setAttribute("class", "card--title")  //set class in card title
            cardTitle.innerText = data[i].name.charAt(0).toUpperCase() + data[i].name.slice(1)
            cardDiv.appendChild(cardTitle)
        }
        function generateImage() {
            let cardImage = document.createElement("img")
            cardImage.setAttribute("class", "card--img")
            cardImage.setAttribute("src", data[i].sprites.other["official-artwork"].front_default)
            cardImage.setAttribute("width", "256px")

            cardImage.setAttribute("alt", `A photo of the pokemon ${data[i].name}.`)
            cardDiv.appendChild(cardImage)
        }
        function generateCardInfo() {
            
            let cardTextDiv = document.createElement("div")
            cardTextDiv.setAttribute("class", "card--text")
            cardDiv.appendChild(cardTextDiv)

            function generateCardText () {
                for (let j = 0; j<=5; j++) {
                    let pTag = document.createElement("p")
                    pTag.setAttribute("class", data[i].stats[j].stat.name)
                    pTag.innerText = data[i].stats[j].stat.name.toUpperCase() + ": " + data[i].stats[j].base_stat
                    cardTextDiv.appendChild(pTag)
                }
            }
            generateCardText()
        }
        function generateGameInfo() {
            let gameSection = document.createElement("section")
            let gameSectionInfo = document.createElement("p")
            gameSection.setAttribute("class", "game-section")
            gameSectionInfo.setAttribute("class", "game-section-info")
            gameSectionInfo.innerText = `The games that ${data[i].name} appeared in are:\n`

            // for (n=0; n <= data[i].game_indices.length; n++ ) {
            //     gameSectionInfo.innerText =+ `${data[i].game_indices[n].version.name},`
            // }
            

        }

        generateTitle()
        generateImage()
        generateCardInfo()
        generateGameInfo()
        
        
        let cardSection = document.querySelector(".cards")
        cardSection.append(cardDiv)
        
        console.log(cardDiv)
            
    }
}
generateCards()