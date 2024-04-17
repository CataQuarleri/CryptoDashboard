import { getSearch, loadContent, getMoreInfo } from './modules/functions.js';
import { createCard, createInfo } from './modules/auxFunct.js';

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const cardList = document.getElementById('cryptoList');
const pagination = document.getElementById('pagination');
const title = document.querySelector('h1');

//Firts Load
window.addEventListener('DOMContentLoaded', async () => {
	let content = await loadContent();
	content.forEach((coin) => {
		let card = createCard(coin);
		cardList.appendChild(card);
	});
});

//Back home
title.addEventListener('click', () => window.location.reload());


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

//See more info in card
cardList.addEventListener('click', async (e) => {
	let extraInfo = document.getElementById('extraInfo');
	console.log('E CARD', extraInfo);
    let moreInfo = await getMoreInfo(e.target.id)
    console.log("MORE INFO", moreInfo)
	let info = createInfo(moreInfo);
	console.log('INFO', info);
	extraInfo.appendChild(info);
});
