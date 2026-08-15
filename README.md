# Codex Armorium

A Commander deck archive with live Scryfall art and TCGplayer pricing, card-move tracking,
wishlists, and an artist signing tracker for conventions.

The whole app is one self-contained file — `codex.html`. No build step, no dependencies,
no server of its own. Open the link and it runs.

**Live:** see the Pages URL in this repo's About section.

## Notes

- **Your data stays on your device.** Decks, art picks, wishlists and signing ticks live in
  the browser's localStorage. Nothing is uploaded, and there are no accounts. Two people
  opening the same link each get their own copy.
- **Installable.** On iOS use Safari → Share → Add to Home Screen; on Android, Chrome's
  "Install app". The service worker keeps it working offline, minus live pricing.
- **Pricing is never cached.** Card art is (those URLs are immutable), but prices always
  come off the wire, so the numbers are current rather than whatever you last saw.
- **Back up before you rely on it.** Settings → Export backup writes a JSON file. iOS
  clears storage for sites you haven't visited in a while, so this matters more than it
  looks.
