

$(".tablink").on("click", function(event) {
    let contentID = this.id + "-content";
    let activeID = document.getElementsByClassName("active")[0].id;
    let active = document.getElementById(activeID);

    $(active).removeClass("active").addClass("inactive");
    $(active).hide();

    let target = document.getElementById(contentID);
    $(target).addClass("active").removeClass("inactive");
    $(target).show();
});



