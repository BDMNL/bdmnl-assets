# bdmnl-assets

Openbare statische bestanden voor BDMNL-websites (GitHub Pages). **Geen geheimen**: geen API-sleutels, tokens, wachtwoorden of webhook-URL's in deze repository.

## Bestanden

| Pad | Versie | SHA-256 | SRI (sha384) |
|---|---|---|---|
| `chat/chatknop-3.7.js` | 3.7 | `c5544b5c5d95a23424dff66f6f6e68851e0ebc301a42f14c31b6b0b2b4a485e2` | `sha384-fGfWx1cNLx2uipzm4zozaNrXIy6r6bxYG2otrjqWTaLfnhXetatUGwqiaWDUKZFH` |

## Werkwijze nieuwe versie
1. Nieuw bestand `chat/chatknop-X.Y.js` toevoegen; bestaande versies **nooit** wijzigen of verwijderen (rollback).
2. Hash: `openssl dgst -sha384 -binary chat/chatknop-X.Y.js | openssl base64 -A`
3. Tabel hierboven bijwerken; tag `chatknop-vX.Y` zetten.
4. Webflow-footerregel: bestandsnaam + `integrity` samen aanpassen; eerst alleen staging.

## Rollback
Footerregel terugzetten naar de vorige bestandsnaam + hash (oude bestanden blijven staan), of het bewaarde inline blok terugplaatsen.
