var docId = localStorage.getItem('article_id');
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
        docIdentifier : docId
    });
    
    document.getElementById('commentForm').reset();
    loadComments();

}

document.getElementById('submitComment').addEventListener('click', function(e){
    e.preventDefault();
    readComments();
});

//Loading comments on the page
function loadComments() {

    db.collection('comments').where('docIdentifier', '==', docId).get().then((snapshot) => {
        document.querySelector('.CommentsArea').innerHTML = "";
        snapshot.docs.forEach(doc => {
            renderContent(doc);
        });
    });
}
function renderContent(doc) {
    var commentSection = document.querySelector('.CommentsArea');
    let name = document.createElement('h3');
    name.innerHTML = doc.data().name;
    let message = document.createElement('div');
    message.setAttribute('class', 'message');
    message.innerHTML = doc.data().message;
    let comment = document.createElement('div');
    comment.setAttribute('class', 'A_comment');
    comment.appendChild(name);
    comment.appendChild(message);
    commentSection.appendChild(comment);
    

}




