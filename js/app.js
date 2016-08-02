'use strict';

//Array of all of our images, pushed to from catalogItem

var catalogArray = [];

//Event Listener Global
var userClick = document.getElementById('picSection');

//HTML Element Getters
var leftImg = document.getElementById('left');
var centerImg = document.getElementById('center');
var rightImg = document.getElementById('right');

//Three Random Math Variables for Accessing Array
var randomIndex1 = Math.floor(Math.random() * catalogArray.length);
var randomIndex2 = Math.floor(Math.random() * catalogArray.length);
var randomIndex3 = Math.floor(Math.random() * catalogArray.length);

//Constructor for CtalogItem
function CatalogItem (imageName, filePath) {
  this.imageName = imageName;
  this.filePath = filePath;
  this.tallyClicked = 0;
  this.tallyDisplayed = 0;
  //Push the object to imageArray
  catalogArray.push(this);
}

//CatalogItem Objects created below
new CatalogItem ('R2D2 Bag', 'img/bag.jpg');
new CatalogItem ('Banana Slicer', 'img/banana.jpg');
new CatalogItem ('iPad TP Stand', 'img/bathroom.jpg');
new CatalogItem ('Open-toed Boots', 'img/boots.jpg');
new CatalogItem ('All-in-One Breaky', 'img/breakfast.jpg');
new CatalogItem ('Meatball Gum', 'img/bubblegum.jpg');
new CatalogItem ('Chair', 'img/chair.jpg');
new CatalogItem ('Cthulhu', 'img/cthulhu.jpg');
new CatalogItem ('Dog Duck Bill', 'img/dog-duck.jpg');
new CatalogItem ('Dragon Meat', 'img/dragon.jpg');
new CatalogItem ('Utensil Pen', 'img/pen.jpg');
new CatalogItem ('Pet Sweeper', 'img/pet-sweep.jpg');
new CatalogItem ('Pizza Scissors', 'img/scissors.jpg');
new CatalogItem ('Shark Sleeper', 'img/shark.jpg');
new CatalogItem ('Baby Sweeper', 'img/sweep.jpg');
new CatalogItem ('Tauntaun Sleeper', 'img/tauntaun.jpg');
new CatalogItem ('Unicorn Meat', 'img/unicorn.jpg');
new CatalogItem ('Tentacle USB', 'img/usb.jpg');
new CatalogItem ('Watering Can', 'img/water-can.jpg');
new CatalogItem ('Wine Glass', 'img/wine-glass.jpg');

//Function to Load Images to Page
function loadImages() {

  //While loops to prevent duplicates
  while (randomIndex2 === randomIndex1) {
    randomIndex2 = Math.floor(Math.random() * catalogArray.length);
  }

  while (randomIndex3 === randomIndex2 || randomIndex3 === randomIndex1) {
    randomIndex3 = Math.floor(Math.random() * (catalogArray.length));
  }

  //Makes leftImg's src property equal to the fileName of the indexed item
  leftImg.src = catalogArray[randomIndex1].filePath;
  //Adds 1 to the display tally property of the indexed object
  catalogArray[randomIndex1].tallyDisplayed += 1;

  centerImg.src = catalogArray[randomIndex2].filePath;
  catalogArray[randomIndex2].tallyDisplayed += 1;
  rightImg.src = catalogArray[randomIndex3].filePath;
  catalogArray[randomIndex3].tallyDisplayed += 1;

}

function handleUserClick(event) {
  event.preventDefault();

  // alert('Click is working');

  if (event.target.id === 'left') {
    catalogArray[randomIndex1].tallyClicked += 1;
  }

  else if (event.target.id === 'center') {
    catalogArray[randomIndex2].tallyClicked += 1;
  }

  else if (event.target.id === 'right') {
    catalogArray[randomIndex3].tallyClicked += 1;
  }
  else {
    alert('Pick a product!');
  }
  console.log('I clicked' + event.target.id);

  //Re-calculates randomIndex variables
  randomIndex1 = Math.floor(Math.random() * catalogArray.length);
  randomIndex2 = Math.floor(Math.random() * catalogArray.length);
  randomIndex3 = Math.floor(Math.random() * catalogArray.length);

  loadImages();
}

loadImages();

userClick.addEventListener('click', handleUserClick);
