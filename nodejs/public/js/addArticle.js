$(document).ready(function(){

    $('form').on('submit', function(){
        var articleTitle = $('#articleTitle').val();
        var publicdate = $('#publicdate').val();
        var content = $('#content').val();

        $.ajax({
            type: 'post',
            url: '/addArticle',
            data: {articleTitle:articleTitle, publicdate: publicdate, content: content},
            success: function(data){
                location.assign('/viewArticle');
            }
        });

    });
});