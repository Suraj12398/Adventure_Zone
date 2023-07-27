

const addTicketButton= document.getElementById("addTicketButton");
const currUser=JSON.parse(localStorage.getItem("loggedInCustomer"))||{}
let cId=currUser.customerId;
const selectedCategories = [];
const priceT = document.getElementById("price");
const price=0;


document.getElementById("addTicketButton").addEventListener("click", () => {
    // Get values from the form
    const ticketName = document.getElementById("ticketName").value;
    const ageRestriction = document.getElementById("ageRestriction").value;
    const ticketDate = document.getElementById("ticketDate").value;
   
   
    // Get the selected checkboxes
    
    const checkboxes = document.querySelectorAll('input[name="ticketCategory"]:checked');
    checkboxes.forEach((checkbox) => {
        price+=500;
      selectedCategories.push(checkbox.value);
    });
  
    // Use the data as needed

    console.log("Selected Categories:", selectedCategories);
    priceT.innerText=price;
  });
  



addTicketButton.addEventListener("click", bookTicket)

async function bookTicket(){

    let obj={
    "ticketId": 0,
  "price": price,
  "bookingDate": "",
  "updatedDT": "",
  "expired": false
    }
    
    
    let fetchedData=await fetch(`http://localhost:8080/adventureZone/tickets/${cId}/${selectedCategories}`, {
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