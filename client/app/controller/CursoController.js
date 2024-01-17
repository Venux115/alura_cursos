class CursoController{

    process(){
        
        let listCursos = []
        fetch("https://portifolio-jpn3.onrender.com/concluidos")
          .then((result) => result.json())
          .then((cursos) => {
            
            cursos.forEach((element) => {
              let curso = new Curso(element.id, element.titulo, element.link, element.icone)
              listCursos.push(curso)
            });
          });
          return listCursos
    }
}