'use strict';

//Array of all of our images, pushed to from catalogItem
var catalogArray = [];
var lastIndex = [];
//SurveyLength variable to end after 25 clicks
var surveyLength = 0;

//Event Listener Global
var userClick = document.getElementById('picSection');

//HTML Element Getters
var leftImg = document.getElementById('left');
var centerImg = document.getElementById('center');
var rightImg = document.getElementById('right');

//Create View Results button

//Three Random Math Variables for Accessing Array

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

var randomIndex1 = Math.floor(Math.random() * catalogArray.length);
var randomIndex2 = Math.floor(Math.random() * catalogArray.length);
var randomIndex3 = Math.floor(Math.random() * catalogArray.length);

//Function to end survey at 25 choices
function surveyEnd() {
  var viewResultsButton = document.createElement('button');
  viewResultsButton.textContent = 'View Results';
  userClick.appendChild(viewResultsButton);
  userClick.removeEventListener('click', handleUserClick);
}

//Function to Load Images to Page
function loadImages() {
  if (surveyLength > 24) {
    surveyend();
  }

  lastIndex = [];

  lastIndex.push(randomIndex1);
  lastIndex.push(randomIndex2);
  lastIndex.push(randomIndex3);

  //Re-assigning the variables for each picture
  randomIndex1 = Math.floor(Math.random() * catalogArray.length);
  randomIndex2 = Math.floor(Math.random() * catalogArray.length);
  randomIndex3 = Math.floor(Math.random() * catalogArray.length);

  //While loop to prevent double choices AND no prior choice repeats
  while (randomIndex1 === lastIndex[0] || randomIndex1 === lastIndex[1] || randomIndex1 === lastIndex[2] || randomIndex2 === lastIndex[0] || randomIndex2 === lastIndex[1] || randomIndex2 === lastIndex[2] || randomIndex3 === lastIndex[0] || randomIndex3 === lastIndex[1] || randomIndex3 === lastIndex[2] || randomIndex1 === randomIndex2 || randomIndex1 === randomIndex3 || randomIndex2 === randomIndex3) {
    randomIndex1 = Math.floor(Math.random() * catalogArray.length);
    randomIndex2 = Math.floor(Math.random() * catalogArray.length);
    randomIndex3 = Math.floor(Math.random() * catalogArray.length);
  }
  //Makes leftImg's src property equal to the fileName of the indexed item
  leftImg.src = catalogArray[randomIndex1].filePath;
  centerImg.src = catalogArray[randomIndex2].filePath;
  rightImg.src = catalogArray[randomIndex3].filePath;

  //Adds 1 to the display tally property of the indexed object
  catalogArray[randomIndex1].tallyDisplayed += 1;
  catalogArray[randomIndex2].tallyDisplayed += 1;
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

  surveyLength += 1;

  loadImages();
}

loadImages();

userClick.addEventListener('click', handleUserClick);
