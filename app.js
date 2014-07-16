$(document).ready(function(){
	
	/* Defining global variables */
	console.log('Welcome to console');
	var submissions = 0;

	/* List properties */
	$(".list-items").sortable();
	$(".list-items").disableSelection();

	/* Allows an "Enter" keystroke to work as a submit button for input field */
	function getItem() {
		$('.add-items').keydown(function (enter) {
			if (enter.keyCode == 13) {
				postItem();
			}
		});
	}

	getItem();

	/* Takes value entered above and makes it part of the list */
	function postItem() {
		var item = $('.add-items').val();
		var work = '<li><img class="check-box" src="checkbox.png"/>'+ item +'<img class="drag" src="drag.png"></li>';
		$('.list-items').prepend(work); /* taking the value defined above and putting it at front of list */
		 $('.add-items').val('');
	}


	/*Clears all items on list*/
	$(document).on("click", ".reset", function(){
		$(".list-items").empty();
		submissions = 0;
	});


/*Allows user to check off items*/
$(document).on("click", ".check-box", function(){
	console.log("Marking li as complete");
	$(this).closest('li').toggleClass("completed");

	if ($(this).attr("class") == "check-box") {
		this.src = this.src.replace("checkbox.png","checkmark.png");
		$('.archive').text("hide completed items");
	} else {
		this.src = this.src.replace("checkmark.png","checkbox.png");

	}
	$(this).toggleClass("on");
});


/* ARCHIVE BUTTON , work in progress */
$(document).on("click", ".archive", function(){

	if ($(".completed").is(":visible")) { 
		console.log("hiding completed items")
		$('.archive').text("show completed items");
		$('.completed').hide('fast')
	}
	else { 
		$('.completed').appendTo('.list-items').show('fast');
		console.log("showing completed items")
		$('.archive').text("hide completed items");
	}
});



});