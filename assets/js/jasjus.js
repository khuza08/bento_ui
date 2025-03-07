document.addEventListener("DOMContentLoaded", () => {
    const audio = new Audio("assets/src/music/1.mp3");
    let hasPlayed = false;

    document.querySelectorAll(".bento").forEach((bento) => {
        bento.addEventListener("mouseenter", () => {
            if (!hasPlayed) {
                audio.play();
                hasPlayed = true;
            }
        });
    });

    audio.addEventListener("ended", () => {
        hasPlayed = false;
    });
});
