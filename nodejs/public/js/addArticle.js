$(document).ready(function(){

    $('form').on('submit', function(e){
       
        var articleTitle = $('#articleTitle').val();
        var publicdate = $('#publicdate').val();
        var content = $('#content').val();

        $.ajax({
            type: 'POST',
            url: '/addArticle',
            data: {articleTitle:articleTitle, publicdate: publicdate, content: content},
            success: function(data){
                window.location.href = '127.0.0.1:3000/editArticle';
            }
        });

    });
    $('.delete').on('click', function(e){
        e.preventDefault();
        alert();
    });

});