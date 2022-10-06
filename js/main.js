// WEB303 Assignment 2
$(document).ready(function(){
    
    $("#prospect").click(function()
    {      
        $("#content").load("prospect.html", function(responseTxt1, prospect1, xhr)
        {
            $("#content").fadeIn(1000);
        });

    });


    $("#convert").click(function()
    {
        $("#content").load("convert.html", function(responseTxt2, convert1, xhr)
        {
            $("#content").fadeIn(1000);
        });
    });


    $("#retain").click(function()
    {
        $("#content").load("retain.html", function(responseTxt3, retain1, xhr)
        {
            $("#content").fadeIn(1000);
        });
      
    });

});

