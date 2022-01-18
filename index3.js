// Задача 20
const btn20 = document.querySelector("#btn__20");
const inp13 = document.querySelector("#input13");
inp13.className = "eee www ddd";
btn20.addEventListener("click", () => {
  inp13.value = "Мои css классы:" + inp13.className;
});
