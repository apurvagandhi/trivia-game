// Question database with categories and difficulties
const questionDatabase = {
    science: {
        easy: [
            {
                question: "What planet is known as the Red Planet?",
                answers: ["Mars", "Venus", "Jupiter", "Saturn"],
                correct: 0
            },
            {
                question: "What gas do plants absorb from the atmosphere?",
                answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                correct: 2
            },
            {
                question: "How many bones are there in an adult human body?",
                answers: ["206", "215", "198", "224"],
                correct: 0
            },
            {
                question: "What is the chemical symbol for water?",
                answers: ["H2O", "CO2", "NaCl", "CH4"],
                correct: 0
            },
            {
                question: "Which organ in the human body produces insulin?",
                answers: ["Liver", "Kidney", "Pancreas", "Heart"],
                correct: 2
            },
            {
                question: "What is the speed of light in vacuum?",
                answers: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "200,000 km/s"],
                correct: 0
            },
            {
                question: "What is the largest mammal in the world?",
                answers: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
                correct: 1
            },
            {
                question: "How many chambers does a human heart have?",
                answers: ["2", "3", "4", "5"],
                correct: 2
            }
        ],
        medium: [
            {
                question: "What is the chemical symbol for gold?",
                answers: ["Go", "Gd", "Au", "Ag"],
                correct: 2
            },
            {
                question: "Which scientist developed the theory of evolution?",
                answers: ["Isaac Newton", "Charles Darwin", "Albert Einstein", "Galileo Galilei"],
                correct: 1
            },
            {
                question: "What is the powerhouse of the cell?",
                answers: ["Nucleus", "Ribosome", "Mitochondria", "Endoplasmic Reticulum"],
                correct: 2
            },
            {
                question: "What type of bond involves the sharing of electrons?",
                answers: ["Ionic", "Covalent", "Metallic", "Hydrogen"],
                correct: 1
            },
            {
                question: "Which blood type is considered the universal donor?",
                answers: ["A", "B", "AB", "O"],
                correct: 3
            },
            {
                question: "What is the most abundant gas in Earth's atmosphere?",
                answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
                correct: 2
            },
            {
                question: "What is the study of earthquakes called?",
                answers: ["Geology", "Seismology", "Meteorology", "Volcanology"],
                correct: 1
            }
        ],
        hard: [
            {
                question: "What is the name of the theoretical boundary around a black hole?",
                answers: ["Photon Sphere", "Event Horizon", "Singularity", "Accretion Disk"],
                correct: 1
            },
            {
                question: "Which particle is responsible for carrying the electromagnetic force?",
                answers: ["Gluon", "W Boson", "Photon", "Higgs Boson"],
                correct: 2
            },
            {
                question: "What is the name of the effect where time dilates due to gravity?",
                answers: ["Doppler Effect", "Gravitational Time Dilation", "Redshift", "Frame Dragging"],
                correct: 1
            },
            {
                question: "Which organelle is responsible for protein synthesis?",
                answers: ["Golgi Apparatus", "Ribosome", "Lysosome", "Peroxisome"],
                correct: 1
            },
            {
                question: "What is the name of the process by which DNA is copied?",
                answers: ["Transcription", "Translation", "Replication", "Mutation"],
                correct: 2
            }
        ]
    },
    history: {
        easy: [
            {
                question: "Who was the first President of the United States?",
                answers: ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"],
                correct: 1
            },
            {
                question: "In which year did World War II end?",
                answers: ["1944", "1945", "1946", "1947"],
                correct: 1
            },
            {
                question: "Which ancient wonder of the world was located in Egypt?",
                answers: ["Hanging Gardens", "Colossus of Rhodes", "Great Pyramid of Giza", "Lighthouse of Alexandria"],
                correct: 2
            },
            {
                question: "Who painted the Mona Lisa?",
                answers: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
                correct: 1
            },
            {
                question: "Which empire was ruled by Julius Caesar?",
                answers: ["Greek Empire", "Roman Empire", "Byzantine Empire", "Persian Empire"],
                correct: 1
            },
            {
                question: "In which year did the Berlin Wall fall?",
                answers: ["1987", "1988", "1989", "1990"],
                correct: 2
            },
            {
                question: "Who was known as the 'Iron Lady'?",
                answers: ["Margaret Thatcher", "Queen Elizabeth II", "Angela Merkel", "Golda Meir"],
                correct: 0
            }
        ],
        medium: [
            {
                question: "Which battle is considered the turning point of World War II in Europe?",
                answers: ["Battle of Normandy", "Battle of Stalingrad", "Battle of Britain", "Battle of the Bulge"],
                correct: 1
            },
            {
                question: "Who wrote 'The Communist Manifesto'?",
                answers: ["Vladimir Lenin", "Joseph Stalin", "Karl Marx", "Friedrich Engels"],
                correct: 2
            },
            {
                question: "Which civilization built Machu Picchu?",
                answers: ["Aztec", "Maya", "Inca", "Olmec"],
                correct: 2
            },
            {
                question: "In which year did the American Civil War begin?",
                answers: ["1860", "1861", "1862", "1863"],
                correct: 1
            },
            {
                question: "Who was the first woman to win a Nobel Prize?",
                answers: ["Marie Curie", "Rosalind Franklin", "Dorothy Hodgkin", "Lise Meitner"],
                correct: 0
            },
            {
                question: "Which treaty ended World War I?",
                answers: ["Treaty of Versailles", "Treaty of Paris", "Treaty of Vienna", "Treaty of Westphalia"],
                correct: 0
            }
        ],
        hard: [
            {
                question: "Which Byzantine Emperor reconquered much of the former Western Roman Empire?",
                answers: ["Constantine I", "Justinian I", "Heraclius", "Basil II"],
                correct: 1
            },
            {
                question: "What was the name of the secret police in Nazi Germany?",
                answers: ["SS", "SA", "Gestapo", "Wehrmacht"],
                correct: 2
            },
            {
                question: "Which Chinese dynasty was known for its maritime expeditions led by Zheng He?",
                answers: ["Tang", "Song", "Ming", "Qing"],
                correct: 2
            },
            {
                question: "Who was the last Tsar of Russia?",
                answers: ["Alexander III", "Nicholas II", "Alexander II", "Nicholas I"],
                correct: 1
            }
        ]
    },
    sports: {
        easy: [
            {
                question: "How many players are on a basketball team on the court at one time?",
                answers: ["4", "5", "6", "7"],
                correct: 1
            },
            {
                question: "In which sport would you perform a slam dunk?",
                answers: ["Tennis", "Basketball", "Volleyball", "Baseball"],
                correct: 1
            },
            {
                question: "How often are the Summer Olympic Games held?",
                answers: ["Every 2 years", "Every 3 years", "Every 4 years", "Every 5 years"],
                correct: 2
            },
            {
                question: "What is the maximum score possible in ten-pin bowling?",
                answers: ["200", "250", "300", "350"],
                correct: 2
            },
            {
                question: "In soccer, how many players are on the field for each team?",
                answers: ["10", "11", "12", "13"],
                correct: 1
            },
            {
                question: "Which sport is played at Wimbledon?",
                answers: ["Golf", "Tennis", "Cricket", "Squash"],
                correct: 1
            },
            {
                question: "How many points is a touchdown worth in American football?",
                answers: ["3", "6", "7", "8"],
                correct: 1
            }
        ],
        medium: [
            {
                question: "Which country has won the most FIFA World Cups?",
                answers: ["Germany", "Argentina", "Brazil", "Italy"],
                correct: 2
            },
            {
                question: "In tennis, what score comes after deuce?",
                answers: ["Game", "Advantage", "40-Love", "Set"],
                correct: 1
            },
            {
                question: "How many Grand Slam tournaments are there in tennis per year?",
                answers: ["3", "4", "5", "6"],
                correct: 1
            },
            {
                question: "Which athlete holds the record for most Olympic gold medals?",
                answers: ["Usain Bolt", "Michael Phelps", "Mark Spitz", "Carl Lewis"],
                correct: 1
            },
            {
                question: "In basketball, how many points is a free throw worth?",
                answers: ["1", "2", "3", "4"],
                correct: 0
            },
            {
                question: "Which sport features terms like 'eagle', 'birdie', and 'bogey'?",
                answers: ["Tennis", "Golf", "Baseball", "Cricket"],
                correct: 1
            }
        ],
        hard: [
            {
                question: "Who holds the record for most career home runs in MLB?",
                answers: ["Babe Ruth", "Hank Aaron", "Barry Bonds", "Willie Mays"],
                correct: 2
            },
            {
                question: "Which Formula 1 driver has won the most World Championships?",
                answers: ["Ayrton Senna", "Michael Schumacher", "Lewis Hamilton", "Sebastian Vettel"],
                correct: 1
            },
            {
                question: "In which year was the first modern Olympic Games held?",
                answers: ["1892", "1896", "1900", "1904"],
                correct: 1
            },
            {
                question: "Which team has won the most Stanley Cup championships?",
                answers: ["Boston Bruins", "Toronto Maple Leafs", "Montreal Canadiens", "Detroit Red Wings"],
                correct: 2
            }
        ]
    },
    entertainment: {
        easy: [
            {
                question: "Who directed the movie 'Jaws'?",
                answers: ["George Lucas", "Steven Spielberg", "Martin Scorsese", "Francis Ford Coppola"],
                correct: 1
            },
            {
                question: "Which movie features the song 'My Heart Will Go On'?",
                answers: ["The Bodyguard", "Titanic", "Ghost", "Pretty Woman"],
                correct: 1
            },
            {
                question: "Who played the character of Harry Potter?",
                answers: ["Daniel Radcliffe", "Rupert Grint", "Tom Felton", "Matthew Lewis"],
                correct: 0
            },
            {
                question: "Which animated movie features the song 'Let It Go'?",
                answers: ["Moana", "Tangled", "Frozen", "Brave"],
                correct: 2
            },
            {
                question: "Who is known as 'The King of Pop'?",
                answers: ["Elvis Presley", "Michael Jackson", "Prince", "David Bowie"],
                correct: 1
            },
            {
                question: "Which TV show features the characters Ross, Rachel, and Monica?",
                answers: ["Seinfeld", "Friends", "How I Met Your Mother", "The Big Bang Theory"],
                correct: 1
            },
            {
                question: "Who painted 'Starry Night'?",
                answers: ["Pablo Picasso", "Claude Monet", "Vincent van Gogh", "Salvador Dalí"],
                correct: 2
            }
        ],
        medium: [
            {
                question: "Which movie won the first Academy Award for Best Picture?",
                answers: ["Wings", "Sunrise", "The Jazz Singer", "7th Heaven"],
                correct: 0
            },
            {
                question: "Who composed 'The Four Seasons'?",
                answers: ["Johann Sebastian Bach", "Wolfgang Amadeus Mozart", "Antonio Vivaldi", "Ludwig van Beethoven"],
                correct: 2
            },
            {
                question: "Which actor played the Joker in 'The Dark Knight'?",
                answers: ["Jack Nicholson", "Heath Ledger", "Joaquin Phoenix", "Jared Leto"],
                correct: 1
            },
            {
                question: "What is the highest-grossing film of all time (not adjusted for inflation)?",
                answers: ["Titanic", "Avatar", "Avengers: Endgame", "Star Wars: The Force Awakens"],
                correct: 2
            },
            {
                question: "Which Beatles album features the song 'Come Together'?",
                answers: ["Abbey Road", "Sgt. Pepper's", "Revolver", "The White Album"],
                correct: 0
            },
            {
                question: "Who wrote the novel 'To Kill a Mockingbird'?",
                answers: ["Harper Lee", "John Steinbeck", "William Faulkner", "Truman Capote"],
                correct: 0
            }
        ],
        hard: [
            {
                question: "Which film holds the record for most Academy Award nominations?",
                answers: ["Titanic", "All About Eve", "La La Land", "The Lord of the Rings: The Return of the King"],
                correct: 1
            },
            {
                question: "Who was the first person to win an Academy Award, Emmy, Grammy, and Tony?",
                answers: ["Richard Rodgers", "Helen Hayes", "Rita Moreno", "John Gielgud"],
                correct: 0
            },
            {
                question: "Which Shakespeare play features the character Iago?",
                answers: ["Hamlet", "Macbeth", "Othello", "King Lear"],
                correct: 2
            },
            {
                question: "Who directed the 1927 film 'Metropolis'?",
                answers: ["F.W. Murnau", "Fritz Lang", "G.W. Pabst", "Ernst Lubitsch"],
                correct: 1
            }
        ]
    },
    geography: {
        easy: [
            {
                question: "What is the capital of France?",
                answers: ["London", "Berlin", "Paris", "Madrid"],
                correct: 2
            },
            {
                question: "Which is the largest ocean on Earth?",
                answers: ["Atlantic", "Indian", "Arctic", "Pacific"],
                correct: 3
            },
            {
                question: "How many continents are there?",
                answers: ["5", "6", "7", "8"],
                correct: 2
            },
            {
                question: "Which country is known as the Land of the Rising Sun?",
                answers: ["China", "Japan", "Thailand", "South Korea"],
                correct: 1
            },
            {
                question: "What is the longest river in the world?",
                answers: ["Amazon", "Nile", "Mississippi", "Yangtze"],
                correct: 1
            },
            {
                question: "Which is the smallest country in the world?",
                answers: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
                correct: 2
            },
            {
                question: "Mount Everest is located in which mountain range?",
                answers: ["Andes", "Rocky Mountains", "Alps", "Himalayas"],
                correct: 3
            }
        ],
        medium: [
            {
                question: "Which African country was never colonized?",
                answers: ["Ethiopia", "Liberia", "Morocco", "Both A and B"],
                correct: 3
            },
            {
                question: "What is the capital of Australia?",
                answers: ["Sydney", "Melbourne", "Canberra", "Perth"],
                correct: 2
            },
            {
                question: "Which strait separates Europe and Asia?",
                answers: ["Strait of Gibraltar", "Bosphorus", "Strait of Hormuz", "Strait of Malacca"],
                correct: 1
            },
            {
                question: "Which desert is the largest in the world?",
                answers: ["Sahara", "Gobi", "Kalahari", "Antarctica"],
                correct: 3
            },
            {
                question: "What is the deepest point on Earth?",
                answers: ["Puerto Rico Trench", "Java Trench", "Mariana Trench", "Tonga Trench"],
                correct: 2
            },
            {
                question: "Which country has the most time zones?",
                answers: ["Russia", "United States", "China", "France"],
                correct: 3
            }
        ],
        hard: [
            {
                question: "Which country is completely surrounded by South Africa?",
                answers: ["Swaziland", "Lesotho", "Botswana", "Namibia"],
                correct: 1
            },
            {
                question: "What is the name of the imaginary line that runs through Greenwich, England?",
                answers: ["Equator", "Tropic of Cancer", "Prime Meridian", "International Date Line"],
                correct: 2
            },
            {
                question: "Which sea is the saltiest body of water on Earth?",
                answers: ["Dead Sea", "Red Sea", "Caspian Sea", "Aral Sea"],
                correct: 0
            },
            {
                question: "Which African country has three capital cities?",
                answers: ["Nigeria", "Kenya", "South Africa", "Morocco"],
                correct: 2
            }
        ]
    }
};

// Function to get random questions from the database
function getRandomQuestions(category, difficulty, count) {
    let questionPool = [];
    
    if (category === 'any') {
        // Get questions from all categories
        Object.keys(questionDatabase).forEach(cat => {
            if (questionDatabase[cat][difficulty]) {
                questionPool = questionPool.concat(questionDatabase[cat][difficulty].map(q => ({
                    ...q,
                    category: cat
                })));
            }
        });
    } else {
        // Get questions from specific category
        if (questionDatabase[category] && questionDatabase[category][difficulty]) {
            questionPool = questionDatabase[category][difficulty].map(q => ({
                ...q,
                category: category
            }));
        }
    }
    
    // Shuffle the pool and return the requested number of questions
    const shuffled = questionPool.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Function to get all available categories
function getCategories() {
    return Object.keys(questionDatabase);
}

// Function to get available difficulties for a category
function getDifficulties(category) {
    if (category === 'any') {
        return ['easy', 'medium', 'hard'];
    }
    return questionDatabase[category] ? Object.keys(questionDatabase[category]) : [];
}

// Export functions for use in other files
window.TriviaQuestions = {
    getRandomQuestions,
    getCategories,
    getDifficulties,
    database: questionDatabase
};
