let modal;
let card;
let close = document.getElementById('close');

function showModal(imageNumber) {
    card = document.getElementById(`card${imageNumber}`);
    modal = document.getElementById('modal');
    modal.classList.remove('hidden');
    card.classList.remove('hidden');
}

close.onclick = function(event) {
        modal.classList.add('hidden');
        card.classList.add('hidden');
};
