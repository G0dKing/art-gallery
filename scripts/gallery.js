// ./scripts/gallery.js

let currentImageIndex = 0;
let currentGallery = '';

function openModal(gallery) {
    currentGallery = gallery;
    currentImageIndex = 1;
    document.getElementById('modal-image').src = `${gallery}${currentImageIndex}.jpg`;
    document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

function changeImage(offset) {
    currentImageIndex += offset;
    if (currentImageIndex < 1) currentImageIndex = 1;
    const imgSrc = `${currentGallery}${currentImageIndex}.jpg`;
    document.getElementById('modal-image').src = imgSrc;
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        closeModal();
    }
};

// Add swipe functionality for mobile devices (you may need a library for this)
