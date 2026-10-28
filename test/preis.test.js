// Prüft die Preisregel an denselben Fällen wie die Testdaten der Auswertung.
// Aufruf: node test/preis.test.js
const { bestellung } = require("../preis.js");

const faelle = [
  { mengen: [2, 2, 2], summe: 102, fehlen: 0 },   // gemischt, alles Einzelpreis
  { mengen: [0, 6, 0], summe: 96, fehlen: 0 },    // ein Karton Red
  { mengen: [1, 3, 3], summe: 121, fehlen: 0 },   // 7 gemischt
  { mengen: [6, 6, 6], summe: 252, fehlen: 0 },   // drei Kartons
  { mengen: [0, 8, 0], summe: 134, fehlen: 0 },   // Karton Red + 2 einzeln
  { mengen: [2, 0, 1], summe: 48, fehlen: 3 },    // unter Mindestmenge
  { mengen: [0, 0, 0], summe: 0, fehlen: 0 },     // keine Bestellung
  { mengen: [2, 2, 2, 3], summe: 107.7, fehlen: 0 },  // mit 3 Sackerl: 102 + 5,70
  { mengen: [0, 0, 0, 3], summe: 5.7, fehlen: 0 },    // nur Sackerl, keine Mindestmenge
  { mengen: [2, 0, 1, 6], summe: 59.4, fehlen: 3 },   // Sackerl zählen nicht zur Mindestmenge
  { mengen: [0, 6, 0, 7], summe: 109.3, fehlen: 0 },  // 96 + 13,30, kein Kartonpreis für Sackerl
];

let fehler = 0;
for (const f of faelle) {
  const b = bestellung(f.mengen);
  const ok = b.summe === f.summe && b.fehlen === f.fehlen;
  if (!ok) fehler++;
  console.log(`${ok ? "ok    " : "FEHLER"} ${f.mengen.join("/")}: ${b.summe} € (erwartet ${f.summe}), fehlen ${b.fehlen}`);
}
process.exit(fehler ? 1 : 0);
