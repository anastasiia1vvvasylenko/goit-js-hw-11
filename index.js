import{i as n,S as u}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();const d="45506482-0746cd613ccb32219c9653431";function m(e){if(!e.trim())return n.error({message:"Please enter a search query!",position:"topRight"}),Promise.resolve([]);const s=new URLSearchParams({key:d,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true"});return document.querySelector(".loader").classList.remove("hidden"),fetch(`https://pixabay.com/api/?${s}`).then(t=>{if(!t.ok)throw new Error("Network response was not ok");return t.json()}).then(t=>(t.hits.length===0&&n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),t.hits)).catch(t=>{console.log(t),n.error({message:"An error occurred while fetching images. Please try again later.",position:"topRight"})}).finally(()=>{document.querySelector(".loader").classList.add("hidden")})}let l;const p=e=>` <li class="gallery-card">
      <a href="${e.largeImageURL}" class="gallery-item">
        <img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
        <div class="info">
          <p class="info-item"><b>Likes:</b> ${e.likes}</p>
          <p class="info-item"><b>Views:</b> ${e.views}</p>
          <p class="info-item"><b>Comments:</b> ${e.comments}</p>
          <p class="info-item"><b>Downloads:</b> ${e.downloads}</p>
        </div>
      </a>
    </li>`;function h(e){const s=document.querySelector(".gallery"),t=e.map(a=>p(a)).join("");s.innerHTML=t,l=new u(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),l.refresh()}const f=document.querySelector(".submit-form"),y=document.querySelector(".search-input"),g=document.querySelector(".gallery"),c=document.querySelector(".loader");function b(){g.innerHTML=""}f.addEventListener("submit",e=>{e.preventDefault();const s=y.value.trim();if(!s){iziToast.error({message:"Please enter a search query!",position:"topRight"});return}b(),c.classList.remove("hidden"),m(s).then(t=>{t.length>0&&h(t)}).finally(()=>{c.classList.add("hidden")})});
//# sourceMappingURL=index.js.map
