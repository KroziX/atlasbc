# Le Grand Atlas du Royaume de Clover — Projet Atlas

Site-guide multi-pages sur le thème **Black Clover** (univers du Royaume de Clover),
au style « grimoire sombre ». Construit en **HTML / CSS / JavaScript pur** — aucune
installation requise.

Le contenu (textes, stats, images in-game) provient du document *Projet Atlas*.

## 🚀 Lancer le site

Double-clique sur **`index.html`** pour l'ouvrir dans ton navigateur.
(Pour un rendu parfait des polices Google Fonts, tu peux aussi le servir avec un petit
serveur local, ex. `python -m http.server` dans ce dossier.)

## 📄 Les pages

| Fichier | Page |
|---------|------|
| `index.html` | Accueil — présentation du Projet Atlas, hub, conclusion |
| `minerais.html` | Les 7 minerais (rareté, gisements, fabrications) + filtres |
| `bestiaire.html` | Le bestiaire (11 créatures, stats RPG, danger) + filtres |
| `faune-flore.html` | Poissons, plantes & champignons (raretés, craft) |

## 🗂️ Structure

```
site-atlas-clover/
├── index.html
├── minerais.html
├── bestiaire.html
├── faune-flore.html
├── css/styles.css      ← toutes les couleurs sont en haut (:root)
├── js/main.js          ← icônes SVG, menu mobile, filtres, animations
└── assets/img/         ← les 26 images in-game extraites du document
```

## 🎨 Personnaliser

- **Couleurs** : tout est réglable dans la section `:root` en haut de `css/styles.css`
  (or `--gold`, trèfle `--clover`, fonds, et les couleurs de rareté `--r-*`).
- **Polices** : *Cinzel* (titres, style grimoire) + *Inter* (texte).
- **Raretés** : classes `.rarity.commune / .rare / .epique / .legendaire / .mythique /
  .divin / .artifact`.

## 🖼️ Les images

Les 26 illustrations du dossier `assets/img/` ont été **découpées automatiquement**
depuis les captures d'écran du document (résolution limitée à celle des captures).
Pour une qualité supérieure, il suffit de remplacer un fichier par sa version d'origine
en gardant **le même nom** (ex. `monstre-roi-des-mers.png`).

## 🌐 Mettre en ligne (gratuit)

- **Netlify** : glisse-dépose le dossier sur app.netlify.com/drop
- **GitHub Pages** : pousse le dossier dans un repo, active Pages
- **Cloudflare Pages** / **Vercel** : importe le dossier

## ✍️ Ajouter du contenu

L'Atlas est « vivant » : pour ajouter une créature, copie un bloc `<article class="beast">`
existant dans `bestiaire.html` et change les valeurs. Même principe pour un minerai
(`<article class="card">` dans `minerais.html`). Le `data-cat="…"` pilote les filtres.

---

*Fan-projet non officiel — univers inspiré de Black Clover. Réalisé pour l'Aube d'Or,
avec le soutien de la Famille Clairval.*
