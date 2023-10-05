document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('form');
    const btn_save = document.getElementById('botao-salvar');
    btn_save.addEventListener("click", function (e){
        e.preventDefault();
        const formData = new FormData(form);
        const url = form.action;

        formData.append("nome", document.getElementById('nome').value);
        formData.append("author", document.getElementById('author').value);
        formData.append("tipo", document.getElementById('tipo').value);
        formData.append("descricao", document.getElementById('descricao').value);
        formData.append("data", document.getElementById('data').value);
        formData.append("localizacao", document.getElementById('localizacao').value);
        formData.append("hora", document.getElementById('hora').value);
        formData.append("imagem", document.getElementById('imagem').value);

    });  
});





