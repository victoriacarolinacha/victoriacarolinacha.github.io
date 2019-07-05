const divPiada = document.querySelector('.hero__text');
const button = document.querySelector('.hero__button');

const piadas = [
  'Você sabia que ratos não vomitam?                             ',
  'Você sabia que Elvis Presley era coveiro?                     ',
  'Você sabia que na Antártida não existem répteis?              ',
  'Você sabia que a doença mais antiga é a lepra?                ',
  'Você sabia que a guerra mais curta durou trinta e oito minutos?',
  'Você sabia que as girafas não têm cordas vocais?               ',
  'Você sabia que é impossível espirrar de olho aberto?           ',
  'Você sabia que uma barata pode viver nove dias sem a cabeça?   ',
  'Você sabia que a cada seis habitantes, um mora na China?       ',
  'Você sabia que porcos não conseguem olhar para o céu?          ',
  'Você sabia que existem só doze letras no alfabeto havaiano?    ',
  'Você sabia que o isqueiro veio antes que o palito de fósforo?  ',
  'Você sabia que o maior órgão do corpo é a pele?                ',
  'Você sabia que o hino da Espanha não tem letra?                ',
  'Você sabia que o nosso músculo mais forte é a língua?          ',
  'Você sabia que golfinhos dormem com um olho aberto?            ',
  'Você sabia que só mamíferos bocejam?                           ',
  'Você sabia que elefantes não pulam?                            ',
  'Você sabia que passamos vinte anos dormindo?                   ',
  'Você sabia que borboletas sentem gosto com os pés?             ',
  'Você sabia que ursos polares são canhotos?                     ',
  'Você sabia que estrelas do mar não tem cérebros?               ',
  'Você sabia que o livro mais vendido é a Bíblia?                ',
  'Você sabia que um caracol pode dormir por três anos?           ',
  'Você sabia que mulheres piscam mais que homens?',
  'Você sabia que a cadeira elétrica foi criada por um dentista?',
  'Você sabia que a Coca Cola era verde?                          ',
  'Você sabia que o nome mais comum é Mohammed?',
  'Você sabia que é impossível lamber seu cotovelo?',
  'Você sabia que o único alimento que não apodrece é o mel?',
  'Você sabia que pessoas temem mais aranhas que morrer?',
  'Você sabia que batons contêm escamas de peixe?',
  'Você sabia que minhocas podem ter até nove corações?',
  'Você sabia que tartarugas podem respirar pelo rabo?',
  'Você sabia que Da Vinci inventou a tesoura?',
  'Você sabia que porcos não suam?                                ',
  'Você sabia que monges tibetanos dormem em pé?',
  'Você sabia que Barofobia é o medo da gravidade?',
  'Você sabia que porcos podem se bronzear?                       ',
  'Você sabia que Marco Polo trouxe da China o espaguete?',
  'Você sabia que o crânio tem vinte e nove ossos?',
  'Você sabia que moscas vivem só duas semanas?',
  'Você sabia que a filha de Shakespeare era analfabeta?',
  'Você sabia que em Júpiter e Saturno chove diamante?',
  'Você sabia que na Austrália há mais cangurus que pessoas?',
];

const buscarPiada = () =>{
  divPiada.classList.add('opacity-0');
  setTimeout(function(){
    divPiada.innerHTML = piadas[(Math.random() * (piadas.length - 0) + 1).toFixed()];
    divPiada.classList.remove('opacity-0');
  }, 500)
};

button.addEventListener('click', buscarPiada);