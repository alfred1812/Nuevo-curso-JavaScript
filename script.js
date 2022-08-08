const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = 'Patito <br> Feo';
h1.innerText = 'Patito <br> Feo';
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class','rojo');

h1.classList.add('rojo');
h1.classList.remove('verde');

input.value ="9983";

const iumg = document.createElement('img');
iumg.setAttribute('src','https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/kraken_generic_max_width_960/public/Que_debes_saber_antes_de_adoptar_un_gatito.jpg?itok=FAGJdK4f');
console.log(iumg);

pid.innerHTML="";
pid.append(iumg);

//h1.innerHTML='MONITO';