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

    // Replace the envelope image to show it's opened
    const envelopeImg = letter.querySelector('img');
    envelopeImg.src = "image/Envelope_open.png"; // replace with your opened image
    
    if (!letter.classList.contains('opened')) {
        envelopeImg.src = "image/Envelope_open.png";
        letter.classList.add('opened');
      }
      
      document.getElementById('popup').classList.remove('hidden');
    });
  });
  
  // Close popup
  function closePopup() {
    document.getElementById('popup').classList.add('hidden');
  }

  if (input === "Dominik") {
  window.location.href = "actualpage.html";
}
