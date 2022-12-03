import getRefs from './refs.js';

const refs = getRefs();

const handleButtonModalOpen = () => {
  modalOpen();
};

const handleButtonModalClose = () => {
  modalClose();
};

const handlBackdropClose = e => {
  if (e.currentTarget === e.target) {
    modalClose();
  }
};

const handlEscapeClose = e => {
  if (e.code === 'Escape') {
    modalClose();
  }
};

refs.buttonModalOpen.addEventListener('click', handleButtonModalOpen);

const modalOpen = () => {
  refs.backdrop.classList.remove('is-hidden');

  refs.buttonModalClose.addEventListener('click', handleButtonModalClose);
  refs.backdrop.addEventListener('click', handlBackdropClose);
  window.addEventListener('keydown', handlEscapeClose);

  refs.buttonModalOpen.removeEventListener('click', handleButtonModalOpen);
};

const modalClose = () => {
  refs.backdrop.classList.add('is-hidden');

  refs.buttonModalClose.removeEventListener('click', handleButtonModalClose);
  refs.backdrop.removeEventListener('click', handlBackdropClose);
  window.removeEventListener('keydown', handlEscapeClose);

  refs.buttonModalOpen.addEventListener('click', handleButtonModalOpen);
};
