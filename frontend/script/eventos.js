// const { default: axios } = require("axios");

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

document.addEventListener('DOMContentLoaded', function(){
    const apiUrl = 'https://cultmaps.onrender.com/pictures/';
    const section = document.getElementById('section-cards');
    const apiDataElement = document.getElementById('api-data1');
    const apiDataElement2 = document.getElementById('api-data2');
    const apiDataElement3 = document.getElementById('api-data3');
    const objectDataApi = [];

    axios.get(apiUrl)
        .then(response => {
            const data = response.data;
            console.log(data._id)
            data.forEach(objeto => {
                const conteinerCards = document.createElement('div');
                conteinerCards.classList.add('swiper-wrapper');
                conteinerCards.classList.add('conteiner-cards');

                const card = document.createElement('div');
                card.setAttribute('data-nome', objeto.nome);
                card.classList.add('swiper-slide');
                card.classList.add('card');

                const img = document.createElement('img');
                img.setAttribute("src", objeto.src);
                img.classList.add('img');
                card.appendChild(img);

                const iconFav = document.createElement('i');
                iconFav.setAttribute('id', 'btnFav');
                iconFav.classList.add('fa-star');
                iconFav.classList.add('fa-regular');
                card.appendChild(iconFav);

                const descricao = document.createElement('div');
                descricao.classList.add('desc');

                const categoria = document.createElement('p');
                categoria.textContent = objeto.categoria;
                categoria.classList.add('cat');
                descricao.appendChild(categoria);

                const wrapperTags = document.createElement('div');
                wrapperTags.classList.add('wrapper-tags');

                const p_loc = document.createElement('p');
                p_loc.textContent = objeto.localizacao;
                wrapperTags.appendChild(p_loc);

                const p_data = document.createElement('p');
                const data = objeto.data;
                const dataFormat = new Date(data);
                const ano = dataFormat.getFullYear();
                const mes = ('0' + (dataFormat.getMonth() + 1)).slice(-2);
                const dia = ('0' + dataFormat.getDate()).slice(-2);
                const dataString = `${dia}-${mes}-${ano} `;
                p_data.textContent = dataString;
                wrapperTags.appendChild(p_data);
                descricao.appendChild(wrapperTags);

                const title = document.createElement('p');
                title.classList.add('title');
                title.textContent = objeto.nome;
                descricao.appendChild(title);

                const desc = document.createElement('p');
                desc.classList.add('desc');
                desc.textContent = objeto.author;
                descricao.appendChild(desc);

                const button = document.createElement('button');
                button.classList.add('moreInfo');
                button.textContent = "Mais informações";
                card.appendChild(descricao);
                card.appendChild(button);

                objectDataApi.push({
                    id: objeto._id,
                    image: objeto.src,
                    nome: objeto.nome,
                    localizacao: objeto.localizacao,
                    data: dataString,
                    descricao: objeto.descricao
                });

                if (objeto.categoria === 'Tecnologia Games e Geeks') {
                    apiDataElement.appendChild(card);
                }
                if (objeto.categoria === 'Congresso e Palestras') {
                    apiDataElement2.appendChild(card);
                }
                if (objeto.categoria === 'Infantil') {
                    apiDataElement3.appendChild(card);
                }
                else {
                    // console.log('categoria não existente')
                }
            });

            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                card.addEventListener('click', () => {
                    const cardNome = card.getAttribute('data-nome');
                    const cardSelecionado = objectDataApi.find(data => data.nome === cardNome);

                    // Corrigir o nome da variável aqui para cardSelecionado
                    document.getElementById('image').setAttribute('src', cardSelecionado.image)
                    document.getElementById('modal-location').textContent = cardSelecionado.localizacao;
                    document.getElementById('modal-date').textContent = cardSelecionado.data;
                    document.getElementById('modal-description').textContent = cardSelecionado.descricao;

                    modal.style.display = 'block';
                });
            });

            
            const moreInfo = document.querySelectorAll(".moreInfo");
            const modal = document.getElementById("modal");
            const modalClose = document.getElementById("modal-close");
            moreInfo.forEach(btn => {
                btn.addEventListener("click", (e) => {
                    // e.stopPropagation
                    if (modal.style.display == "none") {
                        modal.style.display = "block";
                    } else {
                        modal.style.display = "none";
                    }
                    modalClose.addEventListener("click", closeModal);

                    function closeModal() {
                        modal.style.display = "none";
                    }
                    window.addEventListener("click", (event) => {
                        if (event.target === modal) {
                            closeModal();
                        }
                    });
                });
            });
            const btnFav = document.querySelectorAll('.fa-star');
            btnFav.forEach(star => {
                star.addEventListener('click', (e) => {
                    e.stopPropagation()
                    console.log('bunda');
                    const isFav = star.classList.toggle('fa-solid');
                    cards.setAttribute('favorite', isFav);
                });
            });
        })
        .catch(e => {
            console.error('Erro: ', e);
        });
});


