// function toggleSidebar() {
//     const sidebar = document.getElementById("sidebar");
    
//     // Toggle the collapsed class to show/hide the sidebar
//     sidebar.classList.toggle("collapsed");

//     // If sidebar is open, add an event listener for outside clicks
//     if (!sidebar.classList.contains("collapsed")) {
//         document.addEventListener("click", handleOutsideClick);
//     } else {
//         document.removeEventListener("click", handleOutsideClick);
//     }
// }

// function handleOutsideClick(event) {
//     const sidebar = document.getElementById("sidebar");
//     const toggleButton = document.querySelector(".toggle-button");

//     // Close the sidebar if the click is outside the sidebar and button
//     if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
//         sidebar.classList.add("collapsed");
//         document.removeEventListener("click", handleOutsideClick); // Remove listener
//     }
// }
let side_button = document.getElementById("side_button");
let sidebar = document.querySelector(".sidebar");
let content = document.querySelector(".content");

function toggleSidebar() {
    if (sidebar.style.marginLeft === "0vw") {
        sidebar.style.marginLeft = "-30vw";
        content.style.marginLeft = "0vw";
        side_button.style.marginLeft = "0vw";
    } else {
        sidebar.style.marginLeft = "0vw";
        content.style.marginLeft = "20vw";
        side_button.style.marginLeft = "22vw";
    }
}
