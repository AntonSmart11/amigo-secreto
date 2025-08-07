// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const input = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const amigoSorteado = document.getElementById("resultado");

let amigos = [];

const crearLi = (text) => {
  let li = document.createElement("li");
  li.textContent = text;

  return li;
};

const actualizarAmigo = () => {
  listaAmigos.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let li = crearLi(amigos[i]);

    listaAmigos.appendChild(li);
  }
};

const agregarAmigo = () => {
  if (input.value.trim() != "") {
    let inputValue = input.value.trim();

    amigos.push(inputValue);

    actualizarAmigo();

    input.value = "";
  } else {
    alert("Introduce un nombre válido");
  }
};

const sortearAmigo = () => {
  if (amigos.length > 1) {
    amigoSorteado.innerHTML = "";

    const num = Math.floor(Math.random() * amigos.length);

    let li = crearLi(`El amigo secreto es: ${amigos[num]}`);

    amigoSorteado.appendChild(li);

    amigos.splice(0, amigos.length);

    actualizarAmigo();
  } else {
    alert("Introduce 2 o más amigos");
  }
};
