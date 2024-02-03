// Define the starting point of the game
let currentScene = "start";

// Function to update the story and choices in the HTML
function updateScene() {
    const storyElement = document.getElementById("story");
    const choicesElement = document.getElementById("choices");

    // Get the current scene details
    const sceneDetails = scenes[currentScene];

    // Update the story text
    storyElement.textContent = sceneDetails.story;

    // Clear previous choices
    choicesElement.innerHTML = "";

    // Add choices to the HTML
    sceneDetails.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice.text;

        // Attach an event listener to handle choice selection
        button.addEventListener("click", () => makeChoice(index));

        choicesElement.appendChild(button);
    });
}

// Function to handle player choices
function makeChoice(choiceIndex) {
    const sceneDetails = scenes[currentScene];
    const selectedChoice = sceneDetails.choices[choiceIndex];

    // Update the current scene based on the selected choice
    currentScene = selectedChoice.nextScene;

    // Update the displayed story and choices
    updateScene();
}

// Define the scenes and choices for the game
const scenes = {
    "start": {
        story: "You find yourself in a dark cave. There are two paths ahead. Which path do you choose?",
        choices: [
            { text: "Take the left path", nextScene: "darkForest" },
            { text: "Take the right path", nextScene: "treasureRoom" }
        ]
    },
    "darkForest": {
        story: "As you walk through the dark forest, you hear strange noises. Suddenly, you encounter a troll blocking your way. What do you do?",
        choices: [
            { text: "Fight the troll", nextScene: "gameOver" },
            { text: "Try to sneak past the troll", nextScene: "treasureRoom" }
        ]
    },
    "treasureRoom": {
        story: "Congratulations! You've reached the treasure room and found a chest full of gold. You win!",
        choices: []
    },
    "gameOver": {
        story: "Uh-oh! Your journey comes to an end. Better luck next time!",
        choices: []
    }
};

// Start the game by updating the initial scene
updateScene();