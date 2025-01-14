const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const comment = document.getElementById('comment');
const bear = document.getElementById('bear');

const comments = [
    "Why not? I'm adorable! 🥺",
    "Oh, Are you sure? 😘",
    "Really Sure?",
    "Think Again 💔",
    "Last Chance!",
    "Surely Not? 🤔",
    "You Might Regret This?",
    "Give It Another Thought! 🤭",
    "This Could Be A Mistake!"
];

let commentIndex = 0;

noButton.addEventListener('click', () => {
    // Cycle through comments
    commentIndex = (commentIndex + 1) % comments.length;
    comment.textContent = comments[commentIndex];

    // Make the "Yes" button bigger each time "No" is clicked
    const currentSize = parseInt(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = (currentSize + 5) + 'px';
});

yesButton.addEventListener('click', () => {
    // Display success message
    comment.textContent = "Yay! You said yes! ❤️ Screenshot your answer to me 😁🥰";
    yesButton.classList.add("hidden");
    noButton.classList.add("hidden");

    // Add floating hearts
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.textContent = '❤️';
        heart.className = 'hearts';
        heart.style.left = `${Math.random() * 100}%`; // Random horizontal position
        heart.style.animationDelay = `${i * 0.2}s`; // Stagger the animations
        bear.appendChild(heart);

        // Remove the heart after animation
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
});
