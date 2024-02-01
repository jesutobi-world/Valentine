let modal;
let card;
let close = document.getElementById('close');
let body = document.getElementById('body');

function showModal(imageNumber) {
    card = document.getElementById(`card${imageNumber}`);
    modal = document.getElementById('modal');
    modal.classList.remove('hidden');
    card.classList.remove('hidden');
    body.classList.add('overflow-hidden');
}

close.onclick = function(event) {
        modal.classList.add('hidden');
        card.classList.add('hidden');
        body.classList.remove('overflow-hidden');
};
