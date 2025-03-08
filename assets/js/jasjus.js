const image = document.getElementById("image");

// fade fx
function changeImage(newSrc) {
  image.classList.add("fade");

  setTimeout(() => {
    image.src = newSrc; // ganti gambar
    image.classList.remove("fade");
  }, 500); // fadeout dur
}

// fade fx
image.addEventListener("mouseenter", () => {
  changeImage("assets/src/images/location.jpg"); // gambar 2
});

// fade fx
image.addEventListener("mouseleave", () => {
  changeImage("assets/src/images/locb4.png"); // gambar 1
});
