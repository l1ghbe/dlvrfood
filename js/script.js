const cartBtn = document.getElementById('cart-btn');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal-close');

cartBtn.addEventListener('click', (e) => {
    modal.classList.add('isOpened');
    
})
closeBtn.addEventListener('click', (e) => {
    modal.classList.remove('isOpened');
    
})


new WOW().init();