const players = [];

for (let i = 0; i < 3; i++) {
  players[i] = document.getElementById('player' + (i + 1));
  players[i].addEventListener('click', () => {
    const name = prompt('Enter a new name');
  players[i].textContent = players[i].id + " : " + name;
  });
}
