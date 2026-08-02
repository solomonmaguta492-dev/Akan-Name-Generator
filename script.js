const dayNames = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
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

function getAkanName() {
  const birthdate = new Date(document.getElementById("birthdate").value);
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const dayIndex = birthdate.getDay();

  const selectedNames = gender === "male" ? maleNames : femaleNames;
  const akanName = selectedNames[dayIndex];

  document.getElementById("displayName").textContent =
    `Your Akan name is ${akanName}.`;
}

const form = document.getElementById("akanForm");
if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    getAkanName();
  });
}
