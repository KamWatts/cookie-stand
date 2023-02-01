'use strict'
let eachHour = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];


let tableHead = document.getElementById('tableHead');

let seattle = new cookieStore('seattle', 23, 65, 6.3);
let tokyo = new cookieStore('tokyo', 3, 24, 1.2);
let dubai = new cookieStore('dubai', 11, 38, 3.7);
let lima = new cookieStore('lima', 2, 16, 4.6);
let  paris = new cookieStore('paris', 20, 38, 4.6);

function cookieStore(name, min, max, averageSale) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.averageSale = averageSale;
  this.cookiesSoldEachHour = [],
  this.totalSale = 0;

  this.cookiesSold = function() {
    let x = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    return Math.floor(x * this.averageSale);
  }

  this.anyGivenHour = function() {
  
    for (let i = 0; i < eachHour.length; i++) {
      let cookiesPerHour = this.cookiesSold();
      this.cookiesSoldEachHour.push(cookiesPerHour);
    }
  }
    
  this.render = function() {
    let cookieContainer = document.getElementById('tableHead');
    let cookieTable = document.createElement('tr');
    let cookies = document.createElement('td');
    cookies.textContent = `${this.cookiesSoldEachHour}`;
    cookieContainer.appendChild(cookieTable);
    cookieTable.appendChild(cookies);
  }
}
console.log(seattle.cookiesSoldEachHour);

grandTotalAverage();
console.log(grandTotalAverage());

// create a grandTotal function
// inside that function create a for loop that increments through anyGivenHour for each city
// the for loop should increment the this.totalSale object
// adds the totalSale value for each city

//New store using constructor function called with `new` keyword
