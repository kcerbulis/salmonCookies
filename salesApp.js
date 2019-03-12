'use strict';

var table_headers = [' ', '6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', 'Daily Location Total'];
var tableWidth = table_headers.length;
var tableContentWidth = tableWidth - 1;


// Cookie count arrays for each hour for each store
var row1 = hourlyCookieListPike;
console.log('Pike cookie count per hour: ' + row1);

var row2 = hourlyCookieListSeatac; 
console.log('SeaTac cookie count per hour: ' + row2);

var row3 = hourlyCookieListCenter;
console.log('Seattle Center cookie count per hour: ' + row3);



var cookieCountStoreArray = [row1, row2, row3];
var storeLength = cookieCountStoreArray.length;








var cookieTotalArray = [];




// Calculates the total amount of cookies for each store and stores them on an Array
for(var a = 0; a < storeLength; a++){

    var sum = 0;

    for (var b = 0; b < row1.length; b++){
        sum = sum + cookieCountStoreArray[a][b]
    }

    cookieTotalArray.push(sum);
}
console.log(cookieTotalArray);





// Adds the total onto the cookie arrays
for (var c = 0; c < cookieTotalArray.length; c++){
    cookieCountStoreArray[c].push(cookieTotalArray[c]);
}
console.log(row1);
console.log(row2);
console.log(row3);











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









//  Second row (First data row)
var trElement2 = document.createElement('tr');

var th_element = document.createElement('th');
th_element.textContent = '1st and Pike';
trElement2.appendChild(th_element);

for (var j = 0; j < tableContentWidth; j++){
    var td_element = document.createElement('td');
    td_element.textContent = row1[j];
    trElement2.appendChild(td_element);
}

cookieTable.appendChild(trElement2);





//  Third row (Second data row)
var trElement3 = document.createElement('tr');

var th_element2 = document.createElement('th');
th_element2.textContent = 'SeaTac Airport';
trElement3.appendChild(th_element2);

for (var j = 0; j < tableContentWidth; j++){
    var td_element = document.createElement('td');
    td_element.textContent = row2[j];
    trElement3.appendChild(td_element);
}

cookieTable.appendChild(trElement3);




//  Third row (Second data row)
var trElement4 = document.createElement('tr');

var th_element3 = document.createElement('th');
th_element3.textContent = 'Seattle Center';
trElement4.appendChild(th_element3);

for (var j = 0; j < tableContentWidth; j++){
    var td_element = document.createElement('td');
    td_element.textContent = row3[j];
    trElement4.appendChild(td_element);
}

cookieTable.appendChild(trElement4);