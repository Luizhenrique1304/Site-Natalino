document.addEventListener("DOMContentLoaded", () => {

function updateCountdown() {
    const now = new Date();

    const christmas = new Date(now.getFullYear(), 11, 25);

    if (now > christmas) {
        christmas.setFullYear(christmas.getFullYear() + 1);
    }

    const diff = christmas - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);

const recipes = {
    rabanada: {
        title: "Rabanada",
        content: 
            `<strong>Ingredientes:</strong><br>
            - 2 pães franceses amanhecidos<br>
            - 1 caixa de leite condensado<br>
            - 1 e 1/4 xícara de chá de leite<br>
            - 3 ovos<br>
            - 1 colher de sopa de essência de baunilha<br>
            - 2 colheres de sopa de manteiga para fritar<br>
            - 1 xicára de chá de leite em pó<br>

            <strong>Modo de Preparo:</strong><br>
            1. Quebre os ovos em um recipiente e bata até ficarem bem misturados.<br>
            2. Adicione o leite condensado e a essência de baunilha, mexendo até obter uma mistura cremosa e homogênea.<br>
            3. Adicione o leite e misture mais uma vez até incorporar bem todos os ingredientes e reserve.<br>
            4. Corte os pães em fatias de aproximadamente 1 dedo de espessura.<br>
            5. Mergulhe cada fatia de pão na mistura reservada, certificando-se de que ambos os lados estejam bem embebidos.<br>
            6. Escorra o excesso de líquido das fatias antes de fritá-las.<br>
            7. Aqueça a manteiga em uma frigideira grande em fogo médio.<br>
            8. Frite as fatias de pão até que estejam douradas e crocantes dos dois lados.<br>
            9. Retire as rabanadas da frigideira e coloque-as sobre papel toalha para absorver o excesso de óleo.<br>
            10. Passe as fatias no leite em pó, cobrindo-as completamente.<br>
            11. Sirva as rabanadas quentes ou em temperatura ambiente e aproveite!`
    },
    chocotoneBites: {
        title: "Chocotone Bites",
        content: 
            `<strong>Ingredientes:</strong><br>
            - 1 chocotone<br>
            - 200g de chocolate meio amargo ou ao leite<br>
            - Granulado, confeitos ou cacau em pó para decorar<br>

            <strong>Modo de Preparo:</strong><br>
            1. Corte o chocotone em cubos pequenos, do tamanho de uma mordida.<br>
            2. Derreta o chocolate em banho-maria ou no micro-ondas, mexendo a cada 30 segundos até ficar liso.<br>
            3. Mergulhe cada cubo de chocotone no chocolate derretido, certificando-se de que esteja completamente coberto.<br>
            4. Coloque os cubos cobertos em uma assadeira forrada com papel manteiga.<br>
            5. Decore com granulado, confeitos ou cacau em pó antes que o chocolate endureça.<br>
            6. Leve à geladeira por cerca de 30 minutos ou até que o chocolate esteja firme.<br>
            7. Sirva os Chocotone Bites gelados e aproveite!`
    },
    salpicao: {
      title: "Salpicão com Maionese de Alho",
      content:
          `<strong>Ingredientes:</strong><br>
          <strong>Para a Maionese:</strong><br>
          - Um fio de azeite na frigideira<br>
          - 1 colher de sopa de manteiga<br>
          - 3 dentes de alho<br>
          - 1/2 pote de maionese<br>
          - 3 colheres de sopa de requijão<br>
          - Um pouco da gordura que usou para fritar<br><br>
          <strong>Para o Salpicão:</strong><br>
          - 500g de frango cozido desfiado e temperado<br>
          - 1 cenoura ralada<br>
          - 200g de presunto em cubos<br>
          - 1 seleta de milho e ervilha<br>
          - Azeitona a gosto<br>
          - Cebolinha a gosto<br>
          - Batata palha para decorar<br>

          <strong>Modo de Preparo:</strong><br>
          1. Em uma frigideira, aqueça o azeite e a manteiga, adicione os dentes de alho picados e frite até dourar. Reserve.<br>
          2. Em um recipiente, misture a maionese, o requeijão e o alho frito com a gordura. Reserve.<br>
          3. Em uma tigela grande, combine o frango desfiado, a cenoura ralada, o presunto em cubos, a seleta de milho e ervilha, as azeitonas e a cebolinha.<br>
          4. Adicione a maionese de alho à mistura de frango e legumes, mexendo bem para incorporar todos os ingredientes.<br>
          5. Transfira o salpicão para uma travessa, decore com batata palha por cima e sirva gelado. Aproveite!`
    },
    chester: {
        title: "Chester de Natal",
        content: 
            `<strong>Ingredientes:</strong><br>
            - 1 chester (aproximadamente 3kg)<br>
            - 2 cebolas médias cortadas em pedaços grandes<br>
            - 6 dentes de alho<br>
            - 1 maço de coentro<br>
            - 1 colher de chá de açafrão<br>
            - 2 colheres de chá de páprica defumada<br>
            - 2 colheres de chá de colorau<br>
            - 1/2 colher de chá de pimenta-do-reino<br>
            - 1/3 colher de chá de noz-moscada(opcional)<br>
            - 1 colher de sopa de sal<br>
            - 480ml de suco de laranja<br>
            - 80ml de óleo<br>
            - Folhas de louro a gosto<br>
            - Farofa de sua preferência(para rechear)<br>
            - 12 rodelas de cebola<br>
            - Manteiga para pincelar<br>

            <strong>Modo de Preparo:</strong><br>
            1. No liquidificador, bata as cebolas, os dentes de alho, o coentro, o açafrão, a páprica defumada, o colorau, a pimenta-do-reino, a noz-moscada, o sal, o suco de laranja e o óleo até obter uma mistura homogênea.<br>
            2. Coloque o chester em uma assadeira grande e faça furos na pele com um garfo para que o tempero penetre melhor.<br>
            3. Despeje a mistura temperada sobre o chester com peito virado para baixo e regue por completo com o tempero batido no liquidificador, tanto por dentro quanto por fora e espalhe.<br>
            4. Em seguida, acrescente folhas de louro a gosto na marinada.<br>
            5. Cubra o recipiente com papel alumínio e leve à geladeira para marinar por, no minimo, 6 horas.<br>
            6. Depois do tempo marinando, em uma assadeira forrada com papel-alumínio, faça uma cama com as rodelas de cebola e coloque o chester em cima.<br>
            7. Recheie o chester com a farofa de sua preferência e por fim, feche com palitos de dente.<br>
            8. Com um barbante, amarre as coxas do chester.<br>
            9. Cubra a ponta das asas do chester com papel-alumínio para evitar que queimem durante o cozimento.<br>
            10. Cubra a assadeira com papel-alumínio e leve ao forno preaquecido a 200°C por aproximadamente 30 minutos.<br>
            11. Depois, retire o papel-alumínio e pincele manteiga por toda a superfície do chester e leve ao forno novamente por cerca de 30 a 40 minutos, com 15 minutos de forno, pincele manteiga novamente e retire o papel-alumínio das asas.<br>
            12. Assim que estiver dourado, retire do forno, remova os palitos e o barbante e está pronto.<br>
            13. Deixe descansar por 10 minutos antes de fatiar e servir. Aproveite!`
    },
};

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");

function openModal(title, content) {
  modalTitle.textContent = title;
  modalContent.innerHTML = content;
  modal.classList.add("active");
}

document.querySelectorAll(".recipe-card").forEach(card => {
  card.addEventListener("click", () => {
    const recipeKey = card.dataset.recipe;
    openModal(recipes[recipeKey].title, recipes[recipeKey].content);
    spotifyLink.style.display = "none";
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