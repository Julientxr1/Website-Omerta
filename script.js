const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav li');

window.addEventListener('scroll', () => {
	let current = '';
	sections.forEach(section => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.clientHeight;
		if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
			current = section.getAttribute('id');
		}
	});
	navLi.forEach(li => {
		li.classList.remove('active');
		if (li.querySelector('a').getAttribute('href').substring(1) === current) {
			li.classList.add('active');
		}
	});
});
