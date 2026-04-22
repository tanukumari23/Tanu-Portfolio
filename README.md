# Tanu Kumari — Portfolio (Static HTML/CSS/JS)

A plain HTML / CSS / JavaScript version of the portfolio. **No build step. No npm. No frameworks.**
Just open `index.html` in a browser, or upload the folder to any host.

## 📁 Files

```
portfolio-static/
├── index.html      ← all the page markup
├── styles.css      ← all the styling (dark theme + animations)
├── script.js       ← navbar, mobile menu, scroll reveal, contact form
├── assets/
│   ├── hero-bg.jpg
│   ├── project-crm.jpg
│   └── project-ecommerce.jpg
└── README.md
```

## 🚀 Run locally

Just double-click `index.html` — it works straight from disk.

Or, for a proper local server (recommended):
```bash
# Python 3
python3 -m http.server 8000
# then open http://localhost:8000
```

## 🌐 Deploy

### GitHub Pages
1. Create a new repo on GitHub (e.g. `portfolio`).
2. Upload all the files in this folder to the **root** of the repo.
3. Go to **Settings → Pages**.
4. Under **Source**, choose **Deploy from a branch** → `main` → `/ (root)` → **Save**.
5. Wait ~1 minute. Your site goes live at:
   `https://<your-username>.github.io/<repo-name>/`

### Netlify / Vercel / Any host
Just drag-and-drop this folder. No config needed.

## ✏️ How to edit

| What you want to change | Where to edit |
| --- | --- |
| Name, headline, description | `index.html` (search for "Tanu Kumari") |
| Email / phone / LinkedIn | `index.html` + the `RECIPIENT_EMAIL` const at the top of `script.js` |
| WhatsApp number | `index.html` — search for `wa.me/` and replace the digits |
| Skills | `index.html` — inside the `#skills` section |
| Projects | `index.html` — inside the `#projects` section |
| Project images | replace files in `assets/` (keep the same names, or update the `<img src>`) |
| Colors / theme | `styles.css` — the `:root` block at the top (HSL values) |
| Animations / interactivity | `script.js` |

## 📧 Contact form

When a visitor submits the form, their **default email app opens** with:
- **To:** `tanu.kumari.2308@gmail.com`
- **Subject:** what they typed
- **Body:** their name, email, and message

They just hit **Send** and the email arrives in your inbox. No backend, no API keys.

> Want true backend-powered form submissions later? Easy options: [Formspree](https://formspree.io), [Web3Forms](https://web3forms.com), or [Netlify Forms](https://docs.netlify.com/forms/setup/).

## 🎨 Tech inside

- Plain HTML5, CSS3, vanilla JavaScript
- [Lucide icons](https://lucide.dev) (loaded from CDN)
- Google Fonts: Inter, Space Grotesk, JetBrains Mono
- Zero dependencies to install

Enjoy! 🎉
