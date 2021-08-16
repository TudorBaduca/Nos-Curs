// $(".menu").click(function(){
//     $(".menu_bar").addClass("show");
//     event.stopPropagation();
// });

// $(window).click(function() {
//     $(".menu_bar").removeClass("show");
//   });

//   $('.menu_bar').click(function(event){
//     event.stopPropagation();
//   });

var firstVideo = videojs("first_video").player();

$(".video_with_button").click(function(){
    if(firstVideo.muted()){
        firstVideo.muted(false);
        $(".bi-volume-mute").css("display","none");
        $(".bi-volume-down").css("display","initial");
    }
    else{
        firstVideo.muted(true);
        $(".bi-volume-mute").css("display","initial");
        $(".bi-volume-down").css("display","none");
    }
})
$("#subscribe").click(function () {
    var mail = $("#input").val();
    $("#input").val("");
    $.ajax({
        url: 'https://api.nossocietyeducation.ro/email/subscribe',
        method: 'POST',
        data: JSON.stringify(mail),
        success: function (response) {
            // putem scrie intr-un <p> ca s-a facut subscribe cu succes
        }
    });

})
$("#submit2").click(function () {
    var mail = $("#input2").val();
    $("#input2").val("");
    $.ajax({
        url: 'https://api.nossocietyeducation.ro/email/subscribe',
        method: 'POST',
        data: JSON.stringify(mail),
        success: function (response) {
            // putem scrie intr-un <p> ca s-a facut subscribe cu succes
        }
    });



});