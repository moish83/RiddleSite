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
        text: "צבי הנינג׳ה?! מה הם קשורים לפה?!",
        image: "tmnt.jpg"
    },
    {
        text: "צב נינג׳ה כחול קשור לתמונה הזאת",
        image: "mona_lisa.jpg"
    },
    {
        text: "קשתות במיץ עגבניות!",
        image: "arch.jpg"
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
const START_DATE = new Date(2024, 5, 20);
const THREE_DAYS_MILLIS = 3 * 24 * 60 * 60 * 1000;

function getRiddleAccordingToDate(date = new Date()) {
    const timeMillis = date.getTime();
    if (timeMillis < START_DATE.getTime()) {
        return riddles[0];
    }

    const riddleIndex = Math.floor((timeMillis - START_DATE.getTime()) / THREE_DAYS_MILLIS);
    if (riddleIndex >= riddles.length) {
        return riddles[riddles.length - 1];
    }

    return riddles[riddleIndex];
}

// Display the current riddle and image
function displayRiddle() {
    const currentRiddle = getRiddleAccordingToDate();
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

