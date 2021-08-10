/*
click(): 해당 요소를 마우스 포인터로 눌렀다 떼었을 때 이벤트 발생
addClass(): 해당 요소에 클래스 추가
attr(): 해당 요소에 속성값을 가져옴
addClass(): 해당 요소에 클래스를 추가
removeClass(): 해당 요소의 클래스를 지움
prevAll(): 해당 요소 이전의 모든 요소 선택
nextAll(): 해당 요소 다음의 모든 요소 선택
*/
$(document).ready(function(){
    $("#container").addClass("start");
	$("nav li").click(function(){
        $("#container").css("max-width", "100%");
        var id=$(this).attr("data-rol");
        $("nav li").removeClass("on");
        $(this).addClass("on");
        $(".content").removeClass("prev this next");
        // 클릭 시 가지고 있던 클래스를 모두 지운다
        $("#" + id).addClass("this").prevAll().addClass("prev");
        // 클릭한 메뉴와 매칭되는 id에 this 클래스를 지정하고 그 앞의 모든 <section> 태그는 .prev 클래스를 지정한다
        $("#" + id).nextAll().addClass("next");
        // 클릭한 메뉴와 매칭되는 id의 뒤에 오는 <section> 태그는 .next 클래스를 지정한다
    });
    $(".logo_box").click(function(){
        $("nav li").removeClass("on");
        $(".content").removeClass("prev this next");
        $("#container").css("max-width", "1200px");
    });
});