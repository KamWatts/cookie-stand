"use strict";

let eachHour = [
  "6am ",
  "7am ",
  "8am ",
  "9am ",
  "10am ",
  "11am ",
  "12pm ",
  "1pm ",
  "2pm ",
  "3pm ",
  "4pm ",
  "5pm ",
  "6pm ",
  "7pm ",
];


let tableSource = document.getElementById("TableSource");


let locationBody = document.querySelector("tbody");
console.log(locationBody);

let locationHead = document.querySelector("thead");
console.log(locationHead);

let locationFoot = document.querySelector("tfoot");
console.log(locationFoot);


function CookieStore(name, min, max, averageSale) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.averageSale = averageSale;
  this.cookiesSoldEachHour = [];
  this.totalSale = 0;

 
  this.cookiesSold = function () {
    let x = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    return Math.floor(x * this.averageSale);
  };
  
  this.anyGivenHour = function () {
    for (let i = 0; i < eachHour.length; i++) {
      let cookiesPerHour = this.cookiesSold();
      this.cookiesSoldEachHour.push(cookiesPerHour);
    }
    this.anyGivenDay();
  };

  this.anyGivenDay = function () {
    let total = 0;

    for (let i = 0; i < this.cookiesSoldEachHour.length; i++) {
      total += this.cookiesSoldEachHour[i];
    }
    return total;
  };

  
  this.render = function () {
    let cookieTable = document.createElement("tr");
    let cookieData = document.createElement("td");

    cookieData.textContent = `${this.name}`;

    locationBody.appendChild(cookieTable);
    cookieTable.appendChild(cookieData);

    for (let i = 0; i < this.cookiesSoldEachHour.length; i++) {
      let cookiesSoldData = document.createElement("td");

      cookiesSoldData.textContent = this.cookiesSoldEachHour[i];

      cookieTable.appendChild(cookiesSoldData);
    }
    let dailyTotals = 0;

    for (let i = 0; i < eachHour.length; i++) {
      dailyTotals += this.cookiesSoldEachHour[i];
    }
    console.log(dailyTotals);
    let allGrandTotals = document.createElement('td');
    allGrandTotals.textContent = dailyTotals;
    cookieTable.appendChild(allGrandTotals);
  }
}

let seattle = new CookieStore("seattle", 23, 65, 6.3);
let tokyo = new CookieStore("tokyo", 3, 24, 1.2);
let dubai = new CookieStore("dubai", 11, 38, 3.7);
let lima = new CookieStore("lima", 2, 16, 4.6);
let paris = new CookieStore("paris", 20, 38, 4.6);

let theStores = [seattle, tokyo, dubai, lima, paris];


function renderAllStores() {
  for (let i = 0; i < theStores.length; i++) {
    theStores[i].anyGivenHour();
    
    theStores[i].render();
  }
}
renderAllStores();



function tableHeader() {
 
  let row1 = document.createElement("tr");
  locationHead.appendChild(row1);

  
  let locationHeader = document.createElement("th");
  locationHeader.innerText = "Locations";

  
  row1.appendChild(locationHeader);
  for (let i = 0; i < eachHour.length; i++) {
    let thElem = document.createElement("th");
    thElem.innerText = eachHour[i];
    row1.appendChild(thElem);
  }
  let totals = document.createElement('td');
  totals.textContent = "Totals";
  row1.appendChild(totals);
}

tableHeader();

function tableFooter() {
 
  let theFooter = document.createElement("tr");
  
  theFooter.innerText = "Hourly Totals";
  theFooter.id = "tableFooter";
  
  locationFoot.appendChild(theFooter);

  
  let dailyGrandTotal = 0;

  
  for (let i = 0; i < theStores.length; i++) {
    for (let j = 0; j < theStores[i].cookiesSoldEachHour.length; j++) {
      dailyGrandTotal += theStores[i].cookiesSoldEachHour[j];
    }
  }
  

  let hourlyTotalForEachStore = Array(14).fill(0);

  for (let i = 0; i < eachHour.length; i++) {
    let hourlyTotal = 0;
    for (let j = 0; j < theStores.length; j++) {
      hourlyTotal += theStores[j].cookiesSoldEachHour[i];
    }
    console.log((hourlyTotalForEachStore[i] = hourlyTotal));

    let printTotals = document.createElement("td");
    printTotals.textContent = hourlyTotal;
    theFooter.appendChild(printTotals);
  }
  let finallyTheLastTd = document.createElement('td');
  finallyTheLastTd.textContent = dailyGrandTotal;
  theFooter.appendChild(finallyTheLastTd);

}
tableFooter();

let storeForm = document.querySelector('form');



let handleSubmit = function(event) {
  
  event.preventDefault();

  
  let newLocation = event.target.storeName.value;
  let newMin = event.target.theMin.value;
  let newMax = event.target.theMax.value;
  let newAverage = event.target.aveSales.value;

  let createNewShop = new CookieStore(newLocation, newMin, newMax, newAverage);

  theStores.push(createNewShop);
  createNewShop.anyGivenDay();
  createNewShop.anyGivenHour();
  createNewShop.render();
  document.getElementById('tableFooter').remove();
  tableFooter();
}

storeForm.addEventListener('submit', handleSubmit);