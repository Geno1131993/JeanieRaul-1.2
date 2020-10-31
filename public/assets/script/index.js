

$(".tablink").on("click", function(event) {
    let contentID = this.id + "-content";
    let activeID = document.getElementsByClassName("active")[0].id;
    if(contentID != activeID){
        let active = document.getElementById(activeID);

        $(active).removeClass("active").addClass("inactive").hide();    


        let target = document.getElementById(contentID);
        $(target).fadeIn(500).addClass("active").removeClass("inactive");
    }
});


$(document).ready(()=>{

    $("#wrapper").css("width", $(window).width() + "px");
    $("#wrapper").css("height", $(window).height() + "px");
    $("#body").css("width", $(window).width() + "px");
    $("#body").css("height", $(window).height() + "px");

    $(".banner").css("width", $(window).width() + "px");
});



