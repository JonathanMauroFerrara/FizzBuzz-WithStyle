let container = document.getElementById("number_list");

export function n_print(n) {
  let x = document.createElement("LI");
  let t = document.createTextNode(n);
  x.appendChild(t);
  container.appendChild(x);
}
