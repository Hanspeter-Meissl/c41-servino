# SERVINO-Bestellseite Club 41

Bestellseite für SERVINO, den Wein der sieben Grieskirchner Serviceclubs, für die Mitglieder
des Club 41 Grieskirchen-Hausruck. Veröffentlicht über GitHub Pages.

Die Seite rechnet während der Eingabe Zeilenpreise und Bestellsumme und prüft die
Mindestbestellung von 6 Flaschen. „Weiter zur Bestellung“ öffnet das Microsoft-Forms-Formular
„SERVINO-Bestellung Club 41“ mit allen Angaben vorausgefüllt; dort schickt das Mitglied ab.
Die Bestellungen kommen damit nur in Forms an, die Seite speichert nichts.

Der persönliche Link trägt die Kennung des Mitglieds: `?m=Nr.%2018%20Meissl`.

## Dateien

- `index.html` – Seite, Formularadresse und Schlüssel der Forms-Fragen
- `preis.js` – Preise und Rechenregel
- `test/preis.test.js` – Prüfung der Rechenregel: `node test/preis.test.js`
- `bilder/` – Wappen und Flaschenfotos

Preise und Regel stehen außerdem in der Auswertung im Vault
(`03 Bereiche/Club C41/SERVINO/C41 SERVINO auswerten.py`) und im Text des Forms-Formulars.
Bei einer Änderung alle drei Stellen nachziehen.

## Lokal ansehen

`python -m http.server 8131 --directory .` und dann `http://localhost:8131/?m=Nr.%2018%20Meissl`.
