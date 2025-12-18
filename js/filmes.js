document.addEventListener("DOMContentLoaded", () => {

const getElements = () => ({
  modal: document.getElementById("modal"),
  modalTitle: document.getElementById("modalTitle"),
  modalContent: document.getElementById("modalContent"),
  spotifyLink: document.getElementById("spotifyLink"),
  closeModal: document.getElementById("closeModal"),
  movieCards: document.querySelectorAll(".movie-card")
});

const { modal, modalTitle, modalContent, spotifyLink, closeModal, movieCards } = getElements();

const movies = {
    "home-alone": {
        title: "Esqueceram de Mim",
        content: 
            `<strong>Sinopse:</strong><br>
            Kevin McCallister, de 8 anos, se tornou o homem da casa da noite para o dia! Acidentalmente deixado para trás quando sua família parte para as férias de Natal, Kevin se ocupa enfeitando a casa para as festas. Mas ele não vai só enfeitar a casa. Dois ladrões atrapalhados tentam invadir a casa, e Kevin monta uma monte de armadilhas para recebê-los.<br>
            <strong>Diretor:</strong> Chris Columbus<br>
            <strong>Ano:</strong> 1990<br>
            <strong>Duração:</strong> 1h 44min<br>
            <strong>Elenco:</strong> Macaulay Culkin, Joe Pesci, Daniel Stern<br>
            <strong>Onde Assistir:</strong> Disney+`
    },
    "the-grinch": {
        title: "O Grinch",
        content: 
            `<strong>Sinopse:</strong><br>
            O ranzinza Grinch planeja arruinar o Natal de seus vizinhos. Mas será que uma garotinha bondosa consegue fazer o vilão mudar de ideia?
            <br><br>
            <strong>Diretor:</strong> Ron Howard<br>
            <strong>Ano:</strong> 2000<br>
            <strong>Duração:</strong> 1h 39min<br>
            <strong>Elenco:</strong> Jim Carrey, Taylor Momsen, Jeffrey Tambor<br>
            <strong>Onde Assistir:</strong> Netflix`
    },
    "klaus": {
        title: "Klaus",
        content:
            `<strong>Sinopse:</strong><br>
            Um carteiro egoísta e um fabricante de brinquedos solitário cultivam uma amizade improvável e levam alegria a uma cidade fria e sombria.
            <br><br>
            <strong>Diretor:</strong> Sergio Pablos<br>
            <strong>Ano:</strong> 2019<br>
            <strong>Duração:</strong> 1h 37min<br>
            <strong>Elenco:</strong> Jason Schwartzman, J.K. Simmons, Rashida Jones<br>
            <strong>Onde Assistir:</strong> Netflix`
    },
    "polar-express": {
        title: "Expresso Polar",
        content:
            `<strong>Sinopse:</strong><br>
            Um menino cheio de dúvidas pega uma extraordinária carona para o Polo Norte, mas acaba embarcando em uma jornada de autodescobrimento que mostra como a maravilha da vida nunca desaparece para aqueles que acreditam.
            <br><br>
            <strong>Diretor:</strong> Robert Zemeckis<br>
            <strong>Ano:</strong> 2004<br>
            <strong>Duração:</strong> 1h 40min<br>
            <strong>Elenco:</strong> Tom Hanks, Josh Hutcherson, Michael Jeter<br>
            <strong>Onde Assistir:</strong> Amazon Prime Video`
    },
    "the-nightmare-before-christmas": {
        title: "O Estranho Mundo de Jack",
        content:
            `<strong>Sinopse:</strong><br>
            Entediado com a velha rotina de gritos e sustos, o Rei do Halloween, Jack Esqueleto, deseja espalhar a alegria do Natal. No entanto, esta alegre missão coloca Papai Noel em perigo e cria um pesadelo para meninos e meninas de todas as partes do mundo.
            <br><br>
            <strong>Diretor:</strong> Tim Burton<br>
            <strong>Ano:</strong> 1993<br>
            <strong>Duração:</strong> 1h 19min<br>
            <strong>Elenco:</strong> Chris Sarandon, Catherine O'Hara, William Hickey<br>
            <strong>Onde Assistir:</strong> Disney+`
    },
}

movieCards.forEach(card => {
    card.addEventListener("click", () => {
      const key = card.dataset.movie;
      const movie = movies[key];

      modalTitle.textContent = movie.title;
      modalContent.innerHTML = movie.content;

      
      spotifyLink.style.display = "none";

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
});
