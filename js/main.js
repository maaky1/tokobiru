$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 5, // Jumlah item yang akan ditampilkan
    loop: true, // Mengaktifkan efek loop
    margin: 5,
    autoplay: true, // Mengaktifkan autoplay
    autoplayTimeout: 3000, // Durasi dalam milidetik antara transisi
    autoplayHoverPause: true, // Memberhentikan autoplay saat kursor berada di atas carousel
  });

  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
});

// Mengambil elemen preloder dari DOM
var preloder = document.getElementById("preloder");
// Memeriksa apakah elemen preloder ada
if (preloder) {
  // Menggunakan setInterval untuk mengatur efek fadeout perlahan
  var fadeOutEffect = setInterval(function () {
    // Jika opasitas elemen masih di atas 0, kurangi opasitasnya
    if (!preloder.style.opacity) {
      preloder.style.opacity = 1;
    }
    if (preloder.style.opacity > 0) {
      preloder.style.opacity -= 0.1; // Mengurangi opasitas sebesar 0.1 setiap 100ms
    } else {
      // Jika opasitas telah mencapai 0, hapus elemen dari DOM
      clearInterval(fadeOutEffect);
      preloder.parentNode.removeChild(preloder);
    }
  }, 100); // Perubahan setiap 100ms
}
