from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:63342",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/concluidos")
def home():
    return [
        {
          "id": "1",
          "link": "https://cursos.alura.com.br/certificate/d37d136e-d954-4dd3-adff-6ceec96aa0ac?lang=pt_BR",
          "titulo": "Curso de HTTP: entendendo a web por baixo dos panos – ALURA",
          "icone": "https://www.alura.com.br/assets/api/cursos/http-entendendo-web-por-baixo-dos-panos.svg"
        },
        {
          "id": "2",
          "link": "https://cursos.alura.com.br/certificate/83d10787-ab94-4e3c-8e2a-8abc22c02eff?lang=pt_BR",
          "titulo": " Curso: Avançando com PHP: Arrays, Strings, Função e Web – ALURA",
          "icone": "https://www.alura.com.br/assets/api/cursos/php-arrays-strings-funcoes.svg"
        },
        {
          "id": "3",
          "link": "https://cursos.alura.com.br/certificate/8b3cb3f2-5026-4c7a-af53-3f7464e61305?lang=pt_BR",
          "titulo": "Curso: PHP na Web: conhecendo o padrão MVC – ALURA",
          "icone": "https://www.alura.com.br/assets/api/cursos/php-web-conhecendo-padrao-mvc.svg"
        },
        {
          "id": "4",
          "link": "https://cursos.alura.com.br/certificate/8e6542cd-8a00-46d8-b237-73e35a46a591?lang=pt_BR",
          "titulo": "Curso: HTML E CSS: Ambientes de desenvolvimento, estrutura de arquivos, tags.",
          "icone": "https://www.alura.com.br/assets/api/cursos/html-css-ambiente-arquivos-tags.svg"
        },
        {
          "id": "5",
          "link": "https://cursos.alura.com.br/certificate/76d13376-6de3-4308-a20a-3feafc31f9f4?lang=pt_BR",
          "titulo": "Curso: HTML e CSS: Classes, posicionamento e Flexbox – ALURA",
          "icone": "https://www.alura.com.br/assets/api/cursos/html-css-classes-posicionamento-flexbox.svg"
        },
        {
          "id": "6",
          "link": "https://cursos.alura.com.br/certificate/7f3884e9-9f1b-43b3-bed1-4331f6635c66?lang=pt_BR",
          "titulo": "Curso: HTML e CSS: cabeçalho, footer e variáveis CSS – ALURA",
          "icone": "https://www.alura.com.br/assets/api/cursos/html-css-cabecalho-footer-variaveis-css.svg"
        },
        {
          "id": "7",
          "link": "https://cursos.alura.com.br/certificate/3e7246e4-1352-421e-a15d-d93970f65a32?lang=pt_BR",
          "titulo": "Curso: HTML e CSS: trabalhando com responsividade e publicação de projetos – ALURA",
          "icone": "https://www.alura.com.br/assets/api/cursos/html-css-responsividade-publicacao-projetos.svg"
        },
        {
          "id": "8",
          "link": "https://cursos.alura.com.br/certificate/46063e02-36c0-4ac4-baa5-625da21aaba5?lang=pt_BR",
          "titulo": "Curso: HTML e CSS: praticando HTML/CSS - ALURA",
          "icone": "https://www.alura.com.br/assets/api/cursos/html-css-praticando-html-css.svg"
        },
        {
          "id": "9",
          "link": "https://cursos.alura.com.br/certificate/0c6ad94f-eef8-4946-bd48-eb413dcc870b?lang=pt_BR",
          "titulo": "Curso de HTML e CSS: responsividade com mobile-first - ALURA",
          "icone": "https://www.alura.com.br/assets/api/cursos/html-css-responsividade-mobile-first.svg"
        },
        {
          "id": "10",
          "link": "https://cursos.alura.com.br/certificate/1de10765-0e74-4229-b222-50bba26916b5?lang=pt_BR",
          "titulo": "JavaScript para Web: Crie páginas dinâmicas - ALURA",
          "icone": "https://www.alura.com.br/assets/api/cursos/javascript-web-paginas-dinamicas.svg"
        },
        {
          "id": "11",
          "link": "https://cursos.alura.com.br/certificate/695fe4ef-db33-4f22-a301-f3c664694826?lang=pt_BR",
          "titulo": "JavaScript: explorando a manipulação de elementos e da localStorage - ALURA",
          "icone": "https://www.alura.com.br/assets/api/cursos/javascript-manipulacao-elementos-localstorage.svg"
        },
        {
          "id": "12",
          "link": "https://cursos.alura.com.br/certificate/79071ce8-5659-46e7-9d11-5ee30b7a11eb?lang=pt_BR",
          "titulo": "JavaScript: manipulando elementos no DOM - ALURA",
          "icone": "https://www.alura.com.br/assets/api/cursos/javascript-manipulando-elementos-dom.svg"
        },
        {
          "id": "13",
          "link": "https://cursos.alura.com.br/certificate/320eee46-a52c-4b5d-90ca-0bb321a2c10b?lang=pt_BR",
          "titulo": "JavaScript: validações e reconhecimento de voz - ALURA",
          "icone": "https://www.alura.com.br/assets/api/cursos/javascript-validacoes-reconhecimento-voz.svg"
        },
        {
          "id": "14",
          "link": "https://cursos.alura.com.br/certificate/64124289-0a6e-49bc-b251-42643de2f768?lang=pt_BR",
          "titulo": "Python: começando com a linguagem - ALURA",
          "icone": "https://www.alura.com.br/assets/api/cursos/python-introducao-a-linguagem.svg"
        },

        {
          "id": "15",
          "link": "https://cursos.alura.com.br/certificate/fc83756a-4b34-4f9a-9e95-612f8c051701?lang=pt_BR",
          "titulo": "Python: avançando na linguagem",
          "icone": "https://www.alura.com.br/assets/api/cursos/python-3-avancando-na-linguagem.svg"
        }

    ]

