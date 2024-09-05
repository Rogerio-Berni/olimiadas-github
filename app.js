// function pesquisar() {
//     //console.log("clicou");
//     let section = document.getElementById("resultados-pesquisas")

//     let resultados = ""
    
//     for(let dado of dados) {
//         resultados += `
//              <div class="item-resultado">
//                 <h2>
//                     <a href="#" target="_blank">${dado.titulo}</a>
//                 </h2>
//                 <p class="descricao-meta">${dado.descricao}</p>
//                 <a href=${dado.link} target="_blank">Mais inforações</a>
//             </div>
//     `
//     }
    
//     section.innerHTML = resultados
// }

// //console.log(dados);


function pesquisar() {
    // Esta função é responsável por realizar uma pesquisa e exibir os resultados na página.
    // Ela busca os dados da pesquisa em um array chamado "dados" e cria elementos HTML
    // para cada resultado, inserindo-os na seção com o ID "resultados-pesquisas".
  
    // Descomenta a linha abaixo para verificar se a função está sendo chamada e se os dados estão sendo carregados corretamente.
    // console.log("clicou");
  
    // Obtém a seção HTML onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisas");
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa formatados em HTML.
    let resultados = "";
  
    // Itera sobre cada item de dados da pesquisa.
    for (let dado of dados) {
      // Cria uma nova div para cada resultado, formatando-a com as informações do dado atual.
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
  
    // Atribui o conteúdo HTML gerado à seção de resultados.
    section.innerHTML = resultados;
  }
  
  // Descomenta a linha abaixo para verificar o conteúdo do array "dados".
  // console.log(dados);
