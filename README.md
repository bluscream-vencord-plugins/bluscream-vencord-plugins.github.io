# UserPlugins Script Generator

This is a static React site built with Vite to generate installation scripts for Equicord and Vencord, allowing users to select plugins from the [bluscream-vencord-plugins](https://github.com/bluscream-vencord-plugins) organization.

## Features

- **Client Selection**: Choose between Equicord, Vencord, or a Custom fork.
- **Dynamic Plugin List**: Fetches all repositories from the organization as available plugins.
- **Script Generation**: Supports PowerShell 7+, PowerShell 5, and Batch scripts.
- **Rich UI**: Modern dark theme with glassmorphism effects.
- **Advanced Options**: Git cloning vs ZIP download, custom install paths, dependency installers.

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

## Deployment

To deploy to GitHub Pages:

1. Update `vite.config.js` with the correct `base` path if not hosting at root (e.g. `base: '/repo-name/'`).
2. Run `npm run build`.
3. Push the contents of `dist` to the `gh-pages` branch, or use a GitHub Action.

Since this repo is named `bluscream-vencord-plugins.github.io`, it is a User/Org site, so it will be hosted at the root domain. The `base` in vite config should be `/` (default).
