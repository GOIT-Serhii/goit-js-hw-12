import{a as p,S as P,i as f}from"./assets/vendor-ee72e1a4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const q="https://pixabay.com/api/",x="44781960-4338c4c6360104e4623fadff2";p.defaults.baseURL=q;function g({q:e="",page:r=1,pageSize:a=20,imageType:n="photo",orientation:t="horizontal",safeSearch:s="true"}={}){return p.get("",{params:{key:x,q:e,page:r,per_page:a,image_type:n,orientation:t,safesearch:s}}).then(({data:l})=>l)}function y(e,r){const a=e.map(({webformatURL:t,largeImageURL:s,tags:l,likes:L,views:S,comments:v,downloads:w})=>`
            <li class="item">
                <a href="${s}">
                    <img class="image" src="${t}" alt="${l}" width="360">
                </a>
                <ul class="descr-list">
                    <li class="descr-item">
                        <h3 class="descr-title">Likes</h3>
                        <p class="descr-value">${L}</p>
                    </li>
                    <li class="descr-item">
                        <h3 class="descr-title">Views</h3>
                        <p class="descr-value">${S}</p>
                    </li>
                    <li class="descr-item">
                        <h3 class="descr-title">Comments</h3>
                        <p class="descr-value">${v}</p>
                    </li>
                    <li class="descr-item">
                        <h3 class="descr-title">Downloads</h3>
                        <p class="descr-value">${w}</p>
                    </li>
                </ul>
            </li>
        `).join("");r.insertAdjacentHTML("beforeend",a),new P(".card-container a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}function m(){f.error({message:"Sorry, there are no images matching your search query. Please try again!"})}function E(){f.error({message:"You need to print something"})}const u="is-hidden";function M(e){e.classList.add(u)}function $(e){e.classList.remove(u)}function O(e,r){e.disabled=!0,r.classList.remove(u)}function z(e,r){e.disabled=!1,r.classList.add(u)}const c={show:$,disable:O,hide:M,enable:z},C=document.querySelector(".form-search"),h=document.querySelector(".card-container"),i=document.querySelector('[data-action="load-more"]'),d=document.querySelector(".spinner"),o={q:"",page:1,pageSize:15,maxPage:0,imageType:"photo",orientation:"horizontal",safeSearch:"true"};c.hide(i);C.addEventListener("submit",T);async function T(e){e.preventDefault();const r=e.currentTarget;if(h.innerHTML="",o.page=1,o.q=r.elements.search.value.trim().toLowerCase(),!o.q){E(),r.reset();return}c.show(i),c.disable(i,d);try{const{hits:a,totalHits:n}=await g(o);if(a.length===0){m(),c.hide(i),r.reset();return}o.maxPage=Math.ceil(n/o.pageSize),y(a,h),a.length>0&&o.page<o.maxPage?(c.enable(i,d),i.addEventListener("click",b)):c.hide(i)}catch(a){console.error("Error fetching pictures:",a),m()}finally{r.reset()}}async function b(){o.page+=1,c.disable(i,d);try{const{hits:e}=await g(o);y(e,h),A()}catch{f.error({message:"We're sorry, but you've reached the end of search results."})}finally{c.enable(i,d),o.page===o.maxPage&&(c.hide(i),i.removeEventListener("click",b))}}function A(){const{height:e}=document.querySelector(".card-container li").getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
