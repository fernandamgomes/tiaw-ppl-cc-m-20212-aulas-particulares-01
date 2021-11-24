function carregaDisciplinas () { 
    let menuDisciplinas = document.getElementById ('menu_disciplinas')
    let htmlStr = ''

    for (i=0; i < db.disciplinas.length; i++) {
        let disciplina = db.disciplinas[i]
        htmlStr += `<li><a class="dropdown-item" href="disciplina.html?id=${disciplina.id}">${disciplina.titulo}</a></li>`
    }

    menuDisciplinas.innerHTML = htmlStr
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
        function (m, key, value) {
            vars[key] = value;
        });

    return vars;
}

function carregaListaSites () {
    let listaSites = document.getElementById('lista-sites')
    let id = getUrlVars()["id"]
    let sites = db.disciplinas[id].site
    let htmlStr = ''

    for (i=0; i < sites.length; i++) {
        let site = sites[i]
        htmlStr += `<li><a href="${site.url}" target="_blank" class="btn">${site.nome}</a></li>`
    }
    listaSites.innerHTML = htmlStr
}

function carregaNomeCurso() {
    let tituloCurso = document.getElementById ('nomeCurso')
    let idCurso = getUrlVars()["idCurso"]
    let nome_curso = db.cursos[idCurso].nomeCurso
    let htmlStr = ''

    htmlStr += `<h1 id="nomeCurso">${nome_curso}</h1>`

    tituloCurso.innerHTML = htmlStr
}

function carregaNomeDisciplina() {
    let tituloDisciplina = document.getElementById ('nomeDisciplina')
    let btnVoltar = document.getElementById ('btnVoltar')
    let idCurso = getUrlVars()["idCurso"]
    let idDisciplina = db.cursos[idCurso].idDisciplina
            
    for(i=0; i < db.disciplinas.length; i++){
        if(idDisciplina == db.disciplinas[i].id){
            let nomeDisciplina = db.disciplinas[i].titulo
            let htmlStr = ''

            htmlStr += `<h4 id="nomeDisciplina">${nomeDisciplina}</h4>`

            tituloDisciplina.innerHTML = htmlStr
        }
    }
    for(i=0; i < db.disciplinas.length; i++){
        if(idDisciplina == db.disciplinas[i].id){
            let nomeDisciplina = db.disciplinas[i].titulo
            let htmlStr = ''

            htmlStr += `<a class="btn" href="disciplina.html?id=${db.disciplinas[i].id}">voltar para a "${nomeDisciplina}"</a>`

            btnVoltar.innerHTML = htmlStr
        }
    }
}

function carregaCursos () {
    let containerCurso = document.getElementById('lista_cursos')
    let id = getUrlVars()["id"]
    let htmlStr = ''
    let videos = db.cursos[id].videos

    for (i=0; i < db.cursos.length; i++) {
        if (db.cursos[i].idDisciplina == id) {
            let curso = db.cursos[i]
            let video = videos[i]
            htmlStr +=
            `<li class="container-curso">
                <a href="curso.html?idCurso=${curso.idCurso}">
                <img src="${curso.img}" alt="">
                <div class="container-texto">
                    <h5>${curso.nomeCurso}</h5>
                    <p class="disciplina"><span>Disciplina:</span> ${db.disciplinas[id].titulo}</p>
                    <p class="disciplina"><span>Descrição:</span> ${curso.descricao}</p>
                </div>
                </a>
          </li>`
        }
    }
    containerCurso.innerHTML = htmlStr
}

function carregaConteudoCurso() {
    let containerConteudo = document.getElementById('conteudoCurso')
    let idCurso = getUrlVars()["idCurso"]
    let id = getUrlVars()["id"]
    let video = db.cursos[idCurso].videos[id]
    let htmlStr = ''

            
            htmlStr += 
            `<div class="container-curso-video">
                <iframe src="${video.urlVideo}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
            </div>
            <div class="container-curso-texto">
                <h5>${video.nomeVideo}</h5>
                <p><span>Descrição: </span>${video.descricaoVideo}</p>
          </div>`
        
    
    containerConteudo.innerHTML = htmlStr
}

function carregaMenuConteudo () {
    let menuConteudo = document.getElementById('menuConteudo')
    let id = getUrlVars()["idCurso"]
    let videos = db.cursos[id].videos
    let htmlStr = ''

    for (i=0; i<videos.length; i++) {
        let video = videos[i]
        htmlStr += `<li><a href="curso.html?idCurso=${id}&id=${video.idVideo}" class="btn">${video.nomeVideo}</a></li>`
    }
    menuConteudo.innerHTML = htmlStr
}

