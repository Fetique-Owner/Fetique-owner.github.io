window.addEventListener('load', function () {
			setTimeout(function () {
				const preloader = document.querySelector('.preloader');
				preloader.classList.add('hidden');

				setTimeout(function () {
					preloader.style.display = 'none';
				}, 500);
			}, 1500);
		});