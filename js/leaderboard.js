// Leaderboard management
class TriviaLeaderboard {
    constructor() {
        this.storageKey = 'triviaLeaderboard';
        this.maxEntries = 10;
    }

    // Get leaderboard from localStorage
    getLeaderboard() {
        try {
            const stored = localStorage.getItem(this.storageKey);
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error('Error loading leaderboard:', error);
            return [];
        }
    }

    // Save leaderboard to localStorage
    saveLeaderboard(leaderboard) {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(leaderboard));
            return true;
        } catch (error) {
            console.error('Error saving leaderboard:', error);
            return false;
        }
    }

    // Add new score to leaderboard
    addScore(playerName, score, gameSettings) {
        const leaderboard = this.getLeaderboard();
        
        const newEntry = {
            name: playerName.trim() || 'Anonymous',
            score: score,
            date: new Date().toLocaleDateString(),
            timestamp: Date.now(),
            category: gameSettings.category,
            difficulty: gameSettings.difficulty,
            questions: gameSettings.questionCount
        };

        // Add new entry
        leaderboard.push(newEntry);

        // Sort by score (descending) and then by timestamp (ascending for same scores)
        leaderboard.sort((a, b) => {
            if (b.score !== a.score) {
                return b.score - a.score;
            }
            return a.timestamp - b.timestamp;
        });

        // Keep only top entries
        const trimmedLeaderboard = leaderboard.slice(0, this.maxEntries);
        
        // Save back to storage
        return this.saveLeaderboard(trimmedLeaderboard);
    }

    // Check if score qualifies for leaderboard
    isHighScore(score) {
        const leaderboard = this.getLeaderboard();
        
        // If leaderboard isn't full, any score qualifies
        if (leaderboard.length < this.maxEntries) {
            return true;
        }
        
        // Check if score is higher than lowest score
        const lowestScore = leaderboard[leaderboard.length - 1].score;
        return score > lowestScore;
    }

    // Get player's rank for a given score
    getScoreRank(score) {
        const leaderboard = this.getLeaderboard();
        
        for (let i = 0; i < leaderboard.length; i++) {
            if (score >= leaderboard[i].score) {
                return i + 1;
            }
        }
        
        return leaderboard.length + 1;
    }

    // Display leaderboard in UI
    displayLeaderboard() {
        const leaderboard = this.getLeaderboard();
        const leaderboardList = document.getElementById('leaderboardList');
        
        if (!leaderboardList) return;
        
        // Clear existing content
        leaderboardList.innerHTML = '';
        
        if (leaderboard.length === 0) {
            const emptyMessage = document.createElement('div');
            emptyMessage.className = 'empty-leaderboard';
            emptyMessage.innerHTML = `
                <p>🎯 No scores yet!</p>
                <p>Be the first to play and set a high score.</p>
            `;
            leaderboardList.appendChild(emptyMessage);
            return;
        }
        
        // Create leaderboard entries
        leaderboard.forEach((entry, index) => {
            const entryElement = document.createElement('div');
            entryElement.className = 'leaderboard-entry';
            
            // Add special styling for top 3
            if (index < 3) {
                entryElement.style.background = this.getTopRankBackground(index);
            }
            
            entryElement.innerHTML = `
                <div class="rank">${this.getRankDisplay(index + 1)}</div>
                <div class="player-name" title="${entry.name}">${this.truncateName(entry.name)}</div>
                <div class="score-display">${entry.score}</div>
                <div class="date-display">${entry.date}</div>
            `;
            
            // Add tooltip with game details
            entryElement.title = this.getEntryTooltip(entry);
            
            leaderboardList.appendChild(entryElement);
        });
    }

    // Get background color for top ranks
    getTopRankBackground(index) {
        const colors = [
            'linear-gradient(135deg, #ffd700, #ffed4e)', // Gold
            'linear-gradient(135deg, #c0c0c0, #e8e8e8)', // Silver
            'linear-gradient(135deg, #cd7f32, #daa520)'  // Bronze
        ];
        return colors[index] || '';
    }

    // Get rank display with emojis for top 3
    getRankDisplay(rank) {
        const emojis = {
            1: '🥇',
            2: '🥈',
            3: '🥉'
        };
        return emojis[rank] || rank;
    }

    // Truncate long names for display
    truncateName(name) {
        return name.length > 15 ? name.substring(0, 12) + '...' : name;
    }

    // Create tooltip with game details
    getEntryTooltip(entry) {
        return `Player: ${entry.name}
Score: ${entry.score}
Category: ${this.formatCategory(entry.category)}
Difficulty: ${this.formatDifficulty(entry.difficulty)}
Questions: ${entry.questions}
Date: ${entry.date}`;
    }

    // Format category for display
    formatCategory(category) {
        if (category === 'any') return 'Mixed Categories';
        return category.charAt(0).toUpperCase() + category.slice(1);
    }

    // Format difficulty for display
    formatDifficulty(difficulty) {
        return difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
    }

    // Clear all leaderboard data
    clearLeaderboard() {
        if (confirm('Are you sure you want to clear the entire leaderboard? This action cannot be undone.')) {
            try {
                localStorage.removeItem(this.storageKey);
                this.displayLeaderboard();
                return true;
            } catch (error) {
                console.error('Error clearing leaderboard:', error);
                alert('Error clearing leaderboard. Please try again.');
                return false;
            }
        }
        return false;
    }

    // Get statistics about the leaderboard
    getStats() {
        const leaderboard = this.getLeaderboard();
        
        if (leaderboard.length === 0) {
            return {
                totalPlayers: 0,
                averageScore: 0,
                highestScore: 0,
                mostPopularCategory: 'N/A',
                mostPopularDifficulty: 'N/A'
            };
        }

        const totalScore = leaderboard.reduce((sum, entry) => sum + entry.score, 0);
        const categories = {};
        const difficulties = {};

        leaderboard.forEach(entry => {
            categories[entry.category] = (categories[entry.category] || 0) + 1;
            difficulties[entry.difficulty] = (difficulties[entry.difficulty] || 0) + 1;
        });

        const mostPopularCategory = Object.keys(categories).reduce((a, b) => 
            categories[a] > categories[b] ? a : b
        );
        
        const mostPopularDifficulty = Object.keys(difficulties).reduce((a, b) => 
            difficulties[a] > difficulties[b] ? a : b
        );

        return {
            totalPlayers: leaderboard.length,
            averageScore: Math.round(totalScore / leaderboard.length),
            highestScore: leaderboard[0].score,
            mostPopularCategory: this.formatCategory(mostPopularCategory),
            mostPopularDifficulty: this.formatDifficulty(mostPopularDifficulty)
        };
    }

    // Export leaderboard data as JSON
    exportLeaderboard() {
        const leaderboard = this.getLeaderboard();
        const dataStr = JSON.stringify(leaderboard, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `trivia-leaderboard-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
    }

    // Import leaderboard data from JSON
    importLeaderboard(jsonData) {
        try {
            const importedData = JSON.parse(jsonData);
            
            if (!Array.isArray(importedData)) {
                throw new Error('Invalid data format');
            }
            
            // Validate each entry
            const validEntries = importedData.filter(entry => 
                entry.name && 
                typeof entry.score === 'number' && 
                entry.date
            );
            
            if (validEntries.length === 0) {
                throw new Error('No valid entries found');
            }
            
            // Merge with existing leaderboard
            const currentLeaderboard = this.getLeaderboard();
            const mergedLeaderboard = [...currentLeaderboard, ...validEntries];
            
            // Sort and trim
            mergedLeaderboard.sort((a, b) => {
                if (b.score !== a.score) {
                    return b.score - a.score;
                }
                return (a.timestamp || 0) - (b.timestamp || 0);
            });
            
            const trimmedLeaderboard = mergedLeaderboard.slice(0, this.maxEntries);
            
            // Save
            this.saveLeaderboard(trimmedLeaderboard);
            this.displayLeaderboard();
            
            return true;
        } catch (error) {
            console.error('Error importing leaderboard:', error);
            alert('Error importing leaderboard data. Please check the file format.');
            return false;
        }
    }
}

// Create global leaderboard instance
window.TriviaLeaderboard = new TriviaLeaderboard();
