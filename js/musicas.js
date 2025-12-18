const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalContent = document.getElementById("modalContent");
const spotifyLink = document.getElementById("spotifyLink");
const closeModal = document.getElementById("closeModal");


const musicCards = document.querySelectorAll(".music-card");


musicCards.forEach(card => {
  card.addEventListener("click", () => {
    const title = card.dataset.title;
    const artist = card.dataset.artist;
    const link = card.dataset.link;

    modalTitle.textContent = title;
    modalContent.textContent = `Artista: ${artist}`;

    spotifyLink.href = link;
    spotifyLink.style.display = "inline-block";

    modal.classList.add("active");
  });
});


closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});


modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});
