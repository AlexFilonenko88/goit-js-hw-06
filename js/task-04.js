let countrValue = 0;
const plusButton = document.querySelector('button[data-action="increment"]');
const minusButton = document.querySelector('button[data-action="decrement"]')
const valueWindow = document.querySelector("#value");
plusButton.addEventListener("click", () =>  {
  valueWindow.textContent = countrValue += Number(plusButton.textContent);
});

minusButton.addEventListener("click", () => {
  valueWindow.textContent = countrValue += Number(minusButton.textContent);
});
