document.addEventListener('DOMContentLoaded', () => {
    const messages = [
        "beep boop your a goober :3",
        "Stars are cute, just like you! :D",
        "I’m just a little star, but I’m here to say hi! ^_^",
        "You’re about to make some interstellar memories,:3",
        "Welcome to Zkit, where the stars smile back! :3",
        "Adventure awaits! Let’s zoom to the stars~ ☆*:.｡.o(≧▽≦)o.｡.:*☆",
        "Ready for a journey that’s out of this world? >w<",
        "boo!! did i scare u :P",
        "You’ve got the power to explore the stars! (>ω<)",
        "Space is vast, but your awesomeness is bigger! (＾▽＾)"
    ];

    // Randomly select a message
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    // Display the random message in the paragraph with id 'randomMessage'
  const randomMessageElement = document.getElementById('randomMessage');
if (randomMessageElement) {
    randomMessageElement.textContent = randomMessage;
}


    const starsContainer = document.querySelector('.stars');
    const totalStars = 400;

    for (let i = 0; i < totalStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        star.style.animationDuration = `${2 + Math.random() * 3}s`;
        starsContainer.appendChild(star);
    }
});
