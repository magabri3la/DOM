function isIntersecting (entry) {
	return entry.isIntersecting;
};

function loadImage (entry) {
	const container = entry.target;
	const skeletonImage = container.firstChild;
	const image = skeletonImage.firstChild;
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