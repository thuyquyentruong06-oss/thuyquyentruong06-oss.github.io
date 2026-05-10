var showVegetarianOnly = false;

function filterMenu() {
    var menuItems = document.getElementsByClassName("menu-item");
    var filterStatus = document.getElementById("filterStatus");

    showVegetarianOnly = !showVegetarianOnly;

    for (var i = 0; i < menuItems.length; i++) {
        if (showVegetarianOnly) {
            if (menuItems[i].classList.contains("vegetarian")) {
                menuItems[i].style.display = "flex";
            } else {
                menuItems[i].style.display = "none";
            }
        } else {
            menuItems[i].style.display = "flex";
        }
    }

    if (showVegetarianOnly) {
        filterStatus.innerHTML = "Showing: Vegetarian options only";
    } else {
        filterStatus.innerHTML = "Showing: All items";
    }
}