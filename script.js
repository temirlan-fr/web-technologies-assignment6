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

    $("#add-skill").on("click", function () {
        let skill = $("#skill-input").val().trim();

        if (skill === "") {
            $("#skill-message").text("Please enter a skill.");
            return;
        }

        $("#skills-list").append($("<li>").text(skill));
        $("#skill-input").val("");
        $("#skill-message").text("Skill added to the end of the list.");
    });

    $("#prepend-skill").on("click", function () {
        let skill = $("#skill-input").val().trim();

        if (skill === "") {
            $("#skill-message").text("Please enter a skill.");
            return;
        }

        $("#skills-list").prepend($("<li>").text(skill));
        $("#skill-input").val("");
        $("#skill-message").text("Skill added to the beginning of the list.");
    });

    $("#remove-skill").on("click", function () {
        if ($("#skills-list li").length === 0) {
            $("#skill-message").text("There are no skills to remove.");
            return;
        }

        $("#skills-list li").last().remove();
        $("#skill-message").text("The last skill was removed.");
    });

    $("#change-link").on("click", function () {
        if ($("#social-link").attr("href") === "https://github.com/temirlan-fr") {
            $("#social-link").attr("href", "https://github.com/temirlan-fr/web-technologies-assignment6");
            $("#social-link").text("My Project Repository");
        } else {
            $("#social-link").attr("href", "https://github.com/temirlan-fr");
            $("#social-link").text("My GitHub Profile");
        }

        $("#link-address").text($("#social-link").attr("href"));
    });
});
