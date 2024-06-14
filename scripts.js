// Define the riddles and corresponding images
const riddles = [
    {
        text: "איפה יש כזה חלון?",
        image: "dome.jpg"
    },
    {
        text: "נמתין עוד הרבה זמן?",
        image: "plane.jpg"
    },
    {
        text: "קשתות במיץ עגבניות!",
        image: "arch.jpg"
    },
    {
        text: "צבי הנינג׳ה?! מה הם קשורים לפה?!",
        image: "tmnt.jpg"
    },
    {
        text: "צב נינג׳ה כחול קשור לתמונה הזאת",
        image: "mona_lisa.jpg"
    },
    {
        text: "נזרוק מטבע מאחורי הראש, אולי המשאלה תתגשם",
        image: "trevi.jpg"
    },
    {
        text: "זאת עיר? זאת מדינה? זאת מדינה בתוך עיר!",
        image: "vatican.jpg"
    },
    {
        text: "גלדיאטורים נלחמו כאן",
        image: "colosseum.jpg"
    }
];
let currentRiddleIndex = 0;

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
    // const weekNumber = getWeekNumber();
    // return riddles[weekNumber % riddles.length]; // Loop through riddles
    return riddles[currentRiddleIndex];
}

// Display the current riddle and image
function displayRiddle() {
    const currentRiddle = getCurrentRiddle();
    document.getElementById("riddle-text").textContent = currentRiddle.text;
    document.getElementById("riddle-image").src = currentRiddle.image;
}

function getNextRiddle() {
    currentRiddleIndex += 1;
    const nextRiddle = riddles[currentRiddleIndex % riddles.length];
    document.getElementById("riddle-text").textContent = nextRiddle.text;
    document.getElementById("riddle-image").src = nextRiddle.image;

}

// Run the display function on page load
window.onload = displayRiddle;

