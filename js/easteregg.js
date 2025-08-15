// Easter Egg: comandos secretos
// Mostrar input con Ctrl+Shift+E
// coffee --status muestra gif divertido de café
// about --curiosities muestra curiosidades personales

document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'e') {
    const input = document.getElementById('easter-egg-input');
    input.style.display = input.style.display === 'block' ? 'none' : 'block';
    if (input.style.display === 'block') input.focus();
  }
});

const curiosities = [
  'Me encanta el café ☕ y programar de noche.',
  'Fan de los videojuegos retro 🎮.',
  'Siempre busco aprender algo nuevo cada semana.',
  'Mi editor favorito es VS Code.'
];

document.getElementById('easter-egg-input').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    const val = this.value.trim().toLowerCase();
    if (val === 'coffee --status') {
      showEasterEgg(`<img src='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif' alt='Café cargando...' style='width:180px;border-radius:8px;'>`);
    } else if (val === 'about --curiosities') {
      showEasterEgg('<ul style="margin:0;padding-left:1.2em;">'+curiosities.map(c=>`<li>${c}</li>`).join('')+'</ul>');
    } else {
      showEasterEgg('<span style="color:#c00;">Comando secreto no reconocido.</span>');
    }
    this.value = '';
    this.style.display = 'none';
  }
});

function showEasterEgg(html) {
  let bar = document.getElementById('easter-egg-bar');
  let old = document.getElementById('easter-egg-popup');
  if (old) old.remove();
  let popup = document.createElement('div');
  popup.id = 'easter-egg-popup';
  popup.style.position = 'fixed';
  popup.style.bottom = '55px';
  popup.style.right = '10px';
  popup.style.background = '#fff';
  popup.style.color = '#222';
  popup.style.border = '2px solid #004080';
  popup.style.borderRadius = '10px';
  popup.style.boxShadow = '0 4px 16px rgba(0,0,0,0.13)';
  popup.style.padding = '1em 1.2em';
  popup.style.zIndex = 1001;
  popup.innerHTML = html + '<br><button style="margin-top:0.7em;padding:0.3em 1em;border-radius:6px;border:none;background:#004080;color:#fff;cursor:pointer;" onclick="this.parentNode.remove()">Cerrar</button>';
  bar.appendChild(popup);
}
