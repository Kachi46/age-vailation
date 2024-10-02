function validateField(field, isValid) {
    if (isValid) {
        field.classList.remove('error');
        field.classList.add('success');
    } else {
        field.classList.remove('success');
        field.classList.add('error');
    }
}

function submitBasicInfo() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const Confirmpassword = document.getElementById('Confirmpassword');
    const age = document.querySelector('input[name="age"]:checked');

    let isValid = true;

    if (name.value.trim() === '') {
        validateField(name, false);
        isValid = false;
    } else {
        validateField(name, true);
    }

    if (email.value.trim() === '') {
        validateField(email, false);
        isValid = false;
    } else {
        validateField(email, true);
    }

    if (password.value.length < 8) {
        validateField(password, false);
        isValid = false;
    } else {
        validateField(password, true);
    }
    if (Confirmpassword.value.length < 8) {
        validateField(Confirmpassword, false);
        isValid = false;
    } else {
        validateField(Confirmpassword, true);
    }

    if (!age) {
        isValid = false;
    }

    if (isValid) {
        alert('Basic Info submitted successfully');
    } else {
        alert('Please fill in all fields correctly');
    }
}

function submitProfile() {
    const bio = document.getElementById('bio');
    const jobRole = document.getElementById('jobRole');
    const interests = document.querySelectorAll('input[name="interest"]:checked');

    let isValid = true;

    if (bio.value.trim() === '') {
        validateField(bio, false);
        isValid = false;
    } else {
        validateField(bio, true);
    }

    if (jobRole.value === '') {
        validateField(jobRole, false);
        isValid = false;
    } else {
        validateField(jobRole, true);
    }

    if (interests.length === 0) {
        isValid = false;
    }

    if (isValid) {
        alert('Profile submitted successfully');
    } else {
        alert('Please fill in all fields correctly');
    }
}