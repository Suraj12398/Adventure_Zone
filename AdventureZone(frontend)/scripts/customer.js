// Get references to the buttons and forms
const ticketsButton = document.getElementById("ticketsButton");
const transactionButton = document.getElementById("transactionHistory");
const customerButton = document.getElementById("customerButton");

const ticketForm = document.getElementById("ticketForm");
const customerForm = document.getElementById("customerForm");
const transactionCus = document.getElementById("cusTransactions");
ticketsButton.style.backgroundColor = "yellow";
// Function to hide all forms
function hideAllForms() {
    ticketForm.style.display = "none";
    customerForm.style.display = "none";
    transactionButton.style.display = "none";
}

// Function to show the selected form
function showForm(form) {
    hideAllForms();
    form.style.display = "grid";
}

// Add event listeners to buttons
ticketsButton.addEventListener("click", function () {
    showForm(ticketForm);
    customerButton.style.backgroundColor = "rgb(186, 248, 186)";
    ticketsButton.style.backgroundColor = "yellow";
    transactionButton.style.backgroundColor = "rgb(186, 248, 186)";
});



customerButton.addEventListener("click", function () {
    showForm(customerForm);
    customerButton.style.backgroundColor = "yellow";
    ticketsButton.style.backgroundColor = "rgb(186, 248, 186)";
    transactionButton.style.backgroundColor = "rgb(186, 248, 186)";
});

transactionButton.addEventListener("click", function () {
    showForm(customerForm);
    transactionButton.style.backgroundColor = "yellow";
    ticketsButton.style.backgroundColor = "rgb(186, 248, 186)";
    customerButton.style.backgroundColor = "rgb(186, 248, 186)";
});

// Show the ticketForm initially
showForm(ticketForm);

   
