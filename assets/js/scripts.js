const divPiada = document.querySelector('#heroText');
const divCuriosidade = document.querySelector('#curiosidade');
const button = document.querySelector('#heroBtn');
const buttonCuriosidade = document.querySelector('#curiosidadeBtn');

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
const curiosidades = [
  'Meu animal preferido é o cachorro.',
 'Minha Winx favorita era a Tecna.',
  'Minha cor preferida é o rosa. ',
  'Sou uma pessoa bem humorada.' ,
  'Minha comida preferida é o hambúrguer. ',
  'No meu açaí, gosto de banana e nutella.',
  'Não tenho um gênero musical preferido.',
 ' Moro com a minha mãe, meu irmão e meu cachorro.',
  'O nome do meu cachorro é San.',
  'Meu filme preferido é Ratatouille.' ,
  'Meu herói preferido da Marvel é o Hulk.',
  'Minha heroína preferida é a Capitã Marvel.' ,
  'Meu jogo favorito é Fire Emblem Awakening. ',
  'Nunca saí do Paraná. ',
  'Comecei a usar o Photoshop com nove anos.',
  'Já quis cursar psicologia, física e história. ',
  'Minha matéria preferida na escola era história.',
  'Prefiro salgados a doces.',
  'Meu filme favorito da Barbie é a Princesa da Ilha.',
  'Minha carteira é no formato de um Husky.',
  'Minha artista mais ouvida no Spotify é a Sunmi.',
  'Sou descendente de coreanos do sul.',
  'O primeiro jogo que joguei foi Adventure Quest.',
  'No meu quintal moram quatro cachorros.',
  'Dou nome para todos os cachorros que vejo na rua.',
  'Se eu pudesse falar qualquer língua, seria o japonês.',
  'Meu anime preferido é Death Note.',
  'Raramente me assusto com filmes de terror.',
  'Fui um ano adiantada na escola.',
 ' Minha fruta favorita é o morango.',
  'Já dormi por quatorze horas seguidas.',
 ' Já tive pedra nos rins. ',
  'Já fiz uma audição para uma empresa de kpop.',
  'Se eu pudesse ter qualquer sotaque, seria o russo.',
  'Nunca fui para a praia.',
  'Já fui quase atropelada por um biarticulado.',
  'Aprendi a ler com quatro anos.',
  'Prefiro botas a tênis.',
 'Minha diva da infância era a Britney Spears.',
  'Minha maquiagem favorita é o batom.',
  'O melhor presente que já ganhei foi um churrasco.'

];
const buscarPiada = () =>{
  divPiada.classList.add('opacity-0');
  setTimeout(function(){
    divPiada.innerHTML = piadas[(Math.random() * (44 - 1) + 1).toFixed()];
    divPiada.classList.remove('opacity-0');
  }, 500);
};
const buscarCuriosidade = () =>{
  divCuriosidade.classList.add('opacity-0');
  setTimeout(function(){
    divCuriosidade.innerText = curiosidades[(Math.random() * (40 - 1) + 1).toFixed()];
    divCuriosidade.classList.remove('opacity-0');
  }, 500);
}
if(button)
button.addEventListener('click', buscarPiada);

if(buttonCuriosidade)
buttonCuriosidade.addEventListener('click', buscarCuriosidade);