'use strict';





// ------------------------------------------------------Test Code----------------------------------------------------------------------------





var storeObjectArray = [];


// Constructor function for creating store objects
function Store(name, minCust, maxCust, avgCook){
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCook = avgCook;

    storeObjectArray.push(this);
};



var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);


var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);


var seaCenter = new Store('Seattle Center', 11, 38, 3.7);


var capHill = new Store('Capitol Hill', 20, 38, 2.3);


var alki = new Store('Alki', 2, 16, 4.6);


var testTable = new Store('Test table', 70, 13, 2.3);






















// ---------------------------------------------------------------------------------------------------------------------------------------------
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











for (var z = 0; z < storeNum; z++){



    // Generates a random number of customers
    function getCustomerNumber(){
        var customerNumber = getRandomIntInclusive(storeObjectArray[z].minCust, storeObjectArray[z].maxCust);
        return customerNumber;
    }

    var hourlyCookieList = [];


    // Gets the amount of cookies for each working hour and stores in onto an array
    for (var i = 0; i < numberOfHours; i++){
        var hourlyCookieCount = numberOfCookiesSold(getCustomerNumber(), storeObjectArray[z].avgCook)
        
        hourlyCookieList.push(hourlyCookieCount);
    }

    //Pushes all day cookies sold onto another array to get an array with all store and all cookies
    allStoreCookiesSold.push(hourlyCookieList);



    var timeAndCookieArray = [];

    // Concatinates the cookie count and the time they got sold
    for (var j = 0; j < numberOfHours; j++){
        var timeAndCookies = workingTimeArray[j] + ': ' + hourlyCookieList[j] + ' cookies';
        timeAndCookieArray.push(timeAndCookies);
    }




    var total2 = 0;

    // Calculates total amount of cookies and add
    for (var k = 0; k < numberOfHours; k++){
        
        total2 = total2 + hourlyCookieList[k];

    }
    timeAndCookieArray.push('Total: ' + total2 + ' cookies');
}
