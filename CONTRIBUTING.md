# Contributing to Trivia Game 🎯

Thank you for your interest in contributing to the Trivia Game project! This guide will help you get started with your first open source contribution.

## 🌟 Welcome First-Time Contributors!

This project is specifically designed to be beginner-friendly. Don't worry if this is your first time contributing to open source - we're here to help! 

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Types of Contributions](#types-of-contributions)
- [Development Setup](#development-setup)
- [Making Changes](#making-changes)
- [Submitting Changes](#submitting-changes)
- [Style Guidelines](#style-guidelines)
- [Getting Help](#getting-help)

## 📜 Code of Conduct

This project follows our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to uphold this code. Please report unacceptable behavior to the project maintainers.

## 🚀 Getting Started

### Prerequisites

- Git installed on your computer
- A GitHub account
- Basic knowledge of HTML, CSS, and JavaScript
- A text editor or IDE (VS Code recommended)

### First-Time Setup

1. **Fork the repository**
   - Go to the [main repository](https://github.com/apurvagandhi/trivia-game)
   - Click the "Fork" button in the top-right corner

2. **Clone your fork**
   ```bash
   git clone https://github.com/apurvagandhi/trivia-game.git
   cd trivia-game
   ```

3. **Add the original repository as upstream**
   ```bash
   git remote add upstream https://github.com/original-username/trivia-game.git
   ```

## 🎯 Types of Contributions

We welcome many types of contributions:

### 🐛 Bug Fixes
- Fix gameplay issues
- Correct typos in questions or UI
- Resolve display problems

### ✨ New Features
- Add new question categories
- Implement new game modes
- Add sound effects or animations
- Improve accessibility

### 📚 Documentation
- Improve README or other docs
- Add code comments
- Create tutorials or guides

### 🎨 Design Improvements
- Enhance UI/UX
- Improve responsive design
- Add new themes or color schemes

### 📝 Content Additions
- Add new trivia questions
- Create new difficulty levels
- Add new languages

## 💻 Development Setup

1. **Test the game locally**
   ```bash
   # Open index.html in your browser or use a local server
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

2. **Make sure everything works**
   - Play through a few questions
   - Test different categories and difficulties
   - Check that scores are saved

## 🔧 Making Changes

### Creating a Branch

Always create a new branch for your changes:

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

### Branch Naming Convention

- `feature/` for new features
- `fix/` for bug fixes
- `docs/` for documentation changes
- `style/` for UI/design changes

Examples:
- `feature/add-music-category`
- `fix/timer-not-stopping`
- `docs/update-contributing-guide`

### Making Your Changes

1. **Keep changes focused** - One feature or fix per pull request
2. **Test your changes** - Make sure the game still works
3. **Follow coding standards** - See [Style Guidelines](#style-guidelines)
4. **Add comments** - Help others understand your code

### Testing Your Changes

Before submitting:

1. **Functional Testing**
   - Play the game with your changes
   - Test edge cases
   - Verify all categories and difficulties work

2. **Cross-Browser Testing**
   - Test in Chrome, Firefox, Safari, and Edge
   - Check mobile responsiveness

3. **Code Quality**
   - Ensure no console errors
   - Validate HTML/CSS if possible

## 📤 Submitting Changes

### Commit Messages

Write clear, descriptive commit messages:

```bash
# Good examples
git commit -m "Add 10 new science questions for easy difficulty"
git commit -m "Fix timer not resetting between questions"
git commit -m "Improve mobile layout for question display"

# Avoid
git commit -m "fix stuff"
git commit -m "updates"
```

### Creating a Pull Request

1. **Push your changes**
   ```bash
   git push origin your-branch-name
   ```

2. **Create the pull request**
   - Go to your fork on GitHub
   - Click "New Pull Request"
   - Choose your branch
   - Fill out the PR template

3. **PR Description Should Include:**
   - What changes you made
   - Why you made them
   - How to test the changes
   - Screenshots (if UI changes)

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Style/UI improvement

## Testing
- [ ] Tested locally
- [ ] No console errors
- [ ] Mobile responsive (if applicable)

## Screenshots (if applicable)
Add screenshots here
```

## 📝 Style Guidelines

### JavaScript

```javascript
// Use camelCase for variables and functions
const currentQuestion = 0;
function showNextQuestion() { }

// Use meaningful variable names
const timeRemaining = 30; // Good
const t = 30; // Avoid

// Add comments for complex logic
// Calculate final score based on correct answers and time bonus
const finalScore = correctAnswers * 10 + timeBonus;
```

### CSS

```css
/* Use clear, descriptive class names */
.question-container { }
.answer-button { }
.score-display { }

/* Group related styles */
/* Game Layout */
.game-container { }
.question-area { }

/* Buttons */
.btn-primary { }
.btn-secondary { }
```

### HTML

```html
<!-- Use semantic HTML -->
<main class="game-container">
  <section class="question-section">
    <h2 class="question-text">Question goes here</h2>
  </section>
</main>

<!-- Include accessibility attributes -->
<button aria-label="Submit answer" class="submit-btn">Submit</button>
```

## 🎯 Good First Issues

Look for issues labeled:
- `good first issue`
- `beginner-friendly`
- `help wanted`
- `documentation`

### Easy Contribution Ideas

1. **Add Questions** - Add 5-10 new trivia questions
2. **Fix Typos** - Correct spelling or grammar errors
3. **Improve Comments** - Add explanatory comments to code
4. **Update Documentation** - Improve README or add examples
5. **Style Improvements** - Enhance button colors or layouts

## 🆘 Getting Help

### Where to Ask Questions

- **GitHub Discussions** - For general questions
- **Issues** - For bugs or feature requests
- **Pull Request Comments** - For code-specific questions

### What to Include When Asking for Help

1. What you're trying to do
2. What you expected to happen
3. What actually happened
4. Your operating system and browser
5. Any error messages

### Response Time

- We aim to respond to questions within 24-48 hours
- Pull requests are typically reviewed within a week
- Don't hesitate to ping us if you haven't heard back!

## 🏆 Recognition

Contributors are recognized in several ways:

- Listed in README.md
- GitHub contributor statistics
- Special badges for significant contributions
- Potential collaborator status for ongoing contributors

## 📚 Learning Resources

### Git and GitHub
- [GitHub's Git Tutorial](https://try.github.io/)
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Flow](https://guides.github.com/introduction/flow/)

### Web Development
- [MDN Web Docs](https://developer.mozilla.org/)
- [JavaScript.info](https://javascript.info/)
- [CSS-Tricks](https://css-tricks.com/)

### Open Source
- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [First Timers Only](https://www.firsttimersonly.com/)

## 🎉 Thank You!

Every contribution, no matter how small, makes this project better. We appreciate your time and effort!

---

**Questions?** Don't hesitate to ask! We're here to help you succeed. 🚀

