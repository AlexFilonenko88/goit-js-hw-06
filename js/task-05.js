const nameInput = document.querySelector("#name-input");
console.log("input", nameInput);
const nameOutput = document.querySelector("#name-output");
console.log("output", nameOutput);
nameInput.addEventListener("input", (event) => {
        nameOutput.textContent = event.currentTarget.value;
});
