var january = {
    name: "January",
    numberOfEmptySquares: 4,
    numberOfDays: 31,
    backgroundColor: "#4cb5cb"
};
var february = {
    name: "February",
    numberOfEmptySquares: 0,
    numberOfDays: 28,
    backgroundColor: "#a2aeda"
};
var march = {
    name: "March",
    numberOfEmptySquares: 0,
    numberOfDays: 31,
    backgroundColor: "#78c1c8"
};
var april = {
    name: "April",
    numberOfEmptySquares: 3,
    numberOfDays: 30,
    backgroundColor: "#fcb8d6"
};
var may = {
    name: "May",
    numberOfEmptySquares: 5,
    numberOfDays: 30,
    backgroundColor: "#c4df9b"
};
var june = {
    name: "June",
    numberOfEmptySquares: 1,
    numberOfDays: 30,
    backgroundColor: "#fcdf57"
};
var july = {
    name: "July",
    numberOfEmptySquares: 3,
    numberOfDays: 31,
    backgroundColor: "#f88e6e"
};
var august = {
    name: "August",
    numberOfEmptySquares: 6,
    numberOfDays: 31,
    backgroundColor: "#f9b58d"
};
var september = {
    name: "September",
    numberOfEmptySquares: 2,
    numberOfDays: 30,
    backgroundColor: "#b6af46"
};
var october = {
    name: "October",
    numberOfEmptySquares: 4,
    numberOfDays: 31,
    backgroundColor: "#f7941d"
};
var november = {
    name: "November",
    numberOfEmptySquares: 0,
    numberOfDays: 30,
    backgroundColor: "#5a6c41"
};
var december = {
    name: "December",
    numberOfEmptySquares: 2,
    numberOfDays: 31,
    backgroundColor: "#9aacc1"
};
var year = [january, february, march, april, may, june, july, august, september, october, november, december];

function renderCalendar(month) { 
    setMonthName(month.name);
    setDates(month.numberOfEmptySquares, month.numberOfDays);
    renderColor(month.backgroundColor);
}
function renderColor(colorNumber) {
    var calendarHeader = document.getElementsByClassName("calendarHeader")[0];
    calendarHeader.style.backgroundColor = colorNumber;
}
function setMonthName(monthName) { // set month name text
    var monthNameElement = document.getElementById("monthName"); 
    monthNameElement.innerText = monthName;
}
function setDates(numberOfEmptySquares, numberOfDays) { //set month date text
    var datesElement = document.getElementsByClassName("dates")[0];
    var datesChildren = datesElement.children;
    for( var i = 0; i < numberOfEmptySquares; i++) {
        datesChildren[i].innerHTML = "&nbsp;";
    }
    var dayCount = 1;
    for( var i = numberOfEmptySquares; i < numberOfDays + numberOfEmptySquares; i++) {
        datesChildren[i].innerText = dayCount;
        dayCount = dayCount + 1;
    }
    for( var i = numberOfDays + numberOfEmptySquares; i < 42; i++) {
        datesChildren[i].innerHTML = "&nbsp;";
    }
}
var leftArrow = document.getElementsByClassName("leftArrow")[0];
var rightArrow = document.getElementsByClassName("rightArrow")[0];
leftArrow.addEventListener("click", function(){
    if(currentMonth == 0) {
        currentMonth = 11;
    } else {
        currentMonth = currentMonth - 1;
    }
    var month = year[currentMonth];
    renderCalendar(month);
});
rightArrow.addEventListener("click", function(){
    if(currentMonth == 11) {
        currentMonth = 0;
    } else {
        currentMonth = currentMonth + 1
    }
    var month = year[currentMonth];
    renderCalendar(month);
});
var currentMonth = 4;
renderCalendar(may);

