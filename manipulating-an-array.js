/*
Take the following array:
const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
{test: 'one', score: 55}, ['one', 'two']];
Manipulate your array using various methods, such as pop(), push(), shift(), and
unshift(), and transform it into the following:

["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]

You can take the following steps, or adopt your own approach:
• Remove the first item and the last item.
• Add FIRST to the start of the array.
• Assign hello World to the fourth item value.
• Assign MIDDLE to the third index value.
• Add LAST to the last position in the array.
• Output it to the console.

*/

const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];

//remove 1st item using shift() method.
theList.shift();
console.log(theList); // ['Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']]

//remove last item using pop() method.
theList.pop();
console.log(theList); // [ 'Svekis', true, 35, null, undefined, { test: 'one', score: 55 } ]

//add FIRST to the start of the array.
theList.splice(0,0, 'FIRST');
console.log(theList); // [ 'FIRST', 'Svekis', true, 35, null, undefined, { test: 'one', score: 55 } ]

//Assign hello World to the fourth item value
theList[3] = 'hello world';
console.log(theList); // ['FIRST','Svekis',true,'hello world',null,undefined,{ test: 'one', score: 55 } ]
  
//Assign MIDDLE to the third index value.
theList[2] = 'MIDDLE';
console.log(theList); // ['FIRST','Svekis','MIDDLE','hello world',null,undefined,{ test: 'one', score: 55 } ]

//Add LAST to the last position in the array. The below will delete all elements starting from index 4 onwards and replace with LAST
theList.splice(4,4, 'LAST');
console.log(theList); // [ 'FIRST', 'Svekis', 'MIDDLE', 'hello world', 'LAST' ]

