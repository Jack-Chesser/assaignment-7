console.log("script.js connected!");

// Object to store user answers
const userAnswers = {
    universe: null,
    weapon: null,
    heroType: null
};

// Select all answer buttons
const answerButtons = document.querySelectorAll(".answer-btn");

// Add click event to each button
answerButtons.forEach(button => {
    button.addEventListener("click", () => {

        // Find the parent question block
        const questionBlock = button.closest(".question-block");

        // Remove 'selected' class from all buttons in this block
        const buttonsInBlock = questionBlock.querySelectorAll(".answer-btn");
        buttonsInBlock.forEach(btn => btn.classList.remove("selected"));

        // Add 'selected' class to the clicked button
        button.classList.add("selected");

        // Store the answer based on which question it belongs to
        const answerValue = button.dataset.answer;

        if (answerValue === "marvel" || answerValue === "dc") {
            userAnswers.universe = answerValue;
        } 
        else if (
            answerValue === "money-tech" ||
            answerValue === "strength-speed" ||
            answerValue === "projectiles" ||
            answerValue === "close-combat"
        ) {
            userAnswers.weapon = answerValue;
        }
        else {
            // This must be question 3
            userAnswers.heroType = answerValue;
        }

        console.log("Current Answers:", userAnswers);
    });
});

// Submit button
const submitBtn = document.getElementById("submit-btn");
const resultDiv = document.getElementById("result");

submitBtn.addEventListener("click", () => {

    // Make sure all questions are answered
    if (!userAnswers.universe || !userAnswers.weapon || !userAnswers.heroType) {
        resultDiv.innerHTML = "<p class='text-danger'>Please answer all questions!</p>";
        return;
    }

    let finalHero = "";

    // MARVEL PATH
    if (userAnswers.universe === "marvel") {

        if (userAnswers.weapon === "money-tech") {
            finalHero = "Iron Man";
        }
        else if (userAnswers.weapon === "strength-speed") {
            finalHero = "Hulk";
        }
        else if (userAnswers.weapon === "projectiles") {
            finalHero = "Spider-Man";
        }
        else if (userAnswers.weapon === "close-combat") {
            finalHero = "Black Panther";
        }

        // Personality overrides
        if (userAnswers.heroType === "leader") finalHero = "Captain America";
        if (userAnswers.heroType === "team-player") finalHero = "War Machine";
        if (userAnswers.heroType === "good-heart") finalHero = "Spider-Man";
        if (userAnswers.heroType === "anti-hero") finalHero = "Hulk";
    }

    // DC PATH
    else if (userAnswers.universe === "dc") {

        if (userAnswers.weapon === "money-tech") {
            finalHero = "Batman";
        }
        else if (userAnswers.weapon === "strength-speed") {
            finalHero = "Superman";
        }
        else if (userAnswers.weapon === "projectiles") {
            finalHero = "Green Arrow";
        }
        else if (userAnswers.weapon === "close-combat") {
            finalHero = "Wonder Woman";
        }

        // Personality overrides
        if (userAnswers.heroType === "leader") finalHero = "Wonder Woman";
        if (userAnswers.heroType === "team-player") finalHero = "Cyborg";
        if (userAnswers.heroType === "good-heart") finalHero = "Superman";
        if (userAnswers.heroType === "anti-hero") finalHero = "Batman";
    }

    // Display result
    resultDiv.innerHTML = `
        <h2>Your Superhero Is:</h2>
        <h1>${finalHero}!</h1>
    `;
});