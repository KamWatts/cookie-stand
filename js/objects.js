'use strict'
// Data set of the hours of operation
let eachHour = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];

// Window into the DOM
let locations = document.getElementById('locations');

//SEATTLE
 let seattleLocation = {
  name: 'Seattle',
  min: 23,
  max: 65,
  averageSale: 6.3,
  randomArr: [],
  renderList: function() {
    let ul = document.createElement('ul');
    let li = document.createElement('li');
  
    for (let i = 0; this.eachHour.length; i++) {
      li.textContent = this.eachHour[i];
      ul.appendChild('li')
    }
    locations.appendChild(ul);
  },

  cookiesSold: function() {
    let x = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    return Math.floor(x * this.averageSale);
  },
  
    anyGivenHour: function() {
  
      for (let i = 0; i < eachHour.length; i++) {
        let cookiesPerHour = this.cookiesSold();
        this.randomArr.push(eachHour[i]);
        this.randomArr.push(cookiesPerHour);
      }
    }
  }
  seattleLocation.anyGivenHour()

//TOKYO
let tokyoLocation = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  averageSale: 1.2,
  randomArr: [],
  renderList: function() {
    let ul = document.createElement('ul');
    let li = document.createElement('li');
  
    for (let i = 0; this.eachHour.length; i++) {
      li.textContent = this.eachHour[i];
      ul.appendChild('li')
    }
    locations.appendChild(ul);
  },

  cookiesSold: function() {
    let x = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    return Math.floor(x * this.averageSale);
  },
  
    anyGivenHour: function() {
  
      for (let i = 0; i < eachHour.length; i++) {
        let cookiesPerHour = this.cookiesSold();
        this.randomArr.push(eachHour[i]);
        this.randomArr.push(cookiesPerHour);
      }
    }
  }
  tokyoLocation.anyGivenHour()

// DUBAI
let dubaiLocation = {
  name: 'Dubai',
  min: 11,
  max: 38,
  averageSale: 3.7,
  randomArr: [],
  renderList: function() {
    let ul = document.createElement('ul');
    let li = document.createElement('li');
  
    for (let i = 0; this.eachHour.length; i++) {
      li.textContent = this.eachHour[i];
      ul.appendChild('li')
    }
    locations.appendChild(ul);
  },

cookiesSold: function() {
  let x = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  return Math.floor(x * this.averageSale);
},

  anyGivenHour: function() {

    for (let i = 0; i < eachHour.length; i++) {
      let cookiesPerHour = this.cookiesSold();
      this.randomArr.push(eachHour[i]);
      this.randomArr.push(cookiesPerHour);
    }
  }
}


// LIMA
let limaLocation = {
  name: 'Lima',
  min: 2,
  max: 16,
  averageSale: 4.6,
  randomArr: [],
  renderList: function() {
    let ul = document.createElement('ul');
    let li = document.createElement('li');
  
    for (let i = 0; this.eachHour.length; i++) {
      li.textContent = this.eachHour[i];
      ul.appendChild('li')
    }
    locations.appendChild(ul);
  },

cookiesSold: function() {
  let x = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  return Math.floor(x * this.averageSale);
  },

  anyGivenHour: function() {

    for (let i = 0; i < eachHour.length; i++) {
      let cookiesPerHour = this.cookiesSold();
      this.randomArr.push(eachHour[i]);
      this.randomArr.push(cookiesPerHour);
    }
  }
}


// PARIS
let parisLocation = {
  name: 'Paris',
  min: 20,
  max: 38,
  averageSale: 4.6,
  randomArr: [],
  renderList: function() {
    let ul = document.createElement('ul');
    let li = document.createElement('li');
  
    for (let i = 0; this.eachHour.length; i++) {
      li.textContent = this.eachHour[i];
      ul.appendChild('li')
    }
    locations.appendChild(ul);
  },

  cookiesSold: function() {
    let x = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    return Math.floor(x * this.averageSale);
  },

  anyGivenHour: function() {
      
      for (let i = 0; i < eachHour.length; i++) {
        let cookiesPerHour = this.cookiesSold();
        this.randomArr.push(eachHour[i]);
        this.randomArr.push(cookiesPerHour);
    }
  }
}


seattleLocation.anyGivenHour()
tokyoLocation.anyGivenHour()
dubaiLocation.anyGivenHour()
limaLocation.anyGivenHour()
parisLocation.anyGivenHour()
console.log(locations.renderList());