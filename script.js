const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.querySelector(".parrafito");
const pid = document.querySelector("#pid");
const input = document.querySelector("input");

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerText = "Texto modificado por JavaScript";
console.log(h1.getAttribute("class"))
h1.setAttribute("class","text");

h1.classList.add("inicial");
h1.classList.remove("text");
// h1.classList.toggle("text");
// h1.classList.contains("text");

input.value = "456";

const img = document.createElement("img");
img.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUpZufCzk6YTAJO3DKOuG62KWnMYeOGhr3fg&usqp=CAU");

pid.append(img);