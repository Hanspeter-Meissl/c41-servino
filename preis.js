// Preise und Rechenregel der SERVINO-Bestellung 2026.
// Dieselbe Regel steht in der Auswertung (Zweites Gehirn, 03 Bereiche/Club C41/SERVINO/
// C41 SERVINO auswerten.py) und im Text des Forms-Formulars. Bei einer Änderung alle drei nachziehen.
//
// Kartonpreis nur für volle 6 Flaschen derselben Sorte, Restflaschen zum Einzelpreis.
// Mindestbestellung 6 Flaschen.

const SORTEN = [
  { schluessel: "servizzante", name: "Servizzante", art: "Frizzante", einzel: 16, karton: 13 },
  { schluessel: "red", name: "Servino Red Seven", art: "Rotwein", einzel: 19, karton: 16 },
  { schluessel: "white", name: "Servino White Seven", art: "Weißwein", einzel: 19, karton: 16 },
];
const MINDESTMENGE = 6;

function zeile(sorte, menge) {
  const kartons = Math.floor(menge / 6);
  const rest = menge % 6;
  return { kartons, rest, betrag: kartons * 6 * sorte.karton + rest * sorte.einzel };
}

function bestellung(mengen) {
  const zeilen = SORTEN.map((s, i) => zeile(s, mengen[i] || 0));
  const flaschen = mengen.reduce((a, n) => a + (n || 0), 0);
  const summe = zeilen.reduce((a, z) => a + z.betrag, 0);
  return { zeilen, flaschen, summe, fehlen: flaschen > 0 && flaschen < MINDESTMENGE ? MINDESTMENGE - flaschen : 0 };
}

if (typeof module !== "undefined") module.exports = { SORTEN, MINDESTMENGE, zeile, bestellung };
