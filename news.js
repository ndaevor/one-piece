document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtn = document.querySelector('.read-more-btn');
    const newsFull = document.querySelector('.news-full');
    const newsArticle = document.querySelector('.news-article');

    if (newsFull) {
        readMoreBtn.addEventListener('click', function() {
            if (newsFull.style.display === 'none' || !newsFull.style.display) {
                newsFull.style.display = 'block'; // Show the full news content
                readMoreBtn.textContent = 'Read Less'; // Change button text
                newsArticle.style.maxHeight = 'none'; // Remove the height restriction
            } else {
                newsFull.style.display = 'none'; // Hide the full news content
                readMoreBtn.textContent = 'Read More'; // Change button text
                newsArticle.style.maxHeight = '300px'; // Reset the height
            }
        });
    }
});
