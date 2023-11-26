document.getElementById('btn').addEventListener('click', function () {
  if (clickCount < 5) {
    const newBtn = document.createElement('button');
    newBtn.textContent = 'Click me';
    newBtn.style.position = 'absolute';
    newBtn.style.top = { Math, : .random() * window.innerHeight }; px;
    newBtn.style.left = { Math, : .random() * window.innerWidth }; px;
    document.body.appendChild(newBtn);
    clickCount++;
  }
});
