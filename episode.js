document.addEventListener('DOMContentLoaded', () => {
    const expandButton = document.getElementById('expand-button');
    const moreEpisodes = document.getElementById('more-episodes');

    if (expandButton && moreEpisodes) {
        expandButton.addEventListener('click', () => {
            // Toggle the 'hidden' class on the moreEpisodes div
            moreEpisodes.classList.toggle('hidden');

            // Update button text based on visibility
            if (moreEpisodes.classList.contains('hidden')) {
                expandButton.textContent = 'Read More';
            } else {
                expandButton.textContent = 'Read Less';
            }
        });
    }
});
