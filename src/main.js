import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getPictures } from './js/pixabay-api.js';
import { createMarkup, onSearchError, onFetchError, buttonService } from './js/render-functions';


const formSearch = document.querySelector('.form-search');
const cardContainer = document.querySelector('.card-container');
const loadMoreBtn = document.querySelector('[data-action="load-more"]');
const spinner = document.querySelector('.spinner');

const params = {
    q: "",
    page: 1,
    pageSize: 15,
    maxPage: 0,
    imageType: 'photo',
    orientation: 'horizontal',
    safeSearch: 'true',
};
buttonService.hide(loadMoreBtn);

formSearch.addEventListener('submit', handlerSearch);

async function handlerSearch(event) {
    event.preventDefault();

    const form = event.currentTarget;

    cardContainer.innerHTML = "";
    params.page = 1;
    params.q = form.elements.search.value.trim().toLowerCase();

    if (!params.q) {
        onSearchError();
        form.reset();
        return;
    }

    buttonService.show(loadMoreBtn);
    buttonService.disable(loadMoreBtn, spinner);

    try {
        const { hits, totalHits } = await getPictures(params);
        
        if (hits.length === 0) {
            onFetchError();
            buttonService.hide(loadMoreBtn);
            form.reset();
            return;
        }

        params.maxPage = Math.ceil(totalHits / params.pageSize);
        createMarkup(hits, cardContainer);  

        if (hits.length > 0 && params.page < params.maxPage) {
            buttonService.enable(loadMoreBtn, spinner);
            loadMoreBtn.addEventListener('click', handlerLoadMore);
        } else {
            buttonService.hide(loadMoreBtn);
        }

    } catch (err) {
        console.error('Error fetching pictures:', err);
        onFetchError();
    } finally {
        form.reset();
    }
}

async function handlerLoadMore() {
    params.page += 1;
    buttonService.disable(loadMoreBtn, spinner);

    try {
        const { hits } = await getPictures(params);
        createMarkup(hits, cardContainer);  
        smoothScroll();
    } catch (err) {
        iziToast.error({
            message: 'We\'re sorry, but you\'ve reached the end of search results.',
        });
    } finally {
        buttonService.enable(loadMoreBtn, spinner);
        
        if (params.page === params.maxPage) {
            buttonService.hide(loadMoreBtn);
            loadMoreBtn.removeEventListener('click', handlerLoadMore);
        }
    }
}

function smoothScroll() {
    const { height: cardHeight } = document.querySelector('.card-container li').getBoundingClientRect();
    window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
    });
}


