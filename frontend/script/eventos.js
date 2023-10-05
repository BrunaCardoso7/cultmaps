// const axios = require ('axios')

const apiUrl = 'http://localhost:3000/api/services'

const apiDataElement = document.getElementById('api-data')

axios.get(apiUrl)
    .then( response =>{
        const data = response.data
        console.log(data)
        data.forEach(objeto => {
            
        });
    })
    .catch(e=>{
        console.error('Erro: ', e )
    })