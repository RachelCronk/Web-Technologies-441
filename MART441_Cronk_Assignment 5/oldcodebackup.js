// create an array of image names that correspond to the image tags
var imageTags = ["img1", "img2", "img3", "img4","img5", "img6", "img7", "img8", "img9", "img10", "img11", "img12" ];

// create a variable with the blank image name
var blankImagePath = "blank.png"; // Use a string, not an array

// create an empty array for the actual images
var allImages = new Array();

function createRandomImageArray() {
    // create an array of actual images
    var actualImagePath = ["Images/1.png", "Images/2.png", "Images/3.png", "Images/4.png", "Images/5.png", "Images/6.png", "Images/7.png", "Images/8.png", "Images/9.png", "Images/10.png", "Images/11.png", "Images/12.png"];
    
    // create another array to make sure the images only get added twice
    var count = [0];

    // create a while statement to check to see if our actual image array is full
    while(actualImages.length < 12) {
        // get a random number between 0 and the number total number of images that we can choose from
        var randomNumber = Math.floor(Math.random() * actualImagePath.length);

        // create an if statement that says if the total number added is less than 2, then
        // add the image to the actual image array
        if(count[randomNumber] < 2) {
            actualImages.push(actualImagePath[randomNumber]);
            // then add one to the array that makes sure only two images can be added
            count[randomNumber] = count[randomNumber] + 1;
        }
    }
}

function flipImage(number) {
    // Check if the image has already been flipped
    if (document.getElementById(imageTags[number]).src.endsWith(blankImagePath)) {
        // Change the image to the actual image
        document.getElementById(imageTags[number]).src = actualImages[number];
    }
}

function printBlanks() {
    // Call our random image creation function
    createRandomImageArray();

    // Create a for loop
    for(var i = 0; i < imageTags.length; i++) {
        // Iterate through the image tag ids and set the source to blankImagePath
        document.getElementById(imageTags[i]).src = blankImagePath;
    }
}

// Call printBlanks to initialize the game
printBlanks();
