// Get the current date
let currentDate = new Date();
// Calculate the start date of the current week (saturday)
let startDate = new Date(currentDate);
startDate.setDate(currentDate.getDate() - (1 + currentDate.getDay()));
// ----------------------------
let sunDate = new Date(currentDate);
sunDate.setDate(currentDate.getDate() - (0 + currentDate.getDay()));
let monDate = new Date(currentDate);
monDate.setDate(currentDate.getDate() - (11 - currentDate.getDay()));
let tuDate = new Date(currentDate);
tuDate.setDate(currentDate.getDate() - (10 - currentDate.getDay()));
let wedDate = new Date(currentDate);
wedDate.setDate(currentDate.getDate() - (9 - currentDate.getDay()));
let thDate = new Date(currentDate);
thDate.setDate(currentDate.getDate() - (8 - currentDate.getDay()));

// Calculate the end date of the current week (friday)
let endDate = new Date(currentDate);
endDate.setDate(currentDate.getDate() + (5 - currentDate.getDay()));

// Format the dates
let startDateStr = startDate.toLocaleDateString();
let sunDateStr = sunDate.toLocaleDateString();
let monDateStr = monDate.toLocaleDateString();
let tuDateStr = tuDate.toLocaleDateString();
let wedDateStr = wedDate.toLocaleDateString();
let thDateStr = thDate.toLocaleDateString();
let endDateStr = endDate.toLocaleDateString();
// Display the dates on the webpage
document.getElementById("currentWeekDates").innerText = `Week: ${startDateStr} - ${endDateStr}`;
document.getElementById("sat").innerText = `${startDateStr}`;
document.getElementById("sun").innerText = `${sunDateStr}`;
document.getElementById("mon").innerText = `${monDateStr}`;
document.getElementById("tue").innerText = `${tuDateStr}`;
document.getElementById("wed").innerText = `${wedDateStr}`;
document.getElementById("thu").innerText = `${thDateStr}`;
document.getElementById("fri").innerText = `${endDateStr}`;
//============================================================
var n = document.getElementById("name");
n.value = "Ali Ahmed Abdul Samad";
var idUser = document.getElementById("ID");
idUser.value = "2343243134354";
var building = document.getElementById("build");
building.value = "A";

