$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
         // alert("Спасибо, Ваше сообщение отправлено!");
         $('.done').css('visibility', 'visible');
         $('.done').css('opacity', '1');
			setTimeout(function() {
            $('.done').css('visibility', 'hidden');
            $('.done').css('opacity', '0');
				// Done Functions
				th.trigger("reset");
			}, 5000);
		});
		return false;
	});
});

// SLICK SLIDER !!!!!!!!!!!!!!!!!!
 $('.work__block-slider').slick({
    dots: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>'
 });


 const clock = document.querySelector('#clock');
     let date = new Date();
     let yy = date.getFullYear();
 
     clock.innerHTML = `${yy}`;


// ANCHOR !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

$('[href^="#anchor"]').on('click', function (event) {
   event.preventDefault();
 
   const $header = $('.header');
 
   const headerHeight = $header.height();
   
   
 
   const $link = $(this);
   const selector = $link.attr('href');
   const $target = $(selector);
   const offset = $target.offset().top;
 
   $('html, body').animate({scrollTop: offset - headerHeight}, 550);
   $header.css('top', '');
 });
     
// MENU!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

$(document).ready(function() {
   $('.header__burger').click(function(event){
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });
});

$(document).ready(function() {
   $('.header__link').click(function(event){
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });
});





