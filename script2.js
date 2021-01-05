// Variables for Part 1
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
// Variables for Part 3
var listItem = document.getElementsByTagName("li");

// Part 1: create a new list item.

function inputLength() {
    return input.value.length;
}

function createLi() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";
    // create delete buttons for new created items. (Part 3)
    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    li.appendChild(deleteButton);
    deleteButton.onclick = deleteItem;
}

function addLiAfterClick() {
    if (inputLength() > 0) {
        createLi ();
    }
}

function addLiAfterKeypress(e) {
    if (inputLength() > 0 && e.keyCode === 13) {
        createLi ();
    }
}

button.addEventListener("click", addLiAfterClick);
input.addEventListener("keypress", addLiAfterKeypress);


// Part 2: click list item to toggle the .done class.

    // Following solution doesn't work for new created items.
        // function lineThrough() {
        //     var itemNumber = item.length;
        //     for (var i = 0; i < itemNumber; i++){
        //         item[i].addEventListener("click", function() {
        //             this.classList.toggle("done");
        //         })
        //     }
        // }
        // lineThrough();

ul.onclick = function (e) {
    var target = e.target;
    target.classList.toggle("done");
}


// Part 3: add delete buttons next to each list item.

function itemNumber() {
    return listItem.length;
}

// create delete buttons for existing items.
function addDeleteButton() {
    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    listItem[i].appendChild(deleteButton);
    deleteButton.onclick = deleteItem;
}

function deleteItem(e) {
    e.target.parentNode.remove();
}

for (var i = 0; i < itemNumber(); i++) {
    addDeleteButton();
}

