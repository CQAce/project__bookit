const popap = document.querySelector('.header__top_arrow');
const headerTop = document.querySelector('.header__top');

popap.addEventListener("click", function(e) { 
    headerTop.classList.toggle('header__top_active');
    popap.classList.toggle('eader__top_arrow_active');
})