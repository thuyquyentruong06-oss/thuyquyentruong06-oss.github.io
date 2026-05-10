function validateForm() {
    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value;
    var profilePicture = document.getElementById("profilePicture").value;

    var usernameError = document.getElementById("usernameError");
    var passwordError = document.getElementById("passwordError");
    var imageError = document.getElementById("imageError");
    var successMessage = document.getElementById("successMessage");

    usernameError.innerHTML = "";
    passwordError.innerHTML = "";
    imageError.innerHTML = "";
    successMessage.innerHTML = "";

    var isValid = true;

    if (username.length < 5 || username.length > 15) {
        usernameError.innerHTML = "Username must be 5-15 characters.";
        isValid = false;
    }

    if (!hasLettersAndNumbers(password)) {
        passwordError.innerHTML = "Password must contain both letters and numbers.";
        isValid = false;
    }

    if (profilePicture === "") {
        imageError.innerHTML = "Please choose a profile picture.";
        isValid = false;
    } else if (!isValidImage(profilePicture)) {
        imageError.innerHTML = "Image file must be JPG or PNG.";
        isValid = false;
    }

    if (isValid) {
        successMessage.innerHTML = "Registration successful!";
    }

    return false;
}

function hasLettersAndNumbers(password) {
    var hasLetter = /[A-Za-z]/.test(password);
    var hasNumber = /[0-9]/.test(password);

    return hasLetter && hasNumber;
}

function isValidImage(fileName) {
    var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
    return allowedExtensions.test(fileName);
}

function checkPasswordStrength() {
    var password = document.getElementById("password").value;
    var strengthBar = document.getElementById("strengthBar");
    var strengthText = document.getElementById("strengthText");

    var strength = 0;

    if (password.length >= 6) {
        strength++;
    }

    if (/[A-Za-z]/.test(password) && /[0-9]/.test(password)) {
        strength++;
    }

    if (/[^A-Za-z0-9]/.test(password)) {
        strength++;
    }

    if (password.length === 0) {
        strengthBar.style.width = "0";
        strengthBar.style.backgroundColor = "transparent";
        strengthText.innerHTML = "Password strength";
        strengthText.style.color = "#666";
    } else if (strength === 1) {
        strengthBar.style.width = "33%";
        strengthBar.style.backgroundColor = "red";
        strengthText.innerHTML = "Weak password";
        strengthText.style.color = "red";
    } else if (strength === 2) {
        strengthBar.style.width = "66%";
        strengthBar.style.backgroundColor = "orange";
        strengthText.innerHTML = "Medium password";
        strengthText.style.color = "orange";
    } else {
        strengthBar.style.width = "100%";
        strengthBar.style.backgroundColor = "green";
        strengthText.innerHTML = "Strong password";
        strengthText.style.color = "green";
    }
}