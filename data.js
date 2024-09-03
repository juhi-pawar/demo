document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Clear any previous error messages
    document.querySelectorAll('.error-message').forEach(function(errorMsg) {
        errorMsg.textContent = '';
    });

    let isValid = true;

    // Validate first name
    const firstName = document.getElementById('first-name');
    if (firstName.value.trim() === '') {
        showError(firstName, 'First name is required.');
        isValid = false;
    }

    //validate last name
    const lastName=document.getElementById('last-name');
    if(lastName.value.trim()===''){
        showError(lastName,'last name is required.');
       isValid=false;
    }
    //email id 
    const email = document.getElementById('email');
    if (email.value.trim() === '') {
        showError(email, 'Email is required.');
        isValid = false;
    } else if (!validateEmail(email.value.trim())) {
        showError(email, 'Please enter a valid email address.');
        isValid = false;
    }

    // Validate phone number
    const phoneNumber = document.getElementById('phone-number');
    const phoneNumberValue = phoneNumber.value.trim();

    
    if (phoneNumberValue === '' || isNaN(phoneNumberValue) || phoneNumberValue.length !== 10) {
        showError(phoneNumber, 'Phone number is required.');
        isValid = false;
    }

    // Clear the form fields if the form is valid
    if (isValid) {
        document.querySelectorAll('input').forEach(function(input) {
            input.value = '';
        });
    }
});

function showError(inputElement, message) {
    const errorElement = document.createElement('p');
    errorElement.classList.add('error-message', 'text-red-400', 'text-sm', 'mt-1');
    errorElement.textContent = message;
    inputElement.parentNode.appendChild(errorElement);
}
// Function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
    
