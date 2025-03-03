import { fetchGallery, GalleryItem } from './fetchGallery';

document.addEventListener('DOMContentLoaded', async () => {
  const galleryContainer = document.querySelector('.gallery-container') as HTMLElement;
  const images: GalleryItem[] = await fetchGallery();

  galleryContainer.innerHTML = images
    .map(
      (img) => `
      <div class="gallery-item">
        <img src="${img.imageUrl}" alt="${img.title}">
        <p><strong>${img.title}</strong></p>
        <p>Category: ${img.category}</p>
        <p>Tags: ${img.tags ? img.tags.join(', ') : 'No tags'}</p>
      </div>
    `
    )
    .join('');
});
.gallery-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 2rem;
}

.gallery-item img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
}

.gallery-item img:hover {
    transform: scale(1.05);
}

.gallery-item p {
    margin-top: 0.5rem;
    font-weight: bold;
    color: var(--charcoal);
}
