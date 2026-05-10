function validateForm() {
    var fullname = document.getElementById("fullname").value.trim();
    var email = document.getElementById("email").value.trim();
    var course = document.getElementById("course").value;
    var time = document.querySelector('input[name="time"]:checked');

    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var courseError = document.getElementById("courseError");
    var timeError = document.getElementById("timeError");
    var successMessage = document.getElementById("successMessage");

    nameError.innerHTML = "";
    emailError.innerHTML = "";
    courseError.innerHTML = "";
    timeError.innerHTML = "";
    successMessage.innerHTML = "";

    var isValid = true;

    if (fullname === "") {
        nameError.innerHTML = "Vui lòng nhập họ tên";
        isValid = false;
    }

    if (email === "") {
        emailError.innerHTML = "Vui lòng nhập email";
        isValid = false;
    } else if (!checkEmail(email)) {
        emailError.innerHTML = "Email không đúng định dạng";
        isValid = false;
    }

    if (course === "") {
        courseError.innerHTML = "Vui lòng chọn khóa học";
        isValid = false;
    }

    if (time === null) {
        timeError.innerHTML = "Vui lòng chọn thời gian học";
        isValid = false;
    }

    if (isValid) {
        successMessage.innerHTML = "Đăng ký khóa học thành công!";
    }

    return false;
}

function checkEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}