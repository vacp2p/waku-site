const nav=document.querySelector("#nav"),burger=document.querySelector("#burger"),social=document.querySelector("#social-box"),logo=document.querySelector("#header-logo");function handleHeader(){social.classList.toggle("social--visible"),logo.classList.toggle("logo--hidden"),burger.classList.toggle("burger--active"),nav.classList.toggle("nav--active")}burger.addEventListener("click",handleHeader);