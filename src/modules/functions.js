import { formatDate, createCard } from './auxFunct.js';

const API_KEY = 'CG-BqL849ZvLQBrSpDkLwNos2Ln';
const BASE_URL = 'https://api.coingecko.com/api/v3';
const headers = {
	accept: 'application/json',
	'x-cg-demo-api-key': API_KEY
};

async function getSearch(input) {
    try {
	let coins = [];
	let searchResults = await fetch(`${BASE_URL}/search?query=${input}&limit=10`, {
		method: 'GET',
		headers: headers
	})
		.then((response) => response.json())
		.catch((err) => console.error(err));
	console.log('SEARCH', searchResults);
	let coinArray = searchResults.coins;
	coinArray.forEach((coin, i) => {
		if (i < 10) {
			let info = {
				name: coin.name,
				id: coin.id,
				img: coin.large ? coin.large : './public/placeholder.png'
			};
			coins.push(info);
		}
	});
	console.log('coins', coins);
	return coins;
} catch (err) {
    console.log("ERROR in getSearch function", err)
 }
}

async function getCoinInfo(coinId, saveId = null) {
    try {
	let loadInfo = await fetch(
		`${BASE_URL}/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
		{
			method: 'GET',
			headers: headers
		}
	)
		.then((response) => response.json())
		.catch((err) => console.error(err));
	let extraData = {
		id: coinId,
		currentPrice: loadInfo.market_data.current_price.usd,
		marketCap: loadInfo.market_data.market_cap.usd,
		totalVolume: loadInfo.market_data.total_volume.usd,
		symbol: loadInfo.symbol,
		name: loadInfo.name,
        img: loadInfo.image.large,
        saveId: saveId
	};
	return extraData;
} catch (err) {
   console.log("ERROR in getCoinInfo function", err)
}
}

async function loadContent(page = 1) {
	let loadResults = await fetch(`${BASE_URL}/coins/markets?vs_currency=usd&per_page=12&page=${page}`, {
		method: 'GET',
		headers: headers
	})
		.then((response) => response.json())
		.catch((err) => console.error(err));
	console.log('LOAD', loadResults);

	let mappedResult = loadResults.map((coin) => {
		let info = {
			name: coin.name,
			id: coin.id,
			img: coin.image ? coin.image : './public/placeholder.png',
			marketCap: coin.market_cap,
			currentPrice: coin.current_price,
			totalVolume: coin.total_volume,
			symbol: coin.symbol
		};
		return info;
	});
	return mappedResult;
}

export { getSearch, loadContent, getCoinInfo };
