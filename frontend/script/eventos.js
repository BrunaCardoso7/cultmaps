const menuButton = document.getElementById('btn-menu');
const navBar = document.getElementById('nav-bar');

menuButton.addEventListener('click', () => {
    console.log('bunda')
    if (navBar.style.display === 'flex') {
        navBar.style.display = 'none';
    } else {
        navBar.style.display = 'flex';
    }
});
const searchBox = document.getElementById('search-box')
const btnSearch = document.getElementById('btn_search');

const logo = document.getElementById('logo')
btnSearch.addEventListener('click', ()=>{
    if(searchBox.style.display === 'none'){
        searchBox.style.display = 'block'
        logo.style.display = 'none'
    } else {
        searchBox.style.display = 'none'
        logo.style.display = 'block'
    }
})

const body = document.getElementById('body')

body.addEventListener('resize', ()=>{
    if(window.innerWidth === 800){
        navBar.style.display = 'block'
    } else {
        navBar.style.display = 'none'
    }
})

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

const apiUrl = 'https://cultmaps.onrender.com/pictures/'
const section = document.getElementById('section-cards')
const apiDataElement = document.getElementById('api-data1')
const apiDataElement2 = document.getElementById('api-data2')
const apiDataElement3 = document.getElementById('api-data3')
axios.get(apiUrl)
.then( response =>{
        const data = response.data
        data.forEach(objeto => {
            // console.log(objeto.categoria)
            // console.log(data)
                const conteinerCards = document.createElement('div')
                conteinerCards.classList.add('swiper-wrapper')
                conteinerCards.classList.add('conteiner-cards')

                const card = document.createElement('div')
                card.classList.add('swiper-slide')
                card.classList.add('card')
            
                
                const img = document.createElement('img')
                img.setAttribute("src", objeto.src)
                img.classList.add('img')
                // console.log(objeto.src)
                card.appendChild(img)
                
                const iconFav = document.createElement('i')
                iconFav.setAttribute('id', 'btnFav')
                iconFav.classList.add('fa-star')
                iconFav.classList.add('fa-regular')
                card.appendChild(iconFav)

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

                const data = objeto.data
                const dataFormat = new Date(data)

                const ano = dataFormat.getFullYear()
                const mes = ('0'+(dataFormat.getMonth()+1)).slice(-2)
                const dia = ('0'+ dataFormat.getDate()).slice(-2)

                const dataString = `${dia}-${mes}-${ano} `
                p_data.textContent = dataString
                wrapperTags.appendChild(p_data)
                descricao.appendChild(wrapperTags)
                
            
                const title = document.createElement('p')
                title.classList.add('title')
                title.textContent = objeto.nome
                descricao.appendChild(title)
            
                const desc = document.createElement('p')
            
                desc.classList.add('desc')
                desc.textContent = objeto.author
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
            if(objeto.categoria === 'Infantil'){
                apiDataElement3.appendChild(card)
            }
            else {
                // console.log('categoria não existente')
            }
            const moreInfo = document.querySelectorAll(".moreInfo")
            // console.log(moreInfo)
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
        });
        const btnFav = document.querySelectorAll('.fa-star')

        btnFav.forEach(star =>{
            star.addEventListener('click', ()=>{
                console.log('bunda')
                const isFav = star.classList.toggle('fa-solid')
                star.setAttribute('favorite', isFav)
            })
        })
    })
})
    })
    .catch(e=>{
        console.error('Erro: ', e )
})

// function gerarModal(img, ){
//     const modal = document.createElement('div');
//     modal.id = 'modal';
//     modal.classList.add('modal');

//     const modalContent = document.createElement('div');
//     modalContent.classList.add('modal-content');

//     const closeSpan = document.createElement('span');
//     closeSpan.classList.add('close');
//     closeSpan.id = 'modal-close';
//     closeSpan.innerHTML = '&times;';

//     const imgContainer = document.createElement('div');
//     imgContainer.classList.add('img');
//     const img = document.createElement('img');
//     img.src = 'img/maxresdefault.jpg';
//     img.alt = '';

//     const h2 = document.createElement('h2');
//     h2.textContent = 'Detalhes do Evento';

//     const locationParagraph = document.createElement('p');
//     locationParagraph.innerHTML = 'Localização: <span id="modal-location"></span>';

//     const dateParagraph = document.createElement('p');
//     dateParagraph.innerHTML = 'Data: <span id="modal-date"></span>';

//     const descriptionParagraph = document.createElement('p');
//     descriptionParagraph.innerHTML = 'Descrição: <span id="modal-description"></span>';

//     const btnPagesContainer = document.createElement('div');
//     btnPagesContainer.classList.add('btn-pages');

//     const officialPageButton = document.createElement('button');
//     officialPageButton.id = 'page-ofc';
//     officialPageButton.textContent = 'Página oficial';

//     const openMapsLink = document.createElement('a');
//     openMapsLink.id = 'open-maps';
//     openMapsLink.classList.add('map-button');
//     openMapsLink.textContent = 'Abrir Maps';

//     // Anexa os elementos filhos aos elementos pais
//     imgContainer.appendChild(img);
//     btnPagesContainer.appendChild(officialPageButton);
//     btnPagesContainer.appendChild(openMapsLink);

//     modalContent.appendChild(closeSpan);
//     modalContent.appendChild(imgContainer);
//     modalContent.appendChild(h2);
//     modalContent.appendChild(locationParagraph);
//     modalContent.appendChild(dateParagraph);
//     modalContent.appendChild(descriptionParagraph);
//     modalContent.appendChild(btnPagesContainer);

//     modal.appendChild(modalContent);

// }

// btnFav.addEventListener('click', ()=>{
//     if(btnFav.contains('fa-regular')){
//         btnFav.classList.remove('fa-regular')
//         btnFav.classList.add('fa-solid')
//     } else {
//         btnFav.classList.add('fa-regular')
//         btnFav.classList.remove('fa-solid')
//     }
// })

// axios.get(apiUrl)
// .then(response =>{
//     const data = response.data
//     const natalConteiner = document.getElementById('natal-conteiner')

//     const   

// }).catch(e=>{
//     console.error('Erro: '+e)
// })
