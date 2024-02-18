// image name array
//var imageTags = ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9", "img10", "img11", "img12"];
// we want to name these the actual image names
// we only need 6 since two are needed for a match
var imageTags = ["Images/1.png", "Images/2.png", "Images/3.png", "Images/4.png", "Images/5.png", "Images/6.png"];

// Blank image variable name -- Where does the variable call my blank image though?
// this should be named the actual image name "blank.png"
var blankImagePath = "Images/blank.png"; // Use a string, not an array

// create an empty array for the actual images
var allImages = new Array();

function createRandomImageArray() {
    // the images for the array -- would I only need 6 because there will be 2 of each, then making 12?
    var actualImagePath = ["Images/1.png", "Images/2.png", "Images/3.png", "Images/4.png", "Images/5.png", "Images/6.png", "Images/7.png", "Images/8.png", "Images/9.png", "Images/10.png", "Images/11.png", "Images/12.png"];

    // Should the Var count be 12?
    // there should be 12 items in this array so it knows when the blank and the actual image 
    var count = [0,0,0,0,0,0];

    // create a while statement to check to see if our actual image array is full
    
    //while (actualImages.length < 12) {
    while(allImages.length < 12){  
        
    // get a random number between 0 and the number total number of images that we can choose from
        var randomNumber = Math.floor(Math.random() * actualImagePath.length);

        // create an if statement that says if the total number added is less than 2, then
        // add the image to the actual image array

        /* so the if statement is here, and says less than two, but I'm not sure if this will work?*/
        if (count[randomNumber] < 2) {
            // want to use "allImages" instead of "actualImages"
            allImages.push(actualImagePath[randomNumber]);
            // then add one to the array that makes sure only two images can be added
            count[randomNumber] = count[randomNumber] + 1;
        }
    }
}

function flipImage(number) {
    // Check if the image has already been flipped
  
    if (document.getElementById("img" + (number + 1)).src.endsWith(blankImagePath)) {
        // Change the image to the actual image
        // this should be "allImages"
        document.getElementById("img" + (number + 1)).src = allImages[number];
    }
}

function printBlanks() { 
    // Call our random image creation function
    createRandomImageArray();

    // Create a for loop
    for (var i = 0; i < 12; i++) {
        // Iterate through the image tag ids and set the source to blankImagePath
        // need to get the actual "id" name from the html (img1, img2, etc.)
        document.getElementById("img" + (i + 1)).src = blankImagePath;
    }
}

// Call printBlanks to initialize the game
//printBlanks();