const images = [
    'images/image1.jpeg',
    'images/image2.jpeg',
    'images/image3.jpeg',
    'images/image4.jpeg',
    'images/image5.jpeg',
    'images/image6.jpeg',
    'images/image7.jpeg',
    'images/image8.jpeg',
    'images/image9.jpeg',
    'images/image10.jpeg',
    'images/image11.jpeg',
    'images/image12.jpeg',
    'images/image13.jpeg',
    'images/image14.jpeg',
    'images/image15.jpeg'
    'images/image16.jpeg',
    'images/image17.jpeg',
    'images/image18.jpeg',
    'images/image19.jpeg',
    'images/image20.jpeg',
    'images/image21.jpeg',
    'images/image22.jpeg',
    'images/image23.jpeg',
    'images/image24.jpeg',
    'images/image25.jpeg'
    'images/image27.jpeg'
    // Add more image paths as needed
];

let currentPage = 1;
const imagesPerPage = 12;

function renderGallery() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = Math.min(startIndex + imagesPerPage, images.length);
    for (let i = startIndex; i < endIndex; i++) {
        const col = document.createElement('div');
        col.className = 'col-md-3 mb-4';
        const img = document.createElement('img');
        img.src = images[i];
        img.alt = `Image ${i + 1}`;
        img.className = 'img-fluid gallery-image';
        img.onclick = function() { openImage(images[i]); };
        col.appendChild(img);
        gallery.appendChild(col);
    }
}

function changePage(direction) {
    const maxPage = Math.ceil(images.length / imagesPerPage);
    if ((currentPage === 1 && direction === -1) || (currentPage === maxPage && direction === 1)) {
        return;
    }
    currentPage += direction;
    renderGallery();
}

function openImage(src) {
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popup-image');
    popup.style.display = 'flex';
    popupImage.src = src;
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// Initial rendering of the gallery
renderGallery();
