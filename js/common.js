$(function(){
  //스크롤 했을때 메뉴 fixed로 변경, back_top 버튼 토글
  $(window).scroll(function(){
    var wScrollTop = $(window).scrollTop();//127(헤더 높이)보다 클때 메뉴바 따라내려오기
    if( wScrollTop > 127 ){
      $("header #b_nav").addClass("fixed");
      if (matchMedia("screen and (max-width: 480px)").matches) {
        $(".back_top").css("display","none");
      }else{
        $(".back_top").fadeIn();
      }
    }else{
      $("header #b_nav").removeClass("fixed");
      $(".back_top").fadeOut();
    }
  });

  $(".back_top").click(function(){
    $("html, body").animate({scrollTop:0}, 1000);
    return false;
  });
//search 버튼 클릭 함수
  $(".icon.search > img").click(function(){
    $(this).next().slideDown().css("display","flex");
    return false;
  });


//모바일 서브메뉴 토글 버튼 애니메이션 작동
  $(".submenu_btn").click(function(){
    if( $(this).hasClass("on") == false ){
      $(this).addClass("on");
      $(".left").css("animation","m_submenu_btnBe 0.5s ease forwards");
      $(".right").css("animation","m_submenu_btnAf 0.5s ease forwards");
      $(this).next().slideDown()
    }else{
      $(this).removeClass("on");
      $(".left").css("animation","re_m_submenu_btnBe 0.5s ease forwards");
      $(".right").css("animation","re_m_submenu_btnAf 0.5s ease forwards");
      $(this).next().slideUp()
    }
    return false;
  });


//메뉴열었을때 오버플로워 히든 , 닫았을때 오버플로워 오토 or null
$(".m_menuOpen").click(function(){
  $("html,body").css("overflow","hidden");
  $(this).parents("#m_header").find("#m_slideMenu").fadeIn("fast");
  $(this).parents("#m_header").find(".slideBar").css("transform","translateX(0%)")

  return false;
});
$("#m_slideMenu").click(function(){
  $("html,body").css("overflow","auto");
  $(this).fadeOut("fast");
  $(this).find(".slideBar").css("transform","translateX(-100%)");
});


});// document ready
