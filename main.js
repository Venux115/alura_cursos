const listaConcluido = document.querySelector(".concluidos")
const listaAndamento = document.querySelector(".em-andamento")

cursosConcluidos = fetch("https://portifolio-jpn3.onrender.com/concluidos")
    .then(retorno => retorno.json())
    .then(cursos => {
        cursos.forEach(curso =>{

            listaConcluido.appendChild(criarCard(curso.titulo, curso.link, curso.icone))

        })
    })

cursosAndamento = fetch("https://portifolio-jpn3.onrender.com/em-andamento")
    .then(retorno => retorno.json())
    .then(cursos => {
        cursos.forEach(curso =>{
            listaAndamento.appendChild(criarCard(curso.titulo, curso.certificado, curso.icone))

        })
    })


function criarCard(titulo,certificado_link, icone_caminho){
    const li = document.createElement("li")
    li.classList.add("card")

    const ancora = document.createElement("a")
    ancora.setAttribute("href", certificado_link)
    ancora.setAttribute("target", "_blank")

    const tituloCard = document.createElement("h4")
    tituloCard.classList.add("card__titulo")
    tituloCard.textContent =  titulo

    const iconeCard = document.createElement("img")
    iconeCard.setAttribute("src", icone_caminho)
    iconeCard.classList.add("card__img")

    ancora.appendChild(tituloCard)
    ancora.appendChild(iconeCard)
    li.appendChild(ancora)

    return li
}