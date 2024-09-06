// Define a função 'pesquisar'.
function pesquisar() {
    // Obtém a referência do elemento HTML com id "resultados-pesquisa".
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // se campoPesquisa for vazio ou nulo
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Por favor, digite algo para pesquisar.</p>";
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa a variável 'resultados' como string vazia.
    let resultados = "";
    let titulo = "";
    let subtitulo = "";
    let tags = "";

    // Itera sobre cada objeto 'dado' dentro do array 'dados'.
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        subtitulo = dado.subtitulo.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se o titulo do dado incluir o campo de pesquisa
        if (titulo.includes(campoPesquisa) || subtitulo.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
    <div class="item-resultado">
        <h2>${dado.titulo}</h2>
        <article>
            <h3>
                <a href= "#" target="_blank">${dado.subtitulo}</a>
            </h3>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Leia mais aqui</a>
    </div> ` ;
        }
    }

if (!resultados) {
    resultados = "<p>Não encontramos resultados para a sua pesquisa.</p>"; }

    // Define o HTML interno da 'section' com o conteúdo da variável 'resultados'.
    section.innerHTML = resultados;
}