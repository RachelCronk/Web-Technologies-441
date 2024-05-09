// let's create an empty array. We will add to this later
var ViewFinderArray = new Array();

// this is the main ViewFinder class
class ViewFinder {
    // the constructor requires title, imagePath, etc.
    // we will create multiple objects from this class
    constructor(title, imagePath) {
        this.title = title;
        this.imagePath = imagePath;
    }

    // this just returns the title concatenated with the string "Title"
    toString() {
        return "Title: " + this.title;
    }

    // this is the property theTitle which returns the title as well only the title
    get theTitle() {
        return this.title;
    }

    // get the image path
    get theImagePath() {
        return this.imagePath;
    }
}

// this function is called in the body of the HTML page so that the objects are created and added to the 
// array myViewFinderArray
function initializeArray() {
    // create the objects from the class ViewFinder
    var Viewfinder1 = new ViewFinder("", "images/img1.jpg");
    var Viewfinder2 = new ViewFinder("", "images/img2.jpg");
    var Viewfinder3 = new ViewFinder("", "images/img3.jpg");
    var Viewfinder4 = new ViewFinder("", "images/img4jpg");
    var Viewfinder5 = new ViewFinder("", "images/img5.jpg");
    var Viewfinder6 = new ViewFinder("", "images/img6.jpg");
    var Viewfinder7 = new ViewFinder("", "images/img7.jpg");
    var Viewfinder8 = new ViewFinder("", "images/img8.jpg");
    var Viewfinder9 = new ViewFinder("", "images/img9.jpg");
    var Viewfinder10 = new ViewFinder("", "images/img10.jpg");
    var Viewfinder11 = new ViewFinder("", "images/img11.jpg");
    var Viewfinder12 = new ViewFinder("", "images/img12.jpg");
    var Viewfinder13 = new ViewFinder("", "images/img13.jpg");
    var Viewfinder14 = new ViewFinder("", "images/img14.jpg");
    
    // add the objects to the array
    ViewFinderArray.push(Viewfinder1);
    ViewFinderArray.push(Viewfinder2);
    ViewFinderArray.push(Viewfinder3);
    ViewFinderArray.push(Viewfinder4);
    ViewFinderArray.push(Viewfinder5);
    ViewFinderArray.push(Viewfinder6);
    ViewFinderArray.push(Viewfinder7);
    ViewFinderArray.push(Viewfinder8);
    ViewFinderArray.push(Viewfinder9);
    ViewFinderArray.push(Viewfinder10);
    ViewFinderArray.push(Viewfinder11);
    ViewFinderArray.push(Viewfinder12);
    ViewFinderArray.push(Viewfinder13);
    ViewFinderArray.push(Viewfinder14);
}

// this function gets an object from the array and puts it into the element with the id title 
function accessInformation() {
    // get a random number
    var randomNumber = Math.floor(Math.random() * ViewFinderArray.length);
    
    // get a random object from the array
    var selectedViewFinder = ViewFinderArray[randomNumber];
    
    // update the title element
    document.getElementById("title").innerHTML = selectedViewFinder.toString();
    
    // update the image element
    document.getElementById("image").src = selectedViewFinder.theImagePath;
}