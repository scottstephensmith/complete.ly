$(document).ready(function(){
	
	   /*Defining global variables*/
    console.log('Welcome to console');
    var submissions = 0;
    var checkMark = '<span class="cross-off"></span>'
    var xMark = '<span class="delete"></span>'

	$(".list-items").sortable();
	$(".list-items").disableSelection();

	/*Allows an "Enter" keystroke to work as a submit button for input field*/
    function getItem() {
        $('.add-items').keydown(function (enter) {
            if (enter.keyCode == 13) {
                postItem();
            }
        });
    }

    getItem();

    /*Takes returned value from previous function and manipulates it*/
    function postItem() {
        var item = $('.add-items').val();
        var work = '<li><img class="check-box" src="checkbox.png"/>'+ item +'<img class="drag" src="drag.png"></li>';
        $('.list-items').prepend(work);
        $('.add-items').val('');
        $('.list-items p:first-child')
        .css('opacity', "0")
        .css("margin-top", "-20px")
        .animate(
            { opacity: "1" },
            { queue: true, duration: 'slow' }
        )
        .animate(
            {marginTop: "0px"},
            { queue: false, duration: 'slow' }
        );
    }

});

/*Clears all items on list*/
$(document).on("click", ".reset", function(){
    $(".list-items").empty();
    submissions = 0;
});

/*Allows user to delete items*/
$(document).on("click", ".delete", function(){
    $(this).closest('p').fadeOut(300);
});

/* Checking on and off list items
$(".check-box").on("click", function(){
	console.log("checking off items");
	$(this).closest('li').addClass("completed");
	$(this).addClass('hide');
	$(this).closest('.check-mark').removeClass('hide');

});*/


/*Allows user to check off items*/
$(document).on("click", ".check-box", function(){
        console.log("Marking li as complete");
        $(this).closest('li').toggleClass("completed");
        
        if ($(this).attr("class") == "check-box") {
      	this.src = this.src.replace("checkbox.png","checkmark.png");
    	} else {
      	this.src = this.src.replace("checkmark.png","checkbox.png");
    	}
    	$(this).toggleClass("on");
  });


