import { getCoinInfo } from "./functions.js";
import {cardList} from '../script.js'
import {createCard} from './auxFunct.js'

const API_KEY ='2ea5d8c075msha2a003018020496p124a72jsnccc7fb2b4933'
const url = 'https://json-store.p.rapidapi.com/';
let reqId = [] //I tried to get the information from the API  I am using (see line 46) but there was no functionality to delete coins saved. Every trial I did with my API was stored so I had to use this approach until I find another API with free POST/PUT

async function saveCoin(coinId) {
    let coin = coinId.replace("_btn", "")
    const options = {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'json-store.p.rapidapi.com'
        },
        body: JSON.stringify({
            name: coin
        })
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        reqId.push({...result, coinId: coin})
        console.log("REQID", reqId)
        return result
    } catch (error) {
        console.error(error);
    }

}

async function getSavedCoins(){
    console.log("NEW arraY", reqId)
    try {
        const coinPromises = reqId.map((coinSaved) => getCoinInfo(coinSaved.coinId, coinSaved.id));
        const coinData = await Promise.all(coinPromises);
        console.log("COIN DATA", coinData)  
        // return coinData
          cardList.innerHTML = ""
    if (coinData.length !== 0) {
        coinData.forEach((coin) => {
            let card = createCard(coin);
            cardList.appendChild(card);
        });

} else {
    cardList.innerHTML = `<h2>You didn't save any crypto yet</h2>`;
}
    } catch (error) {
        console.error(error);
    }
}

async function deleteSavedCoin(coinId){
    console.log("COin id INSIDE DELETE", coinId)
    let id = coinId.replace("_btn", "")
    let arrayWithoutCoin = reqId.filter(coin => coin.coinId != id)

console.log("awc", arrayWithoutCoin)
reqId = arrayWithoutCoin;
    getSavedCoins()
}

export {saveCoin, getSavedCoins, deleteSavedCoin}

  // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '4facd9856emsh5c536c078bdb96ep1bcbc7jsnc96a825d74fc',
    //         'X-RapidAPI-Host': 'json-store.p.rapidapi.com'
    //     }
    // };
    
    // try {
    //     const response = await fetch(url, options);
    //     const result = await response.json();
    //     console.log(result);
        //[{"id":"661f07626cf79c23d8ad8bd8","name":"Example"},{"id":"661fee956cf79c23d865d2c7","name":"Example"},{"id":"661fef2ceefe3c596c153ace","name":"Example"},{"id":"661feff0eefe3c596c16dcaa","name":"Example"},{"id":"661ff0336cf79c23d8692384","name":"coinName1"},{"id":"661ff03794917367684a7a5d","name":"coinName1"},{"id":"661ff1c66cf79c23d86c576a","name":"coinName1"}]
    // } catch (error) {
    //     console.error(error);
    // }