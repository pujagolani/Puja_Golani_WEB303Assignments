$(document).ready(function () {
  $(".card-header").click(function () {
    // self clicking close
    if ($(this).next(".card-body").hasClass("active")) {
      $(this).next(".card-body").removeClass("active").slideUp();
      $(this).children("span").removeClass("fa-minus").addClass("fa-plus");
    } else {
      $(".card .card-body").removeClass("active").slideUp();
      $(".card .card-header span").removeClass("fa-minus").addClass("fa-plus");
      $(this).next(".card-body").addClass("active").slideDown();
      $(this).children("span").removeClass("fa-plus").addClass("fa-minus");
    }
  });
});

//accordian code
$('.accordian_box:first').addClass('active')
$('.accordian_box:first').children('.acc_trigger').children('i').addClass('fa-minus')
$('.accordian_box:first').children('.acc_trigger').addClass('selected').next('.acc_container').show()

$('.acc_trigger').click(function(event){
  if($(this).hasClass('selected')){
    $(this).removeClass('selected');
    $(this).children('i').removeClass('fa-minus');
    $(this).next().slideUp();
    $(this).parent().removeClass('active');
  }else{
    $('.acc_trigger').removeClass('selected');
    $(this).addClass('selected');
    $('.acc_trigger').children('i').removeClass('fa-minus');
    $(this).children('i').addClass('fa-minus');
    $('.acc_trigger').next().slideUp();
    $(this).next().slideDown();
    $('.accordian_box').removeClass('active');
    $(this).parent().addClass('active');

  }
});


$('.tab_container:first').show();
	$('.tab_navigation li:first').addClass('active');

	$('.tab_navigation li').click(function(event) {
		index = $(this).index();
		$('.tab_navigation li').removeClass('active');
		$(this).addClass('active');
		$('.tab_container').hide();
		$('.tab_container').eq(index).show();
	});

	$('.tab_container1:first').show();
	$('.tab_navigation1 li:first').addClass('active');

	$('.tab_navigation1 li').click(function(event) {
		index = $(this).index();
		$('.tab_navigation1 li').removeClass('active');
		$(this).addClass('active');
		$('.tab_container1').hide();
		$('.tab_container1').eq(index).show();
	});