const InputBox = document.getElementById("inputBox");
const AddButton = document.getElementById("addButton");
const ListBox = document.getElementById("listBox");

AddButton.addEventListener("click", () => {
    if (InputBox.value == '') {
        window.alert("You must write Something !");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = InputBox.value;
        ListBox.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        span.cl
        li.appendChild(span);
    }
    InputBox.value = "";
    saveData()
});

ListBox.addEventListener("click", (item) => {
    if (item.target.tagName === "LI") {
        item.target.classList.toggle("checked");
        saveData()
    }
    else if (item.target.tagName === "SPAN") {
        item.target.parentElement.remove();
        saveData()
    }
},false);

function saveData(){
    localStorage.setItem("data", ListBox.innerHTML);
}

function showTast() {
    ListBox.innerHTML = localStorage.getItem("data");
}
showTast();