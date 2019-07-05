const divPiada = document.querySelector('#piada');
const button = document.querySelector('button');

const piadas = [
  'MATEUS É GAY',
  'MATEUS É CORNO',
  'MATEUS PEGA TRABUCO',
  'MATEUS É BAIXINHO',
  'MATEUS É ZUADO',
  'MATEUS É MITO',
  'MATEUS É ADSHIUDHAIUDHAISD'
];

const buscarPiada = () =>{
  divPiada.innerHTML = piadas[(Math.random() * (piadas.length - 0) + 0).toFixed()];
}