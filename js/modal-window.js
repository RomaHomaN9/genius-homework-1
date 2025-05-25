const modalWindow = document.getElementsByClassName('backdrop')[0];

function openModalWindow() {
    modalWindow.classList.remove('hidden');
}

function closeModalWindow() {
    modalWindow.classList.add('hidden');
}
