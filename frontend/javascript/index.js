document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('form');
    const btn_save = document.getElementById('botao-salvar');
    btn_save.addEventListener("click", function (e){
        e.preventDefault();
        const formData = new FormData(form);
        const url = form.action;

        formData.append("nome", document.getElementById('nome').value);
        formData.append("author", document.getElementById('author').value);
        formData.append("descricao", document.getElementById('descricao').value);
        formData.append("data", document.getElementById('data').value);
        formData.append("hora", document.getElementById('hora').value);
        formData.append("imagem", document.getElementById('imagem').value);

        if (
            formData.get("nome") &&
            formData.get("author") &&
            formData.get("descricao") &&
            formData.get("data") &&
            formData.get("hora") &&
            formData.get("imagem")
        ){
            fetch(url, {
                method: "POST",
                body: formData,
                headers: {
                    // Deixe o Content-Type ser definido automaticamente
                },
            })
            .then((response) => { console.log('response'); return response.json() })
            .then((data) => {
                console.log(data);
            })
            .catch((error) =>{
                console.error("erro ao enviar os dados para o servidor" + error);
            });
            console.log(formData.get("nome"))

        } else {
            console.log("campos obrigatórios não preenchidos");
        }

    });  
});





