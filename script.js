const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', function() {
    
    const showMenu = document.getElementById("dropDownMenu");

    if (showMenu.style.display === "none") {
        showMenu.style.display = "flex";
    } else {
        showMenu.style.display = "none";
    }

})



