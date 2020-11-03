// Define variables
var currentHour = moment().format("HH"); // Variable for current hour 
var currentHourInt = parseInt(currentHour); 
var saveBtn = $(".saveBtn");

// Set data attributes for each time block element so they can be color-coded to indicate whether it is in the past, present, or future
$("#9Row").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
$("#10Row").attr("data-time", moment("10:00 am", "hh:mm a").format("HH"));
$("#11Row").attr("data-time", moment("11:00 am", "hh:mm a").format("HH"));
$("#12Row").attr("data-time", moment("12:00 pm", "hh:mm a").format("HH"));
$("#1Row").attr("data-time", moment("1:00 pm", "h:mm a").format("HH"));
$("#2Row").attr("data-time", moment("2:00 pm", "h:mm a").format("HH"));
$("#3Row").attr("data-time", moment("3:00 pm", "h:mm a").format("HH"));
$("#4Row").attr("data-time", moment("4:00 pm", "h:mm a").format("HH"));
$("#5Row").attr("data-time", moment("5:00 pm", "h:mm a").format("HH"));

//start jQuery 
$(document).ready(function () {

//Display current Day, Date
setInterval(function() {
    var currentDay = moment().format('dddd, MMMM Do, YYYY h:mm a')
    document.getElementById("currentDay").textContent = currentDay;
}, 1000);

// Function to store data 
renderPlans();

// Change color in each row to reflect the current hour 
for (var i = 0; i <= 12; i++) {  

    var inputHour = $("#" + i + "Row").attr("data-time"); // Variable for the hour of the row 
    var inputHourInt = parseInt(inputHour);

    if (currentHourInt === inputHourInt) {
        $("#" + i + "Row").addClass("present"); // Apply red color style if hour is within the present hour 
    }
    if (currentHourInt > inputHourInt) { // Apply grey color style if hour is in the past 
        $("#" + i + "Row").addClass("past");
    }
    if (currentHourInt < inputHourInt) { // Applies green color style if hour is in the future 
        $("#" + i + "Row").addClass("future");
    }
  }

  // Function to store data in local storage when save button clicked 
  saveBtn.on("click", function () { 
    var rowHour = $(this).attr("data-hour"); 
    var input = $("#" + rowHour + "Row").val(); 
    localStorage.setItem(rowHour, input);
    console.log(rowHour + ":" + input); 
  });

  //  Function to retrieve data that was saved in each input 
  function renderPlans() {
    for (var i = 0; i <= 12; i++) {
    $("#" + i + "Row").val(localStorage.getItem(i));
    }
  }
});
