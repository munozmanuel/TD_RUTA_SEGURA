const playerContainers = document.getElementById("lottieRuta");
playerContainers.forEach(container => {
  container.addEventListener("mouseover", () => {
    const player = container.querySelector("lottie-player");
    player.setDirection(1);
    player.play();
  });

  container.addEventListener("mouseleave", () => {
    const player = container.querySelector("lottie-player");
    player.setDirection(-1);
    player.play();
  });
});