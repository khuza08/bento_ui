const image = document.getElementById('image');

// Fungsi untuk mengganti gambar dengan efek fade
function changeImage(newSrc) {
  image.classList.add('fade'); // Menambahkan kelas fade untuk memulai efek fade-out

  setTimeout(() => {
    image.src = newSrc;  // Ganti gambar
    image.classList.remove('fade');  // Hapus kelas fade setelah gambar diganti
  }, 500);  // Durasi fade-out (sesuai dengan durasi transisi di CSS)
}

// Saat hover, gambar akan memudar dan diganti
image.addEventListener('mouseenter', () => {
  changeImage('assets/src/images/location.jpg');  // Ganti dengan gambar kedua saat hover
});

// Saat hover hilang, gambar akan memudar dan diganti kembali
image.addEventListener('mouseleave', () => {
  changeImage('assets/src/images/locb4.png');  // Kembali ke gambar pertama saat hover hilang
});

const gitgraph = GitgraphJS.createGitgraph(document.getElementById("gitGraph"));
        
// Contoh commit history
const master = gitgraph.branch("main");
master.commit("First commit");
master.commit("Added new feature");
master.commit("Fixed bug");
master.commit("Optimized performance");

const dev = gitgraph.branch("dev");
dev.commit("Experimental feature");
dev.commit("Bug fixes");

master.merge(dev);
master.commit("Deployment");
