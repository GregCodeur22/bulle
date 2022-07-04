let res = document.querySelector("h3");
let compteur = 0;

function bubble() {
  let bubble = document.createElement("span");
  let body = document.body;

  body.appendChild(bubble);

  bubble.classList.add("bubble");

  const size = Math.random() * 100 + 100 + "px";

  bubble.style.width = size;
  bubble.style.height = size;

  bubble.style.top = Math.random() * 200 + 100 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  plusMinus = Math.random() > 0.5 ? -1 : 1;

  bubble.style.setProperty("--left", Math.random() * 100 + plusMinus + "%");

  setInterval(() => {
    bubble.remove();
  }, 5000);

  bubble.addEventListener("click", () => {
    compteur++;
    console.log(compteur);
    bubble.remove();
    res.innerHTML = compteur;
  });
}
setInterval(bubble, 400);
