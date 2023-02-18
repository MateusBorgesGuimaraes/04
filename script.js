const palavrasSorteio = [
  'banana',
  'carro',
  'peixe',
  'notebook',
  'ave',
  'java',
  'serpente',
  'cruzeiro',
  'barcelona',
  'chuveiro',
  'sentinela',
];

const palavraSorteada =
  palavrasSorteio[Math.floor(Math.random() * palavrasSorteio.length)];
const letrasErradas = [];
const letrasCertas = [];

document.addEventListener('keydown', (event) => {
  const codigo = event.keyCode;
  if (isLetra(codigo)) {
    const letra = event.key;
    if (letrasErradas.includes(letra)) {
      avisoLetraRepetida();
    } else {
      if (palavraSorteada.includes(letra)) {
        letrasCertas.push(letra);
      } else {
        letrasErradas.push(letra);
      }
    }
    atualizar();
  }
});

function atualizar() {
  showErradas();
  showCertas();
  pontuacao();
  verifica();
}

function showErradas() {
  const p = document.querySelector('.letras-container');
  p.innerHTML = '';

  letrasErradas.forEach((letra) => {
    p.innerHTML += `<span>${letra}</span>`;
  });
}

function showCertas() {
  const container = document.querySelector('.palavra-certa');
  container.innerHTML = '';
  palavraSorteada.split('').forEach((letra) => {
    if (letrasCertas.includes(letra)) {
      container.innerHTML += `<span>${letra}</span>`;
    } else {
      container.innerHTML += `<span>_ </span>`;
    }
  });
}

function pontuacao() {
  const partes = document.querySelectorAll('.parte');
  for (let i = 0; i < letrasErradas.length; i++) {
    partes[i].classList.add('opacidade');
  }
}

function verifica() {
  const container = document.querySelector('.palavra-certa');
  const partes = document.querySelectorAll('.parte');
  const ganhou = document.querySelector('.win');
  const perdeu = document.querySelector('.lose');

  console.log(partes.length);
  console.log(letrasErradas);
  if (letrasErradas.length === partes.length) {
    perdeu.style.display = 'block';
  }

  if (palavraSorteada === container.innerText) {
    ganhou.style.display = 'block';
  }
}

function avisoLetraRepetida() {
  window.alert('A letra ja foi usada.');
}

function isLetra(codigo) {
  return codigo >= 65 && codigo <= 90;
}

function restart() {
  window.location.reload();
}
