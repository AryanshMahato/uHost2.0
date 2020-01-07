const hamburger = document.querySelector('#hamburger');
const backdrop = document.querySelector('#backdrop');
const mobileNav = document.querySelector('#mobile-nav');
const mobileNavBackButton = document.querySelector('#back-button');

const hideMobileNav = () => {
	mobileNav.classList.add('hide');
	backdrop.style.display = 'none';
};

const showMobileNav = () => {
	mobileNav.classList.remove('hide');
	backdrop.style.display = 'block';
};

hamburger.addEventListener('click', () => {
	if (mobileNav.classList.contains('hide')) {
		showMobileNav();
	} else {
		hideMobileNav();
	}
});

mobileNavBackButton.addEventListener('click', () => {
	hideMobileNav();
});

backdrop.addEventListener('click', () => {
	if (!mobileNav.classList.contains('hide')) {
		hideMobileNav();
	}
});
