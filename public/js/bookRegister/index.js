import handleSubmit from "../handleSubmit.js"
import clearInputs from "../clearInputs.js";
import showResponseMessage from "../showResponseMessage.js";

const registerBookForm = document.getElementById("registerBookForm");
const responseMesssageShowElement = document.getElementById("response-message")

registerBookForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    let inputElements = {
        name: document.getElementById("name"),
        author: document.getElementById("author"),
        release_date: document.getElementById("release_date")
    }
    let bookData = {
        name: inputElements.name.value,
        author: inputElements.author.value,
        release_date: inputElements.release_date.value
    };

    try {
        let response = await handleSubmit(window.location.href, bookData)
        let responseData = await response.json()

        if (response.status != 200) {
            showResponseMessage(responseMesssageShowElement, responseData.message, true)
        }
        else {
            showResponseMessage(responseMesssageShowElement, responseData.message)
            clearInputs(Object.values(inputElements))
        }
    } catch (error) {
        console.log(error)
        alert("Ocorreu um erro")
    }

});

