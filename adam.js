'use strict';

// Adam's Tues Example
// Number of times clicked.
// Number of times shown versus number of times clicked.

var picContainer = document.getElementById('pic-container');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');

//Define global variables
var totalClicks = 0;
var clickLimit = 25;

var allProducts = [];
var currentlyShowing = [];

//Store all image names in an array
var picNames = ['bag', 'banana', 'bathroom', 'boots', 'bubblegum', 'chair'];

//Define the Product Constructor. Started with this.
function Product(name) {
  this.name = name;
  this.views = 0;
  this.clicks = 0;
  this.path = 'img/' + 'name' + '.jpg';
}
// Alternate: parameter
// function Product(name, imgNumber) {
//   this.name = name;
//   this.views = 0;
//   this.clicks = 0;
//   this.imgNumber = imgNumber;
//   this.path = 'img/' + 'name' + '.jpg';
// }

//Create the array of all products
for (var i = 0; i < picNames.length; i++) {
  // Build an array from constructor.
  allProducts.push(new Product(picNames[i]));
  // Pushing an instance of product type.
}
// Alternate: break down
//Create the array of all products
// for (var i = 0; i < picNames.length; i++) {
//   // Pushing an instance of product type.
//   // Could have also done this:
//   var picName = picNames[i];
//   var product = new Product(picName[i]);
//   allProducts.push(product);
//   // You should understand what happens in what order.
// }

// generate a random number for accessing each product in the all products array.
function randNum() {
  return Math.floor(Math.random() * allProducts.length);
}

// First make sure there are no duplicate images.
// the primary function to display new images.
// Adam organizes this way to follow the hoisting process.
function displayPics() {
  // Need somewhere to call this function. Add event handlers.
  var leftIndex = randNum();
  var centerIndex = randNum();
  var rightIndex = randNum();

  console.log('Starting Left Index: ', leftIndex);
  console.log('Starting Center Index: ', centerIndex);
  console.log('Starting Right Index: ', rightIndex);

  // 2, 1, 4 example.
  while (currentlyShowing.includes(leftIndex)) {
    leftIndex = randNum(); // Is holding the new random number.
    console.log('new Left: ', leftIndex);
  }

  // 1st
  // while (centerIndex === leftIndex) {
  //   centerIndex = randNum();
  // }

  // Would have needed to look up the "includes" on MDN
  // Remember, if first piece is false, it doesn't even evaluate the right.
  while (centerIndex === leftIndex || currentlyShowing.includes(centerIndex)) {
    centerIndex = randNum();
    console.log('new center: ', centerIndex);
  }

  // 1st
  // while (rightIndex === leftIndex || rightINdex === centerIndex) {
  //   rightIndex - randNum();
  // }

  while (rightIndex === leftIndex || rightIndex === centerIndex || currentlyShowing.includes(rightIndex)) {
    rightIndex = randNum();
    console.log('new right: ', rightIndex);
  }
}

// All indexes are unique at this point.

// grab indexes
var leftProduct = allProducts[leftIndex];
leftProduct.views += 1; // Increment views.

// create new element of image. Grabbed pic container at top. Nodes from DOM.
picContainer.removeChild(left);
left = document.createElement('img');
// left.src = leftProduct.path; // Bad practice because you have set attribute.
left.setAttribute('src', leftProduct.path);
left.setAttribute('alt', leftProduct.name);
picContainer.appendChild(left);

picContainer.removeChild(center);
center = document.createElement('img');

// Update the views.
var rightProduct = allProducts[rightIndex];
rightProduct.views += 1;

// one array with all products, and one with currently showing.
// 2, 1, 4 example. 4, 1, 8 on second pass.
// hold on to these values in the array for the next pass.
currentlyShowing = [leftIndex, centerIndex, rightIndex];
// Reassigning "currently showing" to be the new values. Don't want to push. Compare to previous 3 values. Could reset the array.
console.log('currently showing ', currentlyShowing);

// Alternate. If empty
// currentlyShowing = [];
// currentlyShowing.push(leftIndex);
// currentlyShowing.push(centerIndex);
// currentlyShowing.push(rightIndex);

// handle user clicks. click on margin, alert.
function handlePicContainerClick() {
  if(event.target.id === 'pic-container') {
    return alert('Sup');
  }

  if (totalClicks < clickLimit) {
    displayPics();

    totalClicks++;

    console.log(event.target.alt + ' was clicked');
    for (var i = 0; i < allProducts.length; i++) {
      if (event.target.alt === allProducts[index].name) {
        allProducts[index].clicks += 1;
      }
    }
  } else {
    displayList();
  }
}

function displayList() {
  for (var i = 0; i < allProducts.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = allProducts[i].name + ' has been clicked ' + allProducts[i].clicks + ' times';
    picList.appendChild(liEl);
  }
}

picContainer.addEventListener('click', handlePicContainerClick);
var picList = document.getElementById('picList');
displayPics();
