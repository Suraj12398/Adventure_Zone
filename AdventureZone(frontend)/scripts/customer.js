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

//    -------------Start here----------


const addTicketButton= document.getElementById("addTicketButton");

let arr=["theme park","water park"];

addTicketButton.addEventListener("click", bookTicket)

async function bookTicket(){

    let obj={
        "ticketId": 0,
  "price": 20.00,
  "bookingDate": "",
  "updatedDT": "",
  "category": [
    {
      "categoryId": 1,
      "catName": "Theme park",
      "deleted": true
    }
  ],
  "customer": {
    "userId": 1,
    "username": "string",
    "password": "string",
    "address": "string",
    "mobNumber": "9918726020",
    "email": "string",
    "createdDate": "2023-07-24T03:36:22.740Z",
    "updatedDT": "2023-07-24T03:36:22.740Z",
    "deleteDT": "2023-07-24T03:36:22.740Z",
    "role": "string",
    "customerId": 0,
    "age": 0,
    "deleted": true
  },
  "expired": true
    }
    let fetchedData=await fetch('http://localhost:8080/adventureZone/tickets', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
    if(fetchedData.ok){
        alert('Ticket Booked Sucessfully')
        window.location.reload()
    }
}