'use strict'
// Data set of the hours of operation
let eachHour = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];

// Window into the DOM
let locationSection = document.getElementById('locations');

// Global function to calculate random customers based on minimum and maximum numbers
function randomBuyer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//SEATTLE
 let seattleLocation = {
  name: 'Seattle',
  min: 23,
  max: 65,
  averageSale: 6.3,
  cookiesSoldPerHour: [],
  totalSales: function() {
    let totalCookiesSold = 0;
    let randomNumberGenerator = 0;

    for (let i = 0; i < eachHour.length; i++) {
      randomNumberGenerator = Math.floor(randomBuyer(this.min, this.max) * this.averageSale);
      this.cookiesSoldPerHour.push(`${eachHour[i]}: ${randomNumberGenerator} cookies`);

      totalCookiesSold = randomNumberGenerator + totalCookiesSold;

      if (i === eachHour.length - 1) {
        this.cookiesSoldPerHour.push(`Total: ${totalCookiesSold}`);
      }
    }
  },
  renderList: function() {
    let articleElem = document.createElement('article');
    locationSection.appendChild(articleElem);

    let h3Elem = document.createElement('h3');
    h3Elem.innerText = this.name;
    articleElem.appendChild(h3Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < this.cookiesSoldPerHour.length; i++) {
      let liElem = document.createElement('li');
      liElem.innerText = this.cookiesSoldPerHour[i];
      ulElem.appendChild(liElem);
      }
    }
  };
  seattleLocation.totalSales();
  seattleLocation.renderList();
  
//TOKYO
let tokyoLocation = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  averageSale: 1.2,
  cookiesSoldPerHour: [],
  totalSales: function() {
    let totalCookiesSold = 0;
    let randomNumberGenerator = 0;

    for (let i = 0; i < eachHour.length; i++) {
      randomNumberGenerator = Math.floor(randomBuyer(this.min, this.max) * this.averageSale);
      this.cookiesSoldPerHour.push(`${eachHour[i]}: ${randomNumberGenerator} cookies`);

      totalCookiesSold = randomNumberGenerator + totalCookiesSold;

      if (i === eachHour.length - 1) {
        this.cookiesSoldPerHour.push(`Total: ${totalCookiesSold}`);
      }
    }
  },
  renderList: function() {
    let articleElem = document.createElement('article');
    locationSection.appendChild(articleElem);

    let h3Elem = document.createElement('h3');
    h3Elem.innerText = this.name;
    articleElem.appendChild(h3Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < this.cookiesSoldPerHour.length; i++) {
      let liElem = document.createElement('li');
      liElem.innerText = this.cookiesSoldPerHour[i];
      ulElem.appendChild(liElem);
      }
    }
  };
  tokyoLocation.totalSales();
  tokyoLocation.renderList();

// DUBAI
let dubaiLocation = {
  name: 'Dubai',
  min: 11,
  max: 38,
  averageSale: 3.7,
  cookiesSoldPerHour: [],
  totalSales: function() {
    let totalCookiesSold = 0;
    let randomNumberGenerator = 0;

    for (let i = 0; i < eachHour.length; i++) {
      randomNumberGenerator = Math.floor(randomBuyer(this.min, this.max) * this.averageSale);
      this.cookiesSoldPerHour.push(`${eachHour[i]}: ${randomNumberGenerator} cookies`);

      totalCookiesSold = randomNumberGenerator + totalCookiesSold;

      if (i === eachHour.length - 1) {
        this.cookiesSoldPerHour.push(`Total: ${totalCookiesSold}`);
      }
    }
  },
  renderList: function() {
    let articleElem = document.createElement('article');
    locationSection.appendChild(articleElem);

    let h3Elem = document.createElement('h3');
    h3Elem.innerText = this.name;
    articleElem.appendChild(h3Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < this.cookiesSoldPerHour.length; i++) {
      let liElem = document.createElement('li');
      liElem.innerText = this.cookiesSoldPerHour[i];
      ulElem.appendChild(liElem);
      }
    }
  };
  dubaiLocation.totalSales();
  dubaiLocation.renderList();

// LIMA
let limaLocation = {
  name: 'Lima',
  min: 2,
  max: 16,
  averageSale: 6.3,
  cookiesSoldPerHour: [],
  totalSales: function() {
    let totalCookiesSold = 0;
    let randomNumberGenerator = 0;

    for (let i = 0; i < eachHour.length; i++) {
      randomNumberGenerator = Math.floor(randomBuyer(this.min, this.max) * this.averageSale);
      this.cookiesSoldPerHour.push(`${eachHour[i]}: ${randomNumberGenerator} cookies`);

      totalCookiesSold = randomNumberGenerator + totalCookiesSold;

      if (i === eachHour.length - 1) {
        this.cookiesSoldPerHour.push(`Total: ${totalCookiesSold}`);
      }
    }
  },
  renderList: function() {
    let articleElem = document.createElement('article');
    locationSection.appendChild(articleElem);

    let h3Elem = document.createElement('h3');
    h3Elem.innerText = this.name;
    articleElem.appendChild(h3Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < this.cookiesSoldPerHour.length; i++) {
      let liElem = document.createElement('li');
      liElem.innerText = this.cookiesSoldPerHour[i];
      ulElem.appendChild(liElem);
      }
    }
  };
  limaLocation.totalSales();
  limaLocation.renderList();


// PARIS
let parisLocation = {
  name: 'Paris',
  min: 20,
  max: 38,
  averageSale: 6.3,
  cookiesSoldPerHour: [],
  totalSales: function() {
    let totalCookiesSold = 0;
    let randomNumberGenerator = 0;

    for (let i = 0; i < eachHour.length; i++) {
      randomNumberGenerator = Math.floor(randomBuyer(this.min, this.max) * this.averageSale);
      this.cookiesSoldPerHour.push(`${eachHour[i]}: ${randomNumberGenerator} cookies`);

      totalCookiesSold = randomNumberGenerator + totalCookiesSold;

      if (i === eachHour.length - 1) {
        this.cookiesSoldPerHour.push(`Total: ${totalCookiesSold}`);
      }
    }
  },
  renderList: function() {
    let articleElem = document.createElement('article');
    locationSection.appendChild(articleElem);

    let h3Elem = document.createElement('h3');
    h3Elem.innerText = this.name;
    articleElem.appendChild(h3Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < this.cookiesSoldPerHour.length; i++) {
      let liElem = document.createElement('li');
      liElem.innerText = this.cookiesSoldPerHour[i];
      ulElem.appendChild(liElem);
      }
    }
  };
  parisLocation.totalSales();
  parisLocation.renderList();