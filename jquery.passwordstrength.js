(function($) {
	$.fn.passwordStrength = function(options) {
		var that = this;
		if (!that.is(':password')) {
			throw new Error('Element not supported');
			return;
		}
		var settings = {
			regexes: {
				medium: /^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$/g,
				strong: /^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W).*$/g
			},
			target: $('#passstrength'),
			messages: {
				medium: 'Medium',
				strong: 'Strong',
				weak: 'Weak'
			},
			styles: {
				medium: {
					color: '#800'
				},
				strong: {
					color: '#080'
				},
				weak: {
					color: '#c00'
				}
			}
		};
		options = $.extend(settings, options);
		return that.each(function() {
			$(this).keyup(function(e) {
				if (options.regexes.strong.test($(this).val())) {
					options.target.html(options.messages.strong).css(options.styles.strong);
				} else if (options.regexes.medium.test($(this).val())) {
					options.target.html(options.messages.medium).css(options.styles.medium);
				} else {
					options.target.html(options.messages.weak).css(options.styles.weak);
				}
				return true;
			});
		});
	};
})(jQuery);