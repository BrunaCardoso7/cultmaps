const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
        },
        "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
        },
        "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
        },
        "@1.50": {
        slidesPerView: 4,
        spaceBetween: 50,
        },
    },
});

const apiUrl = 'http://localhost:4000/pictures/'
const section = document.getElementById('section-cards')
const apiDataElement = document.getElementById('api-data1')
const apiDataElement2 = document.getElementById('api-data2')
axios.get(apiUrl)
.then( response =>{
        const data = response.data
        console.log(data)
        data.forEach(objeto => {
            console.log(objeto.categoria)
            console.log(data)
                const conteinerCards = document.createElement('div')
                conteinerCards.classList.add('swiper-wrapper')
                conteinerCards.classList.add('conteiner-cards')

                const card = document.createElement('div')
                card.classList.add('swiper-slide')
                card.classList.add('card')
            
                const img = document.createElement('img')
                img.setAttribute("src", objeto.src)
                img.classList.add('img')
                console.log(objeto.src)
                card.appendChild(img)
                
                const descricao = document.createElement('div')
                descricao.classList.add('desc')
                
                const categoria = document.createElement('p')
                categoria.textContent = objeto.categoria
                categoria.classList.add('cat')
                descricao.appendChild(categoria)
                
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
                title.classList.add('title')
                title.textContent = objeto.nome
                descricao.appendChild(title)
            
                const desc = document.createElement('p')
                desc.classList.add('desc')
                desc.textContent = objeto.descricao
                descricao.appendChild(desc)
            
                const button = document.createElement('button')
                button.classList.add('moreInfo')
                button.textContent = "Mais informações"
                card.appendChild(descricao)
                card.appendChild(button)
                
            if(objeto.categoria === 'Tecnologia Games e Geeks'){
                apiDataElement.appendChild(card)
            }
            if(objeto.categoria === 'Congresso e Palestras'){
                apiDataElement2.appendChild(card)
            }
            
            else {
                console.log('categoria não existente')
            }
           
        });
        const moreInfo = document.querySelectorAll(".moreInfo")
        console.log(moreInfo)
        const modal = document.getElementById("modal");
        const modalClose = document.getElementById("modal-close");
        moreInfo.forEach(btn =>{
            btn.addEventListener("click", (e)=>{
            if( modal.style.display == "none"){
                modal.style.display = "block"
            }else{
                modal.style.display = "none"
            }
            modalClose.addEventListener("click", closeModal)
            // Fechar o modal quando clicar fora da caixa modal
            function closeModal() {
                modal.style.display = "none";
            }
            window.addEventListener("click", (event) => {
            if (event.target === modal) {
                closeModal();
            }   
        });
    })
})
    })
    .catch(e=>{
        console.error('Erro: ', e )
})
