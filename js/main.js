import { n_control } from "./n_control.js";
import { n_print } from "./n_print.js";

let btn_reset = document.getElementById("btn__reset");
let btn = document.getElementById("btn__start");

btn.addEventListener("click", function main_start() {
  for (let i = 1; i <= 100; i++) {
    btn.style.display = "none";
    let numb = n_control(i);
    n_print(numb);
  }
  btn_reset.style.display = "inline";
});

btn_reset.addEventListener("click", function reset_game() {
  document.getElementById("number_list").innerHTML = "";
  btn.style.display = "inline";
  btn_reset.style.display = "none";
});
