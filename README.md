# bdmnl-assets

Openbare statische bestanden voor BDMNL-websites (GitHub Pages). **Geen geheimen**: geen API-sleutels, tokens, wachtwoorden of webhook-URL's in deze repository.

## Bestanden

| Pad | Versie | SHA-256 | SRI (sha384) |
|---|---|---|---|
| `chat/chatknop-3.7.js` | 3.7 | `ff492f7751f5f81649dfae65bb1482edb7fdf5034393342ed0624e44d7809139` | `sha384-6b+fO1jcFOM6bLZ6DY8p41xE/zo5GVMwYrLnTuCj9lzGfML/7C4GS3OA1WYaghiC` |

## Werkwijze nieuwe versie
1. Nieuw bestand `chat/chatknop-X.Y.js` toevoegen; bestaande versies **nooit** wijzigen of verwijderen (rollback).
2. Hash: `openssl dgst -sha384 -binary chat/chatknop-X.Y.js | openssl base64 -A`
3. Tabel hierboven bijwerken; tag `chatknop-vX.Y` zetten.
4. Webflow-footerregel: bestandsnaam + `integrity` samen aanpassen; eerst alleen staging.

## Rollback
Footerregel terugzetten naar de vorige bestandsnaam + hash (oude bestanden blijven staan), of het bewaarde inline blok terugplaatsen.
