import geraSenha from "./geradores";

const senhagerada = document.querySelector(".senha-gerada");
const qtdchar = document.querySelector(".qtd-char");
const chkMaiusculas = document.querySelector(".chk-maiusculas");
const chkMinusculas = document.querySelector(".chk-minusculas");
const chkNumeros = document.querySelector(".chk-numeros");
const chkSimbolos = document.querySelector(".chk-simbolos");
const gerarSenha = document.querySelector(".gerar-senha");
const force = document.querySelector(".force-container");

export default () => {
  gerarSenha.addEventListener("click", () => {
    senhagerada.innerHTML = gera();

    let checkboxes = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    if (checkboxes.length === 4) {
      force.innerHTML = "very stong";
      force.classList.remove("red");
      force.classList.remove("normal");
      force.classList.add("green");
    }
    if (checkboxes.length === 3) {
      force.innerHTML = "strong";
      force.classList.remove("red");
      force.classList.remove("normal");
      force.classList.add("green");
    }
    if (checkboxes.length === 2) {
      force.innerHTML = "normal";
      force.classList.remove("red");
      force.classList.remove("green");
      force.classList.add("normal");
    }
    if (checkboxes.length === 1) {
      force.innerHTML = "weak";
      force.classList.remove("green");
      force.classList.remove("normal");
      force.classList.add("red");
    }
  });
};

function gera() {
  const senha = geraSenha(
    qtdchar.value,
    chkMaiusculas.checked,
    chkMinusculas.checked,
    chkNumeros.checked,
    chkSimbolos.checked
  );
  return senha || "Nothing selected";
}
