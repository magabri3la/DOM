function isIntersecting (entry) {
	return entry.isIntersecting;
};

function loadImage (entry) {
	const container = entry.target;
	const image = container.querySelector("img");
	image.src = image.dataset.src;

	observer.unobserve(container)
};

const observer = new IntersectionObserver((entries) => {
	entries.filter(isIntersecting).forEach(loadImage)
});

export function registerImage (image) {
	observer.observe(image)
};