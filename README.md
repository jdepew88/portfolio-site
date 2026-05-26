# joeydepew.com

Static personal portfolio for Joseph Depew. Built for GitHub Pages — no build step required.

## Pages

| Path | Description |
|------|-------------|
| `/` | Homepage |
| `/homelab/` or `homelab.html` | Homelab diagram image |
| `/homelab-diagram/` | Redirects to `/homelab/` |
| `/bio/` or `bio.html` | Command-line bio (`whois joey_depew`) |
| `/whois/` or `whois_joey_depew.html` | Redirects to `/bio/` |

## Local preview

```bash
# Python
python -m http.server 8080

# or npx
npx serve .
```

Open `http://localhost:8080`

## GitHub Pages

1. Push this repo to GitHub.
2. Settings → Pages → Source: deploy from `main` branch, root `/`.
3. Point `joeydepew.com` DNS to GitHub Pages.
