const input = document.querySelector("#validation-input");
const lengthInput = Number(input.dataset.length);
input.addEventListener("blur", event => {
    event.currentTarget.value.length === lengthInput
        ? input.classList.add("valid")
        : input.classList.add("invalid");
});
