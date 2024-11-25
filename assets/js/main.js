//Variables
let currentSongIndex = 0;
let isPlaying = false;
const audio = new Audio();

// Elementos DOM
const songImage = document.getElementById("song-image");
const songTitle = document.getElementById("song-title");
const playPauseButton = document.getElementById("play-pause");
const nextButton = document.getElementById("next");
const previusButton = document.getElementById("prev");
const randomButton = document.getElementById("random");
const floatingElements = document.getElementById("floating-elements");

// Botones del reproductor
playPauseButton.addEventListener("click", (e) => {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    playPauseButton.textContent = "▶️";
  } else {
    audio.play();
    isPlaying = true;
    playPauseButton.textContent = "⏸️";
  }
  const rect = playPauseButton.getBoundingClientRect();
  createEmojiBurst(rect.left + rect.width / 2, rect.top, EmojiEspecial);
});

previusButton.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updatePlayer(currentSongIndex);
  audio.play();
  isPlaying = true;
  playPauseButton.textContent = "⏸️";
  const rect = previusButton.getBoundingClientRect();
  createEmojiBurst(rect.left + rect.width / 2, rect.top, EmojiEspecial);
});

nextButton.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updatePlayer(currentSongIndex);
  audio.play();
  isPlaying = true;
  playPauseButton.textContent = "⏸️";
  const rect = nextButton.getBoundingClientRect();
  createEmojiBurst(rect.left + rect.width / 2, rect.top, EmojiEspecial);
});

randomButton.addEventListener("click", () => {
  currentSongIndex = Math.floor(Math.random() * songs.length);
  updatePlayer(currentSongIndex);
  audio.play();
  isPlaying = true;
  playPauseButton.textContent = "⏸️";
  const rect = randomButton.getBoundingClientRect();
  createEmojiBurst(rect.left + rect.width / 2, rect.top, EmojiEspecial);
});

// Botón para abrir el modal
document.getElementById("open-modal").addEventListener("click", () => {
  const modal = new bootstrap.Modal(document.getElementById("song-list-modal"));
  modal.show();
  populateSongList(); 
});

function populateSongList() {
  const songList = document.getElementById("song-list");
  songList.innerHTML = ""; 

  songs.forEach((song, index) => {
      const listItem = document.createElement("li");
      listItem.classList.add("list-group-item", "list-group-item-action");
      listItem.textContent = `${index + 1}. ${song.tituloCancion}`;

      listItem.addEventListener("click", () => {
          currentSongIndex = index;
          updatePlayer(index);
          audio.play();
          isPlaying = true;
          playPauseButton.textContent = "⏸️";

          const modal = bootstrap.Modal.getInstance(document.getElementById("song-list-modal"));
          modal.hide();
      });

      songList.appendChild(listItem);
  });
}

// Función para generar emojis flotantes gigantes de música
function createBigEmojiBurst(listaEmojis) {
  const emojiContainer = document.getElementById("floating-elements");
  const numEmojis = 5;
  const emojis = listaEmojis;

  for (let i = 0; i < numEmojis; i++) {
    const emojiElement = document.createElement("div");
    emojiElement.classList.add("emoji-big");
    emojiElement.textContent =
      emojis[Math.floor(Math.random() * emojis.length)];

    const randomX = Math.random() * window.innerWidth;

    // Definir el límite inferior para evitar scroll.
    const button = document.getElementById("button");
    const buttonTop = button
      ? button.getBoundingClientRect().top
      : window.innerHeight;

    // Limitar el rango máximo de Y para que no genere scroll
    const maxY = buttonTop - 100; // Descuento de 100px por margen o espacio adicional
    const randomY = Math.random() * Math.max(0, maxY);

    emojiElement.style.position = "absolute";
    emojiElement.style.left = `${randomX}px`;
    emojiElement.style.top = `${randomY}px`;

    emojiContainer.appendChild(emojiElement);

    setTimeout(() => {
      emojiElement.remove();
    }, 10000);
  }
}

// Función para generar emojis flotantes al boton
function createEmojiBurst(x, y, emoji) {
  const emojiContainer = document.body;

  const emojiElement = document.createElement("div");
  emojiElement.classList.add("emoji");
  emojiElement.textContent = emoji;

  emojiElement.style.left = `${x}px`;
  emojiElement.style.top = `${y}px`;

  const randomX = Math.random() * 100 - 50; // Entre -50 y 50 px
  const randomY = Math.random() * 100 - 50;

  emojiElement.style.transform = `translate(${randomX}px, ${randomY}px)`;

  emojiContainer.appendChild(emojiElement);

  setTimeout(() => {
    emojiElement.remove();
  }, 2000);
}

// Actualiza la información del reproductor y prepara la canción
function updatePlayer(index) {
  const song = songs[index];
  songImage.src = song.imagen;
  songTitle.textContent = song.tituloCancion;
  audio.src = song.audioCancion;

  // Si ya estaba reproduciendo, reanudar automáticamente
  if (isPlaying) {
    audio.play().catch((error) => {
      console.error("Error reproduciendo el audio:", error);
    });
  }
}

// Modificar evento de clic en canciones flotantes
function createFloatingItems() {
  songs.forEach((song, index) => {
    const item = document.createElement("div");
    item.classList.add("floating-item");
    item.style.left = `${Math.random() * 90}%`;
    item.style.animationDuration = `${10 + Math.random() * 5}s`;

    const img = document.createElement("img");
    img.src = song.imagen;
    img.alt = song.tituloCancion;

    img.addEventListener("click", (e) => {
      currentSongIndex = index;
      updatePlayer(index);
      audio.play().catch((error) => {
        console.error("Error reproduciendo el audio:", error);
      });
      isPlaying = true;
      playPauseButton.textContent = "⏸️"; // Actualiza el botón a pausa

      // Generar emojis flotantes en la posición del clic
      createEmojiBurst(e.clientX, e.clientY, EmojiEspecial); // Cambiar emoji si deseas
    });

    const span = document.createElement("span");
    span.textContent = song.tituloCancion;

    item.appendChild(img);
    item.appendChild(span);
    floatingElements.appendChild(item);
  });
}

// Inicializar
updatePlayer(currentSongIndex);
createFloatingItems();
setInterval(() => createBigEmojiBurst(listaEmojis), 5000);


