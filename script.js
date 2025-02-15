document.addEventListener("DOMContentLoaded", function () {
    let video = document.getElementById("video");

    // Remove the muted attribute
    video.muted = false;

    // Try playing the video with audio
    let playPromise = video.play();

    if (playPromise !== undefined) {
        playPromise.catch(() => {
            console.log("Autoplay with sound blocked. Click anywhere to enable audio.");
        });
    }

    // Unmute and play when the user clicks the page
    document.addEventListener("click", () => {
        video.muted = false;
        video.play();
    });
});
