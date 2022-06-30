// Establishing time from moment.js
var today = moment();

// Header timestamp with running time
$("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm:ss a"));

function scheduledTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
}

// Moment.js function attemtping to add click event
$(document).ready(function(){ 
    $(".saveBtn").on("click", function(){
        var textArea = $(this).siblings(".scheduler").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, textArea);
    });

// A function to add color to the columns/rows when scheduledTask is updated or changed    
function scheduledTask(){
var currentHour = moment().hour();  
    $('.time-block').each(function(){
        var idColumns = parseInt($(this).attr("id"));
        if (idColumns < currentHour){
            $(this).addClass("past");
        } else if (idColumns === currentHour){
            $(this).addClass("present");
            $(this).removeClass("past");
        } else {$(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
            }
        })
    }
scheduledTask();
var timeInterval = setInterval(scheduledTask, 1000);
}); 

// Time elements for .textarea saving to the local storage when page is refreshed //
    $("#9am .scheduler").val(localStorage.getItem("9am"));
    $("#10am .scheduler").val(localStorage.getItem("10am"));
    $("#11am .scheduler").val(localStorage.getItem("11am"));
    $("#12pm .scheduler").val(localStorage.getItem("12pm"));
    $("#1pm .scheduler").val(localStorage.getItem("1pm"));
    $("#2pm .scheduler").val(localStorage.getItem("2pm"));
    $("#3pm .scheduler").val(localStorage.getItem("3pm"));
    $("#4pm .scheduler").val(localStorage.getItem("4pm"));
    $("#5pm .scheduler").val(localStorage.getItem("5pm"));