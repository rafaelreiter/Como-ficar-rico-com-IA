document.addEventListener("DOMContentLoaded", function () {
    // Função para pesquisar termos e exibir resultados
    function pesquisar() {
        let section = document.getElementById("resultados-pesquisa");
        let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase().trim();

        // Adiciona um loader enquanto pesquisa
        section.innerHTML = "<p>Carregando resultados...</p>";

        let resultados = "";

        if (campoPesquisa === "") {
            section.innerHTML = "<p>Por favor, insira uma palavra-chave para a pesquisa.</p>";
            return;
        }

        for (let dado of dados) {
            if (
                dado.titulo.toLowerCase().includes(campoPesquisa) ||
                dado.descricao.toLowerCase().includes(campoPesquisa) ||
                dado.tags.toLowerCase().includes(campoPesquisa) ||
                dado.setor.toLowerCase().includes(campoPesquisa) ||
                dado.ferramentas.toLowerCase().includes(campoPesquisa) ||
                dado.casosDeSucesso.toLowerCase().includes(campoPesquisa) ||
                dado.guiasPraticos.toLowerCase().includes(campoPesquisa) ||
                dado.recursosEducacionais.toLowerCase().includes(campoPesquisa)
            ) {
                resultados += `
                    <div class="item-resultado">
                        <h2><a href="${dado.link}" target="_blank">${dado.titulo}</a></h2>
                        <p class="descricao-meta">${dado.descricao}</p>
                        <p><strong>Setor:</strong> ${dado.setor}</p>
                        <p><strong>Ferramentas:</strong> ${dado.ferramentas}</p>
                        <p><strong>Casos de Sucesso:</strong> ${dado.casosDeSucesso}</p>
                        <p><strong>Guias Práticos:</strong> <a href="${dado.guiasPraticos}" target="_blank">Clique aqui</a></p>
                        <p><strong>Recursos Educacionais:</strong> ${dado.recursosEducacionais}</p>
                        <a href="${dado.link}" target="_blank">Saiba mais</a>
                    </div>
                `;
            }
        }

        // Verifica se há resultados e atualiza a seção de resultados
        if (!resultados) {
            section.innerHTML = "<p>Nenhum resultado encontrado. Tente outra palavra-chave.</p>";
        } else {
            section.innerHTML = resultados;
        }
    }

    // Função para abrir vídeos (exemplo de links)
    function abrirVideo(link) {
        window.open(link, '_blank');
    }

    // Função para compartilhar no WhatsApp
    function compartilharWhatsApp() {
        const url = encodeURIComponent(window.location.href);
        const mensagem = "Confira o projeto 'Como Ficar Rico Usando IA' e descubra como usar a IA para transformar seu negócio!";
        window.open(`https://api.whatsapp.com/send?text=${mensagem}%20${url}`, "_blank");
    }

    // Torna as funções globais para o HTML
    window.pesquisar = pesquisar;
    window.abrirVideo = abrirVideo;
    window.compartilharWhatsApp = compartilharWhatsApp;
});
