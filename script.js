const letters = {
  sad: {
    title: "Untuk Kamu yang Bersedih",
    text: "Dunia mungkin sedang berat hari ini, tapi inget, kamu jauh lebih kuat dari apa pun yang kamu hadapi. \n\nBersedih itu boleh, istirahat itu perlu. Peluk jauh! imaa listening to youuu :D",
  },
  happy: {
    title: "Yey! Kamu Senang!",
    text: "Tuhh kan, kalo lagi senang, senyumnya manis banget! hehe. \n\nSimpan energi positif ini baik-baik ya, semoga hari esok juga seindah hari ini. Keep shining kamuu! :p",
  },
  miss: {
    title: "Obat Rindu",
    text: "hmm? gapapa koo kalau kamu ngerasa rindu / kangen bisa dengan seseorang atau bahkan sesuatu. \n\nSemogaa hal itu jadi sumber positif dan membaik secepatnya yaa ❤️",
  },
};

const modal = document.getElementById("modal");
const content = document.getElementById("content");

function openLetter(mood) {
  const data = letters[mood];
  content.innerHTML = `<h2>${data.title}</h2><p>${data.text}</p>`;
  modal.classList.add("active");
}

function closeLetter() {
  modal.classList.remove("active");
}

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeLetter();
});

function createFirefly() {
  const f = document.createElement("div");
  f.className = "firefly";
  const startX = Math.random() * window.innerWidth;
  const endX = (Math.random() - 0.5) * 200 + "px";
  const endY = -(Math.random() * 500 + 200) + "px";
  f.style.left = startX + "px";
  f.style.bottom = "0px";
  f.style.setProperty("--x", endX);
  f.style.setProperty("--y", endY);
  f.style.animationDuration = Math.random() * 5 + 4 + "s";
  document.body.appendChild(f);
  setTimeout(() => f.remove(), 9000);
}
setInterval(createFirefly, 400);

// --- AUDIO CONTROL LOGIC ---
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("musicBtn");
let isPlaying = false;

// Fungsi Klik Tombol
function toggleMusic() {
  if (isPlaying) {
    music.pause();
    musicBtn.classList.remove("playing");
  } else {
    music.play();
    musicBtn.classList.add("playing");
  }
  isPlaying = !isPlaying;
}

// Fitur Auto-Play: Lagu otomatis main saat user klik layar pertama kali
// (Ini wajib karena browser memblokir autoplay biasa)
document.body.addEventListener(
  "click",
  function () {
    if (!isPlaying) {
      music
        .play()
        .then(() => {
          musicBtn.classList.add("playing");
          isPlaying = true;
        })
        .catch((error) => {
          console.log("Autoplay dicegah browser, menunggu interaksi user.");
        });
    }
  },
  { once: true }
); // {once: true} artinya cuma jalan sekali aja pas awal
