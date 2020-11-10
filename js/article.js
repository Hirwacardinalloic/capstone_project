const form = document.querySelector('.form');


document.querySelector('.submit').addEventListener('click', (e) => {
    e.preventDefault();
    db.collection('article').add({
        article_title: form.articleTitle.value,
        content: form.content.value,
        publishDate: form.publicdate.value
    });
    form.articleTitle.value ='';
    form.content.value ='';
    form.publicdate.value = '';
    window.location.assign('edit');
});