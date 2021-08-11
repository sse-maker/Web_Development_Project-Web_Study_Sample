$(document).ready(function(){
    /*
    click(): 해당 요소를 마우스 포인터로 눌렀다 떼었을 때 이벤트 발생
    addClass(): 해당 요소에 클래스 추가
    attr(): 해당 요소에 속성값을 가져옴
    addClass(): 해당 요소에 클래스를 추가
    removeClass(): 해당 요소의 클래스를 지움
    prevAll(): 해당 요소 이전의 모든 요소 선택
    nextAll(): 해당 요소 다음의 모든 요소 선택
    */
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
    /*
    .eq(index): eq 메서드는 요소에서 하나를 선택함, 그러므로 요소의 집합에서 추출할 수 있도록 index가 제공되어야 함 (이때 index는 정수만 가능, 스크립트에서의 숫자는 0으로 시작되기 때문에 첫 번째 태그는 0번째로 표기)
    .insertAfter(""): 조건에 일치되는 요소 뒤에 해당 요소를 삽입 (A.insertAfter(B)는 B 뒤에 A를 추가하는 것을 뜻함)
    */
    $(".roll_left").click(function(){
        $(".book_roll li").eq(0).insertAfter(".book_roll li:last-child");
    });
    $(".roll_right").click(function(){
        $(".book_roll li").eq(-1).insertBefore(".book_roll li:first-child");
    });
    $(".book_roll li").click(function(){
        var _this =$(this);
        var liurl =_this.data("url");
        $(".notebook").html();
        $.ajax({
            type : 'post',
            url : liurl,
            datatype : 'html',
            success : function(data) {
                $(".notebook").html(data);
            }
        });
    });
});