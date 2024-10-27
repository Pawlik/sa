// Wybierz przycisk i ukrytą wiadomość
const revealButton = document.getElementById("revealButton");
const hiddenMessage = document.getElementById("hiddenMessage");

// Funkcja pokazująca ukrytą wiadomość
function revealMessage() {
    hiddenMessage.classList.toggle("hidden");  // Usuwa klasę 'hidden' by pokazać wiadomość
    hiddenMessage.style.opacity = "1";  // Ustawia opacity na 1, by pojawiła się animacja
}

// Dodanie funkcji do przycisku
revealButton.addEventListener("click", revealMessage);
