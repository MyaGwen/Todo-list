// // Select the HTML element(s) with the class name "username"
// let userNameElements = document.getElementsByClassName("username");

// // Prompt the user to enter their name and store the value in a variable
// let userInput = prompt("Please enter your name:");

// // Check if the user entered nothing or clicked "cancel"
// if (!userInput) {
//     // If so, display an alert message
//     alert("It's okay if you don't want to tell me your name");
//     // Set the value of the userInput variable to "Dear"
//     userInput = "Dear";
// }

// // Update the text content of the "username" element(s) with the user's name or "Dear"
// for (const element of userNameElements) {
//     element.textContent = ", " + userInput + "!";
// }


// section-center = to-do-input
// grocery-form = input-form
// grocery = item
// .submit-btn = #enter
// .grocery-container = list-container
// .grocery-list = to-do-list
// grocery-item = list-item
// btn-container = list-btn-container


//! SELECT ITEMS
const alert = document.querySelector(".alert");
const form = document.querySelector(".input-form");
const item = document.getElementById("item");
const submitBtn = document.getElementById("enter");
const container = document.querySelector(".list-container");
const list = document.querySelector(".to-do-list");
const clearBtn = document.querySelector(".clear-btn");



//! EDIT OPTION
let editElement;
let editFlag = false;
let editID = "";

//! EVENT LISTENERS
//todo SUBMIT FORM
form.addEventListener("submit", addItem);
//todo SUBMIT FORM
clearBtn.addEventListener("click", clearItems);

//! FUNCTIONS
function addItem(e) {
    e.preventDefault();
    const value = item.value;
    const id = new Date().getTime.toString();

    if (value && !editFlag) {
        const element = document.createElement("article")
        //! add class
        element.classList.add("list-item");
        //!add id
        const attr = document.createAttribute("data-id")
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = `<p class="list-title">${value}</p>
        <div class="list-btn-container">
            <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
            </button>
            <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
            </button>
        </div>`
        //!append child
        list.appendChild(element);
        //! add display alert
        displayAlert("item added", "success");
        //!show container
        container.classList.add("show-list-container")
        //!add to local storage
        addToLocalStorage(id, value);
        //!set back to default
        setBackToDefault();
    } else if (value && editFlag) {
        console.log("editing")
    } else {
        displayAlert("Enter an item", "danger")
    }
}

//!display alert
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    //! remove alert
    setTimeout(function () {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 1000)
}
//! clear items
function clearItems() {
const items = document.querySelectorAll('.list-item');
if(items.length > 0){
    items.forEach(function(item){
        list.removeChild(item);
    })
}
container.classList.remove("show-list-container")
displayAlert("list is empty", "success")
setBackToDefault();
//!local storage
localStorage.removeItem()
}
//!set back to default
function setBackToDefault() {
    item.value = "";
    editFlag = false;
    editID = ""
    submitBtn.textContent = "Add";
}


//! LOCAL STORAGE
function addToLocalStorage(id, value) {
    console.log("adding to local storage")
}



//! SETUP ITEMS


