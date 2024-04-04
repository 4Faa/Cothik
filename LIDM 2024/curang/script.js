document.addEventListener('DOMContentLoaded', () => {
	const loginLink = document.querySelector('.register-link');
	const loginForm = document.getElementById('login');
	const registerForm = document.getElementById('register');
	const registerLink = document.querySelector('.login-link');

	loginLink.addEventListener('click', () => {
		registerForm.style.transform = 'translateX(100%)';
		loginForm.style.transform = 'translateX(0)';
	});

	registerLink.addEventListener('click', () => {
		loginForm.style.transform = 'translateX(100%)';
		registerForm.style.transform = 'translateX(0)';
	});
});