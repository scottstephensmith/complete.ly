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
        var work = '<li><div class="check-box"></div>'+ item +'<div class="drag"></div></li>';
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

/*Allows user to check off items*/
$(document).on("click", ".check-box", function(){
        console.log("Marking li as complete");
        $(this).closest('li').toggleClass("completed");
        
       
        /*$(this).closest('li').appendTo(".list-items").show('fast');*/
});

/* $(".check-box").toggle(function () {
    
    $("#user_button").addClass("active");
}, function () {
    $("#user_button").removeClass("active");
}); */