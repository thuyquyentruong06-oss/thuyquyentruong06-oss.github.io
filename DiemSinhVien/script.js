function calculateAverage() {
    var gradeElements = document.querySelectorAll(".grade");
    var total = 0;

    for (var i = 0; i < gradeElements.length; i++) {
        total += Number(gradeElements[i].innerHTML);
    }

    var average = total / gradeElements.length;

    document.getElementById("result").innerHTML = 
        "Average Grade: " + average.toFixed(2);
}