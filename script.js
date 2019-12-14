/**
 * Setting untu keyboard kalian
 *  Kalo Huruf Kapital jangan lupa
 *  nanti pakek CAPS LOCK buat gunainya
 */

const WHITE_KEYS = ["Q", "W", "E", "R", "T", "Y", "U"];
const BLACK_KEYS = ["A", "S", "D", "F", "G"];

/**
 * Setting buat syncronize ke element html kalian
 */
const keys = document.querySelectorAll(".key");
const whiteKeys = document.querySelectorAll(".key.white");
const blackKeys = document.querySelectorAll(".key.black");

/**
 * Setting Untuk memberikan Event / Efek samping
 * pada masing - masing element html yang tersinkron
 */
keys.forEach(key => {
  key.addEventListener("click", () => {
    return playNote(key);
  });
});

/**
 * Setting Untuk memberikan Event / Efek samping
 * pada masing - masing Keyboard yang tersinkron dari
 * white and black keyboard
 */
document.addEventListener("keydown", e => {
  if (e.repeat) return;
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
});

/**
 * Function untuk menjalankan sebuah audio pianonya
 * agar nantinya dapat dijalankan
 *
 */
function playNote(key) {
  console.log(key.getAttribute("data-note"));
  // return;
  const noteAudio = document.getElementById(key.getAttribute("data-note"));
  noteAudio.currentTime = 0;
  noteAudio.play();
  key.classList.add("active");
  noteAudio.addEventListener("ended", () => {
    key.classList.remove("active");
  });
}

/**
 * Thanks To Kyle :)
 */
