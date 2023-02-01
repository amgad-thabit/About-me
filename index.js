const profileOne = document.getElementById("profile-one")
document.getElementById("open-button").addEventListener("click", function() {
    profileOne.classList.add("name")
    profileOne.classList.remove("saw")
        // profileOne.classList.add("profile-one")
    profileOne.style.display = "flex"


})
document.getElementById("close-button").addEventListener("click", function() {
    profileOne.classList.remove("name")
    profileOne.classList.add("saw")
        // profileOne.classList.remove("profile-one")
    profileOne.style.display = "none"


})