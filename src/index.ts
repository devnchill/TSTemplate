import "./css/styles.css";
const app = document.createElement("div");
app.innerHTML = `
    <div style="
        display: flex; 
        flex-direction: column; 
        align-items: center; 
        justify-content: center; 
        height: 100vh; 
        font-family: Arial, sans-serif;
    ">
        <h1>🚀 Webpack + TypeScript</h1>
        <p>Everything is set up correctly!</p>
        <button id="clickMe">Click Me</button>
        <div id="firework-container" style="position: absolute; top: 0; left: 0; width: 100vw; height: 100vh; pointer-events: none;"></div>
    </div>
`;

document.body.appendChild(app);

document.getElementById("clickMe")?.addEventListener("click", (event) => {
  console.log("Button clicked!", event.clientX, event.clientY);
  createFirework(event.clientX, event.clientY);
});

function createFirework(x: number, y: number) {
  const fireworkContainer = document.getElementById("firework-container");
  if (!fireworkContainer) return;

  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("div");
    particle.className = "firework-particle";
    fireworkContainer.appendChild(particle);

    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 60%)`; // Random colors

    const angle = Math.random() * 2 * Math.PI;
    const speed = Math.random() * 100 + 30;
    const xVelocity = Math.cos(angle) * speed;
    const yVelocity = Math.sin(angle) * speed;

    setTimeout(() => {
      particle.style.transform = `translate(${xVelocity}px, ${yVelocity}px) scale(0)`;
      particle.style.opacity = "0";
    }, 10);

    setTimeout(() => {
      particle.remove();
    }, 1000);
  }
}
