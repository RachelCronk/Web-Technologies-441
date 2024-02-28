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
    var Viewfinder1 = new ViewFinder("A distraught person is comforted by fellow protestors at a June 2 protest in New York City, the sixth day of civil unrest following the killing of George Floyd David Dee Delgado.", "images/1.jpg");
    var Viewfinder2 = new ViewFinder("We are not protestors. We are life protectors: Standing Rock Sioux Tribe resist against the construction of the Dakota Access Pipeline, an 1886 km underground oil pipeline. In July 2020, a judge ordered to shut it down for violating the NEPA.", "images/2.jpg");
    var Viewfinder3 = new ViewFinder("Detail of Kensington Welfare Rights Union Poverty Kills Philadelphia 1998.", "images/3.jpg");
    var Viewfinder4 = new ViewFinder("Detail of Kensington Welfare Rights Union Housing Takeover Philadelphia 1995.", "images/4.jpg");
    var Viewfinder5 = new ViewFinder("Native Americans march to a sacred site on Sunday that they say was disturbed by bulldozers working on the Dakota Access Pipeline, near the encampment where hundreds of people have gathered to join the Standing Rock Sioux tribe's protest. 2016", "images/5.jpg");
    var Viewfinder6 = new ViewFinder("Lee referred to moments such as when, in 2014, he and a group of Asian-Americans from around the country, including direct descendants of the Chinese railroad workers, reënacted the Promontory Summit photo, as photographic justice.", "images/6.jpg");
    var Viewfinder7 = new ViewFinder("Lee's photography, which he viewed as an extension of his activism, helped Asian-Americans recognize their shared yearnings and struggles.Photograph by Corky Lee. 1991", "images/7.jpg");
    var Viewfinder8 = new ViewFinder("Police use a water cannon on people during a demonstration against plans to pass the Dakota Access pipeline near the Standing Rock Indian Reservation, near Cannon Ball, North Dakota. 2016 (Stephanie Keith/Reuters)", "images/8.jpg");
    var Viewfinder9 = new ViewFinder("Larry Towell Flags from many Indian nations fly on poles along the entrance into Sioux Protest Camp. Cannon Ball, North Dakota, USA. September 2016. © Larry Towell | Magnum Photos", "images/9.jpg");
    var Viewfinder10 = new ViewFinder("May Day 2017. Union Square, NYC. (Julieta Salgado). Julieta Salgado is a queer femme artist living in Brooklyn by way of Ecuador. Her work ranges from self-portraits that give a platform to queer sexuality and femininity to powerful single shots of solidarity with immigration protests.", "images/10.jpg");
    var Viewfinder11 = new ViewFinder("2016. Triqui women weavers show their support for the Frente Indigena at the end of the organization’s binational assembly.", "images/11.jpg");
    var Viewfinder12 = new ViewFinder("YAKIMA, WA- 1MAY17 - Members of the Yakima Nation of Native Americans join farm workers and other immigrants and community and labor activists marching through Yakima to celebrate May day and protest continued deportations and detentions of immigrants. Many workers didn't go to work on this day, participating in the Day Without Immigrants. Copyright David Bacon", "images/12.jpg");
    
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