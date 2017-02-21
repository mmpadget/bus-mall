'use strict';

// Object.
// var images = {
//   imageName: ['R2 Bag', 'Banana Slicer', 'Bathroom Helper', 'Yellow Boots', 'Breakfast', 'Bubble Gum', 'Red Chair', 'Green Monster', 'Dog Duck', 'Dragon Meat', 'Utensil Pens', 'Pet Sweep', 'Pizza Scissors', 'Shark Bag', 'Kid Sweeper', 'Tauntaun Bag', 'Unicorn Meat', 'USB Tentacle', 'Watering Can', 'Wine Glass'],
//   filePath: ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'],
//   imageIdTag: [],
//   displayCount: 0, // Track how many times each image is displayed.
//   clickCount: 0, // Track clicks for each image.
//   votesCounter: 0,
//   totalClicks: 0, // Track the total number of clicks made.
// };

// Constructor function associated with each image.
function images(imageName, filePath, imageIdTag, displayCount, clickCount, votesCounter, totalClicks) {
  this.imageName = ['R2 Bag', 'Banana Slicer', 'Bathroom Helper', 'Yellow Boots', 'Breakfast', 'Bubble Gum', 'Red Chair', 'Green Monster', 'Dog Duck', 'Dragon Meat', 'Utensil Pens', 'Pet Sweep', 'Pizza Scissors', 'Shark Bag', 'Kid Sweeper', 'Tauntaun Bag', 'Unicorn Meat', 'USB Tentacle', 'Watering Can', 'Wine Glass'];
  this.filePath = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];
  this.imageIdTag = [];
  this.displayCount = 0; // Track how many times each image is displayed.
  this.clickCount = 0; // Track clicks for each image.
  this.votesCounter = 0;
  this.totalClicks = 0; // Track the total number of clicks made.
}

function createImageEl() {
  for (var i = 0; i < filePath.length; i++) {
    // // Create the image tag.
    // var imgEl = document.createElement('img');
    // imgEl.setAttribute('class', 'imageClass');
    // imgEl.setAttribute('src', 'filePath');
    // // imgEl.setAttribute('id', 'img-' + i);
    // var allImgFiles = document.querySelectorAll('img');
    // allImgFiles.appendChild(imageClass);
    // // Where's the file path?
    // // Insert the image into the page.
  }
}

// Select three random photos from the image directory.
function selectRandomPhotos() {
  console.log();
  // Math.random
}

// On click, automatically display three new non-duplicating random images.
function checkNonDuplicated() {
  console.log();
}

function displayThreePhotos() {
  console.log();
}

// Show results after a total of 25 selections made.
if (clicksCount === 25) {
// Turn off event listeners on the images after 25 selections have been made.
  console.log();
}

// Show the percentage of times that an item was clicked when it was shown.
function clickResults() {
  console.log();
}

// Display a list of the products with votes received with each list item.
// Format the list items to look like "3 votes for the Banana Slicer".
function listPhotoVotes() {
  console.log();
}
