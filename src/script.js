import {getSearch, createCard} from './modules/functions.js'

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const cardList = document.getElementById('cryptoList');

searchBtn.addEventListener("click", async ()=>{
    if (searchInput.value.length >= 3){
        cardList.innerHTML = ""
       let result = await getSearch(searchInput.value)
       console.log("RES", result)
       result.forEach(async (coin) => {
         let card = await createCard(coin)
         console.log("CARD", card)
        cardList.appendChild(card)
       })
    } else {
        alert("Your search should be at least 3 characters long")
    }
})