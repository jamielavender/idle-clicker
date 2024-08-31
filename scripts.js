let points = 0;
let clickPower = 1;
let autoclickPower = 0;
let clickUpgradeCost = 20;
let autoclickUpgradeCost = 100;



const pointsText = document.querySelector("#points");
const clickPowerText = document.querySelector("#clickPower");
const autoclickPowerText = document.querySelector("#autoclickPower");
const text = document.querySelector("#text");

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");


button1.onclick = click;
button2.onclick = clickUpgrade;
button3.onclick = autoclickUpgrade;




function click() {
    points += clickPower;
    pointsText.innerText = points;
};


function clickUpgrade() {
    if (points >= clickUpgradeCost) {
        points -= clickUpgradeCost;
        clickPower *= 2;
        clickUpgradeCost *= 2;
        clickPowerText.innerText = clickPower;
    }  else {
        alert("You don't have enough points to make this purchase. You need " + clickUpgradeCost + " points to purchase this upgrade.");
    }
};

setInterval(autoclick, 1000);

function autoclick() {
        points += autoclickPower;
        pointsText.innerText = points;
};

function autoclickUpgrade() {
    if (points >= autoclickUpgradeCost) {
        points -= autoclickUpgradeCost;
        if (autoclickPower == 0) {
            autoclickPower += 1;
        } else {
            autoclickPower *= 2;
        }
        autoclickUpgradeCost *= 2;
        autoclickPowerText.innerText = autoclickPower;
    } else {
        alert("You don't have enough points to make this purchase. You need " + autoclickUpgradeCost + " points to purchase this upgrade.");
    }
};