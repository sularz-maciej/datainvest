function menu_selector(){
    var parent;
    var content;
    var single;
    parent=$("#ruzam_breadcrumbs").find("li:nth-child(2) a");
    content=$.trim(parent.attr('href'));
    $("ul.RuzamMenuBundle_Top-Menu li a").each(function(){
        if($(this).attr('href')==content)
        $(this).addClass('selected');
    });

    if($("#ruzam_breadcrumbs").length>0 && !content)    {
        single=$("#ruzam_breadcrumbs").find("li:nth-child(2)");
        content=$.trim(single.html());
        $("ul.RuzamMenuBundle_Top-Menu li a:contains('"+content+"')").addClass("selected");
    }
}

function overlay(type,path){
    var document_width;
    var content_width;
    var content;

    document_width=$(document).width();
    content_width=$("#App_overlay_page_content").width();
    left=(document_width-content_width)/2;
    $("#App_overlay_page").fadeIn("slow");
    $("#App_overlay_page_content").css('left',left);
    $( "#App_overlay_page_content" ).animate({
        height: [ "toggle", "swing" ],
        opacity: "toggle"
    }, 1500, "linear", function() { /* Animation complete */ });

    if(type=='ajax'){
        $("#App_overlay_page_wrap").load(path);
    }else if(type=='local'){
        content=$(path).html();
        $("#App_overlay_page_wrap").html(content);
    }
}

$(document).ready(function(){
    //lightbox
    $('#Gallery a').lightBox();

    //prevent
    $("a.disabled").click(function(event) {
        event.preventDefault();
    });

    //overlay
    $("#App_overlay_page_content .close").click(function(){
        $( "#App_overlay_page_content" ).animate({
            height: [ "toggle", "swing" ],
            opacity: "toggle"
        }, 1500, "linear", function() {
            $("#App_overlay_page").fadeOut("fast");
            $("#App_overlay_page_wrap").html("");
        });
    });

    //universal menu selector
    menu_selector();

    //cookies
    var cookie_value = $.cookie("cookie_info");
    if(!cookie_value)
    $("#global-cookie-info").show();
    $("#close-cookie-info").click(function(){
        $.cookie('cookie_info', 'true', { expires: 365 });
        $("#global-cookie-info").hide();
    });
});

function anchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    console.log("get = " + $(window).scrollTop());
    if ($(window).scrollTop() != aTag.position().top) {
        $('html,body').animate({scrollTop: aTag.offset().top}, 'slow');
    }
}
