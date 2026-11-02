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
});
