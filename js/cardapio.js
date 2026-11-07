const listaPratos = document.getElementById("lista-pratos");

function criarCard(prato) {
    return `
        <div class="card">
            <img src="${prato.imagem}" alt="${prato.nome}" loading="lazy">

            <div class="card-content">

                ${prato.destaque ? '<span class="badge">⭐ Mais Pedido</span>' : ''}

                <h3>${prato.nome}</h3>

                <p>${prato.descricao}</p>

                <div class="preco">
                    ${prato.preco}
                </div>

                <a
                    class="btn btn-green"
                    target="_blank"
                    href="https://wa.me/552135947080?text=${encodeURIComponent(
                        `Olá! Gostaria de pedir o ${prato.nome}.`
                    )}">
                    Pedir este prato
                </a>

            </div>
        </div>
    `;
}

function carregarCardapio() {

    if (!listaPratos) return;

    listaPratos.innerHTML = pratos
        .map(prato => criarCard(prato))
        .join("");

}

document.addEventListener("DOMContentLoaded", carregarCardapio);