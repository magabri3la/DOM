function isIntersecting (entry) {
	return entry.isIntersecting;
};

function loadImage (entry) {
	const container = entry.target;
	const image = container.firstChild;
	const url = image.dataset.src;
	image.src = url;

	observer.unobserve(container)
};

const observer = new IntersectionObserver((entries) => {
	entries.filter(isIntersecting).forEach(loadImage)
});

export function registerImage (image) {
	observer.observe(image)
};