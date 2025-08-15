// Simula proyectos interactivos para el portafolio
const projects = [
  {
    name: "Calculadora JS",
    description: "Calculadora simple hecha en JavaScript.",
    demo: `<iframe src='https://jsfiddle.net/gh/get/library/pure/jsfiddle/examples/tree/master/calculator' width='100%' height='250' style='border:none;'></iframe>`
  },
  {
    name: "Mini Juego",
    description: "Juego interactivo de adivinanza.",
    demo: `<iframe src='https://jsfiddle.net/gh/get/library/pure/jsfiddle/examples/tree/master/guessing-game' width='100%' height='250' style='border:none;'></iframe>`
  }
];

const terminal = document.getElementById('terminal');
const output = document.getElementById('output');
const input = document.getElementById('input');
const themeToggle = document.getElementById('theme-toggle');
const themes = ['light', 'dark', 'monokai', 'dracula'];
let currentTheme = 0;

function print(text, isHTML = false) {
  const div = document.createElement('div');
  if (isHTML) div.innerHTML = text;
  else div.textContent = text;
  output.appendChild(div);
  output.scrollTop = output.scrollHeight;
}

function clearOutput() {
  output.innerHTML = '';
}

function showAbout() {
  print('Compilando información...');
  setTimeout(() => {
    print('Nombre: Eduardo Luis Abella Garcia');
    print('Rol: Tecnólogo en desarrollo de software');
    print('Email: wiielmultifacetico@gmail.com');
    print('Habilidades: Java, Python, JavaScript, React, Node.js, Git, Scrum...');
  }, 800);
}

function showProjects() {
  print('Buscando proyectos...');
  setTimeout(() => {
    projects.forEach((p, i) => {
      print(`Proyecto ${i+1}: ${p.name} - ${p.description}`);
      print(p.demo, true);
    });
  }, 1000);
}

function handleCommand(cmd) {
  const command = cmd.trim().toLowerCase();
  print(`> ${cmd}`);
  if (command === 'about me') showAbout();
  else if (command === 'show projects') showProjects();
  else if (command === 'clear') clearOutput();
  else print('Comando no reconocido. Usa "about me", "show projects" o "clear".');
}

input.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    handleCommand(input.value);
    input.value = '';
  }
});

themeToggle.addEventListener('click', function() {
  currentTheme = (currentTheme + 1) % themes.length;
  document.body.setAttribute('data-theme', themes[currentTheme]);
});

// Inicial
print('Bienvenido al portafolio tipo terminal. Escribe "about me" o "show projects".');
