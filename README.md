
# 🎯 Trivia Game - Open Source Learning Project

![Trivia Game](https://img.shields.io/badge/Status-Active-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Contributors Welcome](https://img.shields.io/badge/Contributors-Welcome-orange.svg)
![Beginner Friendly](https://img.shields.io/badge/Beg inner-Friendly-green.svg)

A fun, interactive trivia game built with HTML, CSS, and JavaScript. This project is specifically designed for **first-time open source contributors** to learn and practice contributing to open source projects!

## 🎮 Live Demo

[Play Game](https://apurvagandhi.github.io/trivia-game/)

## ✨ Features

- 🎲 Multiple categories (Science, History, Sports, Entertainment)
- 🏆 Three difficulty levels (Easy, Medium, Hard)
- ⏱️ Timer for each question
- 🎯 Score tracking and leaderboard
- 📱 Fully responsive design
- 🎨 Modern, colorful UI
- 🔄 Question randomization
- 💾 Local storage for high scores

## 🚀 Getting Started

### Prerequisites

- A web browser (Chrome, Firefox, Safari, Edge)
- Basic knowledge of HTML, CSS, and JavaScript (for contributors)
- Git (for contributing)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/apurvagandhi/trivia-game.git
   cd trivia-game
   ```

2. **Open the game**
   - Simply open `index.html` in your web browser
   - Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

3. **Start playing!**
   - Navigate to `http://localhost:8000` if using a local server
   - Or just double-click `index.html`

## 🎯 How to Play

1. Choose your preferred category
2. Select difficulty level
3. Answer questions within the time limit
4. Track your score and try to beat the high score!
5. Share your results with friends

## 🤝 Contributing

We **love** contributions! This project is perfect for beginners. Here's how you can help:

### 🌟 Good First Issues

- Add new trivia questions
- Improve CSS styling
- Add new categories
- Fix typos in documentation
- Add accessibility features
- Improve mobile responsiveness

### 📋 How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Test your changes** (open `index.html` and play the game)
5. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
6. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### 📖 Detailed Contributing Guide

Please read our [Contributing Guidelines](CONTRIBUTING.md) for detailed information.

## 📁 Project Structure

```
trivia-game/
├── index.html              # Main game page
├── css/
│   ├── style.css          # Main styles
│   └── responsive.css     # Mobile responsive styles
├── js/
│   ├── game.js           # Main game logic
│   ├── questions.js      # Question database
│   └── utils.js          # Utility functions
├── assets/
│   ├── images/           # Game images and icons
│   └── sounds/           # Sound effects (optional)
├── docs/                 # Documentation
├── .github/              # GitHub templates and workflows
├── LICENSE               # MIT License
├── README.md            # This file
├── CONTRIBUTING.md      # Contributing guidelines
└── CODE_OF_CONDUCT.md  # Code of conduct
```

## 🛠️ Technologies Used

- **HTML5** - Structure and semantics
- **CSS3** - Styling and animations
- **JavaScript** - Game logic and interactivity
- **Local Storage** - Saving high scores
- **Responsive Design** - Mobile-friendly layout

## 🎨 Customization

### Adding New Questions

Edit `js/questions.js` to add new questions:

```javascript
{
  category: "Science",
  difficulty: "easy",
  question: "What planet is known as the Red Planet?",
  options: ["Mars", "Venus", "Jupiter", "Saturn"],
  correct: 0
}
```

### Adding New Categories

1. Add questions with the new category in `js/questions.js`
2. Update the category selector in `index.html`
3. Optionally add category-specific styling in `css/style.css`

## 🏆 High Scores

The game saves your high scores locally in your browser. Scores are tracked by:
- Category
- Difficulty level
- Total questions answered correctly
- Time taken

## 🐛 Bug Reports

Found a bug? Please create an issue using our [Bug Report Template](.github/ISSUE_TEMPLATE/bug_report.md).

## 💡 Feature Requests

Have an idea? We'd love to hear it! Use our [Feature Request Template](.github/ISSUE_TEMPLATE/feature_request.md).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Questions sourced from various public trivia databases
- Icons from [Font Awesome](https://fontawesome.com/)
- Color palette inspired by Material Design
- Special thanks to all contributors!

## 📞 Support
- 💬 Discussions: [GitHub Discussions](https://github.com/apurvagandhi/trivia-game/discussions)
- 🐛 Issues: [GitHub Issues](https://github.com/apurvagandhi/trivia-game/issues)

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=apurvagandhi/trivia-game&type=Date)](https://star-history.com/#apurvagandhi/trivia-game&Date)

---

**Made with ❤️ for the open source community**

*Perfect for first-time contributors! Don't hesitate to ask questions.* 🚀




