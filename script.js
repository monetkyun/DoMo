// Scroll on arrow/button
document.querySelector('.scroll-down').addEventListener('click', () => {
  document.getElementById('mini-letters').scrollIntoView({ behavior: 'smooth' });
});

// Open popup
document.querySelectorAll('.mini-letter').forEach(letter => {
  letter.addEventListener('click', () => {
    const title = letter.getAttribute('data-title');
    const img = letter.getAttribute('data-img');
    const content = letter.getAttribute('data-content');

    // Set popup content
    document.getElementById('popup-title').innerText = title;

    const popupText = document.getElementById('popup-text');
    if (img && content) {
      popupText.innerHTML = `
        <img src="${img}" alt="${title}" style="width: 100%; border-radius: 10px; margin-bottom: 10px;">
        <p>${content}</p>
      `;
    } else if (img) {
      popupText.innerHTML = `<img src="${img}" alt="${title}" style="width: 100%; border-radius: 10px;">`;
    } else {
      popupText.innerText = content || "";
    }

    // Replace envelope image if not opened yet
    if (!letter.classList.contains('opened')) {
      const envelopeImg = letter.querySelector('img');
      envelopeImg.src = "image/Envelope_open.png";
      letter.classList.add('opened');
    }

    // Show popup
    document.getElementById('popup').classList.remove('hidden');
  });
});

// Close popup
function closePopup() {
  document.getElementById('popup').classList.add('hidden');
}


