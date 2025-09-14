# 🎲 Password Generator Gacha

> **Buat password yang aman dengan cara yang seru! Gacha sistem seperti CS:GO case opening untuk mendapatkan karakter password.**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 🌟 Demo Live

🚀 **[Coba Sekarang!](https://syahreza01x.github.io/Password-Generator)**

---

## 📖 Tentang Project

**Password Generator Gacha** adalah aplikasi web yang mengubah proses pembuatan password menjadi pengalaman gaming yang seru! Terinspirasi dari sistem pembukaan case di CS:GO, setiap karakter password didapatkan melalui sistem gacha dengan rarity yang berbeda.

### 🎮 Kenapa Gacha?
- ✨ **Lebih Seru** - Membuat password tidak lagi membosankan
- 🎯 **Engaging** - Sistem reward membuat user ingin terus mencoba
- 🎨 **Visual Appeal** - Animasi dan efek yang menarik
- 🔊 **Audio Feedback** - Sound effect yang immersive

---

## 🚀 Features

### 🎰 **Gacha System**
- **🟢 Common (60%)** - Huruf biasa (a-y kecuali z,q,x)
- **🔵 Rare (25%)** - Huruf langka (z, q, x)
- **🔴 Epic (12%)** - Angka (0-9)
- **🟡 Legendary (3%)** - Simbol (!@#$%^&* dll)

### 🎪 **CS:GO Style Animations**
- 📦 **Crate Opening** - Animasi shake dan rotating crate
- 🎯 **Roulette Wheel** - Horizontal scrolling dengan smooth deceleration
- 🔺 **Pointer System** - Jarum penunjuk seperti di CS:GO
- ✨ **Particle Effects** - Efek ledakan untuk legendary items

### 🔊 **Dynamic Sound System**
- 🎵 **Gacha Sounds** - Tick sounds yang melambat secara realistis
- 🎺 **Result Sounds** - Sound berbeda untuk setiap rarity
- ⏹️ **Smart Audio** - Automatic stop untuk prevent overlap

### 📊 **Statistics & Features**
- 📈 **Live Stats** - Tracking untuk semua rarity
- 📋 **Copy to Clipboard** - One-click copy password
- ⌨️ **Keyboard Shortcuts** - Space untuk gacha, Escape untuk close
- 📱 **Responsive Design** - Works on all devices

---

## 🛠️ Teknologi

| Technology | Usage |
|------------|-------|
| **HTML5** | Structure & Semantic markup |
| **CSS3** | Styling, Animations & Responsive design |
| **JavaScript (ES6+)** | Game logic, Audio API & DOM manipulation |
| **Web Audio API** | Dynamic sound generation |
| **CSS Variables** | Dynamic animation properties |
| **Flexbox/Grid** | Modern layout system |

---

## 📁 Project Structure

```
Password-Generator/
├── 📄 index.html          # Main HTML structure
├── 🎨 style.css           # All styling & animations
├── ⚡ script.js           # Game logic & functionality
└── 📚 README.md           # Documentation
```

### 🧩 Architecture

```javascript
class PasswordGacha {
    ├── 🎯 Gacha System (Probability-based)
    ├── 🎰 Roulette Animation (CSS + JS)
    ├── 🔊 Audio System (Web Audio API)
    ├── 📊 Statistics Tracking
    └── 🎮 Event Management
}
```

---

## 🚀 Quick Start

### 1️⃣ Clone Repository
```bash
git clone https://github.com/syahreza01x/Password-Generator.git
cd Password-Generator
```

### 2️⃣ Run Locally
```bash
# Option 1: Simple HTTP Server (Python)
python -m http.server 8000

# Option 2: Live Server (VS Code Extension)
# Right-click index.html → "Open with Live Server"

# Option 3: Direct File
# Double-click index.html (may have CORS issues)
```

### 3️⃣ Open Browser
```
http://localhost:8000
```

---

## 🎮 Cara Bermain

### 🎯 **Basic Flow**
1. 🖱️ **Klik "Buka Crate!"** atau tekan `Space`
2. 📦 **Watch the Animation** - Crate akan shake dan open
3. 🎰 **Roulette Spinning** - Karakter berputar dengan sound effect
4. 🎯 **Result Reveal** - Dapatkan karakter sesuai rarity
5. ➕ **Add to Password** - Tambahkan ke password Anda
6. 🔄 **Repeat** - Ulangi sampai password sesuai keinginan

### ⌨️ **Keyboard Shortcuts**
- `Space` - Buka crate / Gacha
- `Escape` - Tutup modal reveal
- `Ctrl+C` - Copy password (when focused)

### 🎨 **Rarity Colors**
- 🟢 **Green** - Common items
- 🔵 **Blue** - Rare items  
- 🔴 **Red** - Epic items
- 🟡 **Gold** - Legendary items (dengan efek special!)

---

## 🎨 Screenshots

### 🏠 Main Interface
![Main Interface](https://via.placeholder.com/800x400/1a1a2e/ffffff?text=Main+Interface)

### 🎰 Roulette System
![Roulette](https://via.placeholder.com/800x300/2c3e50/ffffff?text=CS%3AGO+Style+Roulette)

### 🟡 Legendary Effect
![Legendary](https://via.placeholder.com/400x400/f39c12/000000?text=Legendary+Effect)

---

## 🔧 Customization

### 🎯 Mengubah Probability
```javascript
this.probabilities = {
    common: 60,     // 60%
    rare: 25,       // 25%
    epic: 12,       // 12%
    legendary: 3    // 3%
};
```

### 🔤 Menambah Karakter
```javascript
this.characters = {
    common: 'abcdefghijklmnoprstuvwy'.split(''),
    rare: 'zqx'.split(''),
    epic: '0123456789'.split(''),
    legendary: '!@#$%^&*()_+-=[]{}|;:,.<>?'.split('')
};
```

### 🎨 Custom Colors
```css
.rarity-legendary {
    background: linear-gradient(145deg, #your-color, #your-color-2);
    /* Add your custom styling */
}
```

---

## 🤝 Contributing

Kami welcome kontribusi dari semua orang! Berikut cara berkontribusi:

### 🐛 **Bug Reports**
1. Cek [Issues](https://github.com/syahreza01x/Password-Generator/issues) yang sudah ada
2. Buat issue baru dengan detail bug
3. Sertakan screenshot jika perlu

### 💡 **Feature Requests**
1. Diskusikan di [Discussions](https://github.com/syahreza01x/Password-Generator/discussions)
2. Buat detailed proposal
3. Submit sebagai issue dengan label `enhancement`

### 🔧 **Code Contributions**
```bash
# 1. Fork repository
# 2. Create feature branch
git checkout -b feature/amazing-feature

# 3. Commit changes
git commit -m 'Add amazing feature'

# 4. Push to branch
git push origin feature/amazing-feature

# 5. Open Pull Request
```

---

## 📋 Roadmap

### 🚀 **V2.0 (Coming Soon)**
- [ ] 🎪 **Multiple Themes** - CS:GO, Valorant, Genshin Impact
- [ ] 💾 **Save/Load** - Export/Import password collections
- [ ] 🌐 **Multi-language** - Indonesian, English, Japanese
- [ ] 📱 **PWA Support** - Install as mobile app
- [ ] 🔄 **Auto-generate** - Bulk password generation

### 🎯 **V2.1 (Future)**
- [ ] 🎮 **Achievements** - Unlock system for frequent users
- [ ] 📊 **Advanced Stats** - Detailed analytics
- [ ] 🎵 **Custom Sounds** - Upload your own audio files
- [ ] 🎨 **Theme Builder** - Create custom rarity colors
- [ ] 👥 **Share System** - Share cool passwords (encrypted)

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

```
MIT License - feel free to use, modify, and distribute!
```

---

## 👨‍💻 Author

**Syahreza**
- 🐙 GitHub: [@syahreza01x](https://github.com/syahreza01x)
- 📧 Email: [your-email@example.com](mailto:your-email@example.com)
- 🌐 Website: [your-website.com](https://your-website.com)

---

## 🙏 Acknowledgments

- 🎮 **CS:GO** - Inspirasi untuk gacha animation system
- 🎨 **Design Inspiration** - Modern gaming UI/UX
- 🔊 **Web Audio API** - Amazing browser audio capabilities
- 💡 **Community** - Thanks untuk semua feedback dan suggestions!

---

## ⭐ Support Project

Jika project ini membantu Anda, please consider:

- ⭐ **Star this repository**
- 🍴 **Fork untuk development**
- 📢 **Share dengan teman-teman**
- 🐛 **Report bugs** yang Anda temukan
- 💡 **Suggest new features**

---

<div align="center">

### 🎲 **Happy Gacha-ing!** 🎲

**Made with ❤️ by Syahreza**

[![Visitor Count](https://visitor-badge.laobi.icu/badge?page_id=syahreza01x.Password-Generator)](https://github.com/syahreza01x/Password-Generator)

</div>