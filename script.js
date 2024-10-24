// Object to group arrays by event types and event data
const futureEvents = {
    days: ['Next week', 'Tomorrow', 'Three days from now'],
    times: ['In five minutes', 'In two hours', 'In 30 minutes'],
    moods: ['happily', 'excitedly', 'anxiously'],
    event1: [
        'communicate with aliens through interpretive dance', 
        'forget where you parked', 
        'befriend a talking cat',
    ],
    event2: [
        'win a hotdog eating contest',
        'eat tacos with a dragon',
        'lose your shoes'
    ], 
    event3: [
        'winning a lifetime supply of random ducks',
        'meeting a wizard in a coffee shop', 
        'waking up as a penguin'
    ],
    locations: [
        'on top of a giant marshmallow',
        'at a theme park run by robots',
        'on a planet inhabited by sentient pizza toppings'
    ]
};

// Generate a random number (0, 1, 2)
const generateRandomNum = () => Math.floor(Math.random() * 3);

// Functions with different formats for randomised string outputs
const outputFormat1 = () => {
    const day = futureEvents.days[generateRandomNum()];
    const event1 = futureEvents.event1[generateRandomNum()];
    const event2 = futureEvents.event2[generateRandomNum()];
    const event3 = futureEvents.event3[generateRandomNum()];
    return `${day} you will ${event1} and ${event2} while ${event3}.`;
};

const outputFormat2 = () => {
    const day = futureEvents.days[generateRandomNum()];
    const mood = futureEvents.moods[generateRandomNum()];
    const event1 = futureEvents.event1[generateRandomNum()];
    const event2 = futureEvents.event2[generateRandomNum()];
    const event3 = futureEvents.event3[generateRandomNum()];
    const location = futureEvents.locations[generateRandomNum()];
    return `${day} you will ${mood} ${event1} and ${event2} while ${event3} ${location}.`;
};

const outputFormat3 = () => {
    const time = futureEvents.times[generateRandomNum()];
    const event1 = futureEvents.event1[generateRandomNum()];
    const event2 = futureEvents.event2[generateRandomNum()];
    const event3 = futureEvents.event3[generateRandomNum()];
    const location = futureEvents.locations[generateRandomNum()];
    return `${time} you will ${event1} and ${event2} while ${event3} ${location}.`;
};

// Function to create random string prediction output to user
const predictMyFuture = () => {
    const num = generateRandomNum();
    if (num === 0) {
        return outputFormat1();
    } else if (num === 1) {
        return outputFormat2();
    } else {
        return outputFormat3();
    }
};


document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("predictBtn"); // Get the button
    const predictionOutput = document.getElementById("predictionOutput"); // Get the paragraph element for prediction output

    // Add a click event listener to the button
    button.addEventListener("click", () => {
        const prediction = predictMyFuture(); // Call the function to get the prediction
        predictionOutput.textContent = prediction; // Set the prediction as the text content of the paragraph
    });
});
