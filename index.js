import{a as d,S as m,i as n}from"./assets/vendor-CF_gOPOZ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const y="55228649-a7872b5b6b47d5521bc55f8f5",g="https://pixabay.com/api/";async function h(t){return(await d.get(g,{params:{key:y,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}function L(t){return t.map(({webformatURL:r,largeImageURL:o,tags:i,likes:e,views:s,comments:a,downloads:u})=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${o}">
              <img
                class="gallery-image"
                src="${r}"
                alt="${i}"
              />
            </a>
            <div class="info">
              <p class="info-item">
                <span class="info-title">Likes</span>
                <span>${e}</span>
              </p>
              <p class="info-item">
                <span class="info-title">Views</span>
                <span>${s}</span>
              </p>
              <p class="info-item">
                <span class="info-title">Comments</span>
                <span>${a}</span>
              </p>
              <p class="info-item">
                <span class="info-title">Downloads</span>
                <span>${u}</span>
              </p>
            </div>
          </li>
        `).join("")}function b(t){t.innerHTML=""}function w(t){t.classList.add("is-visible")}function f(t){t.classList.remove("is-visible")}const c=document.querySelector(".form"),p=document.querySelector(".gallery"),l=document.querySelector(".loader"),v=new m(".gallery a",{captionsData:"alt",captionDelay:250});f(l);c.addEventListener("submit",async t=>{t.preventDefault();const r=t.currentTarget.elements["search-text"].value.trim();if(!r){n.show({message:"Please fill in the search field!",position:"topRight",color:"red"});return}b(p),w(l);try{const o=await h(r);if(o.hits.length===0){n.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"});return}p.innerHTML=L(o.hits),v.refresh()}catch{n.show({message:"Something went wrong. Please try again later.",position:"topRight",color:"red"})}finally{f(l),c.reset()}});
//# sourceMappingURL=index.js.map
