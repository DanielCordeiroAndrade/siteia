const caixaPrincipal =  document.querySelector(".caixa-principal");
 const caixaPerguntas =  document.querySelector(".caixa-perguntas");
 const caixaAlternativas =  document.querySelector(".caixa-alternativas");
 const caixaResultado =  document.querySelector(".caixa-resultado");
 const textoResultado =  document.querySelector(".texto-resultado");
const perguntas = [

{
    enunciado: "Quais são os tipos de cultura?",
    alternativas: [
       {
        texto: "cultura do centro-oeste, cultura sulista, cultura nordestina, folclore brasileiro e samba",
    afirmacao:"                                   "},
       {
        texto:"video game, bomba dos EUA",
       afirmacao:"                            "}         
    ]
},
{
    enunciado: "Como é a cultura do Brasil?",
    alternativas: [
       {
        texto: "representada pelo conjunto de tradições, manifestações culturais e etc",
    afirmacao:"                                                " },
        {
            texto:"representada por merecimento de batalhas",
        afirmacao:"                          "}
    ]
},
{
    enunciado: "O que se destaca na cultura",
    alternativas: [
        {texto:"as musicas funk",
        afirmacao:"            "},
       {texto: "A música popular,a literartura,a culinária as festas tradicionais locais como o carnaval",
       afirmacao:"                    "}
    ]
},
{
    enunciado: "Qual é o Dia Nacional da Cultura",
    alternativas: [
       {texto: "07/Setembro",
       afirmacao:"                "},
       {texto: "05/Novembro",
       afirmacao:"                  "}
    ]
},

]
let atual = 0 ;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual>= perguntas.length)
{
    mostraResultado();
    return;
}

perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
caixaAlternativas.textContent = "";
mostraAlternativas();
}

function mostraAlternativas() {
for (const alternativa of perguntaAtual.alternativas) {
const botaoAlternativas = document.createElement("button");
botaoAlternativas.textContent = alternativa.texto;
botaoAlternativas.addEventListener("click", function (){
   atual++;
   mostraPergunta();
})
caixaAlternativas.appendChild(botaoAlternativas);
}
}
function respostaSelecionada(){
const afirmacoes = opcaoSelecionada.afirmacao;
historiaFinal += afirmacoes + " ";
atual++;
mostraPergunta();
}
function mostraResultado(){
caixaPerguntas.textContent = "Em 2049...";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
}

mostraPergunta ();
