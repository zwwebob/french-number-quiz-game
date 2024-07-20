let questions = [
    {
        id: 1,
        question: "What is 82 in French?",
        answer: "C. quatre-vingt-deux",
        options: [
            "A. vingt-huit",
            "B. soixante-huit",
            "C. quatre-vingt-deux",
            "D. quatre-vingt-cinq"
        ]
    },
    {
        id: 2,
        question: "What is 73 in French?",
        answer: "A. Soixante-treize",
        options: [
            "A. Soixante-treize",
            "B. Soixante-dix",
            "C. Septante-trois",
            "D. Septante"
        ]
    },
    {
        "id": 3,
        "question": "What is 100 in French?",
        "answer": "A. Cent",
        "options": [
            "A. Cent",
            "B. Cinquante",
            "C. Dix",
            "D. Mille"
        ]
    },
    {
        id: 4,
        question: "Translate '94' into French.",
        answer: "A. Quatre-vingt-quatorze",
        options: [
            "A. Quatre-vingt-quatorze",
            "B. Quatre-vingt-dix-quatre",
            "C. Quatre-vingt",
            "D. Quatre-vingt-dix"
        ]
    },

    {
        id: 5,
        question: "Translate '77' into French.",
        answer: "A. Soixante-dix-sept",
        options: [
            "A. Soixante-dix-sept",
            "B. Soixante-dix",
            "C. Soixante-dix-neuf",
            "D. Soixante-dix-huit"
        ]
    },

    {
        id: 6,
        question: "What is 42 in French?",
        answer: "D. Quarante-deux",
        options: [
            "A. Vingt-deux",
            "B. Trente-deux",
            "C. Cinquante-deux",
            "D. Quarante-deux"
        ]
    },

    {
        id: 7,
        question: "Translate '88' into French.",
        answer: "A. Quatre-vingt-huit",
        options: [
            "A. Quatre-vingt-huit",
            "B. Quatre-vingt",
            "C. Soixante-huit",
            "D. Quatre-vingt-dix-huit"
        ]
    },

    {
        id: 8,
        question: "What is 57 in French?",
        answer: "B. Cinquante-sept",
        options: [
            "A. Soixante-dix-sept",
            "B. Cinquante-sept",
            "C. Cinquante-neuf",
            "D. Soixante-sept"
        ]
    },

    {
        id: 9,
        question: "Translate '25' into French.",
        answer: "C. Vingt-cinq",
        options: [
            "A. Trente-cinq",
            "B. Quinze",
            "C. Vingt-cinq",
            "D. Cinquante-cinq"
        ]
    },

    {
        id: 10,
        question: "What is 99 in French?",
        answer: "B. Quatre-vingt-dix-neuf",
        options: [
            "A. Quatre-vingt-dix",
            "B. Quatre-vingt-dix-neuf",
            "C. Soixante-dix-neuf",
            "D. Cent-dix-neuf"
        ]
    },
    {
        "id": 11,
        "question": "What is 36 in French?",
        "answer": "C. Trente-six",
        "options": [
            "A. Trente",
            "B. Vingt-six",
            "C. Trente-six",
            "D. Quarante"
        ]
    },
    {
        "id": 12,
        "question": "How do you say 78 in French?",
        "answer": "A. Soixante-dix-huit",
        "options": [
            "A. Soixante-dix-huit",
            "B. Soixante-dix-neuf",
            "C. Quatre-vingt-dix-huit",
            "D. Soixante-dix-sept"
        ]
    },
    {
        "id": 13,
        "question": "Translate 49 to French.",
        "answer": "C. Quarante-neuf",
        "options": [
            "A. Quarante-sept",
            "B. Cinquante",
            "C. Quarante-neuf",
            "D. Cinquante-deux"
        ]
    },
    {
        id: 14,
        question: "What is 45 in French?",
        answer: "B. Quarante-cinq",
        options: [
            "A. Trente-cinq",
            "B. Quarante-cinq",
            "C. Cinquante-cinq",
            "D. Cinquante"
        ]
    },
    {
        id: 15,
        question: "Translate 72 into French.",
        answer: "A. Soixante-douze",
        options: [
            "A. Soixante-douze",
            "B. Soixante-deux",
            "C. Soixante-dix",
            "D. Soixante-quinze"
        ]
    },
    {
        id: 16,
        question: "How do you say 89 in French?",
        answer: "A. Quatre-vingt-neuf",
        options: [
            "A. Quatre-vingt-neuf",
            "B. Quatre-vingt-dix",
            "C. Quatre-vingt-dix-neuf",
            "D. Quatre-vingts"
        ]
    },
    {
        id: 17,
        question: "Translate 26 to French.",
        answer: "C. Vingt-six",
        options: [
            "A. Vingt-dix",
            "B. Trente-six",
            "C. Vingt-six",
            "D. Quarante-six"
        ]
    },
    {
        id: 18,
        question: "What is the French equivalent of 58?",
        answer: "B. Cinquante-huit",
        options: [
            "A. Cinquante-sept",
            "B. Cinquante-huit",
            "C. Cinquante-neuf",
            "D. Soixante-huit"
        ]
    },
    {
        id: 19,
        question: "How is 37 written in French?",
        answer: "D. Trente-sept",
        options: [
            "A. Trente-six",
            "B. Quarante-sept",
            "C. Vingt-sept",
            "D. Trente-sept"
        ]
    },
    {
        id: 20,
        question: "Translate 64 into French.",
        answer: "C. Soixante-quatre",
        options: [
            "A. Cinquante-quatre",
            "B. Soixante-deux",
            "C. Soixante-quatre",
            "D. Quatre-vingt-quatre"
        ]
    },
    {
        "id": 21,
        "question": "What is 28 + 35?",
        "answer": "C. Soixante-trois",
        "options": [
            "A. Cinquante-trois",
            "B. Quatre-vingt-trois",
            "C. Soixante-trois",
            "D. Quarante-trois"
        ]
    },
    {
        "id": 22,
        "question": "Calculate 92 - 18.",
        "answer": "A. Soixante-quatorze",
        "options": [
            "A. Soixante-quatorze",
            "B. Quatre-vingt-quatorze",
            "C. Cinquante-quatorze",
            "D. Quatorze"
        ]
    },
    {
        "id": 23,
        "question": "What is 15 multiplied by 4?",
        "answer": "B. Soixante",
        "options": [
            "A. Cinquante",
            "B. Soixante",
            "C. Quatre-vingt",
            "D. Vingt"
        ]
    },
    {
        "id": 24,
        "question": "What is 14 divided by 2?",
        "answer": "A. Sept",
        "options": [
            "A. Sept",
            "B. Quatre",
            "C. Trois",
            "D. Dix"
        ]
    },
    {
        "id": 25,
        "question": "What is the square root of 81?",
        "answer": "A. Neuf",
        "options": [
            "A. Neuf",
            "B. Trois",
            "C. Six",
            "D. Douze"
        ]
    },
    {
        "id": 26,
        "question": "Calculate 5 squared.",
        "answer": "C. Vingt-cinq",
        "options": [
            "A. Dix",
            "B. Quinze",
            "C. Vingt-cinq",
            "D. Cinquante"
        ]
    },
    {
        "id": 27,
        "question": "What is 4 cubed (4^3)?",
        "answer": "B. Soixante-quatre",
        "options": [
            "A. Vingt-sept",
            "B. Soixante-quatre",
            "C. Cent seize",
            "D. Quatre-vingt-un"
        ]
    },
    {
        "id": 28,
        "question": "Calculate 3 multiplied by the square root of 9.",
        "answer": "A. Neuf",
        "options": [
            "A. Neuf",
            "B. Trois",
            "C. Dix-huit",
            "D. Douze"
        ]
    },
    {
        "id": 29,
        "question": "What is 10 percent of 50?",
        "answer": "B. Cinq",
        "options": [
            "A. Dix",
            "B. Cinq",
            "C. Quinze",
            "D. Vingt"
        ]
    },
    {
        "id": 30,
        "question": "What is the product of 3 multiplied by 4?",
        "answer": "C. Douze",
        "options": [
            "A. Sept",
            "B. Dix",
            "C. Douze",
            "D. Quinze"
        ]
    },
    {
        "id": 31,
        "question": "What is 56 + 18?",
        "answer": "C. Soixante-quatorze",
        "options": [
            "A. Cinquante-quatre",
            "B. Soixante",
            "C. Soixante-quatorze",
            "D. Quatre-vingt"
        ]
    },
    {
        "id": 32,
        "question": "Calculate 40 - 25.",
        "answer": "B. Quinze",
        "options": [
            "A. Dix",
            "B. Quinze",
            "C. Vingt",
            "D. Trente"
        ]
    },
    {
        "id": 33,
        "question": "What is 8 multiplied by 7?",
        "answer": "D. Cinquante-six",
        "options": [
            "A. Quatorze",
            "B. Trente-cinq",
            "C. Quarante-deux",
            "D. Cinquante-six"
        ]
    },
    {
        "id": 34,
        "question": "Calculate 81 divided by 9.",
        "answer": "A. Neuf",
        "options": [
            "A. Neuf",
            "B. Dix",
            "C. Onze",
            "D. Douze"
        ]
    },
    {
        "id": 35,
        "question": "What is the sum of 25 and 35?",
        "answer": "C. Soixante",
        "options": [
            "A. Cinquante",
            "B. Quarante",
            "C. Soixante",
            "D. Quatre-vingts"
        ]
    },
    {
        "id": 36,
        "question": "Calculate 6 times 4.",
        "answer": "B. Vingt-quatre",
        "options": [
            "A. Dix-huit",
            "B. Vingt-quatre",
            "C. Trente",
            "D. Quarante"
        ]
    },
    {
        "id": 37,
        "question": "What is 72 divided by 8?",
        "answer": "A. Neuf",
        "options": [
            "A. Neuf",
            "B. Dix",
            "C. Onze",
            "D. Douze"
        ]
    },
    {
        "id": 38,
        "question": "Calculate 50 - 22.",
        "answer": "C. Vingt-huit",
        "options": [
            "A. Vingt",
            "B. Trente",
            "C. Vingt-huit",
            "D. Quarante"
        ]
    },
    {
        "id": 39,
        "question": "What is 9 multiplied by 6?",
        "answer": "D. Cinquante-quatre",
        "options": [
            "A. Quarante-deux",
            "B. Quarante-huit",
            "C. Cinquante",
            "D. Cinquante-quatre"
        ]
    },
    {
        "id": 40,
        "question": "Calculate 64 divided by 8.",
        "answer": "B. Huit",
        "options": [
            "A. Six",
            "B. Huit",
            "C. Dix",
            "D. Douze"
        ]
    },
    {
        "id": 41,
        "question": "What is 25 + 15?",
        "answer": "C. Quarante",
        "options": [
            "A. Trente",
            "B. Trente-cinq",
            "C. Quarante",
            "D. Quarante-cinq"
        ]
    },
    {
        "id": 42,
        "question": "Calculate 48 - 27.",
        "answer": "A. Vingt-et-un",
        "options": [
            "A. Vingt-et-un",
            "B. Vingt-sept",
            "C. Vingt-deux",
            "D. Dix-huit"
        ]
    },
    {
        "id": 43,
        "question": "What is 9 multiplied by 6?",
        "answer": "D. Cinquante-quatre",
        "options": [
            "A. Quarante-deux",
            "B. Quarante-huit",
            "C. Cinquante",
            "D. Cinquante-quatre"
        ]
    },
    {
        "id": 44,
        "question": "Calculate 36 divided by 4.",
        "answer": "B. Neuf",
        "options": [
            "A. Sept",
            "B. Neuf",
            "C. Douze",
            "D. Quinze"
        ]
    },
    {
        "id": 45,
        "question": "What is the square root of 64?",
        "answer": "C. Huit",
        "options": [
            "A. Quatre",
            "B. Six",
            "C. Huit",
            "D. Dix"
        ]
    },




];


questions.sort(() => Math.random() - 0.5);

// Select the first 10 questions
const selectedQuestions = questions.slice(0, 10);
