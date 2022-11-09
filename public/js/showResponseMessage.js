export default (element, message, error = false) => {
    element.innerHTML = message
    if (error) {
        element.style.color = "#ff606e"
        element.innerHTML +=" &#9888"
    }
    else element.style.color = "#2acc80"

    element.style.visibility = "visible"
}