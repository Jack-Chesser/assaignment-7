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