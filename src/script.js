let modal;
let card;

function showModal(imageNumber) {
    card = document.getElementById(`card${imageNumber}`);
    modal = document.getElementById('modal');
    modal.classList.remove('hidden');
    card.classList.remove('hidden');
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.add('hidden');
        card.classList.add('hidden');
    }
};
