'use strict'

let eachHour = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];

let locations = document.getElementById('locations');

/* let seattleLocation = {
  name: 'Seattle',
  min: 23,
  max: 65,
  averageSale: 6.3
}

let tokyoLocation = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  averageSale: 1.2
}

let dubaiLocation = {
  name: 'Dubai',
  min: 11,
  max: 38,
  averageSale: 3.7
}

let limaLocation = {
  name: 'Lima',
  min: 2,
  max: 16,
  averageSale: 4.6
} */

let parisLocation = {
  name: 'Paris',
  min: 20,
  max: 38,
  averageSale: 4.6,
  randomArr: [],

  cookiesSold: function() {
    let x = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    return Math.floor(x * this.averageSale);
  },

  anyGivenHour: function() {
      
      for (let i = 0; i < eachHour.length; i++) {
        let cookiesPerHour = this.cookiesSold();
        this.randomArr.push(eachHour[i]);
        console.log(cookiesPerHour);
        this.randomArr.push(cookiesPerHour);
        console.log(this.randomArr);


  
        

    }
  }
}
parisLocation.anyGivenHour();

console.log(parisLocation.cookiesSold());

// Math.random() inclusive method:
// return Math.floor(Math.random() * (max - min + 1) + min)
