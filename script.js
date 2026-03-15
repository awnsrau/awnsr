document.addEventListener('DOMContentLoaded', function() {
	setActiveNavLink();
	setupContactForm();
});

function setActiveNavLink() {
	const currentPage = window.location.pathname.split('/').pop() || 'index.html';
	const navLinks = document.querySelectorAll('.nav-link');

	navLinks.forEach(link => {
		const href = link.getAttribute('href');
		if (href === currentPage || (currentPage === '' && href === 'index.html')) {
			link.classList.add('active');
		} else {
			link.classList.remove('active');
		}
	});
}

function setupContactForm() {
	const contactForm = document.getElementById('contactForm');
	if (!contactForm) return;

	contactForm.addEventListener('submit', function(e) {
		e.preventDefault();
		alert('Thank you for your message! In a real application, this would send your message to our team.');
		contactForm.reset();
	});
}
