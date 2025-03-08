document.getElementById("songTitle").setAttribute("title", document.getElementById("songTitle").innerText);

const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('playPause');
const progress = document.getElementById('progress');
const currentTimeElement = document.getElementById('currentTime');
const durationElement = document.getElementById('duration');
const songTitle = document.getElementById('songTitle');
const artistName = document.getElementById('artistName');

const songs = [
    {
        src: 'assets/src/music/1.mp3',
        title: 'HOW DO YOU DO',
        artist: 'KHZX'
    },
    {
        src: 'assets/src/music/5.mp3',
        title: 'LAGUKU DUBSTEP',
        artist: 'IMAM SIDIK'
    },
    {
        src: 'assets/src/music/2.mp3',
        title: 'JANGAN SALAH PASANGAN',
        artist: 'KHZX'
    },
    {
        src: 'assets/src/music/3.mp3',
        title: 'SAVIOR',
        artist: 'Novulent'
    },
    {
        src: 'assets/src/music/4.mp3',
        title: 'YOUR FACE',
        artist: 'Wisp'
    }
];

let currentSongIndex = 0;

function loadSong(song) {
    audio.src = song.src;
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;

    // Set volume here (misalnya ke 50%)
    audio.volume = 0.3;  // Volume diatur ke 50%
}

playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        audio.pause();
        playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
    }
});

audio.addEventListener('timeupdate', () => {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const currentMinutes = Math.floor(audio.currentTime / 60);
    const currentSeconds = Math.floor(audio.currentTime % 60);
    currentTimeElement.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;

    const durationMinutes = Math.floor(audio.duration / 60);
    const durationSeconds = Math.floor(audio.duration % 60);
    durationElement.textContent = `${durationMinutes}:${durationSeconds < 10 ? '0' : ''}${durationSeconds}`;
});

audio.addEventListener('loadedmetadata', () => {
    const durationMinutes = Math.floor(audio.duration / 60);
    const durationSeconds = Math.floor(audio.duration % 60);
    durationElement.textContent = `${durationMinutes}:${durationSeconds < 10 ? '0' : ''}${durationSeconds}`;
});

document.getElementById('backward').addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    audio.play();
    playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
});

document.getElementById('forward').addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    audio.play();
    playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
});

// Load the first song initially
loadSong(songs[currentSongIndex]);
