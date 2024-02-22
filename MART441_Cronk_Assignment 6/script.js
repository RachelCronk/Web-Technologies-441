function createRandomImageArray() {
    // Reset the attempts when creating a new game
    attempts = 0;
}


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


//This is the new ChatGPT Code




// Add an attempts variable to track the number of attempts
var attempts = 0;

// Add a successfulAttempts variable to track the number of successful attempts
//var successfulAttempts = 0;

// ...

// Function to save attempts to local storage
function saveAttempts() {
    var savedAttempts = JSON.parse(localStorage.getItem("attempts")) || [];

    savedAttempts.push({
        totalAttempts: attempts,
        //successfulAttempts: successfulAttempts
    });

    localStorage.setItem("attempts", JSON.stringify(savedAttempts));
    console.log("Attempts information saved:", savedAttempts);
}



//IMAGES FLIPPING FUNCTION

// Add an array to keep track of flipped images
var flippedIndices = [];

function flipImage(number) {
    // Check if the image has already been flipped
    if (document.getElementById("img" + (number + 1)).src.endsWith(blankImagePath)) {
        // Change the image to the actual image
        document.getElementById("img" + (number + 1)).src = allImages[number];

        // Add the index to the array of flipped images
        flippedIndices.push(number);

        // Check if two images are flipped
        if (flippedIndices.length === 2) {
            // Compare the images at the flipped indices
            var index1 = flippedIndices[0];
            var index2 = flippedIndices[1];

            if (allImages[index1] !== allImages[index2]) {
                // If images don't match, flip them back over after a delay
                setTimeout(function () {
                    document.getElementById("img" + (index1 + 1)).src = blankImagePath;
                    document.getElementById("img" + (index2 + 1)).src = blankImagePath;
                }, 1000); // Adjust the delay as needed
            }

            // Clear the array of flipped indices for the next pair
            flippedIndices = [];
        }

        // Increment the attempts on each image flip
        attempts++;

        // Check if all matches have been found (game completed)
        if (attempts === 100) {
            // Save the attempts to local storage
            saveAttempts();

            // You can add additional logic here for game completion
            // For example, displaying a message or redirecting to a new page
           //alert("Congratulations! You completed the game in " + attempts + " attempts!");
        }
    }
}

// ...



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
printBlanks();











 //Old Bits of Code


// Function to save attempts to local storage
/*function saveAttempts(attempts, successfulAttempts) {
    var savedAttempts = JSON.parse(localStorage.getItem("attempts")) || [];

    savedAttempts.push({
        totalAttempts: attempts,
        successfulAttempts: successfulAttempts
    });

    localStorage.setItem("attempts", JSON.stringify(savedAttempts));
    console.log("Attempts information saved:", savedAttempts);
}
// ... */

// Add an attempts variable to track the number of attempts
//var attempts = 0;