var today = moment();

// Moment.js function attemtping to add click event
$(document).ready(function(){
    $("#currentDay").text(moment().format("dddd, MMMM YYYY"));
    // $("#currentHour").text(moment().format("h:mm:ss a")); 
    $(".saveBtn").on("click", function(){
        var textArea = $(this).siblings(".textArea").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, textArea);
    });

function timeChange(){
var currentHour = moment().hour();
        
    $('.time-block').each(function(){
        var idTime = parseInt($(this).attr("id"));
        if (idTime < currentHour){
            $(this).addClass("past");
        } else if (idTime === currentHour){
            $(this).addClass("present");
            $(this).removeClass("past");
        } else {$(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
            }
        })
    }
timeChange();
var timeInterval = setInterval(timeChange, 1000);
}); 

// var today = function() {
//     today = JSON.parse(localStorage.getItem("today"));
//     if (!tasks) {
//         tasks = {
//           toDo: [],
//           inProgress: [],
//           inReview: [],
//           done: []
//         };
//       }
// }
// Time elements for .textarea attempting to add local storage //
    $("#9am").val(localStorage.getItem("9am"));
    $("#10am").val(localStorage.getItem("10am"));
    $("#11am").val(localStorage.getItem("11am"));
    $("#12pm").val(localStorage.getItem("12pm"));
    $("#1pm").val(localStorage.getItem("1pm"));
    $("#2pm").val(localStorage.getItem("2pm"));
    $("#3pm").val(localStorage.getItem("3pm"));
    $("#4pm").val(localStorage.getItem("4pm"));
    $("#5pm").val(localStorage.getItem("5pm"));