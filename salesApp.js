'use strict';

var table_headers = [' ', '6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', 'Daily Location Total'];
var tableWidth = table_headers.length;
var tableContentWidth = tableWidth - 1;
var tableWorkingTimeWidth = tableWidth - 2;




var storeNames = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];








var cookieTotalArray = [];















console.log(allStoreCookiesSold);

// Calculates the total amount of cookies for each store and stores them on an Array
var inc = 0;
var storeCount = storeObjectArray.length;

console.log(storeObjectArray);
console.log(`storageObjArr Len: ${storeObjectArray.length}`);

for(var a = 0; a < storeCount; a++){

    var sum = 0;
    console.log(`here: ${inc+=1}`);
    console.log(allStoreCookiesSold);
    var inc2=0;
    for (var b = 0; b < tableWorkingTimeWidth; b++){
        console.log(`here2: ${inc2+=1} & my value is ${allStoreCookiesSold[a][b]}`);
        sum += allStoreCookiesSold[a][b]
    }

    cookieTotalArray.push(sum);
    
}






var eachHourTotal = [];
// Calculates the total for for each working hour across all stores
console.log('tableWorkingTimeWidth')
console.log(tableWorkingTimeWidth)
for (var k = 0; k < tableWorkingTimeWidth; k++){
    var result = 0;
    console.log('ran');
    for (var e = 0; e < storeCount; e++){
        console.log('last words')
        console.log(allStoreCookiesSold)
        result = result + allStoreCookiesSold[e][k];
    }
    eachHourTotal.push(result);
}
// allStoreCookiesSold.push(eachHourTotalArray);
// console.log(eachHourTotal);
// cookieTotalArray.push(eachHourTotal);







// Calculates total of all hour totals and appends it to the total array
var maxTotalSum = 0;

for (var v = 0; v < cookieTotalArray.length; v++){
    maxTotalSum = maxTotalSum + cookieTotalArray[v];
}
eachHourTotal.push(maxTotalSum);


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



// eachHourTotal




// Dynamically will fill up the table with the relavent data
for (var k = 0; k < storeCount; k++){

    var trElement = document.createElement('tr');

    var th_element = document.createElement('th');
    th_element.textContent = storeObjectArray[k].name;
    trElement.appendChild(th_element);

    for (var j = 0; j < tableContentWidth; j++){
        var td_element = document.createElement('td');
        td_element.textContent = allStoreCookiesSold[k][j];
        trElement.appendChild(td_element);
    }

    cookieTable.appendChild(trElement);
}
console.log(allStoreCookiesSold);





// Adds the total for each our onto the table

var trElement = document.createElement('tr');

var th_element = document.createElement('th');
th_element.textContent = 'Total';
trElement.appendChild(th_element);

for (var b = 0; b < tableContentWidth; b++){
    var td_element = document.createElement('td');
    td_element.textContent = eachHourTotal[b];
    trElement.appendChild(td_element);
}

cookieTable.appendChild(trElement);