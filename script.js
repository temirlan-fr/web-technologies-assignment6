$(document).ready(function () {
    console.log("jQuery is ready!");

    $("h3").css("font-size", "20px");
    $("#greeting").text("Hello! I am Temirlan Bolat.");
    $(".headline").css("font-weight", "bold");

    $("#light-theme").on("click", function () {
        $("body").removeClass("dark-theme");
        $("#light-theme").attr("aria-pressed", "true");
        $("#dark-theme").attr("aria-pressed", "false");
    });

    $("#dark-theme").on("click", function () {
        $("body").addClass("dark-theme");
        $("#light-theme").attr("aria-pressed", "false");
        $("#dark-theme").attr("aria-pressed", "true");
    });

    $("#hide-about").on("click", function () {
        $("#about-details").hide();
    });

    $("#show-about").on("click", function () {
        $("#about-details").show();
    });

    $("#toggle-about").on("click", function () {
        $("#about-details").toggle();
    });

    $("#fade-in").on("click", function () {
        $(".gallery img").fadeIn(600);
    });

    $("#fade-out").on("click", function () {
        $(".gallery img").fadeOut(600);
    });

    $("#fade-toggle").on("click", function () {
        $(".gallery img").fadeToggle(600);
    });

    $(".slide-heading button").on("click", function () {
        $(this).parent().next(".slide-panel").slideToggle(400);
    });

    $("#open-panels").on("click", function () {
        $(".slide-panel").slideDown(400);
    });

    $("#close-panels").on("click", function () {
        $(".slide-panel").slideUp(400);
    });
});
