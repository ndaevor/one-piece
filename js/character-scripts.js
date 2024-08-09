document.addEventListener('DOMContentLoaded', () => {
    const seeMoreButton = document.getElementById('see-more');
    const hiddenCharacters = document.querySelector('.hidden-characters');

    if (seeMoreButton && hiddenCharacters) {
        // Ensure hidden characters are initially hidden
        hiddenCharacters.style.display = 'none';

        seeMoreButton.addEventListener('click', () => {
            if (hiddenCharacters.style.display === 'none' || hiddenCharacters.style.display === '') {
                hiddenCharacters.style.display = 'flex'; // Show hidden characters
                seeMoreButton.textContent = 'See Less'; // Change button text
            } else {
                hiddenCharacters.style.display = 'none'; // Hide characters
                seeMoreButton.textContent = 'See More'; // Change button text
            }
        });
    }
});
