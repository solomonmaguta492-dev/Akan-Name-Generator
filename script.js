// Akan Name Generator Script//
const dayNames = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
// Akan names for males and females based on the day of the week they were born//
const maleNames = [
  "kwadwo",
  "kwabene",
  "kwaku",
  "yaw",
  "kofi",
  "kwame",
  "kwasi",
];
const femaleNames = [
    "adwoa",
    "abenaa",
    "akua",
    "yaa",
    "afua",
    "ama",
    "akosua"
]

function getAkanName(form) {
  const birthdate = new Date(document.getElementById("birthdate").value);
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const dayIndex = birthdate.getDay() % maleNames.length; // Get the day of the week (0-6) and map it to the array length

  const selectedNames = gender === "male" ? maleNames : femaleNames;
  const akanName = selectedNames[dayIndex];

  document.getElementById("displayName").textContent =
    `Your Akan name is ${akanName}.`;
}

// Validate input fields//

function validateInput({day, month, year, gender}) {
  if (isNaN(day) || day < 1 || day > 31) {
    return "Invalid day. Please enter a day between 1 and 31.";
  }
  if (isNaN(month) || month < 1 || month > 12) {
    return "Invalid month. Please enter a month between 1 and 12.";
  }
  if (isNaN(year) || year < 1000 || year > new Date().getFullYear()) {
    return "Invalid year. Please enter a year between 1000 and the current year.";
  }
  if (!gender) {
    return "Please select a gender.";
  }
  return true;
}

//calculate day of the week using the Akan Name formula//
function calculateDayOfWeek(day, month, year) {
  // Implementation for calculating day of the week
  const CC = Math.floor(year / 100);             //first two digits of the year
  const YY = year % 100;                        //last two digits of the year
  const MM = month;                            //month of the year
  const DD = day;                             //day of the month
}

const form = document.getElementById("akanForm");
if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    getAkanName();
  });
}
