// Game state management
class TriviaGame {
    constructor() {
        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.timeLeft = 30;
        this.timer = null;
        this.gameSettings = {
            category: 'any',
            difficulty: 'easy',
            questionCount: 10
        };
        this.gameStats = {
            correctAnswers: 0,
            totalQuestions: 0,
            timeBonus: 0
        };
        this.selectedAnswer = null;
        this.isAnswered = false;
    }

    // Initialize game with settings
    startGame(category, difficulty, questionCount) {
        this.gameSettings = { category, difficulty, questionCount };
        this.currentQuestions = window.TriviaQuestions.getRandomQuestions(category, difficulty, questionCount);
        
        if (this.currentQuestions.length === 0) {
            alert('No questions available for the selected category and difficulty!');
            return false;
        }

        this.currentQuestionIndex = 0;
        this.score = 0;
        this.gameStats = {
            correctAnswers: 0,
            totalQuestions: this.currentQuestions.length,
            timeBonus: 0
        };
        
        this.loadQuestion();
        return true;
    }

    // Load current question
    loadQuestion() {
        if (this.currentQuestionIndex >= this.currentQuestions.length) {
            this.endGame();
            return;
        }

        const question = this.currentQuestions[this.currentQuestionIndex];
        this.selectedAnswer = null;
        this.isAnswered = false;
        
        // Update UI
        this.updateQuestionUI(question);
        this.startTimer();
    }

    // Update question UI
    updateQuestionUI(question) {
        const questionText = document.getElementById('questionText');
        const questionCategory = document.getElementById('questionCategory');
        const answersContainer = document.getElementById('answersContainer');
        const currentQuestionSpan = document.getElementById('currentQuestion');
        const totalQuestionsSpan = document.getElementById('totalQuestions');
        const currentScoreSpan = document.getElementById('currentScore');

        // Update question info
        questionText.textContent = question.question;
        questionCategory.textContent = this.formatCategoryName(question.category);
        currentQuestionSpan.textContent = this.currentQuestionIndex + 1;
        totalQuestionsSpan.textContent = this.currentQuestions.length;
        currentScoreSpan.textContent = this.score;

        // Clear previous answers
        answersContainer.innerHTML = '';

        // Create answer buttons
        question.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.className = 'answer-btn';
            button.textContent = answer;
            button.addEventListener('click', () => this.selectAnswer(index));
            answersContainer.appendChild(button);
        });

        // Hide next button
        document.getElementById('nextBtn').style.display = 'none';
    }

    // Format category name for display
    formatCategoryName(category) {
        return category.charAt(0).toUpperCase() + category.slice(1);
    }

    // Handle answer selection
    selectAnswer(answerIndex) {
        if (this.isAnswered) return;

        this.selectedAnswer = answerIndex;
        this.isAnswered = true;
        this.stopTimer();

        const question = this.currentQuestions[this.currentQuestionIndex];
        const answerButtons = document.querySelectorAll('.answer-btn');
        
        // Disable all buttons
        answerButtons.forEach(btn => btn.disabled = true);

        // Show correct/incorrect
        answerButtons.forEach((btn, index) => {
            if (index === question.correct) {
                btn.classList.add('correct');
            } else if (index === answerIndex && index !== question.correct) {
                btn.classList.add('incorrect');
            }
        });

        // Calculate score
        if (answerIndex === question.correct) {
            this.gameStats.correctAnswers++;
            const baseScore = this.getDifficultyPoints();
            const timeBonus = Math.floor(this.timeLeft / 30 * 10); // Up to 10 bonus points
            this.score += baseScore + timeBonus;
            this.gameStats.timeBonus += timeBonus;
        }

        // Show next button after a delay
        setTimeout(() => {
            document.getElementById('nextBtn').style.display = 'inline-block';
        }, 1500);
    }

    // Get points based on difficulty
    getDifficultyPoints() {
        switch (this.gameSettings.difficulty) {
            case 'easy': return 10;
            case 'medium': return 15;
            case 'hard': return 20;
            default: return 10;
        }
    }

    // Move to next question
    nextQuestion() {
        this.currentQuestionIndex++;
        this.loadQuestion();
    }

    // Start question timer
    startTimer() {
        this.timeLeft = 30;
        this.updateTimerUI();
        
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateTimerUI();
            
            if (this.timeLeft <= 0) {
                this.timeUp();
            }
        }, 1000);
    }

    // Stop timer
    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    // Update timer UI
    updateTimerUI() {
        const timeLeftSpan = document.getElementById('timeLeft');
        const timerProgress = document.getElementById('timerProgress');
        
        timeLeftSpan.textContent = this.timeLeft;
        const progressPercent = (this.timeLeft / 30) * 100;
        timerProgress.style.width = progressPercent + '%';
        
        // Change color based on time left
        if (this.timeLeft <= 10) {
            timerProgress.style.background = '#ff6b6b';
        } else if (this.timeLeft <= 15) {
            timerProgress.style.background = '#feca57';
        } else {
            timerProgress.style.background = 'linear-gradient(90deg, #ff6b6b, #feca57)';
        }
    }

    // Handle time up
    timeUp() {
        if (this.isAnswered) return;
        
        this.isAnswered = true;
        this.stopTimer();
        
        const question = this.currentQuestions[this.currentQuestionIndex];
        const answerButtons = document.querySelectorAll('.answer-btn');
        
        // Disable all buttons and show correct answer
        answerButtons.forEach((btn, index) => {
            btn.disabled = true;
            if (index === question.correct) {
                btn.classList.add('correct');
            }
        });

        // Show next button after a delay
        setTimeout(() => {
            document.getElementById('nextBtn').style.display = 'inline-block';
        }, 1500);
    }

    // End game and show results
    endGame() {
        this.stopTimer();
        
        // Calculate final stats
        const accuracy = Math.round((this.gameStats.correctAnswers / this.gameStats.totalQuestions) * 100);
        const maxPossibleScore = this.gameStats.totalQuestions * (this.getDifficultyPoints() + 10);
        
        // Update results UI
        document.getElementById('finalScore').textContent = this.score;
        document.getElementById('maxScore').textContent = maxPossibleScore;
        document.getElementById('correctAnswers').textContent = 
            `${this.gameStats.correctAnswers}/${this.gameStats.totalQuestions}`;
        document.getElementById('accuracy').textContent = accuracy + '%';
        document.getElementById('timeBonus').textContent = this.gameStats.timeBonus;
        
        // Check if it's a high score
        const leaderboard = window.TriviaLeaderboard;
        if (leaderboard.isHighScore(this.score)) {
            document.getElementById('highScoreSection').style.display = 'block';
        }
        
        // Show results screen
        window.TriviaApp.showScreen('resultsScreen');
    }

    // Quit game
    quitGame() {
        this.stopTimer();
        if (confirm('Are you sure you want to quit the game?')) {
            window.TriviaApp.showScreen('homeScreen');
        } else {
            // Resume timer if not answered
            if (!this.isAnswered) {
                this.startTimer();
            }
        }
    }

    // Get current game state
    getGameState() {
        return {
            settings: this.gameSettings,
            stats: this.gameStats,
            score: this.score,
            currentQuestion: this.currentQuestionIndex,
            totalQuestions: this.currentQuestions.length
        };
    }
}

// Create global game instance
window.TriviaGame = new TriviaGame();
