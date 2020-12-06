var docIdUpdate = localStorage.getItem('docIdUpdate');
db.collection('article').doc(docIdUpdate).get().then(snapshot=>{
    document.getElementById('titleUpdate').value = snapshot.data().article_title;
    document.getElementById('contentUpdate').value = snapshot.data().content;
  
});
document.getElementById('updateArticle').addEventListener('click', function(e) {
    e.preventDefault();
    updateArticle();
    localStorage.setItem('docIdUpdate', "");
    
});

function updateArticle() {
    //getting fields data
    var articleTitle = document.getElementById('titleUpdate').value;
    var statusUpdate;
    var contentUpdate = document.getElementById('contentUpdate').value;
    //Getting the selected value
    const radioButtons = document.querySelectorAll('input[name="statusUpdate"]');
    for(const radioB of radioButtons) {
        if(radioB.checked){
            statusUpdate= radioB.value;
            break;
        }
    }
    //updating article data
   if(confirm('You are about to change the article info')){
       alert(statusUpdate);
    db.collection('article').doc(docIdUpdate).update({
        article_title: articleTitle,
        status: statusUpdate,
        content: contentUpdate
    });
    document.getElementById('update-form').reset();
   }
   
}