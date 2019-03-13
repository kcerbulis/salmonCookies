'use strict';

var table_headers = [' ', '6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', 'Daily Location Total'];
var tableWidth = table_headers.length;
var tableContentWidth = tableWidth - 1;


var storeNames = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];



var storeLength = allStoreCookiesSold.length;






var cookieTotalArray = [];




// Calculates the total amount of cookies for each store and stores them on an Array
for(var a = 0; a < 5; a++){

    var sum = 0;

    for (var b = 0; b < 15; b++){
        sum = sum + allStoreCookiesSold[a][b]
    }

    cookieTotalArray.push(sum);
}
console.log(cookieTotalArray);





// Adds the total onto the cookie arrays
for (var c = 0; c < cookieTotalArray.length; c++){
    allStoreCookiesSold[c].push(cookieTotalArray[c]);
}




// parent element
// new element
// content
// appendchild



// numsTable
// new tr
// content
//  parent === tr (table row)
//  new el === td (table data, or a cell)
//  content === a number (5)
//  append the td to the tr
// append the tr to the table (table.appendChild(tr))





var cookieTable = document.getElementById('cookieTable');
var trElement1 = document.createElement('tr');




// Head Row
for(var i = 0; i < tableWidth; i++){

    var td_element = document.createElement('td');
    td_element.textContent = table_headers[i];
    trElement1.appendChild(td_element);

}
cookieTable.appendChild(trElement1);




// Dynamically will fill up the table with the relavent data
for (var k = 0; k < storeLength; k++){

    var trElement = document.createElement('tr');

    var th_element = document.createElement('th');
    th_element.textContent = storeNames[k];
    trElement.appendChild(th_element);

    for (var j = 0; j < tableContentWidth; j++){
        var td_element = document.createElement('td');
        td_element.textContent = allStoreCookiesSold[k][j];
        trElement.appendChild(td_element);
    }

    cookieTable.appendChild(trElement);
}