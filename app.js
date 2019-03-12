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



//------------------------------------------1st and Pike Code (Not dry)-------------------------------------------------------------------------------------------


// Generates a random number of customers for Pike
function getCustomerNumberPike(){
    var customerNumberPike = getRandomIntInclusive(firstAndPike.minCust, firstAndPike.maxCust);
    return customerNumberPike;
}






var hourlyCookieListPike = [];


// Gets the amount of cookies for each working hour and stores in onto an array
for (var i = 0; i < numberOfHours; i++){
    var hourlyCookieCountPike = numberOfCookiesSold(getCustomerNumberPike(), firstAndPike.avgCook)
    
    hourlyCookieListPike.push(hourlyCookieCountPike);
}


var pikeTimeAndCookieArray = [];


// Concatinates the cookie count and the time they got sold
for (var j = 0; j < numberOfHours; j++){
    var pikeTimeAndCookies = workingTimeArray[j] + ': ' + hourlyCookieListPike[j] + ' cookies';
    pikeTimeAndCookieArray.push(pikeTimeAndCookies);
}



var total = 0;



// Calculates total amount of cookies and add
for (var k = 0; k < numberOfHours; k++){
    
    total = total + hourlyCookieListPike[k];

}
pikeTimeAndCookieArray.push('Total: ' + total + ' cookies');







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

 



//---------------------------------------------------------------SeaTac Airport (Not Dry)-----------------------------------------------------------------

// Generates a random number of customers for Pike
function getCustomerNumberSeatac(){
    var customerNumberSeatac = getRandomIntInclusive(seaTac.minCust, seaTac.maxCust);
    return customerNumberSeatac;
}

var hourlyCookieListSeatac = [];


// Gets the amount of cookies for each working hour and stores in onto an array
for (var i = 0; i < numberOfHours; i++){
    var hourlyCookieCountSeatac = numberOfCookiesSold(getCustomerNumberSeatac(), seaTac.avgCook)
    
    hourlyCookieListSeatac.push(hourlyCookieCountSeatac);
}




var seatacTimeAndCookieArray = [];

// Concatinates the cookie count and the time they got sold
for (var j = 0; j < numberOfHours; j++){
    var seatacTimeAndCookies = workingTimeArray[j] + ': ' + hourlyCookieListSeatac[j] + ' cookies';
    seatacTimeAndCookieArray.push(seatacTimeAndCookies);
}







var total2 = 0;

// Calculates total amount of cookies and add
for (var k = 0; k < numberOfHours; k++){
    
    total2 = total2 + hourlyCookieListSeatac[k];

}
seatacTimeAndCookieArray.push('Total: ' + total2 + ' cookies');
console.log(seatacTimeAndCookieArray);





// Showing items on the page
var seatac_ul = document.getElementById('seaTac');

var seatacTitle_li = document.createElement('h4');

seatacTitle_li.textContent = 'SeaTac Airport';

seatac_ul.appendChild(seatacTitle_li);


for (var l = 0; l < numberOfHours + 1; l++){
    var seatac_li = document.createElement('li');
    seatac_li.textContent = seatacTimeAndCookieArray[l];
    seatac_ul.appendChild(seatac_li);
}





//---------------------------------------------------------------Seattle Center (Not Dry)-----------------------------------------------------------------

// Generates a random number of customers for Pike    
function getCustomerNumberCenter(){
    var customerNumberCenter = getRandomIntInclusive(seaCenter.minCust, seaCenter.maxCust);
    return customerNumberCenter;
}

var hourlyCookieListCenter = [];


// Gets the amount of cookies for each working hour and stores in onto an array
for (var i = 0; i < numberOfHours; i++){
    var hourlyCookieCountCenter = numberOfCookiesSold(getCustomerNumberCenter(), seaCenter.avgCook)
    
    hourlyCookieListCenter.push(hourlyCookieCountCenter);
}




var centerTimeAndCookieArray = [];

// Concatinates the cookie count and the time they got sold
for (var j = 0; j < numberOfHours; j++){
    var centerTimeAndCookies = workingTimeArray[j] + ': ' + hourlyCookieListCenter[j] + ' cookies'; 
    centerTimeAndCookieArray.push(centerTimeAndCookies);
}







var total2 = 0;

// Calculates total amount of cookies and add
for (var k = 0; k < numberOfHours; k++){
    
    total2 = total2 + hourlyCookieListCenter[k];

}
centerTimeAndCookieArray.push('Total: ' + total2 + ' cookies');
console.log(centerTimeAndCookieArray);





// Showing items on the page
var center_ul = document.getElementById('seaCenter');

var centerTitle_li = document.createElement('h4');

centerTitle_li.textContent = 'Seattle Center';

center_ul.appendChild(centerTitle_li);


for (var l = 0; l < numberOfHours + 1; l++){
    var center_li = document.createElement('li');
    center_li.textContent = centerTimeAndCookieArray[l];
    center_ul.appendChild(center_li);
}










console.log(seatacTimeAndCookieArray);
console.log(centerTimeAndCookieArray);