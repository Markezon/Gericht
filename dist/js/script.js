const menu = document.querySelector('.nav'),
			burger = document.querySelector('.burger'),
			mobileBack = document.querySelector('.mobile-back'),
			overlay = document.querySelector('.overlay');

const lockScroll = () => {
	document.body.classList.add('lock');
}

const unlockScroll = () => {
	document.body.classList.remove('lock');
}

const initialMenu = () => {
	document.querySelector('.nav__list--dropdown').classList.remove('transformation');
	document.querySelector('.nav').querySelector('.nav__list').classList.remove('transformation');
	scrollTop();
}

const scrollTop = () => {
	menu.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
}

burger.addEventListener('click', () => {
	menu.classList.add('open');
	overlay.classList.add('open');
	lockScroll();
	initialMenu();
});

overlay.addEventListener('click', () => {
	menu.classList.remove('open');
	overlay.classList.remove('open');
	unlockScroll();
});

menu.addEventListener('click', (e) => {
	if (e.target.classList.contains('nav__link--drop')) {
		e.preventDefault();
		e.target.closest('.nav__list').classList.add('transformation');
		e.target.closest('.nav__item').querySelector('.nav__list--dropdown').classList.add('transformation');
		scrollTop();
	}

	if (e.target.classList.contains('mobile-back__link')) {
		e.preventDefault();
		e.target.closest('.nav__list--dropdown').classList.remove('transformation');
		e.target.closest('.nav').querySelector('.nav__list').classList.remove('transformation');
		scrollTop();
	}

	if (e.target.classList.contains('nav__link') && !e.target.classList.contains('nav__link--drop')) {
		e.preventDefault();
		menu.classList.remove('open');
		overlay.classList.remove('open');
		unlockScroll();
	}
});







/* const menu = document.querySelector('.nav'),
			burger = document.querySelector('.burger'),
			mobileBack = document.querySelector('.mobile-back'),
			overlay = document.querySelector('.overlay');

const lockScroll = () => {
	document.body.classList.add('lock');
}

const unlockScroll = () => {
	document.body.classList.remove('lock');
}

const initialMenu = () => {
	document.querySelector('.nav__list--dropdown').classList.remove('transformation');
	document.querySelector('.nav').querySelector('.nav__list').classList.remove('transformation');
	scrollTop();
}

const scrollTop = () => {
	menu.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
}

burger.addEventListener('click', () => {
	menu.classList.add('open');
	overlay.classList.add('open');
	lockScroll();
	initialMenu();
});


overlay.addEventListener('click', () => {
	menu.classList.remove('open');
	overlay.classList.remove('open');
	unlockScroll();
});

menu.addEventListener('click', (e) => {
	if (e.target.classList.contains('nav__link--drop')) {
		e.preventDefault();
		e.target.closest('.nav__list').classList.add('transformation');
		e.target.closest('.nav__item').querySelector('.nav__list--dropdown').classList.add('transformation');
		scrollTop();
	}

	if (e.target.classList.contains('mobile-back__link')) {
		e.preventDefault();
		e.target.closest('.nav__list--dropdown').classList.remove('transformation');
		e.target.closest('.nav').querySelector('.nav__list').classList.remove('transformation');
		scrollTop();
	}

	if (e.target.classList.contains('nav__link') && !e.target.classList.contains('nav__link--drop')) {
		e.preventDefault();
		menu.classList.remove('open');
		overlay.classList.remove('open');
		unlockScroll();
	}
}); */



///swiper


const swiper = new Swiper('.swiper', {

	effect: 'fade',
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 20,
	autoHeight: false,
	speed: 1000,
	loop: true,
	preloadImages: false,
	lazy: {
		loadPrevNext: true,
	},






	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	on: {
		init: function () {
			const controll = document.querySelectorAll('.swiper-pagination .swiper-pagination-bullet');
			controll.forEach((el, index) => {
				let num;
				if (index < 10) {
					num = `0`;
				}
				el.innerHTML = `${num}${index + 1}`;
			});
		},
/* 		breakpoint: function (swiper, info) {
			!info.autoHeight ? document.querySelector('.body-main-slider__swiper').style.height = 'auto' : '';
			swiper.updateSize();
		}, */
	}

	
	
/*   breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    }
  }, */
});


const swiper1 = new Swiper('.swiper1', {
	// Optional parameters 
	loop: true,
	slidesPerView: 2.3,
	spaceBetween: 32,
	slideClass: 'swiper-slide1',
	wrapperClass: 'swiper-wrapper1',
	centeredSlides: true,
	slideToClickedSlide: true,

	mousewheel: {
		invert: true,
	  },

	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
	  },
	
  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination1',
	  bulletClass:'swiper-pagination1-bullet',
	  bulletActiveClass:'swiper-pagination1-bullet-active',
	  clickable: true,    
	},
  
});


/////

const defaultSelect = () => {
	const element = document.querySelector('.default');
  const choices = new Choices(element, {
		searchEnabled: false,
	});

	let ariaLabel = element.getAttribute('aria-label');
	element.closest('.choices').setAttribute('aria-label', ariaLabel);
};

defaultSelect();

const multiDefault = () => {
	const elements = document.querySelectorAll('.multi-default');
	elements.forEach(el => {
		const choices = new Choices(el, {
			searchEnabled: false,
		});
	});
	
}

multiDefault();



///////////AirDatepicker

new AirDatepicker('#airdatepicker', {
	
	selectedDates: [new Date()],
	position: 'bottom center',
	locale: {
		days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
		months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		today: 'Today',
		clear: 'Clear',
		dateFormat: 'MM/dd/yyyy',
		timeFormat: 'hh:mm aa',
		firstDay: 0
	}
	
		
});

document.querySelector('.bar').addEventListener('click', () => {
	document.querySelector('.menu').classList.add('bar');
	document.querySelector('.menu').classList.remove('food');
	document.querySelector('.menu').classList.remove('desserts');
});

document.querySelector('.food').addEventListener('click', () => {
	document.querySelector('.menu').classList.add('food');
	document.querySelector('.menu').classList.remove('desserts');
	document.querySelector('.menu').classList.remove('bar');
});

document.querySelector('.desserts').addEventListener('click', () => {
	document.querySelector('.menu').classList.add('desserts');
	document.querySelector('.menu').classList.remove('food');
	document.querySelector('.menu').classList.remove('bar');
});

/* videojs(document.querySelector('.video-js')); */


//////////////////////////////////


$(document).ready(function(){
 
  //tab slide left
  function toggleSlide(item) {
		$(item).each(function(i) {
			$(this).on('click', function(e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			})
		});
	};

	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__back');
	
	//Modal

	$('[data-modal=consultation]').on('click', function() {
		$('.overlay2, #consultation').fadeIn('slow');
	});
	$('.modal__close').on('click', function() {
		$('.overlay2, #consultation, #thanks, #order').fadeOut('slow');
	});

	$('.button_mini').each(function(i) {
		$(this).on('click', function() {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay2, #order').fadeIn('slow');
		});
	});





    //scroll

    $(window).scroll(function() {
      if ($(this).scrollTop() > 1000) {
        $('.pageup').fadeIn();
      } else {
        $('.pageup').fadeOut();
      }
    });
    
    $("a[href^='#']").click(function(){
      const _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });
  
    $("a[href^='#']").click(function(){
      const _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });


    


});