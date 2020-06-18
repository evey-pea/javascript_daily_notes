// Initialises reference for listings
let itemListingsObject;

// Sets the name of the reference in the browser's localstorage
const storageName = "todolist";

// Assigns references for document elements
const newItem = document.getElementById("item-input");
const addButton = document.getElementById("add-button");
const listParentElement = document.getElementById("myToDo");

// Loads data from local storage and calls for the list content to be generated
const loadLocalObject = () => {
    const temp = localStorage.getItem(storageName);
    if (temp == null) {
        // if not list is locally stored, the itemlist is made an empty object
        itemListingsObject = {};
    } else {
        // if list found in local storage, it is assignede to the itemlistings
        itemListingsObject = JSON.parse(temp);
        buildFirstList();
    }
};

// Write the itemListingsObject to localStorage
const updateList = () => {
    localStorage.setItem(storageName, JSON.stringify(itemListingsObject));
};

// Creates the initial content of the 'ul'
const buildFirstList = () => {
    // create an array of key value pairs from itemsListingsObject (2D array)
    list = Object.entries(itemListingsObject);
    // Iterate through array, adding child 'li' elements to the 'ul'
    list.forEach(element => {
        listParentElement.appendChild(createTaskNode(element[0], element[1]));
    });
};

// Creates each 'li' element
const createTaskNode = (task, value) => {
    // Adds the delete icon
    const text = document.createTextNode("\u00D7");
    // Creates a span element to be inserted into the 'li'
    const deleteItemButton = document.createElement("SPAN");
    deleteItemButton.className = "close";
    deleteItemButton.appendChild(text);
    deleteItemButton.onclick = function(ev.stopPropagation()) {removeItem(this.parentNode.getAttribute("id"));};

    // Create the 'li' element
    const taskItem = document.createElement("LI");
    taskItem.innerHTML = task;
    taskItem.appendChild(deleteItemButton);
    taskItem.setAttribute("id", `${task}`);
    taskItem.onclick = function(ev) {checkItem(this);};
    if (value === 1){
        taskItem.className = "checked";
    };
    return taskItem;
};

// Adds a new task ti the list, saves the list to localStorage and adds 'li' to 'ul'
const addNewItem = () => {    
    // task to object with value of 0
    if (newItem.value === null){
        return alert (`Please enter a value!`)
    } else if (itemListingsObject.hasOwnProperty(newItem.value)){
        return alert (`${newItem.value} is already in your list!`)
        
    } else {
        itemListingsObject[newItem.value] = 0 ;
    }
    updateList();
    listParentElement.appendChild(createTaskNode(newItem.value, 0));
    // Clear input text box
    newItem.value = null;
};

const removeItem = (task) => {
    delete itemListingsObject[task];
    updateList();
    listParentElement.removeChild(document.getElementById(`${task}`));
};

const checkItem = (task) => {
    if (itemListingsObject[task.id] === 1){
        // uncheck
        itemListingsObject[task.id] = 0;
        task.className -= "checked";
    } else {
        // check
        itemListingsObject[task.id] = 1;
        task.className += "checked";
    }
    console.log(`${task.id}: ${itemListingsObject[task.id]}`);
    updateList();
};

// Listens for when the page is loaded before loading local storage
document.addEventListener("load", loadLocalObject());

// Listens for add-item button click
addButton.addEventListener('click', addNewItem);