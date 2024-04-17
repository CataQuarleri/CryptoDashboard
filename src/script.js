import { getSearch, loadContent, getCoinInfo } from './modules/functions.js';
import { createCard, createInfo } from './modules/auxFunct.js';
import { saveCoin, getSavedCoins, deleteSavedCoin } from './modules/postFunctions.js';

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
export const cardList = document.getElementById('cryptoList');
const pagination = document.getElementById('pagination');
const title = document.querySelector('h1');
const savedCoinsBtn = document.getElementById('savedCoinsBtn');

//Firts Load
window.addEventListener('DOMContentLoaded', async () => {
	let content = await loadContent();
    pagination.style.display = "block";
	content.forEach((coin) => {
		let card = createCard(coin);
		cardList.appendChild(card);
	});
});

//Back home
title.addEventListener('click', async () => {
	let content = await loadContent();
    pagination.style.display = "block";
    cardList.innerHTML = ""
	content.forEach((coin) => {
		let card = createCard(coin);
		cardList.appendChild(card);
	})
})

//PAGINATION functionality
pagination.addEventListener('click', async (e) => {
	console.log('ETARGETR', e);
	let page = Number(e.target.innerText);
	console.log('PAGE', page);
	cardList.innerHTML = '';
	let content = await loadContent(page);
	content.forEach((coin) => {
		let card = createCard(coin);
		cardList.appendChild(card);
	});
});

//SEARCH functionality
searchBtn.addEventListener('click', async () => {
	if (searchInput.value.length >= 3) {
		cardList.innerHTML = '';
		let result = await getSearch(searchInput.value);
		console.log('RES', result);
		result.forEach((coin) => {
			let card = createCard(coin);
			console.log('CARD', card);
			cardList.appendChild(card);
		});
	} else {
		alert('Your search should be at least 3 characters long');
	}
});

//See more info in card and save and delete coin
cardList.addEventListener('click', async (e) => {
	console.log('THE E', e);
	let coinId = e.target.id;
	let extraInfo = document.getElementById(`extraInfo_${coinId}`);
	console.log('E CARD', extraInfo);
	if (e.target.className == 'saveBtn') {
        if(e.target.innerText == "Save this coin"){
            let save = await saveCoin(coinId);
            console.log('SAVED', save);
        }
        else {
            console.log("deleting")
            deleteSavedCoin(coinId)
        }
	} else {
		let moreInfo = await getCoinInfo(coinId);
		console.log('MORE INFO', moreInfo);
		let existingData = document.getElementById(`${coinId}_info`);
		console.log('EXISTING', existingData);
		if (existingData) {
			existingData.remove();
			extraInfo.style.display = 'none';
			extraInfo.innerHTML = '';
		} else {
			let info = createInfo(moreInfo);
			console.log('INFO', info);
			extraInfo.appendChild(info);
		}
	}
});

//get the saved coins
savedCoinsBtn.addEventListener('click', async ()=> {
    pagination.style.display = "none";
    await getSavedCoins()
}
);