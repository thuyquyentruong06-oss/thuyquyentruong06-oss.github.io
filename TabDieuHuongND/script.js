function openTab(event, tabName) {
    var i;
    var tabContents = document.getElementsByClassName("tab-content");
    var tabButtons = document.getElementsByClassName("tab-button");

    for (i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
        tabContents[i].classList.remove("active-content");
    }

    for (i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("active-content");

    event.currentTarget.classList.add("active");
}