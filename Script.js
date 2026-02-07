const petalsContainer = document.querySelector('.petals');

for (let i = 0; i < 35; i++) {
  let petal = document.createElement('span');
  petal.innerHTML = "🌹";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = (Math.random() * 6 + 4) + "s";
  petal.style.opacity = Math.random();
  petalsContainer.appendChild(petal);
}
