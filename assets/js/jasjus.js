document.addEventListener("DOMContentLoaded", () => {
    const audio = new Audio("assets/src/music/1.mp3");
    audio.volume = 0.5; 
    
    let hasPlayed = false;

    document.querySelector(".nama").addEventListener("mouseenter", () => {
        if (!hasPlayed) {
            audio.play().catch(() => {
                console.log();
            });
            hasPlayed = true;
        }
    });

    audio.addEventListener("ended", () => {
        hasPlayed = false; 
    });
});
