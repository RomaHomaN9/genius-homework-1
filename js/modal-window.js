const modalWindow = document.querySelector('#backdrop');
const openModalWindow = document.querySelector('#openBackdrop');
const closeModalWindow = document.querySelector('#closeBackdrop');

openModalWindow.addEventListener('click', () => {
    modalWindow.classList.remove('hidden');
    document.querySelector('body').style.overflow = 'hidden';
});

closeModalWindow.addEventListener('click', () => {
    modalWindow.classList.add('hidden');
    document.querySelector('body').style.overflow = 'auto';
});
