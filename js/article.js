var addArticlebtn = document.getElementById('addArticlebtn');
var title;
var publicDate;
var content;

addArticlebtn.addEventListener('click', function(e){
    e.preventDefault();
    title = document.querySelector('#articleTitle').value;
    publicDate = document.querySelector('#publicdate').value;
    content = document.querySelector('#content').value;
    if(title=='' || publicDate=='' || content==''){
        alert("All fields are required");
    }else {
        addArticle(title,publicDate,content);
    }
    
    
});
//Adding an article and uploading its corresponding image in the firabase
function addArticle(title,publicDate,content) {
    var image;
    image = document.getElementById('image').files[0];
    
    
    if(image) {
        //get the image name
    var imageName = image.name;
    //firebase storage reference(the path where the image will be saved)
    var storageRef = firebase.storage().ref('images/'+imageName);
    //Image uploading to selected storage reference
    var uploadTask = storageRef.put(image);

        //getting the state of image uploading
        uploadTask.on('state_changed', function(snapshot){
            //getting task progress
            var progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
            document.getElementById('uploadProgress').innerHTML ="Article added successfully";
    
        },function(error){
            //error hangling
            alert(error.message);
        },function(){
            //handling successful upload
            
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
                db.collection('article').add({
                    article_title: title,
                    publishDate: publicDate,
                    content: content,
                    image: downloadURL,
                    status: 'not_published'
                });
               
            });
        });
        document.getElementById('uploadProgress').innerHTML ="";
        document.getElementById('article_form').reset();
    }else {
        alert("Choose an image please");
    }
   
}


