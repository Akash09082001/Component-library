
import myData from "./cardData.js";

let output = myData.map(showData).join("");
let dataCards = document.getElementById("data-container");
dataCards.innerHTML = output;

function showData(myData) {
    let listCard = `
        <div class="flex w-full max-w-xs p-3 gap-3 bg-white shadow rounded-md">
            <a href="${myData.cardName}" class="flex flex-col w-full">
                <div class="flex h-48 w-full rounded-md bg-gray-300">
                    <img class='flex object-contain w-full h-full' src=${myData.cardImg} alt="" />
                </div>
                <div class="flex w-full items-center justify-center">
                    <h3 class='flex font-bold text-base w-full'>${myData.cardName}</h3>
                </div>
            </a>
        </div>
    `;
    return listCard;
}

function showCard(myData) {
    return `
      <li class="flex w-full">
          <a href="${myData.cardName}" class="flex px-3 py-2 w-full transition-all hover:bg-white rounded-lg">${myData.cardName}</a>
      </li>
    `;
  }
  
  window.onload = function () {
    const output = myData.map(showCard).join("");
    const cardContainer = document.getElementById("card-container");
    if (cardContainer) {
      cardContainer.innerHTML = output;
    } else {
      console.error('Could not find card container with ID "card-container"');
    }
  };

