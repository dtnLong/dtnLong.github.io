const button = document.querySelector("#post-btn");
const input = document.querySelector("#post-input");
const contentArea = document.querySelector("#content");

button.addEventListener("click", (e) => {
    contentArea.innerHTML += `
        <p>${input.value}</p>
    `
})