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
    done: false,
    checked: false
}

// Container Definition

const newDiv = document.createElement("div")

// functions

function addToDo() {
    if (inputString.value != "") {

        const getDo = Object.create(newDo)
        getDo.id = value
        getDo.done = false
        getDo.checked = false
        getDo.text = inputString.value

        toDo.push(getDo)
        value++

        console.log(getDo, toDo);
        // const innerDiv = document.getElementsByClassName("divCheckbox")

        list.innerHTML = "";
        // const array = toDo.map(el => {
        newDiv.innerHTML += `
        <div class='divCheckbox' id='div${getDo.id}'>
        <input type='checkbox' name='check${getDo.text}' id='check${getDo.id}' class='checkBox'>
        <label for='check${getDo.text}' id='label${getDo.id}'>${getDo.text}</label>
        <p class='deleteDo' id='delete${getDo.id}'>❌</p>
        </div>
        `

        // });
        list.appendChild(newDiv)

        toDo.forEach(el => {
            addEventListenerToX(`${el.id}`)
        });
        inputString.value = null;
    } else {

    }
}

const deleteObject = (e) => {
    const bool = confirm("Soll dieses Object wirklich gelöscht werden?")
    if (bool == true) {
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

const completedObject = (e) => {
    const parent = document.querySelector(`#${e.target.id}`).parentElement
    console.log(e.target.id, parent);

    // node Definition
    const childLabel = parent.childNodes[3]
    // const child = document.querySelector(`#label${e.target.id}`)
    console.log(childLabel);
    childLabel.style.textDecoration = 'line-through';

    let ArrPos = 0
    toDo.forEach(el => {
        // console.log("ID: ", el.id, "Target-ID: ", e.target.id);
        for (let i = 0; i < toDo.length; i++) {
            if (`check${i}` == e.target.id) {
                console.log("Startarray", toDo);
                console.log("Abfrage erfolgreich");
                ArrPos = i
                console.log("Array-Pos: ", el.id);
            }
        }
    });
    toDo.splice(ArrPos, 1)
    console.log("Bereinigtes Array", toDo);
}

// addEventListener()

const addEventListenerToX = (id) => {

    const obt = document.querySelector(`#delete${id}`)
    const box = document.querySelector(`#check${id}`)

    obt.addEventListener("click", deleteObject)
    box.addEventListener("click", completedObject)
}