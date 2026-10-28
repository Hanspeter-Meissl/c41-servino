# SERVINO-Bestellseite Club 41

Bestellseite für SERVINO, den Wein der sieben Grieskirchner Serviceclubs, für die Mitglieder
des Club 41 Grieskirchen-Hausruck. Veröffentlicht über GitHub Pages.

Die Seite rechnet während der Eingabe Zeilenpreise und Bestellsumme und prüft die
Mindestbestellung von 6 Flaschen. Seit 28. Oktober 2026 gibt es dazu das Wein-Geschenksackerl zu 1,90 €
je Stück; es zählt nicht zur Mindestbestellung und lässt sich auch allein bestellen. „Bestellung prüfen“ zeigt die Bestellung mit allen Preisen
noch einmal, „Bestellung abschicken“ schickt sie an die Google-Web-App „SERVINO Bestellannahme“
(Konstante `GOOGLE` in `index.html`, Quelle `03 Bereiche/Club C41/SERVINO/Google/Code.gs` im Vault).
Die Web-App prüft das Mitglied und schreibt eine Zeile in die Google-Tabelle „SERVINO Bestellungen 2026“.

Ersatzweg ist das Microsoft-Forms-Formular „SERVINO-Bestellung bestätigen“: Die Seite bietet es an,
wenn Google nicht antwortet oder der Link keine Kennung trägt, und nutzt es ganz, wenn `GOOGLE` leer ist.
Die Auswertung liest beide Quellen, es gilt die letzte Bestellung je Mitglied.

Der persönliche Link trägt die Kennung des Mitglieds und den Vornamen für die Anrede.

## Dateien

- `index.html` – Seite, Adresse der Google-Web-App, Formularadresse und Schlüssel der Forms-Fragen
- `preis.js` – Preise und Rechenregel
- `test/preis.test.js` – Prüfung der Rechenregel: `node test/preis.test.js`
- `bilder/` – Wappen, Flaschenfoto, freigestellte Flaschen (PNG) und das Vorschaubild für geteilte Links

Die freigestellten Flaschen erzeugt `C41 SERVINO Flaschen freistellen.py` im Vault (`03 Bereiche/Club C41/SERVINO/`).

Der persönliche Link je Mitglied kommt aus `C41 SERVINO Links erzeugen.py` im selben Ordner: `?m=Nr.%2018%20Meissl&n=Hanspeter`. `n` ist der Vorname für die Anrede auf der Seite.

Preise und Regel stehen außerdem in der Auswertung im Vault
(`03 Bereiche/Club C41/SERVINO/C41 SERVINO auswerten.py`) und im Text des Forms-Formulars.
Bei einer Änderung alle drei Stellen nachziehen.

## Lokal ansehen

`python -m http.server 8131 --directory .` und dann `http://localhost:8131/?m=Nr.%2018%20Meissl`.
