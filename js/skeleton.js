function r(o,s){const e=document.querySelector(o);if(!e)return;e.querySelectorAll(s).forEach(n=>{setTimeout(()=>{n.remove()},1e3)})}function t(o,s){const e=document.querySelector(o);if(e){e.innerHTML="";for(let i=0;i<s;i++){const n=document.createElement("div");n.classList.add("skeleton__card","swiper-slide"),n.innerHTML=`
      <div class="skeleton__img"></div>
      <div class="skeleton__data"></div>
      <div class="skeleton__count"></div>
      <div class="skeleton__line"></div>
    `,e.appendChild(n)}}}t(".news__container",4);t(".hotdeals__container",4);t(".wintertours__container",5);t(".summertours__container",5);export{r as skeleton};
