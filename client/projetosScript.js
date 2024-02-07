const container = document.querySelector('.container__main__conteudo')
let listaDeTitulos = []

const linkProducao = "http://127.0.0.1:8000";
const linkDeploy = "https://portifolio-jpn3.onrender.com";

fetch(`${linkDeploy}/projetos`)
    .then((result) => result.json())
    .then((projetos) => {
        
        projetos.forEach((projeto) => {
            let ul
            if(!listaDeTitulos.includes(projeto.tipo)){
               
              if(document.querySelector(`.${projeto.tipo}`)){
                 ul = document.querySelector(`.${projeto.tipo}`)
              }else{
                 ul = criaLista( projeto.tipo)
              }
            }


            const li = criarProjeto(projeto['link-hospedagem'], projeto['foto-projeto'], projeto.titulo, projeto.repositorio)
            console.log(ul)
            if(ul[0]){
              ul[1].appendChild(li)
              container.appendChild(ul[0])
            }else{
              ul.appendChild(li)
              container.appendChild(ul)
            }
        })

    })

   

function criarProjeto(hospedagem, imagem, titulo,repositorio) {
    const li = document.createElement("li")
    li.classList.add("lista-projeto__item", "lista-item")
    const ancora = document.createElement("a")
    ancora.classList.add("lista-projeto__item__card")
    ancora.setAttribute("href", hospedagem)
    ancora.setAttribute("target", "_blank")

    const img = document.createElement("img")
    img.classList.add("projeto__card__img")
    img.setAttribute("src", `assets/projetos/${imagem}`)

    const div = document.createElement("div")
    div.classList.add("projeto__card__body")

    const h4 = document.createElement("h4")
    h4.classList.add("projeto__card__titulo")
    h4.textContent = titulo

    const btn = document.createElement("button")
    btn.classList.add("projeto__card__icone")

    btn.addEventListener("click", ()=>{
      window.location.replace(repositorio)
    })

    const i = document.createElement("i")
    i.classList.add("bi", "bi-github")
    
    btn.appendChild(i)

    div.appendChild(h4)
    div.appendChild(btn)

    ancora.appendChild(img)
    ancora.appendChild(div)

    li.appendChild(ancora)

    return li
}

function criaLista(lista){
  const div = document.createElement('div')
  div.classList.add('secao-projetos')
  
  const ul = document.createElement('ul')
  ul.classList.add('lista', 'lista-projeto', lista)

  const titulo = document.createElement('h2')
  titulo.classList.add('constainer__main__conteudo_subtitulo')
  titulo.textContent = lista

  div.appendChild(titulo)
  div.appendChild(ul)
  
  return [div, ul]
}