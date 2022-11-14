import handleSubmit from "../handleSubmit.js"
import clearInputs from "../clearInputs.js";
import showResponseMessage from "../showResponseMessage.js";

const elementList = document.getElementById("list")
const searchBookForm = document.getElementById("searchBookForm")
const responseMesssageShowElement = document.getElementById("response-message")

searchBookForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    let inputElements = {
        name: document.getElementById("name"),
        author: document.getElementById("author"),
        release_date: document.getElementById("release_date")
    }
    
    let bookData = {}

    if (inputElements.name.value) bookData.name = inputElements.name.value
    if (inputElements.author.value) bookData.author = inputElements.author.value
    if (inputElements.release_date.value) bookData.release_date = inputElements.release_date.value

    try {
        let response = await handleSubmit(window.location.href, bookData)
        let responseData = await response.json()

        if (response.status != 200) {
            showResponseMessage(responseMesssageShowElement, responseData.message, true)
            return 
        }

        showResponseMessage(responseMesssageShowElement, responseData.message)
        clearInputs(Object.values(inputElements))
        clearList(elementList)

        if(!responseData.data) message("Nenhum resultado", true)

        responseData.data.map(data => {
            addRowInTabel(data, elementList)
        })

    } catch (error) {
        console.log(error)
        alert("Ocorreu um erro")
    }
});

function addRowInTabel(datas = {}, tableElement) {
    let newRow = tableElement.insertRow(-1)
    Object.keys(datas).map(key => {
        let newCell = newRow.insertCell(-1)
        
        if (isDate(datas[key])) datas[key] = formatDate(datas[key])
        let newText = document.createTextNode(datas[key]);
        newCell.appendChild(newText);
    })
}

function clearList(elementList = []){
    if (elementList.children.length == 0) return
    Array(...elementList.children).forEach(item => {
        elementList.removeChild(item)
    })
}

function formatDate(date){
    return new Date(date).toLocaleDateString("pt-BR")
}

function isDate(date) {
    var matches = /(\d{4})[-.\/](\d{2})[-.\/](\d{2})/.exec(date);
    if (matches == null) {
        return false;
    }
    var day = matches[3];
    var month = matches[2] - 1;
    var year = matches[1];
    var newDate = new Date(year, month, day);
    return newDate.getDate() == day && newDate.getMonth() == month && newDate.getFullYear() == year;
}