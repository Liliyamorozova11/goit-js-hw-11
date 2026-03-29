export function createGallery(images) {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
          <li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
              <img
                class="gallery-image"
                src="${webformatURL}"
                alt="${tags}"
              />
            </a>
            <div class="info">
              <p class="info-item">
                <span class="info-title">Likes</span>
                <span>${likes}</span>
              </p>
              <p class="info-item">
                <span class="info-title">Views</span>
                <span>${views}</span>
              </p>
              <p class="info-item">
                <span class="info-title">Comments</span>
                <span>${comments}</span>
              </p>
              <p class="info-item">
                <span class="info-title">Downloads</span>
                <span>${downloads}</span>
              </p>
            </div>
          </li>
        `;
      }
    )
    .join('');
}

export function clearGallery(container) {
  container.innerHTML = '';
}

export function showLoader(loader) {
  loader.classList.add('is-visible');
}

export function hideLoader(loader) {
  loader.classList.remove('is-visible');
}