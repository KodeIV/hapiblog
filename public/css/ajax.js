$(document).ready(function (){

	var $comments = $('#comments');
	var $author = $('#author');
	var $content = $('#comment');

	$.ajax({
		type:"GET",
		path: "/artcles/{id}", 
		url:"http://boiling-falls-8373.herokuapp.com/",
		success: function(comments){
			console.log('test');
			console.log("success", comments);
		 $.each(comments, function(i, comments){
		 	$comments.append('author:' + comments.author +', comment: '+comments.comment );
		 });
		},
		error: function(){
			alert('error loading comments');
		}
	});
});
