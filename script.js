// ==========================================
// 1. BAGIAN IMAGE VIEWER (JANGAN DIUBAH)
// ==========================================
const viewer = document.getElementById("image-viewer");
const fullImage = document.getElementById("full-image");
const closeBtn = document.getElementsByClassName("close-viewer")[0];
const images = document.querySelectorAll(".proof-image, .project-img");

// Menambahkan fungsi klik ke SETIAP gambar
images.forEach((img) => {
    img.addEventListener("click", function() {
        viewer.style.display = "flex";
        viewer.style.alignItems = "center";
        viewer.style.justifyContent = "center";
        fullImage.src = this.src;
    });
});

// Fungsi untuk menutup saat tombol X diklik
closeBtn.onclick = function() {
    viewer.style.display = "none";
}

// Fungsi tambahan: Tutup jika user klik di area hitam
viewer.onclick = function(event) {
    if (event.target === viewer) {
        viewer.style.display = "none";
    }
}

// ==========================================
// 2. BAGIAN NAVBAR SCROLL (INI YANG BARU)
// ==========================================

// Ambil elemen navbar
const navbar = document.querySelector('.navbar');

// Ambil elemen section tujuan (Why Accenture)
// Pastikan di HTML kamu ada: <section id="why-accenture">
const targetSection = document.querySelector('#why-accenture'); 

window.addEventListener('scroll', function() {
    // Pengecekan keamanan: Pastikan section-nya ada biar gak error
    if (targetSection) {
        
        // Ambil jarak posisi section 'Why Accenture' dari atas
        const sectionPosition = targetSection.offsetTop;
        
        // Ambil tinggi navbar (sekitar 70-90px)
        const navHeight = navbar.offsetHeight;

        // LOGIKA: Jika scroll melewati (Posisi Section - Tinggi Navbar)
        // Maka navbar berubah warna
        if (window.scrollY >= (sectionPosition - navHeight)) {
            navbar.classList.add('scrolled'); 
        } else {
            navbar.classList.remove('scrolled'); 
        }
    } else {
        // Fallback: Kalau id="why-accenture" gak ketemu, pakai logika lama (> 50px)
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});