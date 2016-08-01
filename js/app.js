'use strict';

//Array of all of our images, pushed to from catalogItem

var catalogArray = [];

//catalogItem constructor
function CatalogItem (imageName, filePath) {
  this.imageName = imageName;
  this.filePath = filePath;
  this.tallyClicked = 0;
  this.tallyDisplayed = 0;
  //Push the object to imageArray
  catalogArray.push(this);
}

new CatalogItem ('R2D2 Bag', '../img/bag.jpg');
new CatalogItem ('Banana Slicer', '../img/banana.jpg');
new CatalogItem ('iPad TP Stand', '../img/bathroom.jpg');
new CatalogItem ('Open-toed Boots', '../img/boots.jpg');
new CatalogItem ('All-in-One Breaky', '../img/breakfast.jpg');
new CatalogItem ('Meatball Gum', '../img/bubblegum.jpg');
new CatalogItem ('Chair', '../img/chair.jpg');
new CatalogItem ('Cthulhu', '../img/cthulhu.jpg');
new CatalogItem ('Dog Duck Bill', '../img/dog-duck.jpg');
new CatalogItem ('Dragon Meat', '../img/dragon.jpg');
new CatalogItem ('Utensil Pen', '../img/pen.jpg');
new CatalogItem ('Pet Sweeper', '../img/pet-sweep.jpg');
new CatalogItem ('Pizza Scissors', '../img/scissors.jpg');
new CatalogItem ('Shark Sleeper', '../img/shark.jpg');
new CatalogItem ('Baby Sweeper', '../img/sweep.jpg');
new CatalogItem ('Tauntaun Sleeper', '../img/tauntaun.jpg');
new CatalogItem ('Unicorn Meat', '../img/unicorn.jpg');
new CatalogItem ('Tentacle USB', '../img/usb.jpg');
new CatalogItem ('Watering Can', '../img/water-can.jpg');
new CatalogItem ('Wine Glass', '../img/wine-glass.jpg');
