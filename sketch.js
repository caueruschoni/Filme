let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("black");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(1000, 1000, 1000));
  textAlign(CENTER, CENTER);
  textSize(40);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "E.T Oextraterrestre";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Jumanji";          
        } else{
         return "Patrulha canina: o poderoso filme";
        }
      } else {
        if (gostaDeFantasia) {
          return "Viva a vida é uma festa";
        } else {
          return "Toy story 3";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Your name";
    } else {
      return "sherek";
    }
  }
}
