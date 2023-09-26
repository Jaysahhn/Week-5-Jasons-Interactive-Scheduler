var buttonList = $(".btn");
var description = $(".description");

var now = new Date(); // this variable is set to the value of the present date, day of the week, and exact time
var presentHour = now.getHours(); // this variable is set to the value of the current exact hour of the day (military time)

var currentDate = dayjs();
$('#currentDay').text(currentDate.format('MMM D, YYYY'));
// this is to display the current date at the top

var hour9 = localStorage.getItem("msg1");
var hour10 = localStorage.getItem("msg2");
var hour11 = localStorage.getItem("msg3");
var hour12 = localStorage.getItem("msg4");
var hour1 = localStorage.getItem("msg5");
var hour2 = localStorage.getItem("msg6");
var hour3 = localStorage.getItem("msg7");
var hour4 = localStorage.getItem("msg8");
var hour5 = localStorage.getItem("msg9");
// this section is to allow us to grab from the local storage

var h9am = $("#hour-9");
var h10am = $("#hour-10");
var h11am = $("#hour-11");
var h12pm = $("#hour-12");
var h1pm = $("#hour-1");
var h2pm = $("#hour-2");
var h3pm = $("#hour-3");
var h4pm = $("#hour-4");
var h5pm = $("#hour-5");
// this section allows us to modify the text for the certain hours with local storage

h9am.children(".description").get(0).value = hour9;
h10am.children(".description").get(0).value = hour10;
h11am.children(".description").get(0).value = hour11;
h12pm.children(".description").get(0).value = hour12;
h1pm.children(".description").get(0).value = hour1;
h2pm.children(".description").get(0).value = hour2;
h3pm.children(".description").get(0).value = hour3;
h4pm.children(".description").get(0).value = hour4;
h5pm.children(".description").get(0).value = hour5;
// this section assigns the value of the hours 

$(function () {
  var timeSlots = [
    { hour: 9, element: h9am },
    { hour: 10, element: h10am },
    { hour: 11, element: h11am },
    { hour: 12, element: h12pm },
    { hour: 1, element: h1pm },
    { hour: 2, element: h2pm },
    { hour: 3, element: h3pm },
    { hour: 4, element: h4pm },
    { hour: 5, element: h5pm }
  ];
  // object array to hold the time slots and selecting the variable that is associated with that hour

  timeSlots.forEach(({ hour, element }) => {
    if (presentHour === hour) {
      element.addClass("present");
    } else if (presentHour > hour) {
      element.addClass("past");
    } else {
      element.addClass("future");
    };
  });
  // this will create the classes based upon the criteria that the present hour will be equivalent to the variable that was set beforehand

  buttonList.on("click", function (e) { // just learned, but you can abbriviate event to just the letter e
    e.preventDefault(); // reference notation above

    var button = $("<button>");
    var hourDetail = $(this).parent();
    var hourSave = $(this).parent().attr("id"); // this is the id of the hour (ex. hour-9)
    var msg = hourDetail.children(".description").get(0).value; // this will be the value of what the user types in the timeslot textboxes

    if (hourSave === "hour-9") {
      localStorage.setItem("hour9", msg);
    } else if (hourSave === "hour-10") {
      localStorage.setItem("hour10", msg);
    } else if (hourSave === "hour-11") {
      localStorage.setItem("hour11", msg);
    } else if (hourSave === "hour-12") {
      localStorage.setItem("hour12", msg);
    } else if (hourSave === "hour-1") {
      localStorage.setItem("hour1", msg);
    } else if (hourSave === "hour-2") {
      localStorage.setItem("hour2", msg);
    } else if (hourSave === "hour-3") {
      localStorage.setItem("hour3", msg);
    } else if (hourSave === "hour-4") {
      localStorage.setItem("hour4", msg);
    } else if (hourSave === "hour-5") {
      localStorage.setItem("hour5", msg);
    };
    // if the hourSave variable is equal to the class, we save the hour# variable and the msg typed in the text box to local storage
  });
});
