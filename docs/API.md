# 📚 API Documentation

This document describes the internal APIs and interfaces used in the Trivia Game application.

## 🏗️ Architecture Overview

The application uses a modular architecture with the following main components:

```
TriviaApp (Main Controller)
├── TriviaGame (Game Logic)
├── TriviaLeaderboard (Score Management)
└── TriviaQuestions (Question Database)
```

## 🎮 TriviaGame API

### Constructor
```javascript
new TriviaGame()
```
Creates a new game instance with default settings.

### Methods

#### `startGame(category, difficulty, questionCount)`
Initializes a new game session.

**Parameters:**
- `category` (string): Question category ('any', 'science', 'history', etc.)
- `difficulty` (string): Difficulty level ('easy', 'medium', 'hard')
- `questionCount` (number): Number of questions (5-20)

**Returns:** `boolean` - Success status

**Example:**
```javascript
const success = window.TriviaGame.startGame('science', 'medium', 10);
if (success) {
    // Game started successfully
}
```

#### `nextQuestion()`
Advances to the next question in the game.

**Returns:** `void`

#### `selectAnswer(answerIndex)`
Handles answer selection for the current question.

**Parameters:**
- `answerIndex` (number): Index of selected answer (0-3)

**Returns:** `void`

#### `quitGame()`
Ends the current game and returns to home screen.

**Returns:** `void`

#### `getGameState()`
Returns the current game state.

**Returns:** `object`
```javascript
{
    settings: {
        category: string,
        difficulty: string,
        questionCount: number
    },
    stats: {
        correctAnswers: number,
        totalQuestions: number,
        timeBonus: number
    },
    score: number,
    currentQuestion: number,
    totalQuestions: number
}
```

### Properties

#### `currentQuestions`
Array of questions for the current game session.

#### `score`
Current game score.

#### `timeLeft`
Remaining time for current question (in seconds).

## 🏆 TriviaLeaderboard API

### Constructor
```javascript
new TriviaLeaderboard()
```
Creates a new leaderboard manager instance.

### Methods

#### `getLeaderboard()`
Retrieves the leaderboard from local storage.

**Returns:** `Array<LeaderboardEntry>`

**LeaderboardEntry:**
```javascript
{
    name: string,
    score: number,
    date: string,
    timestamp: number,
    category: string,
    difficulty: string,
    questions: number
}
```

#### `addScore(playerName, score, gameSettings)`
Adds a new score to the leaderboard.

**Parameters:**
- `playerName` (string): Player's name
- `score` (number): Final score
- `gameSettings` (object): Game configuration

**Returns:** `boolean` - Success status

**Example:**
```javascript
const success = window.TriviaLeaderboard.addScore(
    'John Doe',
    250,
    { category: 'science', difficulty: 'hard', questionCount: 10 }
);
```

#### `isHighScore(score)`
Checks if a score qualifies for the leaderboard.

**Parameters:**
- `score` (number): Score to check

**Returns:** `boolean`

#### `displayLeaderboard()`
Updates the leaderboard UI with current data.

**Returns:** `void`

#### `clearLeaderboard()`
Clears all leaderboard data (with confirmation).

**Returns:** `boolean` - Success status

#### `getStats()`
Returns leaderboard statistics.

**Returns:** `object`
```javascript
{
    totalPlayers: number,
    averageScore: number,
    highestScore: number,
    mostPopularCategory: string,
    mostPopularDifficulty: string
}
```

#### `exportLeaderboard()`
Downloads leaderboard data as JSON file.

**Returns:** `void`

#### `importLeaderboard(jsonData)`
Imports leaderboard data from JSON string.

**Parameters:**
- `jsonData` (string): JSON string containing leaderboard data

**Returns:** `boolean` - Success status

## ❓ TriviaQuestions API

### Methods

#### `getRandomQuestions(category, difficulty, count)`
Returns random questions matching the criteria.

**Parameters:**
- `category` (string): Question category or 'any'
- `difficulty` (string): Difficulty level
- `count` (number): Number of questions requested

**Returns:** `Array<Question>`

**Question:**
```javascript
{
    question: string,
    answers: Array<string>, // 4 options
    correct: number, // Index of correct answer (0-3)
    category: string
}
```

**Example:**
```javascript
const questions = window.TriviaQuestions.getRandomQuestions('science', 'easy', 5);
```

#### `getCategories()`
Returns all available question categories.

**Returns:** `Array<string>`

#### `getDifficulties(category)`
Returns available difficulties for a category.

**Parameters:**
- `category` (string): Question category

**Returns:** `Array<string>`

### Properties

#### `database`
The complete question database organized by category and difficulty.

## 🎯 TriviaApp API

### Constructor
```javascript
new TriviaApp()
```
Creates and initializes the main application.

### Methods

#### `showScreen(screenId)`
Navigates to a specific screen.

**Parameters:**
- `screenId` (string): Screen identifier ('homeScreen', 'gameScreen', etc.)

**Returns:** `void`

**Example:**
```javascript
window.TriviaApp.showScreen('leaderboardScreen');
```

#### `startNewGame()`
Starts a new game with current form settings.

**Returns:** `void`

#### `saveHighScore()`
Saves the current high score to leaderboard.

**Returns:** `void`

#### `showToast(message, type)`
Displays a toast notification.

**Parameters:**
- `message` (string): Toast message
- `type` (string): Toast type ('success', 'error', 'warning', 'info')

**Returns:** `void`

**Example:**
```javascript
window.TriviaApp.showToast('Game saved!', 'success');
```

#### `getAppState()`
Returns the current application state (for debugging).

**Returns:** `object`
```javascript
{
    currentScreen: string,
    gameState: object,
    leaderboardStats: object
}
```

## 🎹 Keyboard Shortcuts

The application supports the following keyboard shortcuts:

| Key | Action | Context |
|-----|--------|---------|
| `1-4` | Select answer | Game screen |
| `Enter` / `Space` | Next question | Game screen |
| `Escape` | Quit game | Game screen |
| `H` | Home screen | Any screen |
| `L` | Leaderboard | Any screen |
| `A` | About screen | Any screen |

## 💾 Local Storage

The application uses local storage for data persistence:

### Keys Used
- `triviaLeaderboard`: Stores leaderboard data

### Data Format
```javascript
// Leaderboard data
[
    {
        name: "Player Name",
        score: 250,
        date: "1/15/2025",
        timestamp: 1642204800000,
        category: "science",
        difficulty: "medium",
        questions: 10
    }
    // ... more entries
]
```

## 🎨 CSS Classes

### Component Classes
- `.screen` - Main content screens
- `.screen.active` - Currently visible screen
- `.btn` - Base button styling
- `.btn-primary` - Primary action buttons
- `.btn-secondary` - Secondary action buttons
- `.btn-danger` - Danger/warning buttons
- `.btn-outline` - Outline style buttons

### Game-specific Classes
- `.question-container` - Question display area
- `.answer-btn` - Answer option buttons
- `.answer-btn.correct` - Correct answer styling
- `.answer-btn.incorrect` - Incorrect answer styling
- `.answer-btn.selected` - Selected answer styling
- `.timer` - Timer display
- `.timer-progress` - Timer progress bar

### Layout Classes
- `.container` - Content wrapper with max-width
- `.game-header` - Game status information
- `.results-container` - Results screen layout
- `.leaderboard-container` - Leaderboard layout

## 🔧 Custom Events

The application doesn't currently use custom events, but future versions may implement:

```javascript
// Potential custom events
document.addEventListener('gameStart', (e) => {
    console.log('Game started:', e.detail);
});

document.addEventListener('scoreUpdate', (e) => {
    console.log('Score updated:', e.detail);
});

document.addEventListener('gameEnd', (e) => {
    console.log('Game ended:', e.detail);
});
```

## 🐛 Error Handling

### Global Error Handlers
The application includes global error handlers for:

- Uncaught exceptions
- Unhandled promise rejections
- Local storage errors
- JSON parsing errors

### Error Toast Notifications
Errors are displayed to users via toast notifications with appropriate styling.

## 🧪 Testing Utilities

### Debug Functions
Access these in the browser console for debugging:

```javascript
// Get current app state
window.TriviaApp.getAppState()

// View question database
window.TriviaQuestions.database

// Check leaderboard
window.TriviaLeaderboard.getLeaderboard()

// Get leaderboard stats
window.TriviaLeaderboard.getStats()
```

### Manual Testing
Use these methods for manual testing:

```javascript
// Start a specific game configuration
window.TriviaGame.startGame('science', 'hard', 5);

// Add test score
window.TriviaLeaderboard.addScore('Test Player', 100, {
    category: 'any',
    difficulty: 'easy',
    questionCount: 5
});

// Show specific screen
window.TriviaApp.showScreen('gameScreen');
```

## 📊 Performance Considerations

### Memory Management
- Timer intervals are properly cleared
- Event listeners are added only once during initialization
- Large data structures are avoided

### Storage Efficiency
- Leaderboard is limited to 10 entries
- Data is stored in compressed JSON format
- Unnecessary properties are not persisted

### Optimization Tips
- Images should be optimized (WebP format recommended)
- CSS/JS can be minified for production
- Consider implementing lazy loading for future features

---

*This API documentation is updated with each release. For the latest version, check the main branch.*
