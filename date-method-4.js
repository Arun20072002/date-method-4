document.write("count the number of days in month"+"<br>")
document.write("---------------------------------"+"<br>")

var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth();

var currentMonthLastDate = (new Date(currentYear, currentMonth, 31)).getDate();


var daysLeftInMonth = currentMonthLastDate - currentDate.getDate();

document.write(daysLeftInMonth);