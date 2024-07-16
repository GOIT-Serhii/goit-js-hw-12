import{a as f,S as w,i as m}from"./assets/vendor-ee72e1a4.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const P="https://pixabay.com/api/",q="44781960-4338c4c6360104e4623fadff2";f.defaults.baseURL=P;function p({q:e="",page:s=1,pageSize:a=20,imageType:n="photo",orientation:t="horizontal",safeSearch:r="true"}={}){return f.get("",{params:{key:q,q:e,page:s,per_page:a,image_type:n,orientation:t,safesearch:r}}).then(({data:l})=>l)}function g(e,s){const a=e.map(({webformatURL:t,largeImageURL:r,tags:l,likes:b,views:L,comments:S,downloads:v})=>`
            <li class="item">
                <a href="${r}">
                    <img class="image" src="${t}" alt="${l}" width="360">
                </a>
                <ul class="descr-list">
                    <li class="descr-item">
                        <h3 class="descr-title">Likes</h3>
                        <p class="descr-value">${b}</p>
                    </li>
                    <li class="descr-item">
                        <h3 class="descr-title">Views</h3>
                        <p class="descr-value">${L}</p>
                    </li>
                    <li class="descr-item">
                        <h3 class="descr-title">Comments</h3>
                        <p class="descr-value">${S}</p>
                    </li>
                    <li class="descr-item">
                        <h3 class="descr-title">Downloads</h3>
                        <p class="descr-value">${v}</p>
                    </li>
                </ul>
            </li>
        `).join("");s.insertAdjacentHTML("beforeend",a),new w(".card-container a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}function x(){m.error({message:"You need to print something"})}const u="is-hidden";function E(e){e.classList.add(u)}function M(e){e.classList.remove(u)}function $(e,s){e.disabled=!0,s.classList.remove(u)}function O(e,s){e.disabled=!1,s.classList.add(u)}const c={show:M,disable:$,hide:E,enable:O},z=document.querySelector(".form-search"),h=document.querySelector(".card-container"),i=document.querySelector('[data-action="load-more"]'),d=document.querySelector(".spinner"),o={q:"",page:1,pageSize:15,maxPage:0,imageType:"photo",orientation:"horizontal",safeSearch:"true"};c.hide(i);z.addEventListener("submit",C);async function C(e){e.preventDefault();const s=e.currentTarget;if(h.innerHTML="",o.page=1,o.q=s.elements.search.value.trim().toLowerCase(),!o.q){x(),s.reset();return}c.show(i),c.disable(i,d);try{const{hits:a,totalHits:n}=await p(o);o.maxPage=Math.ceil(n/o.pageSize),g(a,h),a.length>0&&o.page<o.maxPage?(c.enable(i,d),i.addEventListener("click",y)):c.hide(i)}catch(a){console.error("Error fetching pictures:",a)}}async function y(){o.page+=1,c.disable(i,d);try{const{hits:e}=await p(o);g(e,h),T()}catch{m.error({message:"We're sorry, but you've reached the end of search results."})}finally{c.enable(i,d),o.page===o.maxPage&&(c.hide(i),i.removeEventListener("click",y))}}function T(){const{height:e}=document.querySelector(".card-container li").getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
