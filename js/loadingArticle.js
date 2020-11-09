var docId = localStorage.getItem('article_id');
var articleTitle = document.getElementById('articleTitle');
var content = document.querySelector('.articleContent');
//Reading a specific article
db.collection('article').doc(docId).get().then((snapshot)=> {

    articleTitle.innerHTML = snapshot.data().article_title;
    content.innerHTML = snapshot.data().content;

});
    



