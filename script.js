// ===== HOBBY SECTION =====
const input = document.getElementById("hobbyInput");
const addButton = document.getElementById("addBtn");
const list = document.getElementById("benefitList");

if (addButton && input && list) {
    addButton.addEventListener("click", function() {

        const text = input.value;

        if (text.trim() === "") {
            alert("Please enter something");
            return;
        }

        list.innerHTML += "<li>" + text +
        " <button onclick='this.parentElement.remove()'>Delete</button></li>";

        input.value = "";
    });
}


// ===== CONTACT FORM SECTION =====
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Form submitted successfully!");
    });
}




const dateTimeElement = document.getElementById("dateTime");

if (dateTimeElement) {

    function showDateTime() {

        const now = new Date();

        const day = now.toLocaleString("en-US", { weekday: "long" });
        const date = now.getDate();
        const month = now.toLocaleString("en-US", { month: "long" });
        const year = now.getFullYear();

        const time = now.toTimeString().split(" ")[0];

        dateTimeElement.textContent =
            day + ", " + date + " " + month + " " + year + ", " + time;
    }

    showDateTime();
    setInterval(showDateTime, 1000);
}