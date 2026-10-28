// Preise und Rechenregel der SERVINO-Bestellung 2026.
// Dieselbe Regel steht in der Auswertung (Zweites Gehirn, 03 Bereiche/Club C41/SERVINO/
// C41 SERVINO auswerten.py) und im Text des Forms-Formulars. Bei einer Änderung alle drei nachziehen.
//
// Kartonpreis nur für volle 6 Flaschen derselben Sorte, Restflaschen zum Einzelpreis.
// Mindestbestellung 6 Flaschen.

const SORTEN = [
  { schluessel: "servizzante", name: "Servizzante", art: "Frizzante", einzel: 16, karton: 13 },
  { schluessel: "red", name: "Servino Red Seven", art: "Rotwein", einzel: 19, karton: 16 },
  { schluessel: "white", name: "Servino White Seven", art: "Weißwein", einzel: 16, karton: 13 },
];
const MINDESTMENGE = 6;
// Seit 28. Oktober 2026: Wein-Geschenksackerl mit Sichtfenster, Stückpreis ohne Kartonpreis.
// Es steht in den Mengen hinter den Sorten, zählt nicht als Flasche und nicht zur Mindestbestellung
// und lässt sich auch allein bestellen. Preis in Cent, damit die Summe nicht auf 5,6999… rundet.
const SACKERL = { schluessel: "sackerl", name: "Wein-Geschenksackerl", kurz: "Sackerl", art: "mit Sichtfenster, für eine Flasche", cent: 190 };

function zeile(sorte, menge) {
  const kartons = Math.floor(menge / 6);
  const rest = menge % 6;
  return { kartons, rest, betrag: kartons * 6 * sorte.karton + rest * sorte.einzel };
}

// mengen: je Sorte die Flaschen, danach die Sackerl.
function bestellung(mengen) {
  const zeilen = SORTEN.map((s, i) => zeile(s, mengen[i] || 0));
  const flaschen = SORTEN.reduce((a, s, i) => a + (mengen[i] || 0), 0);
  const sackerl = mengen[SORTEN.length] || 0;
  const sackerlBetrag = sackerl * SACKERL.cent / 100;
  const summe = (zeilen.reduce((a, z) => a + z.betrag, 0) * 100 + sackerl * SACKERL.cent) / 100;
  return { zeilen, flaschen, sackerl, sackerlBetrag, summe,
           fehlen: flaschen > 0 && flaschen < MINDESTMENGE ? MINDESTMENGE - flaschen : 0 };
}

if (typeof module !== "undefined") module.exports = { SORTEN, SACKERL, MINDESTMENGE, zeile, bestellung };
