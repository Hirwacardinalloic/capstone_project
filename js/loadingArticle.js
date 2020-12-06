var docId = localStorage.getItem('article_id');

localStorage.setItem('article_id', "");
var articleTitle = document.getElementById('articleTitle');
var content = document.querySelector('.articleContent');
var contentImage = document.getElementById('content_image');
//Reading a specific article
db.collection('article').doc(docId).get().then((snapshot)=> {

    articleTitle.innerHTML = snapshot.data().article_title;
    content.innerHTML = snapshot.data().content;
    contentImage.setAttribute('src', snapshot.data().image);
    loadComments();

});


//Reading comments
function readComments() {
    var email = document.getElementById('yourEmail').value;
    var name = document.getElementById('yourName').value;
    var message = document.getElementById('yourComment').value;
    db.collection('comments').add({
        name: name,
        email: email,
        message: message,
   
});

}
