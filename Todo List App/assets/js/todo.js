// check off
$("ul").on("click", "li", function(){
	$(this).toggleClass("done");
})

// remove
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(700, function() {
		$(this).remove();
	});
	// not to trigger the following actions
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	// hit enter
	if (event.which === 13) {
		// type content
		var newTodo = $(this).val();
		// add to list
		$("ul").append("<li><span>X</span>" + newTodo + "</li>");
	}
});