const enterButton = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const listItems = ['Notebook', 'Jello', 'Spinach', 'Rice', 'Birthday Cake', 'Candles'];

function addItem() {
    if (!input.value.length) return;
    listItems.push(input.value);
    createItems();
    input.value = "";
}

function deleteItem(e) {
    const itemIndex = listItems.indexOf(e.target.previousElementSibling.textContent);
    listItems.splice(itemIndex, 1);
    e.target.previousElementSibling.remove();
    e.target.remove();
}

function toggleDone(e) {
    e.target.classList.toggle("done");
}

function createItems() {
    ul.innerHTML = "";
    listItems.forEach(item => {
        const div = document.createElement("div");
        const li = document.createElement("li");
        const itemText = document.createTextNode(item);
        const deleteButton = document.createElement("button");
        const deleteButtonText = document.createTextNode("Delete");

        li.appendChild(itemText);
        deleteButton.appendChild(deleteButtonText);
        div.append(li, deleteButton);
        ul.appendChild(div);

        li.onclick = toggleDone;
        deleteButton.onclick = deleteItem;
    });
}

createItems();
enterButton.addEventListener("click", addItem);
input.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) addItem();
});