

$(document).ready(function(){
    
    const content = document.querySelector('.content');

function renderContent(doc) {
    let singleBlog = document.createElement('div');
    singleBlog.setAttribute('class', 'singleBlog');
    let image = document.createElement('img');
    image.setAttribute('src', doc.data().image);
    let blogContent = document.createElement('div');
    blogContent.setAttribute('class', 'blogContent');
    let h3 = document.createElement('h3');
    h3.innerHTML = doc.data().article_title;
    let p =document.createElement('p');
    let pdate = document.createElement('a');
    pdate.innerHTML = doc.data().publishDate;
    let buttonsDiv = document.createElement('div');
    buttonsDiv.setAttribute('class', 'buttons');
    buttonsDiv.setAttribute('id', doc.id);
    let editBtn = document.createElement('a');
    editBtn.setAttribute('id', doc.id);
    editBtn.setAttribute('class', 'btn edit');
    editBtn.innerHTML = "Edit"
    let deleteBtn = document.createElement('a');
    deleteBtn.setAttribute('id', doc.id);
    deleteBtn.setAttribute('class', 'btn delete');
    deleteBtn.innerHTML = "Delete";
    let publishBtn = document.createElement('a');
    publishBtn.setAttribute('id', doc.id);
    publishBtn.setAttribute('class', 'btn publish');
    publishBtn.innerHTML = "Publish";

    singleBlog.appendChild(image);
    singleBlog.appendChild(blogContent);
    blogContent.appendChild(h3);
    blogContent.appendChild(p);
    p.appendChild(pdate);
    blogContent.appendChild(buttonsDiv);
    buttonsDiv.appendChild(editBtn);
    buttonsDiv.appendChild(deleteBtn);
    buttonsDiv.appendChild(publishBtn);
    content.appendChild(singleBlog);

    //deleting data

    deleteBtn.addEventListener('click', (e)=>{
        e.stopPropagation();
        let dataId = e.target.parentElement.getAttribute('id');
        db.collection('article').doc(dataId).delete();
    });

    //publishing an article
    publishBtn.addEventListener('click', function(e){
        e.preventDefault();
        db.collection('article').doc($(this).attr('id')).update({
            status: 'published'
        });
        
        loadUnpublishedArticles();
    });
    //Persing the article id to the update page
    editBtn.addEventListener('click', function() {
        localStorage.setItem('docIdUpdate', $(this).attr('id'));
        location.assign('updateArticle.html');
    });
   
 
  
  

    


}

//getting data from firebase
function loadUnpublishedArticles() {
    
    db.collection('article').where('status', '==', 'not_published').get().then((snapshot)=>{
        snapshot.docs.forEach(doc=>{
            renderContent(doc);
        });
    });
}
loadUnpublishedArticles();
$('.btnUpdate').click(function(e) {
    e.preventDefault();
    alert('Hello');
});

});
