document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('form')
    const btn_save = document.getElementById('botao-salvar')
    btn_save.addEventListener("click", function (e){
        e.preventDefault()
        const formData = new FormData(form)
        const url = form.action
        // if(
            console.log(formData.get("nome"))
            console.log(formData.get("author"))
            console.log(formData.get("descricao"))
            console.log(formData.get("data"))
            console.log(formData.get("hora"))
            console.log(formData.get("imagem"))
        
        // ){
            fetch(url, {
                method: "POST",
                body: formData,
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
            .catch((error) =>{
                console.error("erro ao enviar os dados para o servidor"+error)
            })
        // } else {
        //     console.log("campos obrigatórios não preechidos")
        // }

    })  
})