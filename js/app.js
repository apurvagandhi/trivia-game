// Main application controller
class TriviaApp {
    constructor() {
        this.currentScreen = 'homeScreen';
        this.init();
    }

    // Initialize the application
    init() {
        this.setupEventListeners();
        this.showScreen('homeScreen');
        
        // Initialize leaderboard display
        window.TriviaLeaderboard.displayLeaderboard();
        
        // Add keyboard shortcuts
        this.setupKeyboardShortcuts();
        
        console.log('🎯 Trivia Game initialized successfully!');
    }

    // Setup all event listeners
    setupEventListeners() {
        // Navigation buttons
        document.getElementById('homeBtn').addEventListener('click', () => this.showScreen('homeScreen'));
        document.getElementById('leaderboardBtn').addEventListener('click', () => this.showScreen('leaderboardScreen'));
        document.getElementById('aboutBtn').addEventListener('click', () => this.showScreen('aboutScreen'));

        // Game controls
        document.getElementById('startGameBtn').addEventListener('click', () => this.startNewGame());
        document.getElementById('nextBtn').addEventListener('click', () => window.TriviaGame.nextQuestion());
        document.getElementById('quitBtn').addEventListener('click', () => window.TriviaGame.quitGame());

        // Results screen buttons
        document.getElementById('playAgainBtn').addEventListener('click', () => this.showScreen('homeScreen'));
        document.getElementById('viewLeaderboardBtn').addEventListener('click', () => this.showScreen('leaderboardScreen'));
        document.getElementById('homeBtn2').addEventListener('click', () => this.showScreen('homeScreen'));
        document.getElementById('saveScoreBtn').addEventListener('click', () => this.saveHighScore());

        // Leaderboard controls
        document.getElementById('clearLeaderboardBtn').addEventListener('click', () => {
            window.TriviaLeaderboard.clearLeaderboard();
        });

        // Category change handler
        document.getElementById('categorySelect').addEventListener('change', (e) => {
            this.updateDifficultyOptions(e.target.value);
        });

        // Enter key handler for player name input
        document.getElementById('playerName').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.saveHighScore();
            }
        });

        // Prevent form submission on Enter
        document.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && e.target.tagName !== 'INPUT') {
                e.preventDefault();
            }
        });
    }

    // Setup keyboard shortcuts
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Don't trigger shortcuts when typing in input fields
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') {
                return;
            }

            switch (e.key) {
                case '1':
                case '2':
                case '3':
                case '4':
                    if (this.currentScreen === 'gameScreen') {
                        const answerButtons = document.querySelectorAll('.answer-btn');
                        const index = parseInt(e.key) - 1;
                        if (answerButtons[index] && !answerButtons[index].disabled) {
                            answerButtons[index].click();
                        }
                    }
                    break;
                case 'Enter':
                case ' ':
                    if (this.currentScreen === 'gameScreen') {
                        const nextBtn = document.getElementById('nextBtn');
                        if (nextBtn.style.display !== 'none') {
                            nextBtn.click();
                        }
                    }
                    break;
                case 'Escape':
                    if (this.currentScreen === 'gameScreen') {
                        window.TriviaGame.quitGame();
                    }
                    break;
                case 'h':
                    this.showScreen('homeScreen');
                    break;
                case 'l':
                    this.showScreen('leaderboardScreen');
                    break;
                case 'a':
                    this.showScreen('aboutScreen');
                    break;
            }
        });
    }

    // Show a specific screen
    showScreen(screenId) {
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });

        // Show requested screen
        document.getElementById(screenId).classList.add('active');

        // Update navigation buttons
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        // Set active nav button
        const navMap = {
            'homeScreen': 'homeBtn',
            'leaderboardScreen': 'leaderboardBtn',
            'aboutScreen': 'aboutBtn'
        };

        if (navMap[screenId]) {
            document.getElementById(navMap[screenId]).classList.add('active');
        }

        this.currentScreen = screenId;

        // Screen-specific actions
        if (screenId === 'leaderboardScreen') {
            window.TriviaLeaderboard.displayLeaderboard();
        }
    }

    // Start a new game
    startNewGame() {
        const category = document.getElementById('categorySelect').value;
        const difficulty = document.getElementById('difficultySelect').value;
        const questionCount = parseInt(document.getElementById('questionsCount').value);

        // Show loading overlay
        this.showLoadingOverlay(true);

        // Simulate loading time for better UX
        setTimeout(() => {
            const gameStarted = window.TriviaGame.startGame(category, difficulty, questionCount);
            
            this.showLoadingOverlay(false);
            
            if (gameStarted) {
                this.showScreen('gameScreen');
            }
        }, 500);
    }

    // Update difficulty options based on selected category
    updateDifficultyOptions(category) {
        const difficultySelect = document.getElementById('difficultySelect');
        const availableDifficulties = window.TriviaQuestions.getDifficulties(category);
        
        // Clear current options
        difficultySelect.innerHTML = '';
        
        // Add available difficulties
        availableDifficulties.forEach(difficulty => {
            const option = document.createElement('option');
            option.value = difficulty;
            option.textContent = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
            difficultySelect.appendChild(option);
        });
    }

    // Save high score
    saveHighScore() {
        const playerNameInput = document.getElementById('playerName');
        const playerName = playerNameInput.value.trim();
        
        if (!playerName) {
            playerNameInput.focus();
            this.showToast('Please enter your name!', 'error');
            return;
        }

        const gameState = window.TriviaGame.getGameState();
        const success = window.TriviaLeaderboard.addScore(
            playerName, 
            gameState.score, 
            gameState.settings
        );

        if (success) {
            this.showToast('Score saved successfully!', 'success');
            document.getElementById('highScoreSection').style.display = 'none';
            
            // Clear the input
            playerNameInput.value = '';
        } else {
            this.showToast('Error saving score. Please try again.', 'error');
        }
    }

    // Show/hide loading overlay
    showLoadingOverlay(show) {
        const overlay = document.getElementById('loadingOverlay');
        overlay.style.display = show ? 'flex' : 'none';
    }

    // Show toast notification
    showToast(message, type = 'info') {
        // Remove existing toast if any
        const existingToast = document.querySelector('.toast');
        if (existingToast) {
            existingToast.remove();
        }

        // Create toast element
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 12px 20px;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 1001;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
            word-wrap: break-word;
        `;

        // Set background color based on type
        const colors = {
            success: '#28a745',
            error: '#dc3545',
            warning: '#ffc107',
            info: '#17a2b8'
        };
        toast.style.backgroundColor = colors[type] || colors.info;
        toast.textContent = message;

        // Add to DOM
        document.body.appendChild(toast);

        // Animate in
        setTimeout(() => {
            toast.style.transform = 'translateX(0)';
        }, 100);

        // Auto remove after 3 seconds
        setTimeout(() => {
            toast.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.remove();
                }
            }, 300);
        }, 3000);
    }

    // Get application state for debugging
    getAppState() {
        return {
            currentScreen: this.currentScreen,
            gameState: window.TriviaGame.getGameState(),
            leaderboardStats: window.TriviaLeaderboard.getStats()
        };
    }

    // Handle app errors
    handleError(error, context = 'Unknown') {
        console.error(`Error in ${context}:`, error);
        this.showToast(`An error occurred: ${error.message}`, 'error');
    }

    // Initialize service worker for PWA features (if needed in future)
    initServiceWorker() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('SW registered: ', registration);
                })
                .catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                });
        }
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.TriviaApp = new TriviaApp();
});

// Handle uncaught errors
window.addEventListener('error', (e) => {
    console.error('Uncaught error:', e.error);
    if (window.TriviaApp) {
        window.TriviaApp.handleError(e.error, 'Global');
    }
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    if (window.TriviaApp) {
        window.TriviaApp.handleError(e.reason, 'Promise');
    }
});
