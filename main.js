// All the function that manupilate the postPage
//array of post that hold object with text and id 
// id the increase every time that addPost invoked


// creatin object inside the array and push it




var spaceBook = function() {
    var posts = [];//Posts Array
    var comments = [];//Comments Array
    var id = 0 ; //id

    var renderPosts = function() {
        $(".divPost").remove();
        viewPosts();
    }

    var rederComments = function(){

    }

    var viewComments = function(){

    }
    // Refrereshing the array and the view 
    var viewPosts = function() {
        for (var key in posts) {
            $(".posts").append("<div class='divPost'><p class= 'post' data-id=" + posts[key].id +
                " > " + posts[key].text + "</p><button type='button' class='s'>REMOVE</button>" +
                "<button type='button' class='r'>REPLAY</button></div>");
        }
    }

    var addCommentForm = function(){
    	$('.divPost').append("<div class='commentDiv'><form><div class='form-group'><input type='text' id='comment-name' class='form-control' placeholder='User Name'><input type='text' id='comment-text' class='form-control' placeholder='Comment Text'><button class='btn btn-primary add-post comBtn' type='button'>Comments</button></form></div>");
    }

    var addPost = function(text) {
        posts.push({ 'text': text, 'id': id++ });
    }

    var addComments = function(name , text){
    	comments.push({'name': name, 'text':text , 'id' : id});
    }

    var remArr = function(id) {
        for (var key in posts) {
            if (id === posts[key].id) {
                posts.splice(key, 1);
            }
        }
    }

    return {
        addPost: addPost,
        renderPosts: renderPosts,
        remArr: remArr,
        addCommentForm: addCommentForm
    }
}


var app = spaceBook();



$(".postBtn").click(function() {
    var text = $("#post-name").val()
    app.addPost(text);
    app.renderPosts();


});


$('.posts').on("click", ".s", function() {
    var para = $(this).siblings(".post");
    var id = para.data("id");
    app.remArr(id);
    app.renderPosts();
});

$('.posts').on("click", ".r", function(){
	app.addCommentForm();
	});