// Variablendeklaration

let inputString = document.querySelector("#inputString");
const button = document.querySelector("#buttonAdd");

const list = document.querySelector("#formList");

let boxArr = null;
let toDo = [];
let value = 0;

// object anlegen

let newDo = {
    id: null,
    text: null,
    done: false
}

// Container Definition

const newDiv = document.createElement("div")

// functions

function addToDo() {
    const getDo = Object.create(newDo)
    getDo.id = value
    getDo.done = false
    getDo.text = inputString.value
    toDo.push(getDo)
    value++

    console.log(getDo, toDo);
    // const innerDiv = document.getElementsByClassName("divCheckbox")
    
    list.innerHTML = "";
    // const array = toDo.map(el => {
        newDiv.innerHTML += `
        <div class='divCheckbox' id='div${getDo.id}'>
        <input type='checkbox' name='check${getDo.text}' id='check${getDo.text}' class='checkBox'>
        <label for='check${getDo.text}'>${getDo.text}</label>
        <p class='deleteDo' id='delete${getDo.id}'>❌</p>
        </div>
        `
        
        // });
        list.appendChild(newDiv)
        
        inputString.value = null;
        addEventListenerToX(`${getDo.id}`)
}

const addEventListenerToX = (id) => {
    
    const obt = document.querySelector(`#delete${id}`)

    obt.addEventListener("click", deleteObject)

}

const deleteObject = (e) => {
    const bool = confirm("Soll dieses Object wirklich gelöscht werden?")
    if(bool == true) {
        const parent = document.querySelector(`#${e.target.id}`).parentElement
        console.log(bool, e.target.id, parent.id);

        // node Definition
        const divParent = document.querySelector("#formList").children
        console.log(divParent);

        const child = document.getElementById(`${parent.id}`)
        console.log(child);
        const remove = divParent[0].removeChild(child)
        // function zum Löschen des Objects und Position in Array

    } else {
        console.log(bool);
    }
}

// addEventListener()