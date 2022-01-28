
const tabClicked = (tabName) => {
    let contents = document.getElementsByClassName("content-box");
    for (let content of contents) {
        if (tabName.innerText.toLowerCase() == content.id) {
            content.style.display = "flex";
        } else {
            content.style.display = "none";
        }

    }
}