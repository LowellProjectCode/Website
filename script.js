const c = document.getElementById("circle");

function circle(event) {
  c.style.left = event.clientX + parseFloat(c.style.width) / 2 + "px";
  c.style.top = event.clientY + parseFloat(c.style.height) / 2 + "px";
  console.log(c);
}
