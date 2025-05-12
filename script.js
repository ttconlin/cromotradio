document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const playIcon = document.getElementById('playIcon');
    const pauseIcon = document.getElementById('pauseIcon');
    const volumeBtn = document.getElementById('volumeBtn');
    const volumeUpIcon = document.getElementById('volumeUpIcon');
    const volumeMuteIcon = document.getElementById('volumeMuteIcon');
    const volumeSlider = document.getElementById('volumeSlider');

    let isPlaying = false;
    let isMuted = false;

    // Función para actualizar el botón de play/pause
    function updatePlayPauseButton() {
        if (isPlaying) {
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
        } else {
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
        }
    }

    // Función para actualizar el botón de volumen
    function updateVolumeButton() {
        if (isMuted || audioPlayer.volume === 0) {
            volumeUpIcon.style.display = 'none';
            volumeMuteIcon.style.display = 'block';
        } else {
            volumeUpIcon.style.display = 'block';
            volumeMuteIcon.style.display = 'none';
        }
    }

    // Evento para el botón de play/pause
    playPauseBtn.addEventListener('click', () => {
        if (isPlaying) {
            audioPlayer.pause();
        } else {
            audioPlayer.play();
        }
    });

    // Evento para el botón de volumen
    volumeBtn.addEventListener('click', () => {
        isMuted = !isMuted;
        audioPlayer.muted = isMuted;
        updateVolumeButton();
    });

    // Evento para el control deslizante de volumen
    volumeSlider.addEventListener('input', (e) => {
        audioPlayer.volume = e.target.value;
        audioPlayer.muted = false;
        isMuted = false;
        updateVolumeButton();
    });

    // Eventos del reproductor de audio
    audioPlayer.addEventListener('play', () => {
        isPlaying = true;
        updatePlayPauseButton();
    });

    audioPlayer.addEventListener('pause', () => {
        isPlaying = false;
        updatePlayPauseButton();
    });

    // Inicialización
    audioPlayer.volume = volumeSlider.value;
    updatePlayPauseButton();
    updateVolumeButton();
});