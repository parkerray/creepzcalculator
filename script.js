const loomiPrice = document.querySelector("#loomiPrice");
const ethPrice = document.querySelector("#ethPrice");
const floorPrice = document.querySelector("#floorPrice");
const firstProfit = document.querySelector("#firstProfit");
const nextProfit = document.querySelector("#nextProfit");
const firstLoomi = document.querySelector("#firstLoomi");
const nextLoomi = document.querySelector("#nextLoomi");

const firstMintCard = firstProfit.closest(".card");
const otherMintCard = otherProfit.closest(".card");
const firstLoomiCard = firstLoomi.closest(".card");
const otherLoomiCard = otherLoomi.closest(".card");

let marketLoomi = 0;
let marketEthereum = 0;
let marketFloor = 0;

let firstMintProfit = 0;
let otherMintProfit = 0;
let firstLoomiWithdraw = 0;
let otherLoomiWithdraw = 0;

GetMarketData();

function GetMarketData() {
    marketLoomi = "0.5";
    loomiPrice.innerText = marketLoomi;
}

function Calculate(loomi, eth, floor) {

    let secondarySale = floor * .9;
    let loomiEthValue = eth / loomi;
    let tenThousandLoomi = loomiEthValue * 10000;
    let fifteenThousandLoomi = loomiEthValue * 15000;

    firstMintProfit = secondarySale - tenThousandLoomi;
    otherMintProfit = secondarySale - fifteenThousandLoomi;

    firstLoomiWithdraw = tenThousandLoomi;
    otherLoomiWithdraw = fifteenThousandLoomi;



    if (firstMintProfit > firstLoomiWithdraw) {
        firstMintCard.classList.add("green");
        firstLoomiCard.classList.add("red");
    } else {
        firstMintCard.classList.add("red");
        firstLoomiCard.classList.add("green");
    }

    if (otherMintProfit > otherLoomiWithdraw) {
        otherMintCard.classList.add("green");
        otherLoomiCard.classList.add("red");
    } else {
        otherMintCard.classList.add("red");
        otherLoomiCard.classList.add("green");
    }

}