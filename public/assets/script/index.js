

$(".tablink").on("click", function(event) {
    let contentID = this.id + "-content";
    let activeID = document.getElementsByClassName("active")[0].id;
    let active = document.getElementById(activeID);

    $(active).removeClass("active").addClass("inactive").hide();


    let target = document.getElementById(contentID);
    $(target).fadeIn(500).addClass("active").removeClass("inactive");
});



