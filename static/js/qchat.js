const selectElement = document.getElementById("age");

for (let i = 12; i <= 36; i++) {
  const optionElement = document.createElement("option");
  optionElement.value = i;
  optionElement.textContent = i;
  selectElement.appendChild(optionElement);
}
