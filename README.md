# Onepager (Marc) — Projekt-README

Kurz: Dieses Repository ist ein persönlicher Onepager (React + TypeScript + SCSS) mit Komponenten, Animationen und einem SVG‑Header.

Inhalt
- Projektübersicht
- Voraussetzungen
- Schnellstart (Dev)
- Build / Produktion
- Docker
- Projektstruktur — wichtige Dateien
- Header / SVG — schnelle Anpassungen (zentrieren, Größe, Animation)
- Häufige Probleme & Lösungen (Troubleshooting)
- Entwicklungstipps & Beitrag
- Lizenz & Kontakt

---

## Projektübersicht
Dieses Projekt ist ein statischer Onepager, geschrieben mit React (TypeScript) und SCSS. Es enthält Komponenten für Header, Navigation, Timeline, Projekte/Carousel, I18n (YAML), uvm. Ziel ist eine responsive, gut gestylte persönliche Seite.

Technologien (Kurz)
- React + TypeScript
- SCSS (Sass Module)
- Webpack / dev server
- pnpm als Paketmanager
- Optional: Docker / docker-compose

---

## Voraussetzungen
- Node.js (empfohlen LTS 18/20)
- pnpm (Corepack oder global) — auf Windows: Powershell oder WSL benutzen
- Optional: Docker & docker-compose (wenn du Container verwenden willst)

Wenn pnpm fehlt, kannst du Corepack nutzen:

```powershell
corepack enable
corepack prepare pnpm@latest --activate
pnpm -v
```

---

## Schnellstart (lokal Entwicklung)
1. Repository abhollen / in Projektordner wechseln.
2. Abhängigkeiten installieren:

```powershell
pnpm install
```

3. Dev-Server starten (sofern `pnpm dev` in package.json definiert ist — in deinem Setup war `pnpm dev` der übliche Befehl):

```powershell
pnpm dev
```

Tipp: Wenn du WSL benutzt, führe `pnpm install`/`pnpm dev` in deiner WSL-Shell aus, wenn du Probleme mit Pfaden oder Berechtigungen in PowerShell hast.

TypeScript-Check (nur Typ-Check, kein Emit):

```powershell
pnpm exec tsc --noEmit
```

---

## Build / Produktion
Falls ein Build-Skript vorhanden ist (z. B. `pnpm build`), nutzt du das:

```powershell
pnpm build
pnpm start # falls ein start-Skript existiert
```

---

## Docker
Falls du das Projekt in Container starten willst (es gibt `Dockerfile` / `docker-compose.yml`):

```powershell
docker-compose up --build
```

---

## Projektstruktur — wichtige Stellen
(gekürzt; die relevanten Dateien für schnelle Änderungen)

- `src/components/header/header.tsx` — Haupt-Header-Komponente mit eingebettetem SVG
- `src/assets/header.scss` — Header-bezogene SCSS-Styles (Animationen, Zentrierung, responsive Regeln)
- `src/components/pages/app.tsx` — App-Entry, Sections und Seiten-Layout
- `src/hooks/useTranslation.ts` — einfache i18n Hook
- `src/locales/*.yaml` oder `public/locales/*.yaml` — Übersetzungen (de / en)
- `src/components/carousell.tsx` — Swiper-Integration für Projekte

Wenn du schnell Text oder Übersetzungen anpasst: `src/locales/de.yaml` und `src/locales/en.yaml`.

---

## Header / SVG — Schnelle Anpassungen (zentrieren und responsive)
Du hast das SVG im Header und willst es für Desktop z. B. mit Breite 550 anzeigen, auf Mobil aber zentriert behalten.

Kurzlösung (so wie implementiert):
- In `src/components/header/header.tsx` verwaltet ein useEffect die `maxWidth` des Wrappers `.hero-svg` basierend auf `document.documentElement.clientWidth` und setzt `maxWidth` z. B. auf `min(550px, viewport)`.
- Der Wrapper bekommt `width: 100%` und `maxWidth` plus `margin: 0 auto`, damit es auf Mobilen zentriert bleibt.

Wenn du die reine CSS-Lösung bevorzugst (ohne JS):
- Verwende in SCSS:

```scss
.hero-svg {
  width: 100%;
  max-width: 550px; // design width
  margin: 0 auto;
}

.hero-svg svg {
  width: 100%;
  height: auto;
}
```

Hinweis: Falls der Header in einer breiten Container‑Breite steht (z. B. `max-width` des Content-Containers), aber du das SVG absolut im Viewport zentriert haben willst, nutze die Viewport-Mathe in CSS:

```scss
.hero-svg {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  display: flex;
  justify-content: center;
}
```

Das ist mächtig, kann aber Layout-Seiten beeinflussen — teste auf mobilen Breakpoints.

---

## Häufige Probleme & Lösungen (aus deinem Debugging)
Ich fasse die Fehler zusammen, die du schon gesehen hast und gebe Lösungen:

1) framer-motion / TypeScript TS2320 (MotionStyle extend conflict)
- Ursache: Typ-Inkompatibilität zwischen Versionen von `react`/`@types/react` und `framer-motion`/seinen Typen.
- Lösung: Entweder Versionen aufeinander abstimmen oder `skipLibCheck` in `tsconfig.json` aktivieren (als pragmatische Kurzlösung):

```json
{
  "compilerOptions": {
    "skipLibCheck": true,
    // ... andere Optionen
  }
}
```

Das unterdrückt Typfehler in node_modules (nicht ideal, aber oft praktisch während Entwicklung). Besser ist, `framer-motion` Version zu verwenden, die mit deiner React-Version kompatibel.

2) Module not found: 'swiper/react', 'framer-motion', 'react-intersection-observer', 'js-yaml', 'express'
- Ursache: fehlende Abhängigkeiten.
- Lösung: Einmal installieren (achte auf `--save` nicht nötig mit pnpm):

```powershell
pnpm add swiper framer-motion react-intersection-observer js-yaml express
# oder als dev falls nur types benötigt:
pnpm add -D @types/express
```

3) Dev server nimmt nur Änderungen nach Neustart an
- Ursache: Manchmal Webpack Dev Server / Watcher läuft in WSL vs Windows mit unterschiedlichem Inotify/Watcher-Verhalten.
- Lösung: a) Starte dev server in derselben Umgebung, in der du editierst (WSL vs PowerShell). b) Falls watcher ignoriert, nutze `CHOKIDAR_USEPOLLING=true` (als env) oder konfiguriere watcher:

```powershell
# temporary
$env:CHOKIDAR_USEPOLLING = 'true'; pnpm dev
```

4) `viewBox` / responsive scaling
- Verwende `width="100%" height="auto"` auf `<svg>` und setze wrapper `max-width` in px oder `min(100%, 550px)` damit das SVG sauber skaliert.

---

## Entwicklungstipps & Best Practices
- Bevor du Paketversionen änderst: prüfe `pnpm list react --depth 0` und `pnpm list framer-motion --depth 0` auf Inkompatibilitäten.
- Für Typ-Probleme in node_modules: `tsconfig.json` -> `skipLibCheck: true` als pragmatische Option.
- Verwende refs und ResizeObserver in Komponenten statt `document.querySelector`, damit React lifecycle und SSR-Sicherheit besser ist.
- Schreibe kleine SCSS-Module (kein globales Overwriting), teile Variablen in `src/assets/variables.scss`.

---

## Mitwirken / Contribution
- Fork & PR für Änderungen
- Bitte beschreibe in PR: Was geändert, warum, Screenshots falls visuelle Änderungen

---

## Kontakt
Bei Fragen oder wenn du möchtest, dass ich bestimmte Teile refactore (z. B. Header, Timeline-Komponente, i18n Pipeline), sag mir welche Datei und ich passe sie an. Informationen über meinen Kontakt findest du am ende des Projekts.

---


