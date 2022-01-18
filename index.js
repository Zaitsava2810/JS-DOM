// Задача 1
const btn1 = document.querySelector("#btn__1");
btn1.addEventListener("click", () => {
  alert("Привет!");
});

// Задача 2
const btn2 = document.querySelector("#btn__2");
btn2.addEventListener("mouseover", () => {
  alert("Привет!");
});

// Задача 3
const btn3 = document.querySelector("#btn__3");
btn3.addEventListener("dblclick", () => {
  alert("Привет!");
});

// Задача 4
const btn4 = document.querySelector(".btn__4");
btn4.addEventListener("mouseout", () => {
  alert("Привет!");
});

// Задача 5
const btn5 = document.getElementById("btn__5");
btn5.addEventListener("click", () => {
  const inp1 = document.getElementById("input1");
  alert(inp1.value);
});

// Задача 6
const btn6 = document.getElementById("btn__6");
btn6.addEventListener("click", () => {
  const inp2 = document.getElementById("input2");
  inp2.value = "Ой, я поменял свой текст!";
});

// Задача 7
const btn7 = document.getElementById("btn__7");
btn7.addEventListener("click", () => {
  const img = document.getElementById("img__1");
  img.src = "img-2.jpg";
});

// Задача 8
const inp3 = document.querySelector("#input3");
function displayValue(el) {
  alert(el.value);
}

// Задача 9
const inp16 = document.querySelector("#input16");
function NewNameValue(el2) {
  el2.value = "Ой, а я поменял текст!";
}

// Задача 10
function changeValue(el6, arr) {
  if (!arr) {
    el6.value = "Ой, а я поменял текст!";
  } else {
    el6.value = "Ой, а теперь еще раз поменял!";
  }
}

// Задача 11
function NameValue(el3) {
  el3.value = "Ку-ку";
}

// Задача 12
function DisabledValue(el4) {
  el4.value = "О, теперь на меня больше не нажать!";
  el4.disabled = true;
}

// Задача 13
function changeImg(el5) {
  el5.src = "img-2.jpg";
}

// Задача 14
const btn14 = document.getElementById("btn__14");
btn14.addEventListener("click", () => {
  const inp4 = document.getElementById("input4");
  inp4.style.color = "red";
});

// Задача 15
const btn15 = document.getElementById("btn__15");
const btn16 = document.getElementById("btn__16");
const inp5 = document.getElementById("input5");

btn15.addEventListener("click", () => {
  inp5.hidden = true;
});

btn16.addEventListener("click", () => {
  inp5.hidden = false;
});

// Задача 17
const btn17 = document.querySelector("#btn__17");
const inp11 = document.querySelector("#input11");
btn17.addEventListener("click", () => {
  inp11.style.width = "300px";
  inp11.style.height = "50px";
  inp11.style.color = "red";
  inp11.style.borderRadius = "10px";
  inp11.value = "Ой, я поменял свой текст и css!";
});

// Задача 18
function quantityValue(el8) {
  el8.value++;
}

// Задача 19
const btn19 = document.querySelector("#btn__19");
const inp12 = document.querySelector("#input12");
btn19.addEventListener("click", () => {
  inp12.style.float = "right";
  inp12.value = "Теперь я плаваю справа!";
});

// Задача 21
const btn21 = document.querySelector("#btn__21");
const inp14 = document.querySelector("#input14");
const inp15 = document.querySelector("#input15");

btn21.addEventListener("click", () => {
  let nth = inp14.value;
  inp14.value = inp15.value;
  inp15.value = nth;
});

// Задача 22
const btn22 = document.querySelector("#btn__22");
const inp7 = document.querySelector("#input7");
const inp8 = document.querySelector("#input8");
inp8.disabled = true;

btn22.addEventListener("click", () => {
  inp8.value = inp7.value * inp7.value;
});

// Задача 23
const btn23 = document.querySelector("#btn__23");
const inp9 = document.querySelector("#input9");
const inp10 = document.querySelector("#input10");
inp10.disabled = true;

btn23.addEventListener("click", () => {
  if (isFinite(inp9.value)) {
    inp10.value = inp9.value * inp9.value;
  } else {
    alert("Введено не число!");
  }
});

// Задача 24
const btn24 = document.querySelector("#btn__24");
btn24.addEventListener("click", () => {
  btn24.disabled = true;
  btn24.style.cursor = "not-allowed";
});

// Задача 25
const el7 = document.querySelector("#windowResult");
const AddVal = (value) => {
  el7.value += value;
};
