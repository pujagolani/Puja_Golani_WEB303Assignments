function AjaxData(){
    $.ajax({
        url: "team.json",
        beforeSend: function() {
            $("div#team").html(`<h1>Loading...</h1>`);
        },
        error: function(xhr){
            alert("An error occured...");
        },
        success: function(result){
            setTimeout(() => {
                $("div#team").html("");
                $.each(result, (index, data)=>{
                    $("div#team").append(`<h2>${data.name}</h2><h5>${data.position}</h5><p>${data.bio}</p>`);
                });
            }, 3000);
        }
    });
}


function JSONData(){
    $.getJSON( "team.json", function( result ) {    
        $.each( result, function( index, data ) {
            $("div#team").append(`<h2>${data.name}</h2><h5>${data.position}</h5><p>${data.bio}</p>`);
        });
    });
}


$(document).ready(function(){
    AjaxData();
    //JSONData();
});