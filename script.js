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
        'on a planet inhabited by sentient pizza toppings.'
    ]
}

// Generate a random number
const generateRandomNum = () => {
    return Math.floor(Math.random() * 3);
}

// Functions with different formats for randomised string outputs
const outputFormat1 = (day, event1, event2, event3) => {
    let day = futureEvents.days[generateRandomNum()];
    let event1 = futureEvents.event1[generateRandomNum()];
    let event2 = futureEvents.event2[generateRandomNum()];
    let event3 = futureEvents.event3[generateRandomNum()];
    console.log(`${day} you will ${event1} and ${event2} while ${event3}.`);
}

const outputFormat2 = (day, mood, event1, event2, event3, location) => {
    let day = futureEvents.days[generateRandomNum()];
    let mood = futureEvents.moods[generateRandomNum()]
    let event1 = futureEvents.event1[generateRandomNum()];
    let event2 = futureEvents.event2[generateRandomNum()];
    let event3 = futureEvents.event3[generateRandomNum()];
    let location = futureEvents.locations[generateRandomNum()];
    console.log(`${day} you will ${mood} ${event1} and ${event2} while ${event3} ${location}.`)
}

const outputFormat3 = (time, event1, event2, event3, location) => {
    let time = futureEvents.times[generateRandomNum()];
    let event1 = futureEvents.event1[generateRandomNum()];
    let event2 = futureEvents.event2[generateRandomNum()];
    let event3 = futureEvents.event3[generateRandomNum()];
    let location = futureEvents.locations[generateRandomNum()];
    console.log(`${time} you will ${event1} and ${event2} while ${event3} ${location}.`)
}

// Function to create random string prediction output to user
const predictMyFuture = () => {
    let num = generateRandomNum();
    if (num === 0) {
        return outputFormat1(day, event1, event2, event3);
    } else if (num === 1) {
        return outputFormat2(day, mood, event1, event2, event3, location);
    } else if (num === 2) {
        return outputFormat3(time, event1, event2, event3, location);
    }
}

predictMyFuture();

