const API_KEY = 'CG-BqL849ZvLQBrSpDkLwNos2Ln';
const BASE_URL = 'https://api.coingecko.com/api/v3';
const headers = {
	accept: 'application/json',
	'x-cg-demo-api-key': API_KEY
};

async function getSearch (input) {
    let coins = []
	let searchResults = await fetch(`${BASE_URL}/search?query=${input}&limit=10`, {
		method: 'GET',
		headers: headers
	})
		.then((response) => response.json())
        .catch((err) => console.error(err));
       console.log("SEARCH", searchResults);
       let coinArray = searchResults.coins
       coinArray.forEach((coin, i) => {
            if (i < 10){
                let info = {
                    name: coin.name,
                    id: coin.id,
                    img: coin.large ? coin.large : './public/placeholder.png'
                }
                coins.push(info)
            }
        })
        console.log("coins", coins)
        return coins
};

async function createCard(oneCoin){

   let card = document.createElement("div")
   card.setAttribute("id", oneCoin.id)
   card.setAttribute("class", "cryptoCard")
   card.innerHTML = `<img src=${oneCoin.img} alt="Coin Icon" class="coinIcon">
    <div class="cryptoName" id=${oneCoin.id}>${oneCoin.name}</div>
    <div class="history" hidden>
    </div>
    <button class="saveBtn">Save this coin</button>`
return card
}

export {getSearch, createCard}
