//"fa fa-battery-three-quarters"
$("ul").on("click","li",function()
{
	$(this).toggleClass("completed");
});
$("ul").on("click","span",function(event)
{
    $(this).parent().fadeOut(500,function()
    	{
    		$(this).remove();
    	});
	event.stopPropagation();
});
$("input").keypress(function(event)
{

if(event.which == 65)
{
	var todoText = $(this).val();
	$("ul").append("<li><span><i class = 'fa fa-trash'></i></span> " +todoText+"</li> ");
}

	
});

$(".fa-plus").click(function()
{
$("input").fadeToggle();
});

