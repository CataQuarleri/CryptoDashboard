function formatDate(date){
    date = new Date()
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy= date.getFullYear();
    let searchDate = `${dd}/${mm}/${yyyy}`
    console.log("date", searchDate)
    return searchDate
}


function createCard(oneCoin){
console.log("card SAVEDID", oneCoin.saveId)
    let card = document.createElement("div")
    card.setAttribute("id", oneCoin.id)
    card.setAttribute("class", "cryptoCard")
    card.innerHTML = `<img src=${oneCoin.img} id=${oneCoin.id} alt="Coin Icon" class="coinIcon">
     <div class="cryptoName" id=${oneCoin.id}>${oneCoin.name}</div>
     <button id="${oneCoin.id}_btn" class="saveBtn">${oneCoin.saveId ? "Delete" : "Save this coin"}</button>
     <div id="extraInfo_${oneCoin.id}"></div>`
    return card
 }

 function createInfo(coinData){

    let info = document.createElement("div")
    info.setAttribute("id", `${coinData.id}_info`)
    info.className = "extraInfo"
    info.style.display = "block";
    info.innerHTML = 
    `  <div class="infoRow">
    <div class="infoLabel">Current Price:</div>
    <div class="infoValue">U$D${coinData.currentPrice}</div>
</div>
<div class="infoRow">
    <div class="infoLabel">Market Cap:</div>
    <div class="infoValue">U$D${coinData.marketCap}</div>
</div>
<div class="infoRow">
    <div class="infoLabel">Total Volume:</div>
    <div class="infoValue">${coinData.symbol} ${coinData.totalVolume}</div>
</div>`
      return info
    }

export {formatDate, createCard, createInfo}