const akanNames = {
  Male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
  Female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amma"]
};

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const form = document.getElementById("Akan Form");
const nameDisplay = document.getElementById("NameDisply");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const birthDateInput = document.getElementById("Birth Date").value;
  const genderInput = document.getElementById("Gender").value;

  if (!birthDateInput || !genderInput) {
    nameDisplay.textContent = "Please enter a valid date and select your gender.";
    return;
  }

  const date = new Date(birthDateInput);
  const dayIndex = date.getDay(); // 0 for Sunday, 1 for Monday, etc.
  
  const assignedName = akanNames[genderInput][dayIndex];
  const dayName = daysOfWeek[dayIndex];

  nameDisplay.textContent = `${assignedName} (Born on a ${dayName})`;
});