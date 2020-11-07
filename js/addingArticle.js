const contentDiv = document.querySelector('.others');

function renderContent(doc) {
    let singleBlog = document.createElement('div');
    singleBlog.setAttribute('class', 'singleBlog');
    let blogImage= document.createElement('img');
    singleBlog.appendChild(blogImage);
    blogImage.setAttribute('src', doc.data().image);
    let blogContent = document.createElement('div');
    singleBlog.appendChild(blogContent);
    blogContent.setAttribute('class', 'blogContent');
    let articleTitle= document.createElement('h3');
    blogContent.appendChild(articleTitle);
    articleTitle.innerHTML = doc.data().article_title;
    let readMore = document.createElement('a');
    blogContent.appendChild(readMore);
    readMore.setAttribute('class', 'btn');
    readMore.setAttribute('data-id', doc.id);
    readMore.innerHTML = "Read more";
    
    
    contentDiv.appendChild(singleBlog);

    readMore.addEventListener('click', () => {
        //sending the document Id from blog page to read_article page
        localStorage.setItem('article_id', doc.id);
        window.location.href='read_article.html';
    });

}

//getting documents from firebase
db.collection('article').get().then( (snapshot) => {
    snapshot.docs.forEach(doc => {
        renderContent(doc);
    });
});

