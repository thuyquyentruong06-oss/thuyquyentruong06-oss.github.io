function toggleGallery() {
    var gallery = document.getElementById("gallery");

    if (gallery.style.display === "none") {
        gallery.style.display = "grid";
    } else {
        gallery.style.display = "none";
    }
}