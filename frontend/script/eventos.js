// const axios = require ('axios')

const apiUrl = 'http://localhost:3000/api/services'

const apiDataElement = document.getElementById('api-data')

axios.get(apiUrl)
    .then( response =>{
        const data = response.data
        console.log(data)
        data.forEach(objeto => {
            console.log(data)
            const card = document.createElement('div')
            card.classList.add('card')

            const img = document.createElement('div')
            // img.setAttribute("src", objeto)
            img.classList.add('img')
            
            card.appendChild(img)

            const descricao = document.createElement('div')
            descricao.classList.add('desc')

            const wrapperTags = document.createElement('div')
            wrapperTags.classList.add('wrapper-tags')

            const p_loc = document.createElement('p')
            p_loc.textContent = objeto.localizacao
            wrapperTags.appendChild(p_loc)
            const p_data = document.createElement('p')
            p_data.textContent = "23-04-2023"
            wrapperTags.appendChild(p_data)
            descricao.appendChild(wrapperTags)

            const title = document.createElement('p')
            title.setAttribute("id", "title")
            title.textContent = objeto.nome
            descricao.appendChild(title)

            const desc = document.createElement('p')
            desc.setAttribute("id", "desc")
            desc.textContent = objeto.descricao
            descricao.appendChild(desc)

            card.appendChild(descricao)
            apiDataElement.appendChild(card)
        });
    })
    .catch(e=>{
        console.error('Erro: ', e )
    })