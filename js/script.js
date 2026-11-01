
// Menampilkan tahun secara otomatis di footer

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// Memeriksa apakah foto berhasil dimuat

const photos = document.querySelectorAll(".photo-card img");

photos.forEach(function (photo) {
    photo.addEventListener("error", function () {
        console.error("Foto tidak ditemukan:", photo.src);
    });
});


// Memeriksa apakah video berhasil dimuat

const video = document.querySelector(".video-card video");

if (video) {
    video.addEventListener("error", function () {
        console.error("Video tidak dapat dimuat.");
    });
}
