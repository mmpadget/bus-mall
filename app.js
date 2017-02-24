'use strict';

var picContainer = document.getElementById('pic-container');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');

var totalClicks = 0;
var clickLimit = 25;
var surveyTaken = 0;

var allProducts = [];

var currentlyShowing = [];

var picNames = ['bag', 'banana', 'bathroom', 'boots', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

function Product(name) {
  this.name = name;
  this.views = 0;
  this.clicks = 0;
  this.path = 'img/' + name + '.jpg';
}

for (var i = 0; i < picNames.length; i++) {
  allProducts.push(new Product(picNames[i]));
}

function randNum() {
  return Math.floor(Math.random() * allProducts.length);
}

function displayPics() {

  var leftIndex = randNum();
  var centerIndex = randNum();
  var rightIndex = randNum();

  console.log('Starting Left Index: ', leftIndex);
  console.log('Starting Center Index: ', centerIndex);
  console.log('Starting Right Index: ', rightIndex);

  while (currentlyShowing.includes(leftIndex)) {
    leftIndex = randNum();
    console.log('new Left: ', leftIndex);
  }

  while (centerIndex === leftIndex || currentlyShowing.includes(centerIndex)) {
    centerIndex = randNum();
    console.log('new center: ', centerIndex);
  }

  while (rightIndex === leftIndex || rightIndex === centerIndex || currentlyShowing.includes(rightIndex)) {
    rightIndex = randNum();
    console.log('new right: ', rightIndex);
  }

  var leftProduct = allProducts[leftIndex];
  leftProduct.views += 1;

  var centerProduct = allProducts[centerIndex];
  centerProduct.views += 1;

  var rightProduct = allProducts[rightIndex];
  rightProduct.views += 1;

  picContainer.removeChild(left);
  left = document.createElement('img');
  left.setAttribute('src', leftProduct.path);
  left.setAttribute('alt', leftProduct.name);
  picContainer.appendChild(left);

  picContainer.removeChild(center);
  center = document.createElement('img');
  center.setAttribute('src', centerProduct.path);
  center.setAttribute('alt', centerProduct.name);
  picContainer.appendChild(center);

  picContainer.removeChild(right);
  right = document.createElement('img');
  right.setAttribute('src', rightProduct.path);
  right.setAttribute('alt', rightProduct.name);
  picContainer.appendChild(right);

  currentlyShowing = [leftIndex, centerIndex, rightIndex];
}

function handlePicContainerClick() {

  if (totalClicks < clickLimit) {
    displayPics();

    totalClicks++;

    console.log(event.target.alt + ' was clicked');

    for (var i = 0; i < allProducts.length; i++) {
      if (event.target.alt === allProducts[i].name) {
        allProducts[i].clicks += 1;
      }
    }
  } else {
    console.log('Here is click data: ' + allProducts);
    if (localStorage.getItem('surveyTaken') === null) {
      surveyTaken = 0;
    } else {
      surveyTaken = localStorage.getItem('surveyTaken');
    }
    surveyTaken++;
    console.log('Times survey taken: ' + surveyTaken);
    displayList();
    document.body.removeChild(picContainer);
    saveProductsToLocalStorage(allProducts);
  }
}

function displayList() {
  var storeTotalPercent = 0;
  for (var i = 0; i < allProducts.length; i++) {
    var calcPercentage = ((allProducts[i].clicks / clickLimit) * 100 / surveyTaken);
    storeTotalPercent += calcPercentage;
    console.log(surveyTaken);
    var picList = document.getElementById('picList');
    var liEl = document.createElement('li');
    liEl.textContent = allProducts[i].clicks + ' votes for the ' + allProducts[i].name + '. ' + calcPercentage.toFixed(1) + '%.';
    picList.appendChild(liEl);
  }
  console.log(storeTotalPercent);
}

picContainer.addEventListener('click', handlePicContainerClick);
displayPics();

// Saved Data

function saveProductsToLocalStorage(allProducts) {
  localStorage.allProducts = JSON.stringify(allProducts);
  localStorage.surveyTaken = surveyTaken;
}

function allProductClicks(products){
  var productClicks = [];

  for (var i = 0; i < products.length; i++) {
    productClicks.push(products[i].clicks);
    console.log('test' + products.length);
    console.log('All product clicks: ', productClicks);
  }
  return productClicks;
}

function allProductNames(products){
  var productNames = [];

  for (var i = 0; i < products.length; i++) {
    productNames.push(products[i].name);
    console.log('All product names: ', productNames);
  }
  return productNames;
}

if (localStorage.allProducts) {
  allProducts = JSON.parse(localStorage.allProducts);
}

//allProducts = JSON.parse(localStorage.allProducts);

var clearListener = document.getElementById('clear-button');
clearListener.addEventListener('click', clearChartData);

function clearChartData(event) {
  localStorage.clear();
  console.log('Clear local storage was clicked');
}
