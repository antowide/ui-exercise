$(function() {
    console.log("DOM is ready!");

    $(".sidebar-trigger").click(function() {
         $(".sidebar").toggle("slow");
         $("main").toggleClass("xxx", "slow");
    });

    $(".no-cssgrid .sidebar-trigger").click(function() {
         $(".no-cssgrid main .content").toggleClass("xxx", "slow");
    });

});
