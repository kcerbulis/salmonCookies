'use strict';



// Pike stores object
var firstAndPike = {
    minCust: 23,
    maxCust: 65,
    avgCook: 6.3
};

// SeaTac Airport object
var seaTac = {
    minCust: 3,
    maxCust: 24,
    avgCook: 1.2
};

// Seattle Center object
var seaCenter = {
    minCust: 11,
    maxCust: 38,
    avgCook: 3.7  
};

// Capitol Hill object
var capHill = {
    minCust: 20,
    maxCust: 38,
    avgCook: 2.3  
};

// Alki object
var alki = {
    minCust: 2,
    maxCust: 16,
    avgCook: 4.6  
};

// An array that stores all of stores and their objects
var storeArray = [firstAndPike, seaTac, seaCenter, capHill, alki];
var storeNum = storeArray.length;
console.log(storeArray);
console.log(storeNum);










// Stores the string for working times
var workingTimeArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var numberOfHours = workingTimeArray.length;











// Gives a random number between parameters inclusive
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }




// Simulated number of cookies sold (rounded down)
function numberOfCookiesSold(customerNumber, avgCookies){
    var cookiesSold = customerNumber * avgCookies;
    return Math.floor(cookiesSold);
}



/* 
------------------------------------------------Dry code test----------------------------------------------------------------------------------
*/







// Contains an array of respective store customers every hour
var customerArray = [];


// Calculates customers for every hour and puts it onto an array
for (var a = 0; a < storeNum; a++){
    var zzz = getRandomIntInclusive(storeArray[a].minCust, storeArray[a].maxCust)
    customerArray.push(zzz);
}
console.log(customerArray);










// Contains an array of cookies sold every hour for each store
var cookiesSoldArray = [];

// Calculates number of cookies sold by each store per hour and put it onto n array
for (var b = 0; b < storeNum; b++){
    var vvv = numberOfCookiesSold(customerArray[b], storeArray[b].avgCook)
    cookiesSoldArray.push(vvv);
}
console.log(cookiesSoldArray);












var fullCookieDayArray = [];












































/* 
----------------------------------------------------------------------------------------------------------------------------------------------
*/





// Generates a random number of customers for Pike
function getCustomerNumberPike(){
    var customerNumberPike = getRandomIntInclusive(firstAndPike.minCust, firstAndPike.maxCust);
    return customerNumberPike;
}











var hourlyCookieList = [];


// Gets the amount of cookies for each working hour and stores in onto an array
for (var i = 0; i < numberOfHours; i++){
    var hourlyCookieCount = numberOfCookiesSold(getCustomerNumberPike(), firstAndPike.avgCook)
    console.log('The sold number of cookies in an hour was ' + hourlyCookieCount);
    
    hourlyCookieList.push(hourlyCookieCount);
}


var pikeTimeAndCookieArray = [];


// Concatinates the cookie count and the time they got sold
for (var j = 0; j < numberOfHours; j++){
    var pikeTimeAndCookies = workingTimeArray[j] + ': ' + hourlyCookieList[j] + ' cookies';
    pikeTimeAndCookieArray.push(pikeTimeAndCookies);
}





var total = 0;




// Calculates total amount of cookies and add
for (var k = 0; k < numberOfHours; k++){
    
    total = total + hourlyCookieList[k];

}
pikeTimeAndCookieArray.push('Total: ' + total + ' cookies');
console.log(total);
console.log(pikeTimeAndCookieArray);






// Showing items on the page
var pike_ul = document.getElementById('pike');

var pikeTitle_li = document.createElement('h4');

pikeTitle_li.textContent = '1st and Pike';

pike_ul.appendChild(pikeTitle_li);


for (var l = 0; l < numberOfHours + 1; l++){
    var pike_li = document.createElement('li');
    pike_li.textContent = pikeTimeAndCookieArray[l];
    pike_ul.appendChild(pike_li);
}

 
