const form = document.getElementById('akanForm');
const displayName = document.getElementById('displayName');

if (form && displayName) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const birthdateInput = document.getElementById('birthdate');
        const selectedGender = document.querySelector('input[name="gender"]:checked');

        if (!birthdateInput || !birthdateInput.value) {
            displayName.textContent = 'Please select your birthdate.';
            return;
        }

        if (!selectedGender) {
            displayName.textContent = 'Please select your gender.';
            return;
        }

        const birthDate = new Date(birthdateInput.value);

        if (Number.isNaN(birthDate.getTime())) {
            displayName.textContent = 'Please enter a valid birthdate.';
            return;
        }

        const dayOfWeek = birthDate.getDay();
        const maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
        const femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
        const chosenNames = selectedGender.value === 'male' ? maleNames : femaleNames;

        displayName.textContent = `Your Akan name is ${chosenNames[dayOfWeek]}.`;
    });
}
