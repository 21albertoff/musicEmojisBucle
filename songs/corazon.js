// Lista de canciones
const songs = [
  {
    imagen: "covers/Mónaco - Sped Up.jpg",
    tituloCancion: "Mónaco - Sped Up",
    audioCancion: "mp3/Mónaco - Sped Up.weba",
  },
  {
    imagen: "covers/Lo que fuimos.jpg",
    tituloCancion: "Lo que fuimos",
    audioCancion: "mp3/Lo que fuimos.weba",
  },
  {
    imagen: "covers/cover1.jpeg",
    tituloCancion: "Canción 1",
    audioCancion: "mp3/audio1.mp3",
  },
  {
    imagen: "covers/cover2.jpeg",
    tituloCancion: "Canción 2",
    audioCancion: "mp3/audio2.mp3",
  },
  {
    imagen: "covers/cover3.jpg",
    tituloCancion: "Canción 3",
    audioCancion: "mp3/audio3.mp3",
  },
  {
    imagen: "covers/Mónaco - Sped Up.jpg",
    tituloCancion: "tEST3",
    audioCancion: "mp3/Mónaco - Sped Up.weba",
  },
  {
    imagen: "covers/Lo que fuimos.jpg",
    tituloCancion: "test3s",
    audioCancion: "mp3/Lo que fuimos.weba",
  },
  {
    imagen: "covers/cover1.jpeg",
    tituloCancion: "Canción 1",
    audioCancion: "mp3/audio1.mp3",
  },
  {
    imagen: "covers/cover2.jpeg",
    tituloCancion: "Canción 2",
    audioCancion: "mp3/audio2.mp3",
  },
  {
    imagen: "covers/cover3.jpg",
    tituloCancion: "Canción 3",
    audioCancion: "mp3/audio3.mp3",
  },
  {
    imagen: "covers/Mónaco - Sped Up.jpg",
    tituloCancion: "Mónaco - Sped Up",
    audioCancion: "mp3/Mónaco - Sped Up.weba",
  },
  {
    imagen: "covers/Lo que fuimos.jpg",
    tituloCancion: "Lo que fuimos",
    audioCancion: "mp3/Lo que fuimos.weba",
  },
  {
    imagen: "covers/cover1.jpeg",
    tituloCancion: "Canción 1",
    audioCancion: "mp3/audio1.mp3",
  },
  {
    imagen: "covers/cover2.jpeg",
    tituloCancion: "Canción 2",
    audioCancion: "mp3/audio2.mp3",
  },
  {
    imagen: "covers/cover3.jpg",
    tituloCancion: "Canción 3",
    audioCancion: "mp3/audio3.mp3",
  },
  {
    imagen: "covers/Mónaco - Sped Up.jpg",
    tituloCancion: "Mónaco - Sped Up",
    audioCancion: "mp3/Mónaco - Sped Up.weba",
  },
  {
    imagen: "covers/Lo que fuimos.jpg",
    tituloCancion: "Lo que fuimos",
    audioCancion: "mp3/Lo que fuimos.weba",
  },
  {
    imagen: "covers/cover1.jpeg",
    tituloCancion: "Canción 1",
    audioCancion: "mp3/audio1.mp3",
  },
  {
    imagen: "covers/cover2.jpeg",
    tituloCancion: "Canción 2",
    audioCancion: "mp3/audio2.mp3",
  },
  {
    imagen: "covers/cover3.jpg",
    tituloCancion: "Canción 3",
    audioCancion: "mp3/audio3.mp3",
  },
  {
    imagen: "covers/Mónaco - Sped Up.jpg",
    tituloCancion: "Mónaco - Sped Up",
    audioCancion: "mp3/Mónaco - Sped Up.weba",
  },
  {
    imagen: "covers/Lo que fuimos.jpg",
    tituloCancion: "Lo que fuimos",
    audioCancion: "mp3/Lo que fuimos.weba",
  },
  {
    imagen: "covers/cover1.jpeg",
    tituloCancion: "Canción 1",
    audioCancion: "mp3/audio1.mp3",
  },
  {
    imagen: "covers/cover2.jpeg",
    tituloCancion: "Canción 2",
    audioCancion: "mp3/audio2.mp3",
  },
  {
    imagen: "covers/cover3.jpg",
    tituloCancion: "Canción 3",
    audioCancion: "mp3/audio3.mp3",
  },
  {
    imagen: "covers/Mónaco - Sped Up.jpg",
    tituloCancion: "Mónaco - Sped Up",
    audioCancion: "mp3/Mónaco - Sped Up.weba",
  },
  {
    imagen: "covers/Lo que fuimos.jpg",
    tituloCancion: "Lo que fuimos",
    audioCancion: "mp3/Lo que fuimos.weba",
  },
  {
    imagen: "covers/cover1.jpeg",
    tituloCancion: "Canción 1",
    audioCancion: "mp3/audio1.mp3",
  },
  {
    imagen: "covers/cover2.jpeg",
    tituloCancion: "Canción 2",
    audioCancion: "mp3/audio2.mp3",
  },
  {
    imagen: "covers/cover3.jpg",
    tituloCancion: "Canción 3",
    audioCancion: "mp3/audio3.mp3",
  },
  {
    imagen: "covers/Mónaco - Sped Up.jpg",
    tituloCancion: "Mónaco - Sped Up",
    audioCancion: "mp3/Mónaco - Sped Up.weba",
  },
  {
    imagen: "covers/Lo que fuimos.jpg",
    tituloCancion: "Lo que fuimos",
    audioCancion: "mp3/Lo que fuimos.weba",
  },
  {
    imagen: "covers/cover1.jpeg",
    tituloCancion: "Canción 1",
    audioCancion: "mp3/audio1.mp3",
  },
  {
    imagen: "covers/cover2.jpeg",
    tituloCancion: "Canción 2",
    audioCancion: "mp3/audio2.mp3",
  },
  {
    imagen: "covers/cover3.jpg",
    tituloCancion: "Canción 3",
    audioCancion: "mp3/audio3.mp3",
  },
  {
    imagen: "covers/Mónaco - Sped Up.jpg",
    tituloCancion: "Mónaco - Sped Up",
    audioCancion: "mp3/Mónaco - Sped Up.weba",
  },
  {
    imagen: "covers/Lo que fuimos.jpg",
    tituloCancion: "Lo que fuimos",
    audioCancion: "mp3/Lo que fuimos.weba",
  },
  {
    imagen: "covers/cover1.jpeg",
    tituloCancion: "Canción 1",
    audioCancion: "mp3/audio1.mp3",
  },
  {
    imagen: "covers/cover2.jpeg",
    tituloCancion: "Canción 2",
    audioCancion: "mp3/audio2.mp3",
  },
  {
    imagen: "covers/cover3.jpg",
    tituloCancion: "Canción 3",
    audioCancion: "mp3/audio3.mp3",
  },
];
