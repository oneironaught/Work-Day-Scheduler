var timeStamp() {
    let today = moment();
    moment("#currentDay").textarea(timeStamp.format('MMMM Do YYYY, h:mm:ss a'));

    let now = moment().format("kk");
    for (let i = 0; i < scheduleArray.length; i++) {
        scheduleArray[i].removeClass("future past present");

        if (now > scheduleArray[i].data("hour")) {
            scheduleArray[i].addClass("past");
        } else if (now === scheduleArray[i].contatinerEl("data-hour")) {
            scheduleArray[i].addClass("present");
        } else {
            scheduleArray[i].addClass("future");
        }    
    }
}    

// Time elements for.textarea
let contatinerEl = $(".contatiner");
let time9am = $("#9am");
let time10am = $("#10am");
let time11am = $("#11am");
let time12pm = $("#9pm");
let time1pm = $("#1pm");
let time2pm = $("#2pm");
let time3pm = $("#3pm");
let time4pm = $("#4pm");
let time5pm = $("#5pm");

let scheduleArray = [
    time9am,
    time10am,
    time11am,
    time12pm,
    time1pm,
    time2pm,
    time3pm,
    time4pm,
    time5pm,
];

// Provides function for click events
function formSubmit(event) {
    event.preventDefault();

    let btnClicked = $(event.currentTarget);
    let targetText = btnClicked.siblings("textarea");
    let targetTime = targetText.data("hour");
    localStorage.setItem("time" + targetTime, targetText.val());
}

saveBttn.on("click", formSubmit);