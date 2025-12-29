# 🚀 TexSauce - Free Media Hub

> A futuristic, cyberpunk-themed resource directory inspired by FMHY with cutting-edge UI/UX design.

[![GitHub](https://img.shields.io/badge/GitHub-TexSauce-00ffff?style=for-the-badge&logo=github)](https://github.com/gagankishoreint-glitch/TexSauce)
[![Live Demo](https://img.shields.io/badge/Demo-Live-00ff88?style=for-the-badge)](https://your-vercel-url.vercel.app)

## ✨ Features

### 🎨 Stunning Cyberpunk Design
- **HUD Interface**: Terminal-style overlays with live system status
- **Glitch Effects**: Animated title with authentic cyberpunk aesthetics  
- **Custom Cursor**: Smooth-following cursor with interactive feedback
- **Scanline & Grid Overlays**: Retro-futuristic visual effects
- **Neon Glow**: Electric blue/cyan accents throughout

### ⚡ Interactive Elements
- **Live Search**: Real-time category filtering (Ctrl+K to focus)
- **Scroll Animations**: Cards fade in as you scroll
- **Hover Effects**: Dynamic borders and corner accents
- **Theme Toggle**: Switch between dark and light modes
- **Mouse Coordinates**: Live tracking in bottom-right HUD

### 📦 Resource Categories
Nine comprehensive categories covering:
- 🎮 **Gaming** - Games, ROMs, emulators
- 📚 **Reading** - Books, comics, manga
- ⬇️ **Downloading** - File hosts, DDL sites
- 🌊 **Torrenting** - Torrent sites & clients
- 🎓 **Educational** - Courses, tutorials, papers
- 📱 **Android/iOS** - Mobile apps & tools
- 🐧 **Linux/macOS** - Unix-based resources
- 🎬 **Streaming** - Movies, TV shows, anime
- 🛠️ **Tools** - Utilities & productivity apps

## 🛠️ Tech Stack

**Pure Vanilla Stack** - No frameworks, just raw performance:
- HTML5 - Semantic structure
- CSS3 - Custom properties, animations, grid/flexbox
- JavaScript (ES6+) - Intersection Observer, smooth interactions

**Fonts:**
- [Orbitron](https://fonts.google.com/specimen/Orbitron) - Headings
- [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono) - Body text

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/gagankishoreint-glitch/TexSauce.git
   cd TexSauce
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   # Or use a local server:
   npx serve
   ```

3. **That's it!** No build process needed.

### Deploy to Vercel

1. **Connect your GitHub repo** to Vercel
2. **Configure build settings:**
   - Framework Preset: `Other`
   - Build Command: (leave empty)
   - Output Directory: `./`
3. **Deploy!**

Or use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

## 📁 Project Structure

```
TexSauce/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling system
├── script.js           # Interactive functionality
└── README.md          # This file
```

## 🎮 Usage

### Search Categories
Press `Ctrl+K` or click the search box in the top-right HUD to filter categories in real-time.

### Navigate
Click "ENTER ARCHIVE" to scroll to the categories, or use the footer links for quick navigation.

### Theme Toggle
Click the sun/moon icon in the top-right HUD to switch between dark and light themes.

### Keyboard Shortcuts
- `Ctrl+K` / `Cmd+K` - Focus search
- `Escape` - Clear search

## 🎨 Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --color-bg: #000000;
    --color-primary: #00ffff;
    --color-secondary: #0099ff;
    /* ... more variables */
}
```

### Categories
Add/edit categories in `index.html` by duplicating a `.category-card` block:
```html
<div class="category-card" data-category="your-category">
    <!-- Card content -->
</div>
```

### Animations
Modify animation speeds in `styles.css`:
```css
--transition-fast: 0.2s ease;
--transition-normal: 0.3s ease;
--transition-slow: 0.5s ease;
```

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Credits

- Inspired by [FMHY](https://fmhy.net/) for content structure
- Design inspiration from [The Spark](https://spark.thedigitalpanda.com/)
- Built with ❤️ and ☕ for the open-source community

## 📧 Contact

Have questions or suggestions? Feel free to:
- Open an issue on GitHub
- Start a discussion in the Discussions tab
- Reach out on Discord (coming soon)

---

<div align="center">

**⭐ Star this repo if you found it helpful!**

Made with 💙 by the TexSauce team

</div>
