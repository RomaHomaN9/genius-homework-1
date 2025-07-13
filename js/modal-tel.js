const modalWindowTel = document.querySelector('.modal-tel');
const openModalTel = document.querySelector('#openModalTel');
const closeModalTel = document.querySelector('#closeModalTel');
openModalTel.addEventListener('click', () => {
    modalWindowTel.classList.remove('hidden');
    document.querySelector('body').style.overflow = 'hidden';
});

closeModalTel.addEventListener('click', () => {
    modalWindowTel.classList.add('hidden');
    document.querySelector('body').style.overflow = 'auto';
});
