function playSound(audioSrc) {
    var audio = document.getElementById("meuAudio");
    audio.src = audioSrc;
    audio.play();
}