const usernameElement = document.getElementById('username');
let username = localStorage.getItem('username');

if (username) {
  usernameElement.textContent = username;
} else {
  username = prompt('What is your name?');
  if (username) {
    localStorage.setItem('username', username);
    usernameElement.textContent = username;
  }
}

usernameElement.addEventListener('click', () => {
  const newName = prompt('Enter your new name:', username);
  if (newName) {
    localStorage.setItem('username', newName);
    usernameElement.textContent = newName;
    username = newName;
  }
});



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
//todo CLEAR FORM
clearBtn.addEventListener("click", clearItems);
//todo load items
window.addEventListener('DOMContentLoaded', setupItems);

//! FUNCTIONS
function addItem(e) {
    e.preventDefault();
    const value = item.value;
    const id = new Date().getTime.toString();

    if (value && !editFlag) {
createListItem(id, value);
        //! add display alert
        displayAlert("item added", "success");
        //!show container
        container.classList.add("show-list-container")
        //!add to local storage
        addToLocalStorage(id, value);
        //!set back to default
        setBackToDefault();
    } else if (value && editFlag) {
        editElement.innerHTML = value;
        displayAlert('value changed', 'success');
        //edit local storage
        editLocalStorage(editID, value)
        setBackToDefault();
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
    if (items.length > 0) {
        items.forEach(function (item) {
            list.removeChild(item);
        })
    }
    container.classList.remove("show-list-container")
    displayAlert("list is empty", "success")
    setBackToDefault();
    //!local storage
    localStorage.removeItem('list');
}
//!delete function
function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);
    if (list.children.length === 0) {
        container.classList.remove("show-list-container")
    }
    displayAlert("Item removed", "danger")
    setBackToDefault();
    //!remove from localstorage
    removeFromLocalStorage(id);
}
//!edit function
function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    //!set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;
    //!set form value
    item.value = editElement.innerHTML
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = "Edit";
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
    const item = { id, value };
    let items = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
    items.push(item);
    localStorage.setItem('list', JSON.stringify(items))
    // console.log("adding to local storage")
}

function removeFromLocalStorage(id) {
    let items = getLocalStorage();
    items = items.filter(function (item) {
        if (item.id !== id) {
            return item;
        }
    })
    localStorage.setItem('list', JSON.stringify(items));

}
function editLocalStorage(id, value) {
    let items = getLocalStorage();
    items = items.map(function (item) {
        if (item.id === id) {
            item.value = value;
        }
        return item
    });
    localStorage.setItem('list', JSON.stringify(items));

}
function getLocalStorage(id, value) {
    return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
}
//todo localStorage API
//todo set Item
//todo get Item
//todo remove Item
//todo save as strings
localStorage.setItem("items", JSON.stringify(["item", "item2"]));


//! SETUP ITEMS

function setupItems() {
    let items = getLocalStorage();
    if (items.length > 0) {
        items.forEach(function (item) {
            createListItem(item.id, item.value)
        })
        container.classList.add('show-list-container')
    }
}

function createListItem(id, value) {
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
    </div>`;
    //!add evenlisteners to both buttons
    const deleteBtn = element.querySelector('.delete-btn');
    const editBtn = element.querySelector('.edit-btn');
    deleteBtn.addEventListener('click', deleteItem)
    editBtn.addEventListener('click', editItem)
    //!append child
    list.appendChild(element);
}


