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

// Window into the DOM
let tableSource = document.getElementById("TableSource");
//console.log(tableHead);

let locationBody = document.querySelector("tbody");
console.log(locationBody);

let locationHead = document.querySelector("thead");
console.log(locationHead);

let locationFoot = document.querySelector("tfoot");
console.log(locationFoot);

// Constructor Function
function CookieStore(name, min, max, averageSale) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.averageSale = averageSale;
  this.cookiesSoldEachHour = [];
  this.totalSale = 0;

  // Calculates cookies sold per HOUR
  this.cookiesSold = function () {
    let x = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    return Math.floor(x * this.averageSale);
  };
  // Loops through each hour of operation
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

  // Renders tr and td onto the DOM
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

//render all the stores in a loop to calculate all of the cookies sold at each location
function renderAllStores() {
  for (let i = 0; i < theStores.length; i++) {
    theStores[i].anyGivenHour();
    // loops through each store and the amount of cookies sold at each.
    theStores[i].render();
  }
}
renderAllStores();

//create a TableHeader function
// Table Header should include the city names
//create a tr element
// append row1 to the created tr element

function tableHeader() {
  // 1. Create Element
  let row1 = document.createElement("tr");
  locationHead.appendChild(row1);

  // 2. Give it content
  let locationHeader = document.createElement("th");
  locationHeader.innerText = "Locations";

  // 3. Append it to the parent
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
// 4. Call the function
tableHeader();

// create a TableFooter function

function tableFooter() {
  // 1. Create Element
  let theFooter = document.createElement("tr");
  // 2. Give it content
  theFooter.innerText = "Hourly Totals";
  theFooter.id = "tableFooter";
  // 3. Append it to the parent
  locationFoot.appendChild(theFooter);

  // let dailyStoreTotals = 0;
  let dailyGrandTotal = 0;

  // This loop calculates the grand total for each store
  for (let i = 0; i < theStores.length; i++) {
    for (let j = 0; j < theStores[i].cookiesSoldEachHour.length; j++) {
      dailyGrandTotal += theStores[i].cookiesSoldEachHour[j];
    }
  }
  // console.log(dailyGrandTotal);

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

/* for (let i = 0; i < eachHour.length; i++) {
  for (let j = 0; j < theStores.length; j++) {
    console.log(theStores[j].cookiesSoldEachHour);
 }
} 
//for (let i = 0; i < cookiesSoldEachHour; i++) {}
// Create Prototype method to add methods to all instances of theStores
/* theStores.prototype.sellTheCookies = function() {
  let totalAmountofCookies = 0;
  let randomNumber = 0;
  for (let i = 0; i < eachHour.length; i++) {
    randomNumber = Math.floor(randomNumber(this.min, this.max));
  }
}
*/

// create a grandTotal function
// inside that function create a for loop that increments through anyGivenHour for each city
// the for loop should increment the this.totalSale object
// adds the totalSale value for each city

//New store using constructor function called with `new` keyword.
