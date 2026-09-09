# Website-Building

Zwei eigenständige Demo-/Pitch-Websites für private Beteiligungsgesellschaften, gebaut mit dem
**Impeccable**-Design-Skill. Jede Site liegt in ihrem eigenen Ordner mit eigener `PRODUCT.md` /
`DESIGN.md`. Alle Inhalte sind **Platzhalter** (Dummy-Namen, -Profile, -Zahlen) und als solche
gekennzeichnet.

## Projekte

| Ordner | Site | Fokus | Design-Welt |
|---|---|---|---|
| [`mainkontor/`](mainkontor/) | **Mainkontor Beteiligungen** | Mittelstands-Beteiligungen, langfristig, Nachfolge | „Kontorbuch / Handelsregister" — warmes Papier, Kontor-Grün, Serifen |
| [`ostend/`](ostend/) | **Ostend Beteiligungen** | Business-Angel / Growth / Venture in Sport, Fußball, Medien & Software | hell, Blautöne, Broadcast-/Matchday-Sprache |

- **Mainkontor** liegt in zwei Fassungen vor: mehrseitig (`mainkontor/index.html` + Unterseiten,
  `mainkontor/assets/`) und als One-Pager in einer einzigen, in sich geschlossenen Datei
  (`mainkontor/mainkontor-onepager.html`). Details: [`mainkontor/README.md`](mainkontor/README.md).
- **Ostend** ist ein One-Pager als einzelne, in sich geschlossene Datei
  (`ostend/ostend-onepager.html`); Quell-Assets unter `ostend/assets/`.

Gemeinsame Funktionen beider Sites: durchscrollbarer One-Pager mit festem Menü + Scroll-Spy,
Kontaktformular mit konfigurierbarem Webhook (leer = Demo-Modus), Client-Validierung, Anti-Spam-
Honeypot. Die Single-File-Fassungen laufen ohne den `assets/`-Ordner (CSS, JS, Schriften inline).

## Impeccable
Der Design-Skill ist unter `.claude/skills/impeccable/` installiert (Engine v0.1.3, self-hosted
Binary aus GitHub Releases). Projekt-Scratch/Config unter `.impeccable/`.
