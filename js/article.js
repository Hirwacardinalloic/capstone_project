var uploadBtn = document.getElementById('uploadbtn');
uploadBtn.addEventListener('click', function(){
    addArticle();
});
//Adding an article and uploading its corresponding image in the firabase
function addArticle() {
    var articleTitle = document.getElementById('articleTitle').value;
    var publicDate = document.getElementById('publicdate').value;
    var content = document.getElementById('content').value;
    var image = document.getElementById('image').files[0];
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
        document.getElementById('uploadProgress').innerHTML = progress;

    },function(error){
        //error hangling
        console.log(error.message);
    },function(){
        //handling successful upload
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
            console.log(downloadURL);
            //getting image download url and save it to article collection
            firebase.database().ref('article/').push().set({
                article_title: articleTitle,
                publishDate: publicDate,
                image: downloadURL,
                content: content
            },function(error){
                if(error){
                    alert("Error while uploading");
                }else{
                    alert('successfully uploaded');
                    //form reset
                    document.getElementById('article_form').reset();
                }
            });
        });
    });
}
