(function($) {

	var	$window = $(window),
		$body = $('body'),
		$sidebar = $('#sidebar');
		if ($sidebar.length > 0) {
			var $sidebar_a = $sidebar.find('a');
			$sidebar_a
				.addClass('scrolly')
				.on('click', function() {
					var $this = $(this);
						$sidebar_a.removeClass('active');
						$this.addClass('active').addClass('active-locked');
						document.getElementById("one").scrollIntoView({ behavior: 'smooth', block: 'end' });

				})
		}

})(jQuery);