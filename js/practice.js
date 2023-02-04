
'use strict'

console.log("Hello World");


let eachHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '6pm', '7pm'];

let seattle = {
  
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3, 
  cookieSalesArr: [], 
  dailyTotal: 0,
  calculateRandomNumberofCustomers: function() {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); 
  },

generateCookiesPerHour: function() {

for (let i = 0; i < eachHour.length; i++) {
  
  let customers = this.calculateRandomNumberofCustomers();
  let cookiesSoldThisHour = Math.ceil(customers * this.avg);
  this.cookieSalesArr.push(this.cookiesSoldThisHour);

  this.dailyTotal += cookiesSoldThisHour;
  }
  console.log(seattle.cookieSalesArr);
},
  render: function() {
    this.generateCookiesPerHour();
     
    let salesContainer = document.getElementById('seattleSales');
 
    let ulElement = document.createElement('ul');

    salesContainer.appendChild(ulElement);
 
    let liElement = document.createElement('li');
    
    liElement.textContent = `${hours[i]}:${this.cookiesSoldThisHour}`;
    ulElement.appendChild(liElement);
  }

  let totalLiElement = document.createElement('li')
  totalLiElement.textContent = `Total: ${this.dailyTotal} cookies`
  
}
seattle.generateCookiesPerHour();