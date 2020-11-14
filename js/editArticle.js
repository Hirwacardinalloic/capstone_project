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
    pdate.innerHTML = "publication date";
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

     //Modal opening
     
    var modal = document.getElementById("myModal");

  

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    //filling the form modal with data
    var articleTitleId = document.querySelector('#articleTitle');
    var articleContent = document.querySelector('#articleContent');
    articleTitleId.value = doc.data().article_title;
    articleContent.innerHTML = doc.data().content;
   
    editBtn.addEventListener('click', function(){
        modal.style.display = "block";
    });
    // When the user clicks on <span> (x), close the modal
//     span.onclick = function() {
//     modal.style.display = "none";
//   }
     span.addEventListener('click', function(){
        modal.style.display = "none";
     });
  
  // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        }
    }


}

//getting data from firebase
db.collection('article').onSnapshot(snapshot=>{
    let changes = snapshot.docChanges();
    changes.forEach(change=>{
        if(change.type == 'added'){
            renderContent(change.doc);
        }
    });
});



