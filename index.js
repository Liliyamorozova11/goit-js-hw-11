import{a as m,S as y,i as n}from"./assets/vendor-C2ySes1p.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const g="55228649-a7872b5b6b47d5521bc55f8f5",h="https://pixabay.com/api/";async function L(t){return(await m.get(h,{params:{key:g,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}let l=null;function b(t){return t.map(({webformatURL:r,largeImageURL:a,tags:i,likes:e,views:s,comments:o,downloads:d})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${a}">
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
              <span>${o}</span>
            </p>
            <p class="info-item">
              <span class="info-title">Downloads</span>
              <span>${d}</span>
            </p>
          </div>
        </li>
      `).join("")}function w(t,r){t.innerHTML=b(r),l?l.refresh():l=new y(".gallery a",{captionsData:"alt",captionDelay:250})}function v(t){t.innerHTML=""}function S(t){t.classList.add("is-visible")}function u(t){t.classList.remove("is-visible")}const p=document.querySelector(".form"),f=document.querySelector(".gallery"),c=document.querySelector(".loader");u(c);p.addEventListener("submit",async t=>{t.preventDefault();const r=t.currentTarget.elements["search-text"].value.trim();if(!r){n.show({message:"Please fill in the search field!",position:"topRight",color:"red"});return}v(f),S(c);try{const a=await L(r);if(a.hits.length===0){n.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"});return}w(f,a.hits)}catch{n.show({message:"Something went wrong. Please try again later.",position:"topRight",color:"red"})}finally{u(c),p.reset()}});
//# sourceMappingURL=index.js.map
