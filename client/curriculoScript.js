const listaConcluido = document.querySelector(".concluidos");
const listaAndamento = document.querySelector(".em-andamento");

const linkProducao = "http://127.0.0.1:8000";
const linkDeploy = "https://portifolio-jpn3.onrender.com";



    fetch(`${linkProducao}/concluidos`)
      .then((result) => result.json())
      .then((cursos) => {
        
        listaConcluido.textContent = "";
        cursos.forEach((curso) => {
      
          listaConcluido.appendChild(
            criarCard(curso.titulo, curso.link, curso.icone)
          );
        });
      })
      .catch((error) => {
        listaAndamento.innerHTML = `Ocorreu um erro! (<code>${error}</code>)`;
      });


    fetch(`${linkProducao}/em-andamento`)
      .then((result) => result.json())
      .then((cursos) => {
        console.log(cursos)
        listaAndamento.textContent = "";
        cursos.forEach((curso) => {
          listaAndamento.appendChild(
            criarCard(curso.titulo, curso.link, curso.icone)
          );
        });
      })
      .catch((error) => {
        listaAndamento.innerHTML = `Ocorreu um erro! (<code>${error}</code>)`;
      });
      



function criarCard(titulo, certificado_link, icone_caminho) {
  const li = document.createElement("li");
  li.classList.add("lista_curriculo-item", "lista-item");

  const ancora = document.createElement("a");
  ancora.setAttribute("href", certificado_link);
  ancora.setAttribute("target", "_blank");
  ancora.classList.add("card")

  const tituloCard = document.createElement("h4");
  tituloCard.classList.add("card__titulo");
  tituloCard.textContent = titulo;

  const iconeCard = document.createElement("img");
  iconeCard.setAttribute("src", icone_caminho);
  iconeCard.classList.add("card__img");

  ancora.appendChild(tituloCard);
  ancora.appendChild(iconeCard);
  li.appendChild(ancora);

  return li;
}
