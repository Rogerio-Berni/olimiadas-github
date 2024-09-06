function pesquisar() {
    // Esta função é responsável por realizar uma pesquisa e exibir os resultados na página.
    // Ela busca os dados da pesquisa em um array chamado "dados" e cria elementos HTML
    // para cada resultado, inserindo-os na seção com o ID "resultados-pesquisas".
  
    // Descomenta a linha abaixo para verificar se a função está sendo chamada e se os dados estão sendo carregados corretamente.
    // console.log("clicou");
  
    // Obtém a seção HTML onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisas");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
      section.innerHTML = "<p>Nada foi encontrado</p>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
   
    // Inicializa uma string vazia para armazenar os resultados da pesquisa formatados em HTML.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada item de dados da pesquisa.
    for (let dado of dados) {
       titulo = dado.titulo.toLowerCase()
       descricao = dado.descricao.toLowerCase()
       tags = dado.tags.toLowerCase()
      // Cria uma nova div para cada resultado, formatando-a com as informações do dado atual.
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // cria um novo elemento
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
          </div>
        `;
    }
  }

  if (!resultados) {
     resultados = "<p>Nada foi encontrado. Você precisa digitar o nome do atleta ou esporte</p>"
  }
  
  section.innerHTML = resultados;
}