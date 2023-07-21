// Get references to the buttons and forms
const ticketsButton = document.getElementById("ticketsButton");
const categoryButton = document.getElementById("categoryButton");
const activityButton = document.getElementById("activityButton");
const customerButton = document.getElementById("customerButton");

const ticketForm = document.getElementById("ticketForm");
const categoryForm = document.getElementById("categoryForm");
const activityForm = document.getElementById("activityForm");
const customerForm = document.getElementById("customerForm");
ticketsButton.style.backgroundColor = "yellow";
// Function to hide all forms
function hideAllForms() {
    ticketForm.style.display = "none";
    categoryForm.style.display = "none";
    activityForm.style.display = "none";
    customerForm.style.display = "none";
}

// Function to show the selected form
function showForm(form) {
    hideAllForms();
    form.style.display = "grid";
}

// Add event listeners to buttons
ticketsButton.addEventListener("click", function () {
    showForm(ticketForm);
    categoryButton.style.backgroundColor = "rgb(186, 248, 186)";
    activityButton.style.backgroundColor = "rgb(186, 248, 186)";
    customerButton.style.backgroundColor = "rgb(186, 248, 186)";
    ticketsButton.style.backgroundColor = "yellow";
});

categoryButton.addEventListener("click", function () {
    showForm(categoryForm);
    categoryButton.style.backgroundColor = "yellow";
    activityButton.style.backgroundColor = "rgb(186, 248, 186)";
    customerButton.style.backgroundColor = "rgb(186, 248, 186)";
    ticketsButton.style.backgroundColor = "rgb(186, 248, 186)";
});

activityButton.addEventListener("click", function () {
    showForm(activityForm);
    categoryButton.style.backgroundColor = "rgb(186, 248, 186)";
    activityButton.style.backgroundColor = "yellow";
    customerButton.style.backgroundColor = "rgb(186, 248, 186)";
    ticketsButton.style.backgroundColor = "rgb(186, 248, 186)";
});

customerButton.addEventListener("click", function () {
    showForm(customerForm);
    categoryButton.style.backgroundColor = "rgb(186, 248, 186)";
    activityButton.style.backgroundColor = "rgb(186, 248, 186)";
    customerButton.style.backgroundColor = "yellow";
    ticketsButton.style.backgroundColor = "rgb(186, 248, 186)";
});

// Show the ticketForm initially
showForm(ticketForm);
