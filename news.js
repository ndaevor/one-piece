document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const newsArticle = this.closest('.news-article');
            const newsFull = newsArticle.querySelector('.news-full');
            const newsPreview = newsArticle.querySelector('.news-preview');
            
            if (newsFull.style.display === 'block') {
                newsFull.style.display = 'none';
                newsPreview.style.display = 'block';
                this.textContent = 'Read More';
            } else {
                newsFull.style.display = 'block';
                newsPreview.style.display = 'none';
                this.textContent = 'Read Less';
            }
        });
    });
});
