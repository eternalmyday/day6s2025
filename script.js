const buttons = [...document.querySelectorAll(".photo-button")];
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const closeBtn = document.querySelector(".lightbox-close");
const prevBtn = document.querySelector(".lightbox-prev");
const nextBtn = document.querySelector(".lightbox-next");
const count = document.querySelector(".lightbox-count");

const images = buttons.map(btn => {
  const img = btn.querySelector("img");
  return {
    src: img.src,
    alt: img.alt || ""
  };
});

let currentIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

function renderImage() {
  const item = images[currentIndex];
  lightboxImage.src = item.src;
  lightboxImage.alt = item.alt;
  count.textContent = `${currentIndex + 1} / ${images.length}`;
}

function openLightbox(index) {
  currentIndex = index;
  renderImage();
  lightbox.classList.add("show");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
}

function closeLightbox() {
  lightbox.classList.remove("show");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  renderImage();
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  renderImage();
}

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => openLightbox(index));
});

closeBtn.addEventListener("click", closeLightbox);
prevBtn.addEventListener("click", showPrev);
nextBtn.addEventListener("click", showNext);

lightbox.addEventListener("click", e => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", e => {
  if (!lightbox.classList.contains("show")) return;

  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") showPrev();
  if (e.key === "ArrowRight") showNext();
});

lightbox.addEventListener("touchstart", e => {
  touchStartX = e.changedTouches[0].screenX;
}, {passive:true});

lightbox.addEventListener("touchend", e => {
  touchEndX = e.changedTouches[0].screenX;
  const diff = touchEndX - touchStartX;

  if (Math.abs(diff) < 50) return;

  if (diff > 0) {
    showPrev();
  } else {
    showNext();
  }
}, {passive:true});
