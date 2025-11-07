const video = document.getElementById('video');
const playPauseBtn = document.getElementById('play-pause');
const seekBar = document.getElementById('seek-bar');
const muteUnmuteBtn = document.getElementById('mute-unmute');
const volumeBar = document.getElementById('volume-bar');
const fullscreenBtn = document.getElementById('fullscreen-btn');

// Oynat / Duraklat
playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        video.pause();
        playPauseBtn.textContent = 'Play';
    }
});

// Video zamanını güncelle
video.addEventListener('timeupdate', () => {
    seekBar.value = video.currentTime;
});

// Seek bar maksimum süresi video süresi ile eşitle
video.addEventListener('loadedmetadata', () => {
    seekBar.max = video.duration;
});

// Seek bar ile video zamanı değiştir
seekBar.addEventListener('input', () => {
    video.currentTime = seekBar.value;
});

// Sessiz / Ses Aç
muteUnmuteBtn.addEventListener('click', () => {
    video.muted = !video.muted;
    muteUnmuteBtn.textContent = video.muted ? 'Unmute' : 'Mute';
    volumeBar.value = video.muted ? 0 : video.volume;
});

// Ses kontrolü
volumeBar.addEventListener('input', () => {
    video.volume = volumeBar.value;
    video.muted = volumeBar.value == 0;
    muteUnmuteBtn.textContent = video.muted ? 'Unmute' : 'Mute';
});

// Tam ekran
fullscreenBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        video.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
});