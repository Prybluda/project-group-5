(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();(()=>{const r=document.querySelector(".js-menu-container"),n=document.querySelector(".js-open-menu"),i=document.querySelector(".js-close-menu"),o=()=>{const e=n.getAttribute("aria-expanded")==="true"||!1;n.setAttribute("aria-expanded",!e),r.classList.toggle("is-open");const t=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[t](document.body)};n.addEventListener("click",o),i.addEventListener("click",o),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(r.classList.remove("is-open"),n.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();new Swiper(".yachts-swiper",{slidesPerView:1,spaceBetween:16,direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".yachts-next-btn",prevEl:".yachts-prev-btn"},breakpoints:{768:{slidesPerView:2},1280:{slidesPerView:3}}});let l=!1;const d=2,u=30,m=/^[A-Za-z]+(?:\s[A-Za-z]+)?$/,p=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,f=/^\+?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;(()=>{const r={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};r.openModalBtn.addEventListener("click",o=>{o.preventDefault(),i(),n()}),r.closeModalBtn.addEventListener("click",n);function n(){l===!0&&r.modal.classList.toggle("is-hidden")}function i(){const o=document.getElementById("user-name"),e=document.getElementById("input-email"),t=document.getElementById("input-phone"),s=o.value.trim(),a=e.value.trim(),c=t.value.trim();s.length<d||a.length>u||a.length<d||c.length>u||c.length<d||s.length>u?l=!1:(console.log(s),l=!0),m.test(s)?o.classList.remove("error-border"):(l=!1,o.classList.add("error-border")),p.test(a)?e.classList.remove("error-border"):(l=!1,e.classList.add("error-border")),f.test(c)||(l=!1,t.classList.add("error-border")),console.log(l)}})();
