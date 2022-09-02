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



///swiper


const swiper = new Swiper('.swiper', {
	mousewheel: {
	},

	effect: 'fade',
/* 	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	}, */
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
/* 		renderBullet: function (index, className) {
			
            return '<span class="' + className + '">' + (index + 1) + "</span>";
		}, */
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


/////