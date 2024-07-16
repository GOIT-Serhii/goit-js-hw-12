import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export function createMarkup(hits, cardContainer) {
    const markup = hits.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return `
            <li class="item">
                <a href="${largeImageURL}">
                    <img class="image" src="${webformatURL}" alt="${tags}" width="360">
                </a>
                <ul class="descr-list">
                    <li class="descr-item">
                        <h3 class="descr-title">Likes</h3>
                        <p class="descr-value">${likes}</p>
                    </li>
                    <li class="descr-item">
                        <h3 class="descr-title">Views</h3>
                        <p class="descr-value">${views}</p>
                    </li>
                    <li class="descr-item">
                        <h3 class="descr-title">Comments</h3>
                        <p class="descr-value">${comments}</p>
                    </li>
                    <li class="descr-item">
                        <h3 class="descr-title">Downloads</h3>
                        <p class="descr-value">${downloads}</p>
                    </li>
                </ul>
            </li>
        `;
    }).join('');

    cardContainer.insertAdjacentHTML('beforeend', markup);

    const lightbox = new SimpleLightbox('.card-container a', {
        captions: true,
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
    });

    lightbox.refresh();
}

export function onFetchError() {
    iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
    });
}

export function onSearchError() {
    iziToast.error({
        message: 'You need to print something',
    });
}

const hiddenClass = 'is-hidden';

function hide(button) {
    button.classList.add(hiddenClass);
}

function show(button) {
    button.classList.remove(hiddenClass);
}

function disable(button, spinner) {
    button.disabled = true;
    spinner.classList.remove(hiddenClass);
}

function enable(button, spinner) {
    button.disabled = false;
    spinner.classList.add(hiddenClass);
}

export const buttonService = { show, disable, hide, enable };
