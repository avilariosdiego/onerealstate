//Funciones
window.onload = function () {
	var contenedor = document.getElementById('contenedor_loader');
	contenedor.style.visibility = 'hidden';
	contenedor.style.opacity = '0';
}

$(document).ready(function () {
	$(window).scroll(function () {
		$(".slideanim").each(function () {
			var pos = $(this).offset().top;

			var winTop = $(window).scrollTop();
			if (pos < winTop + 600) {
				$(this).addClass("slide");
			}
		});
	});
})

// Magnific popup calls
$('#portfolio').magnificPopup({
	delegate: 'a',
	type: 'image',
	tLoading: 'Loading image #%curr%...',
	mainClass: 'mfp-img-mobile',
	gallery: {
		enabled: true,
		navigateByImgClick: true,
		preload: [0, 1]
	},
	image: {
		tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
	}
});