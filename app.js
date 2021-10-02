// Variables For Datepicker

var datePicker = document.querySelector("#datePicker");
var choseDate = document.querySelector("#choseDate");

// Variables For Prinitng Values

var ageYear = document.querySelector("#ageYear");
var ageMonth = document.querySelector("#ageMonth");
var ageDays = document.querySelector("#ageDays");
var ageHours = document.querySelector("#ageHours");
var ageSeconds = document.querySelector("#ageSeconds");
var ageMiliSeconds = document.querySelector("#ageMiliSeconds");

datePicker.addEventListener("change", function () {
  var options = { year: "numeric", month: "long", day: "numeric" };
  var selectedDate = new Date(this.value);
  var DOB = selectedDate.toLocaleDateString("en-US", options);

  choseDate.innerHTML = "DOB : " + " " + DOB;

  var miliSeconds_Btw_DOB = Date.parse(DOB);
  var miliSecond_Btw_Now = Date.now();

  var age_in_MiliSeconds = miliSecond_Btw_Now - miliSeconds_Btw_DOB;

  // console.log(age_in_MiliSeconds);

  var miliSeconds = age_in_MiliSeconds;
  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;
  var month = day * 30;
  var year = day * 365;

  // NOW START THE CALCULATION

  var years = Math.round(miliSeconds / year);
  var months = years * 12;
  var days = years * 365;
  var hours = Math.round(miliSeconds / hour);
  var seconds = Math.round(miliSeconds / second);

  // Now it is time to print values in boxes

  ageYear.innerHTML = years;
  ageMonth.innerHTML = months;
  ageDays.innerHTML = days;
  ageHours.innerHTML = hours;
  ageSeconds.innerHTML = seconds;
  ageMiliSeconds.innerHTML = miliSeconds;

  document.querySelector(".age-calc").classList.add("expand");
});
