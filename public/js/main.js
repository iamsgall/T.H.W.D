$(document).ready(function () {
	$('.button-up').click(function () {
		$('body, html').animate(
			{
				scrollTop: '0px',
			},
			300
		)
	})

	$(window).scroll(function () {
		if ($(this).scrollTop() > 0) {
			$('.button-up').slideDown(300)
		} else {
			$('.button-up').slideUp(300)
		}
	})

	ScrollReveal().reveal('.section1')
	ScrollReveal().reveal('.img-benefits', { delay: 300 })
	ScrollReveal().reveal('.text-benefits', { delay: 700 })
	ScrollReveal().reveal('.section2')
	ScrollReveal().reveal('.section3')
	ScrollReveal().reveal('.section4')
	ScrollReveal().reveal('.section5')
	ScrollReveal().reveal('.section6')

	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault()

			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth',
			})
		})
	})
})
