// Define the riddles and corresponding images
const riddles = [
    {
        text: "I am a city that once was the heart of an empire so vast, With ruins and relics from a glorious past. What city am I?",
        image: "path/to/rome.jpg" // Replace with actual image path
    },
    {
        text: "In this city, there's a fountain where you can make a wish, Throw a coin over your shoulder and hear the splash and swish. What fountain am I?",
        image: "path/to/trevi.jpg" // Replace with actual image path
    },
    {
        text: "This city is home to a small country that's the Pope's residence, It’s the center of Catholic faith and reverence. What city am I?",
        image: "path/to/vatican.jpg" // Replace with actual image path
    },
    {
        text: "In this city, gladiators once fought in a mighty arena, A colossal structure where battles were seen-a. What city am I?",
        image: "path/to/colosseum.jpg" // Replace with actual image path
    },
    {
        text: "In this city, you'll find steps that are Spanish by name, Climb to the top, and you'll be glad you came. What city am I?",
        image: "path/to/spanish_steps.jpg" // Replace with actual image path
    },
    {
        text: "This city has a famous road, the Appian Way, Once traveled by legions, it’s historic today. What city am I?",
        image: "path/to/appian_way.jpg" // Replace with actual image path
    },
    {
        text: "This city is known for its art, culture, and food, A trip here will surely put you in a good mood. What city am I?",
        image: "path/to/rome_food.jpg" // Replace with actual image path
    }
];

// Get the current week number of the year
function getWeekNumber() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 1);
    const diff = now - start + (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60000;
    const oneWeek = 604800000;
    return Math.floor(diff / oneWeek);
}

// Get the riddle for the current week
function getCurrentRiddle() {
    const weekNumber = getWeekNumber();
    return riddles[weekNumber % riddles.length]; // Loop through riddles
}

// Display the current riddle and image
function displayRiddle() {
    const currentRiddle = getCurrentRiddle();
    document.getElementById("riddle-text").textContent = currentRiddle.text;
    document.getElementById("riddle-image").src = currentRiddle.image;
}

// Run the display function on page load
window.onload = displayRiddle;
