document.addEventListener("DOMContentLoaded", () => {
    const audio = new Audio("assets/src/music/1.mp3"); // Ganti dengan path file audio-mu

    document.querySelectorAll(".bento").forEach((bento) => {
        bento.addEventListener("mouseenter", () => {
            audio.currentTime = 0; // Reset ke awal tiap hover
            audio.play();
        });

        bento.addEventListener("mouseleave", () => {
            audio.pause(); // Pause pas hover keluar
        });
    });
});
