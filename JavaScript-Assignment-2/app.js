// // //Question 1
// // Write a function that creates a closure and returns a function that can add
// // a specific number to any number passed to it. For example, if the closure is
// // created with 5, the returned function should add 5 to any number passed
// // to it.


function sum (num1) {
        return function(num2) {
                return num1 + num2;
        }
}
let result = sum (10);
console.log(result(5));

// Question 2
// Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.

function searchArray(arr, val) {
  if (arr.length === 0) {
    return false;
  }
  const first = arr[0];


  if (first === val) {
    return true;
  }


  return searchArray(arr.slice(1), val);
}
const myArr = [1, 2, 3, 4, 5];


const found = searchArray(myArr, 3);
console.log('Found:', found);

// //Question 3
// Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.

function addPara(text) {
    let paragraph = document.createElement('p');
    let content = document.createTextNode(text);
    paragraph.appendChild(content);
    document.body.appendChild(paragraph);
    paragraph.style.position = "absolute";
    paragraph.style.bottom = "0";
    paragraph.style.zIndex=1;
  }
console.log(addPara("Hey my name is Mujahid"));

// //Question 4
// Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.

function addListItem(text) {
  // create a new list item element
  const newItem = document.createElement('li');
  // set the text content of the list item to the input string
  newItem.textContent = text;
  // get the unordered list element
  const list = document.querySelector('ul');
  // append the new list item to the unordered list
  list.appendChild(newItem);
}


addListItem('New list item');



// //Question 5
// Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.


function changeBackgroundColor() {
  const element = document.querySelector('#myDiv');
  const color = prompt('Enter a new background color:');
  element.style.backgroundColor = color;
}


//Question 6
// Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.

function LocalStorage(clue, object) {

  const key = JSON.stringify(object);
 
  localStorage.setItem(clue, key);
}
const myObject = { name: '  Khan', age: 20 };
LocalStorage('my Clue', myObject);
console.log(myObject)

// //Question 7
// Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.

function LocalStorage(key) {
    let objString = localStorage.getItem(key);
    if (objString === null) {
      return null;
    }
    return JSON.parse(objStr);
  }
let myOb = LocalStorage('myObjKey');
if (myOb === null) {
  console.log('Object not found in localStorage');
} else {
  console.log('Retrieved object:', myOb);
}


// //Question 8
//  Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.

function saveObjectPropertiesToLocalStorage(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        localStorage.setItem(key, obj[key]);
      }
    }
    let newObj = {};
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let value = localStorage.getItem(key);
      newObj[key] = value;
    }
    return newObj;
  }
	let myObj = {
    name: "Khan",
    age: 30,
    email: "khan@test.com"
  };
  let retrievedObj = saveObjectPropertiesToLocalStorage(myObj);
  console.log('Retrieved object:', retrievedObj);
