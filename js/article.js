const form = document.querySelector('.form');


document.querySelector('.submit').addEventListener('click', (e) => {
    e.preventDefault();
    db.collection('article').add({
        article_title: form.articleTitle.value,
        content: form.content.value
    });
    form.articleTitle.value ='';
    form.content.value ='';
});