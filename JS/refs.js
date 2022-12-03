export default function getRefs() {
  return {
    modal: document.querySelector('.modal'),
    backdrop: document.querySelector('.backdrop'),
    buttonModalClose: document.querySelector('.button_modal-close'),
    buttonModalOpen: document.querySelector('.button_modal-open'),
  };
}
