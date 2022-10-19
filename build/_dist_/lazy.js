let totalImages = 0;
let loadedImages = 0;

const observer = new IntersectionObserver((entries) => {
	entries.filter(isIntersecting).forEach(loadImage)
});

const isIntersecting = intersectionEntry => intersectionEntry.isIntersecting;

const loadImage = intersectionEntry => {
	const container = intersectionEntry.target;
	const skeletonImage = container.firstChild;
	const image = skeletonImage.firstChild;
	const url = image.dataset.src;
	image.src = url;

	image.onload = () => {
		loadedImages += 1;
		logState();
	}

	observer.unobserve(container)
};

export const registerImage = image => {
	observer.observe(image);
	totalImages += 1;
  logState();
};

const logState = () => {
  console.log(`⚪️ Total Imágenes: ${totalImages}`);
  console.log(`🟣 Imágenes cargadas: ${loadedImages}`);
  console.log("--------------------------------------");
};