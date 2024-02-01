function showModal(imageNumber){
    const card = document.getElementById(`card${imageNumber}`);
    const modal = document.getElementById('modal');
    modal.classList.remove('hidden');
    card.classList.remove('hidden');
    
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}