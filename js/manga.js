document.addEventListener('DOMContentLoaded', () => {
    const expandButton = document.getElementById('expand-button');
    const moreChapters = document.getElementById('more-chapters');

    // Check if the elements exist
    if (expandButton && moreChapters) {
        expandButton.addEventListener('click', () => {
            // Toggle the 'hidden' class on the moreChapters div
            moreChapters.classList.toggle('hidden');

            // Update button text based on visibility
            if (moreChapters.classList.contains('hidden')) {
                expandButton.textContent = 'Show All Chapters';
            } else {
                expandButton.textContent = 'Show Less';
            }
        });
    }
});
