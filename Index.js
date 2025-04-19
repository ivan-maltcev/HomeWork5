function guessNumberGame() {
    const numberToGuess = Math.floor(Math.random() * 100) + 1;
    let userGuess;
    let attempts = 0;

    while (true) {
        userGuess = prompt("Угадай число от 1 до 100:");
        
        if (userGuess === null) {
            alert("Игра прервана.");
            break;
        }

        userGuess = Number(userGuess);

        if (isNaN(userGuess)) {
            alert("Пожалуйста, введи число.");
            continue;
        }

        attempts++;

        if (userGuess < numberToGuess) {
            alert("Загаданное число больше.");
        } else if (userGuess > numberToGuess) {
            alert("Загаданное число меньше.");
        } else {
            alert(`Поздравляю! Ты угадал число ${numberToGuess} за ${attempts} попыток.`);
            break;
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const allButtons = document.querySelectorAll(".game-card__button");
    const guessGameButton = allButtons[0];
    
    if (guessGameButton) {
        guessGameButton.addEventListener("click", guessNumberGame);
    }
});