const registerBookForm = document.getElementById("registerBookForm");
let requestError = false


function handleSubmit(data){
    console.log(data)
    return fetch(window.location.href, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}

function message(message){
    messageElement = document.getElementById("message");
    if (requestError) messageElement.style.color = "red"
    else messageElement.style.color = "green"
    messageElement.innerHTML = message
}


registerBookForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let bookData = {};

    bookData.name = document.getElementById("name").value;
    bookData.author = document.getElementById("author").value;
    bookData.release_date = document.getElementById("release_date").value;

    handleSubmit(bookData)
        .then(result => {
            requestError = result.status != 200 ? true : false
            return result.json()
        })
        .then(result => {
            message(result.message)
        })
        .catch(async err => {
            console.log(err)
            alert("Error ao registrar")
        });
});