// Get references to the buttons and forms
// const ticketsButton = document.getElementById("ticketsButton");
const categoryButton = document.getElementById("categoryButton");
const activityButton = document.getElementById("activityButton");
const customerButton = document.getElementById("customerButton");

// const ticketForm = document.getElementById("ticketForm");
const categoryForm = document.getElementById("categoryForm");
const activityForm = document.getElementById("activityForm");
const customerForm = document.getElementById("customerForm");
categoryButton.style.backgroundColor = "yellow";
// Function to hide all forms
function hideAllForms() {
    // ticketForm.style.display = "none";
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
// ticketsButton.addEventListener("click", function () {
//     showForm(ticketForm);
//     categoryButton.style.backgroundColor = "rgb(186, 248, 186)";
//     activityButton.style.backgroundColor = "rgb(186, 248, 186)";
//     customerButton.style.backgroundColor = "rgb(186, 248, 186)";
//     ticketsButton.style.backgroundColor = "yellow";
// });

categoryButton.addEventListener("click", function () {
    showForm(categoryForm);
    categoryButton.style.backgroundColor = "yellow";
    activityButton.style.backgroundColor = "rgb(186, 248, 186)";
    customerButton.style.backgroundColor = "rgb(186, 248, 186)";
    // ticketsButton.style.backgroundColor = "rgb(186, 248, 186)";
});

activityButton.addEventListener("click", function () {
    showForm(activityForm);
    categoryButton.style.backgroundColor = "rgb(186, 248, 186)";
    activityButton.style.backgroundColor = "yellow";
    customerButton.style.backgroundColor = "rgb(186, 248, 186)";
    // ticketsButton.style.backgroundColor = "rgb(186, 248, 186)";
});

customerButton.addEventListener("click", function () {
    showForm(customerForm);
    categoryButton.style.backgroundColor = "rgb(186, 248, 186)";
    activityButton.style.backgroundColor = "rgb(186, 248, 186)";
    customerButton.style.backgroundColor = "yellow";
    // ticketsButton.style.backgroundColor = "rgb(186, 248, 186)";
});

// Show the ticketForm initially
showForm(categoryForm);







// pushData.addEventListener('click', pushToDB)
https://nondescript-effect-production.up.railway.app/adventureZone/admins/customers_list

    window.addEventListener("load", () => {
        
        fetch( 'http://localhost:8080/adventureZone/admins/customers_list', {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify()
        }).then((e) => {
            return e.json();
        }).then((data) => {
            console.log(data);
        }).catch((error) => console.log(error));
    })
   
    // add category function 
    const addCatButton=document.getElementById("addCategoryButton");
    const catName=document.getElementById("catName");
    // http://localhost:8080/adventureZone/categories


    addCatButton.addEventListener("click", addCategory)

    async function addCategory(){

        let obj = {
            categoryId: 0,
            catName: catName.value, // Use catName.value to get the input value
            deleted: false,
          };
        
          let fetchedData = await fetch('http://localhost:8080/adventureZone/categories', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
          });
        
          if (fetchedData.ok) {
            alert('Category Added Successfully');
            window.location.reload();
          }
    }




// add Activity function 

const actAddButton=document.getElementById("actAddButton");
    const actName=document.getElementById("actName");
    const actCharges=document.getElementById("actCharges");
    const actCat=document.getElementById("actCat");
    


    actAddButton.addEventListener("click", addActivity)

    async function addActivity(){

        let obj = {
            activityId: 0,
            activityName: actName.value,
            charges: actCharges.value,
            createdDate: "",
            category: {
              categoryId: 0,
              catName: actCat.value,
              deleted: false
            },
            "deleted": true
          };
        
          let fetchedData = await fetch('http://localhost:8080/adventureZone/activities', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
          });
        
          if (fetchedData.ok) {
            alert('Activity Added Successfully');
            window.location.reload();
          }
    }

   





    // customerButton.addEventListener("click", pushToDB);
    async function pushToDB(){

        let obj={
            userId:20 ,
            username: "bapu",
            password: "bapu123",
            address: "pune",
            mobNumber: "8905112554",
            email: "bapu@gmail.com",
            createdDate: "",
            updatedDT: "",
            deleteDT: "",
            role: "USER",
            customerId: 0,
            age: 0,
            deleted: false
        }
        
        
        let fetchedData=await fetch('http://localhost:8080/adventureZone/addCustomer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        if(fetchedData.ok){
            alert('Customer Added Sucessfully')
            window.location.reload()
        }
    }




    async function DeleteData(id){
        try {
            let deleteFetched=await fetch(`https://636a23c5b10125b78fd19a2e.mockapi.io/products/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            if(deleteFetched.ok){
                console.log('Deleted')
                window.location.reload()
          }
            
        } catch (error) {
            console.log('ERROR!')
        }
    }
